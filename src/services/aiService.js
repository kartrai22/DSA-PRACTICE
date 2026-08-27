import { storageService } from './storageService';

export const aiService = {
  /**
   * Request Socratic hint
   */
  async getHint(problem, currentCode, hintLevel = 1) {
    const settings = storageService.getSettings();
    if (settings.geminiApiKey) {
      try {
        return await this.callGeminiAPI(
          settings.geminiApiKey,
          `You are an expert DSA interview coach. The user is solving "${problem.title}" (${problem.category}).
Description: ${problem.description}
Current User Code:
\`\`\`
${currentCode}
\`\`\`
Give a concise Tier ${hintLevel} (out of 3) Socratic hint.
Tier 1: High-level intuition / thought process without mentioning data structures.
Tier 2: The key data structure, pattern or invariant to use.
Tier 3: Concrete algorithmic steps without giving away the full code.
Respond with a clear, inspiring hint.`
        );
      } catch (e) {
        console.warn('Gemini API call failed, falling back to local engine', e);
      }
    }

    // Intelligent local heuristic response
    const hints = problem.hints || [];
    const index = Math.min(hintLevel - 1, hints.length - 1);
    const selectedHint = hints[index] || 'Consider the problem constraints and what time complexity target is expected.';
    
    return `💡 **Hint Level ${hintLevel} (Intuition & Guidance)**:\n\n${selectedHint}\n\n*Target Complexity Goal: ${problem.optimalComplexity?.time} Time, ${problem.optimalComplexity?.space} Space.*`;
  },

  /**
   * Complexity Analysis
   */
  async analyzeComplexity(problem, currentCode, language = 'javascript') {
    const settings = storageService.getSettings();
    if (settings.geminiApiKey) {
      try {
        return await this.callGeminiAPI(
          settings.geminiApiKey,
          `Analyze the Big-O Time Complexity and Space Complexity of the following ${language} code for problem "${problem.title}":
\`\`\`${language}
${currentCode}
\`\`\`
Provide:
1. Estimated Time Complexity (e.g. O(n), O(n^2), O(n log n)) and why.
2. Estimated Space Complexity (e.g. O(1), O(n)) and why.
3. Compare with the optimal solution target (${problem.optimalComplexity?.time || 'optimal'}, ${problem.optimalComplexity?.space || 'optimal'}).
4. Bottleneck suggestions if any.`
        );
      } catch (e) {
        console.warn('Gemini API failed, using local analysis', e);
      }
    }

    // Local code analysis heuristics
    const code = currentCode.toLowerCase();
    let detectedTime = 'O(n)';
    let detectedSpace = 'O(1)';
    let notes = [];

    const nestedLoops = (code.match(/for\s*\(|while\s*\(/g) || []).length;
    if (code.includes('.sort(') || code.includes('sorted(')) {
      detectedTime = 'O(n log n)';
      notes.push('Sorting operation detected: adds O(n log n) baseline.');
    } else if (nestedLoops >= 2) {
      detectedTime = 'O(n²)';
      notes.push('Nested loop structure detected: potential quadratic O(n²) bottleneck.');
    } else if (code.includes('low <= high') || code.includes('math.floor') && code.includes('mid')) {
      detectedTime = 'O(log n)';
      notes.push('Binary search division detected: logarithmic O(log n).');
    }

    if (code.includes('new set(') || code.includes('new map(') || code.includes('{}') || code.includes('[]') || code.includes('new array')) {
      detectedSpace = 'O(n)';
      notes.push('Dynamic auxiliary storage (Set/Map/Array) allocated.');
    }

    return `### 📊 Big-O Complexity Assessment

- **Estimated Time Complexity:** \`${detectedTime}\`
- **Estimated Space Complexity:** \`${detectedSpace}\`
- **Optimal Target:** \`${problem.optimalComplexity?.time || 'O(n)'} Time\` | \`${problem.optimalComplexity?.space || 'O(1)'} Space\`

**Key Observations:**
${notes.map(n => `- ${n}`).join('\n') || '- Single pass linear iteration.'}

${detectedTime === problem.optimalComplexity?.time ? '✅ **Matches optimal time complexity!**' : '💡 *Tip: Consider whether a Hash Table or Two Pointers can reduce this to ' + problem.optimalComplexity?.time + '.*'}`;
  },

  /**
   * Bug Hunter & Diagnostician
   */
  async diagnoseFailure(problem, currentCode, testResult) {
    const settings = storageService.getSettings();
    if (settings.geminiApiKey) {
      try {
        return await this.callGeminiAPI(
          settings.geminiApiKey,
          `The user's code for "${problem.title}" failed testing.
Code:
\`\`\`
${currentCode}
\`\`\`
Test Results:
${JSON.stringify(testResult, null, 2)}
Explain the bug or failing edge case clearly and suggest how to fix it.`
        );
      } catch (e) {
        console.warn('Gemini API failed, using local analysis', e);
      }
    }

    const failedTests = (testResult.results || []).filter(r => !r.passed);
    if (failedTests.length === 0) {
      return `🎉 **All test cases passed successfully!** Your code logic is solid.`;
    }

    const firstFail = failedTests[0];
    let explanation = `### 🐛 Debug & Edge Case Analysis\n\n`;
    explanation += `Failed on **Test Case #${firstFail.testIndex}**:\n`;
    explanation += `- **Input:** \`${JSON.stringify(firstFail.input)}\`\n`;
    explanation += `- **Expected Output:** \`${JSON.stringify(firstFail.expected)}\`\n`;
    explanation += `- **Your Output:** \`${JSON.stringify(firstFail.actual)}\`\n\n`;

    if (firstFail.error) {
      explanation += `**Runtime Error Encountered:**\n\`${firstFail.error}\`\n\n*Check for undefined variables, out-of-bounds indexing, or missing return statements.*`;
    } else if (firstFail.actual === undefined) {
      explanation += `*Your function returned \`undefined\`. Did you forget to \`return\` the result from the function?*`;
    } else {
      explanation += `**Common Pitfalls to Check:**\n`;
      explanation += `1. Off-by-one errors in loop boundaries or pointer increments.\n`;
      explanation += `2. Handling duplicate elements or edge cases like empty inputs.\n`;
      explanation += `3. Return value type mismatch (e.g. returning index vs value, or boolean vs array).`;
    }

    return explanation;
  },

  /**
   * Optimal Solution & Walkthrough
   */
  async getOptimalExplanation(problem) {
    return `### 💡 Optimal Solution Strategy for "${problem.title}"

**Optimal Complexity:**
- Time: \`${problem.optimalComplexity?.time}\`
- Space: \`${problem.optimalComplexity?.space}\`

**Implementation:**
\`\`\`javascript
${problem.optimalSolution || '// Solution reference available'}
\`\`\`

**Why this works:**
- Avoids redundant computations using optimal data structure selection.
- Satisfies all constraint boundaries with minimal overhead.`;
  },

  /**
   * Direct Gemini API Caller
   */
  async callGeminiAPI(apiKey, prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
  }
};
