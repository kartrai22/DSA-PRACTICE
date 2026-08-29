export const JAVA_THEORY_SECTIONS = [
  {
    id: 'fundamentals',
    title: 'Java Fundamentals',
    icon: 'Blocks',
    color: '#38bdf8',
    chapters: [
      {
        id: 'intro-to-java',
        title: 'Introduction to Java 21',
        content: `## What is Java?

Java is a **high-level, class-based, object-oriented** programming language designed to have as few implementation dependencies as possible. Java 21 is the latest **Long-Term Support (LTS)** release.

### Key Features of Java 21
- **Platform Independent**: Write Once, Run Anywhere (WORA) via JVM
- **Strongly Typed**: Every variable must be declared with a type
- **Garbage Collected**: Automatic memory management
- **Multi-threaded**: Built-in support for concurrent programming
- **Virtual Threads (Project Loom)**: Lightweight threads for massive concurrency
- **Pattern Matching**: Modern, expressive conditional logic
- **Record Classes**: Concise data carriers
- **Sealed Classes**: Restricted class hierarchies

### Your First Java Program

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java 21!");
    }
}
\`\`\`

### Java 21 — Simplified Main (Preview)

\`\`\`java
// JEP 463: Implicitly Declared Classes (Preview in 21)
void main() {
    System.out.println("Hello, simplified Java!");
}
\`\`\`

### How Java Compiles & Runs

\`\`\`
+------------------+         +-------------------+         +------------------+
|  Source Code     |  javac  |  Bytecode         |   JVM   |  Native Machine  |
|  (HelloWorld.java)------>  |  (HelloWorld.class)-------> |  Code (Execution)|
+------------------+         +-------------------+         +------------------+
\`\`\`

### JVM Memory Architecture Illustration

\`\`\`
+-------------------------------------------------------------------------------+
|                             JVM RUNTIME DATA AREAS                            |
+-------------------------------------------------------------------------------+
|                                                                               |
|  +---------------------------------+   +-----------------------------------+  |
|  |           HEAP MEMORY           |   |           THREAD STACKS           |  |
|  | (Shared by all threads)         |   | (Per-thread local variables)      |  |
|  |                                 |   |                                   |  |
|  |  +---------------------------+  |   |  +-----------------------------+  |  |
|  |  | Young Gen (Eden, S0, S1)  |  |   |  | Stack Frame (main method)   |  |  |
|  |  +---------------------------+  |   |  |  - Primitives: age = 25     |  |  |
|  |  | Old / Tenured Generation  |  |   |  |  - Object Ref: str -----------------> [ "Hello" Object ]
|  |  +---------------------------+  |   |  +-----------------------------+  |  |
|  +---------------------------------+   +-----------------------------------+  |
|                                                                               |
|  +---------------------------------+   +-----------------------------------+  |
|  |            METASPACE            |   |       NATIVE METHOD STACK         |  |
|  | (Class definitions, methods,    |   | (C/C++ native execution JNI)      |  |
|  |  static variables & bytecodes)  |   |                                   |  |
|  +---------------------------------+   +-----------------------------------+  |
+-------------------------------------------------------------------------------+
\`\`\`

### Key JVM Components:
1. **ClassLoader**: Loads \`.class\` bytecode into the JVM Metaspace.
2. **JIT Compiler (Just-In-Time)**: Converts frequently executed bytecode ("hot spots") directly into native machine code at runtime for high performance.
3. **Garbage Collector (GC)**: Automatically reclaims unreachable objects from the Heap (Generational GC: ZGC, G1GC).`
      },
      {
        id: 'variables-data-types',
        title: 'Variables & Data Types',
        content: `## Variables & Data Types

Java is **statically typed** — every variable must have a declared type at compile time.

### Primitive Types

| Type | Size | Range | Default |
|------|------|-------|---------|
| \`byte\` | 1 byte | -128 to 127 | 0 |
| \`short\` | 2 bytes | -32,768 to 32,767 | 0 |
| \`int\` | 4 bytes | -2³¹ to 2³¹-1 | 0 |
| \`long\` | 8 bytes | -2⁶³ to 2⁶³-1 | 0L |
| \`float\` | 4 bytes | ~7 decimal digits | 0.0f |
| \`double\` | 8 bytes | ~15 decimal digits | 0.0d |
| \`char\` | 2 bytes | Unicode (0 to 65535) | '\\u0000' |
| \`boolean\` | 1 bit | true / false | false |

### Variable Declaration & Initialization

\`\`\`java
// Declaration
int age;
String name;

// Declaration + Initialization
int count = 42;
double pi = 3.14159;
boolean isActive = true;
char grade = 'A';
long bigNumber = 9_999_999_999L; // underscores for readability

// Type Inference with var (Java 10+)
var message = "Hello";     // inferred as String
var numbers = List.of(1, 2, 3); // inferred as List<Integer>
\`\`\`

### Wrapper Classes (Autoboxing & Unboxing)

\`\`\`java
// Autoboxing: primitive → wrapper
Integer wrapped = 42;          // int → Integer
Double d = 3.14;               // double → Double

// Unboxing: wrapper → primitive
int unwrapped = wrapped;       // Integer → int

// Useful methods
int parsed = Integer.parseInt("123");
String str = Integer.toString(42);
int max = Integer.MAX_VALUE;   // 2147483647
\`\`\`

### Constants

\`\`\`java
final double PI = 3.14159265358979;
final String APP_NAME = "MyApp";
// PI = 3.14; // ❌ Compile error — cannot reassign final
\`\`\`

### Type Casting

\`\`\`java
// Implicit (widening) — safe, no data loss
int i = 100;
long l = i;        // int → long
double d = l;      // long → double

// Explicit (narrowing) — possible data loss
double x = 9.78;
int y = (int) x;   // 9 (decimal truncated)
\`\`\``
      },
      {
        id: 'operators',
        title: 'Operators & Expressions',
        content: `## Operators & Expressions

### Arithmetic Operators

\`\`\`java
int a = 10, b = 3;
System.out.println(a + b);   // 13 (addition)
System.out.println(a - b);   // 7  (subtraction)
System.out.println(a * b);   // 30 (multiplication)
System.out.println(a / b);   // 3  (integer division!)
System.out.println(a % b);   // 1  (modulus/remainder)

// For decimal division, cast to double
System.out.println((double) a / b); // 3.333...
\`\`\`

### Comparison Operators

\`\`\`java
System.out.println(5 == 5);  // true
System.out.println(5 != 3);  // true
System.out.println(5 > 3);   // true
System.out.println(5 < 3);   // false
System.out.println(5 >= 5);  // true
System.out.println(5 <= 3);  // false
\`\`\`

### Logical Operators

\`\`\`java
boolean x = true, y = false;
System.out.println(x && y);  // false (AND — short-circuit)
System.out.println(x || y);  // true  (OR — short-circuit)
System.out.println(!x);      // false (NOT)

// Short-circuit behavior:
// In (a && b), if a is false, b is never evaluated
// In (a || b), if a is true, b is never evaluated
\`\`\`

### Bitwise Operators

\`\`\`java
int a = 5;  // 0101 in binary
int b = 3;  // 0011 in binary

System.out.println(a & b);   // 1  (0001) — AND
System.out.println(a | b);   // 7  (0111) — OR
System.out.println(a ^ b);   // 6  (0110) — XOR
System.out.println(~a);      // -6 — NOT (inverts all bits)
System.out.println(a << 1);  // 10 (1010) — left shift
System.out.println(a >> 1);  // 2  (0010) — right shift
System.out.println(a >>> 1); // 2 — unsigned right shift
\`\`\`

### Ternary Operator

\`\`\`java
int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
// status = "Adult"
\`\`\`

### instanceof with Pattern Matching (Java 16+)

\`\`\`java
Object obj = "Hello";

// Old way
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// New way — pattern matching
if (obj instanceof String s) {
    System.out.println(s.length()); // s is auto-cast
}
\`\`\``
      },
      {
        id: 'control-flow',
        title: 'Control Flow',
        content: `## Control Flow Statements

### if / else if / else

\`\`\`java
int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
\`\`\`

### Enhanced Switch Expression (Java 14+)

\`\`\`java
// Classic switch statement
String day = "MONDAY";
switch (day) {
    case "MONDAY":
    case "TUESDAY":
        System.out.println("Start of week");
        break;
    case "FRIDAY":
        System.out.println("TGIF!");
        break;
    default:
        System.out.println("Midweek");
}

// Modern switch EXPRESSION (Java 14+)
String result = switch (day) {
    case "MONDAY", "TUESDAY" -> "Start of week";
    case "FRIDAY" -> "TGIF!";
    case "SATURDAY", "SUNDAY" -> "Weekend!";
    default -> "Midweek";
};

// Switch with blocks and yield
int numLetters = switch (day) {
    case "MONDAY", "FRIDAY", "SUNDAY" -> 6;
    case "TUESDAY" -> 7;
    default -> {
        String trimmed = day.strip();
        yield trimmed.length();
    }
};
\`\`\`

### for Loop

\`\`\`java
// Classic for loop
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}

// Enhanced for-each loop
int[] numbers = {10, 20, 30, 40};
for (int num : numbers) {
    System.out.println(num);
}
\`\`\`

### while / do-while

\`\`\`java
// while — checks condition BEFORE each iteration
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// do-while — executes at LEAST once
int j = 10;
do {
    System.out.println(j);
    j++;
} while (j < 5); // prints 10, then exits
\`\`\`

### break & continue

\`\`\`java
// break — exit the loop entirely
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.print(i + " "); // 0 1 2 3 4
}

// continue — skip current iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    System.out.print(i + " "); // 1 3 5 7 9
}

// Labeled break (for nested loops)
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 2) break outer;
        System.out.print(i + "," + j + " ");
    }
}
\`\`\``
      },
      {
        id: 'arrays',
        title: 'Arrays',
        content: `## Arrays

Arrays are **fixed-size**, **zero-indexed** containers that hold elements of the same type.

### Declaration & Initialization

\`\`\`java
// Declaration
int[] numbers;
String[] names;

// Initialization
numbers = new int[5]; // [0, 0, 0, 0, 0]
names = new String[3]; // [null, null, null]

// Inline initialization
int[] primes = {2, 3, 5, 7, 11};
String[] fruits = {"apple", "banana", "cherry"};

// Accessing elements
System.out.println(primes[0]);    // 2
System.out.println(primes.length); // 5

primes[4] = 13; // modify element
\`\`\`

### Iterating Arrays

\`\`\`java
int[] arr = {10, 20, 30, 40, 50};

// Classic for loop
for (int i = 0; i < arr.length; i++) {
    System.out.println("arr[" + i + "] = " + arr[i]);
}

// Enhanced for-each
for (int num : arr) {
    System.out.println(num);
}
\`\`\`

### Multi-Dimensional Arrays

\`\`\`java
// 2D Array (matrix)
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.out.println(matrix[1][2]); // 6 (row 1, col 2)
System.out.println(matrix.length);    // 3 rows
System.out.println(matrix[0].length); // 3 cols

// Iterating 2D array
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
\`\`\`

### java.util.Arrays Utility

\`\`\`java
import java.util.Arrays;

int[] arr = {5, 2, 8, 1, 9};

Arrays.sort(arr);                    // [1, 2, 5, 8, 9]
System.out.println(Arrays.toString(arr));

int idx = Arrays.binarySearch(arr, 5); // 2
int[] copy = Arrays.copyOf(arr, 3);    // [1, 2, 5]
Arrays.fill(arr, 0);                   // [0, 0, 0, 0, 0]

boolean eq = Arrays.equals(
    new int[]{1, 2}, new int[]{1, 2}
); // true
\`\`\``
      },
      {
        id: 'strings',
        title: 'Strings & Text Blocks',
        content: `## Strings in Java

Strings are **immutable** objects. Every modification creates a **new** String.

### String Constant Pool vs Heap Memory

\`\`\`
+-------------------------------------------------------------------------+
|                              HEAP MEMORY                                |
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   |                      STRING CONSTANT POOL                       |   |
|   |                                                                 |   |
|   |                     [ "Hello" Object ] <---------+              |   |
|   |                     [ "Hi" Object ]              |              |   |
|   +--------------------------------------------------|--------------+   |
|                                                      |                  |
|   [ String Object s2 ] ----------------------------->| (heap reference) |
+------------------------------------------------------|------------------+
                                                       |
STACK FRAME:                                           |
  s1 (ref) --------------------------------------------+
  s3 (ref) --------------------------------------------+ (points to exact same "Hello")
\`\`\`

- **String Literals ('Hello')**: Stored in the **String Constant Pool** inside the JVM Heap to save memory. Reused across identical literals.
- **'new String("Hello")'**: Explicitly allocates a **new object** on the heap, bypassing pool reuse.

### Creating Strings

\`\`\`java
String s1 = "Hello";          // String literal (pooled)
String s2 = new String("Hi"); // new object on heap
String s3 = "Hello";          // same pool reference as s1

System.out.println(s1 == s3);      // true (same pool ref)
System.out.println(s1 == s2);      // false (different objects)
System.out.println(s1.equals(s2)); // Use .equals() for content!
\`\`\`

### Essential String Methods

\`\`\`java
String s = "Hello, World!";

s.length();             // 13
s.charAt(0);            // 'H'
s.indexOf("World");     // 7
s.substring(7);         // "World!"
s.substring(0, 5);      // "Hello"
s.toLowerCase();        // "hello, world!"
s.toUpperCase();        // "HELLO, WORLD!"
s.trim();               // removes leading/trailing whitespace
s.strip();              // (Java 11+) Unicode-aware trim
s.contains("World");    // true
s.startsWith("Hello");  // true
s.endsWith("!");        // true
s.replace("World", "Java"); // "Hello, Java!"
s.split(", ");          // ["Hello", "World!"]
s.toCharArray();        // char[] {'H','e','l',...}
s.isEmpty();            // false
s.isBlank();            // false (Java 11+, checks whitespace)
\`\`\`

### String Formatting

\`\`\`java
// String.format()
String msg = String.format("Name: %s, Age: %d", "Karthik", 25);

// formatted() method (Java 15+)
String msg2 = "Score: %.2f%%".formatted(98.567);
// "Score: 98.57%"
\`\`\`

### Text Blocks (Java 15+)

\`\`\`java
// Multi-line strings with proper indentation
String json = """
        {
            "name": "Karthik",
            "age": 25,
            "skills": ["Java", "DSA"]
        }
        """;

String html = """
        <html>
            <body>
                <h1>Hello</h1>
            </body>
        </html>
        """;
\`\`\`

### StringBuilder (Mutable Strings)

\`\`\`java
// Use StringBuilder for repeated string modifications
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
sb.insert(5, ",");     // "Hello, World"
sb.reverse();          // "dlroW ,olleH"
sb.delete(0, 6);       // ",olleH"

String result = sb.toString();

// Efficient string concatenation in loops:
StringBuilder builder = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    builder.append(i).append(", ");
}
String csv = builder.toString();
\`\`\``
      },
      {
        id: 'methods',
        title: 'Methods',
        content: `## Methods

Methods define reusable blocks of logic.

### Method Syntax

\`\`\`java
accessModifier returnType methodName(parameterList) {
    // method body
    return value; // if non-void
}
\`\`\`

### Examples

\`\`\`java
public class MathUtils {

    // Instance method
    public int add(int a, int b) {
        return a + b;
    }

    // Static method — called on class, not instance
    public static int multiply(int a, int b) {
        return a * b;
    }

    // void method — no return value
    public void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // Method with variable arguments (varargs)
    public int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }
}

// Usage:
MathUtils utils = new MathUtils();
utils.add(3, 5);                  // 8
MathUtils.multiply(4, 6);         // 24 (static)
utils.greet("Karthik");           // Hello, Karthik!
utils.sum(1, 2, 3, 4, 5);        // 15
\`\`\`

### Method Overloading

\`\`\`java
public class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

Calculator calc = new Calculator();
calc.add(1, 2);       // calls int version → 3
calc.add(1.5, 2.5);   // calls double version → 4.0
calc.add(1, 2, 3);    // calls 3-param version → 6
\`\`\`

### Pass by Value

\`\`\`java
// Java ALWAYS passes by value
// For primitives: copies the value
// For objects: copies the reference (not the object)

void changeValue(int x) {
    x = 100; // doesn't affect caller's variable
}

void changeArray(int[] arr) {
    arr[0] = 100; // DOES affect caller's array
    // because we modified the object the reference points to
}
\`\`\``
      }
    ]
  },
  {
    id: 'oop',
    title: 'Object-Oriented Programming',
    icon: 'Boxes',
    color: '#a78bfa',
    chapters: [
      {
        id: 'classes-objects',
        title: 'Classes & Objects',
        content: `## Classes & Objects

A **class** is a blueprint; an **object** is an instance of that class.

### Defining a Class

\`\`\`java
public class Student {
    // Fields (instance variables)
    private String name;
    private int age;
    private double gpa;

    // Constructor
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    // Default constructor
    public Student() {
        this("Unknown", 0, 0.0);
    }

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public double getGpa() { return gpa; }

    // Method
    public boolean isHonorRoll() {
        return gpa >= 3.5;
    }

    // toString
    @Override
    public String toString() {
        return "Student{name='%s', age=%d, gpa=%.1f}"
            .formatted(name, age, gpa);
    }
}

// Creating objects
Student s1 = new Student("Karthik", 21, 3.8);
Student s2 = new Student(); // uses default constructor
System.out.println(s1);     // Student{name='Karthik', age=21, gpa=3.8}
System.out.println(s1.isHonorRoll()); // true
\`\`\`

### Access Modifiers

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| \`public\` | ✅ | ✅ | ✅ | ✅ |
| \`protected\` | ✅ | ✅ | ✅ | ❌ |
| (default) | ✅ | ✅ | ❌ | ❌ |
| \`private\` | ✅ | ❌ | ❌ | ❌ |

### Static Members

\`\`\`java
public class Counter {
    private static int count = 0; // shared across all instances

    public Counter() {
        count++;
    }

    public static int getCount() {
        return count;
    }
}

new Counter();
new Counter();
System.out.println(Counter.getCount()); // 2
\`\`\``
      },
      {
        id: 'inheritance',
        title: 'Inheritance & Polymorphism',
        content: `## Inheritance

Inheritance allows a class to **extend** another class, inheriting its fields and methods.

### Basic Inheritance

\`\`\`java
// Parent / Superclass
public class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public void speak() {
        System.out.println(name + " makes a sound");
    }

    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Child / Subclass
public class Dog extends Animal {

    private String breed;

    public Dog(String name, String breed) {
        super(name); // call parent constructor
        this.breed = breed;
    }

    @Override // Method overriding
    public void speak() {
        System.out.println(name + " barks! Woof!");
    }

    // New method specific to Dog
    public void fetch() {
        System.out.println(name + " fetches the ball");
    }
}

Dog dog = new Dog("Buddy", "Labrador");
dog.speak();  // Buddy barks! Woof!  (overridden)
dog.eat();    // Buddy is eating     (inherited)
dog.fetch();  // Buddy fetches the ball
\`\`\`

## Polymorphism

The ability to treat objects of different classes through a **common interface**.

\`\`\`java
// Runtime polymorphism
Animal animal = new Dog("Rex", "Shepherd");
animal.speak(); // "Rex barks! Woof!" — actual type determines behavior
// animal.fetch(); // ❌ Compile error — reference type is Animal

// Using polymorphism with collections
List<Animal> animals = List.of(
    new Dog("Buddy", "Lab"),
    new Cat("Whiskers"),
    new Bird("Tweety")
);

for (Animal a : animals) {
    a.speak(); // each calls its own overridden version
}
\`\`\`

### The \`final\` Keyword

\`\`\`java
final class ImmutableClass { }
// Cannot be extended

class Parent {
    final void criticalMethod() { }
    // Cannot be overridden in child classes
}
\`\`\``
      },
      {
        id: 'abstraction-interfaces',
        title: 'Abstract Classes & Interfaces',
        content: `## Abstract Classes

An abstract class **cannot be instantiated** and may contain abstract methods (without body).

\`\`\`java
public abstract class Shape {
    protected String color;

    public Shape(String color) {
        this.color = color;
    }

    // Abstract method — MUST be implemented by subclasses
    public abstract double area();
    public abstract double perimeter();

    // Concrete method — inherited as-is
    public String getColor() {
        return color;
    }
}

public class Circle extends Shape {
    private double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }

    @Override
    public double perimeter() {
        return 2 * Math.PI * radius;
    }
}
\`\`\`

## Interfaces

Interfaces define a **contract** — what a class must do, not how.

\`\`\`java
public interface Flyable {
    void fly();                    // abstract method
    double getMaxAltitude();       // abstract method

    // Default method (Java 8+) — provides implementation
    default void land() {
        System.out.println("Landing safely...");
    }

    // Static method
    static boolean canFly(Object obj) {
        return obj instanceof Flyable;
    }

    // Private method (Java 9+) — helper for defaults
    private void logFlight() {
        System.out.println("Flight logged");
    }
}

public interface Swimmable {
    void swim();
}

// A class can implement MULTIPLE interfaces
public class Duck extends Animal implements Flyable, Swimmable {

    public Duck(String name) { super(name); }

    @Override
    public void fly() {
        System.out.println(name + " flaps wings and flies!");
    }

    @Override
    public double getMaxAltitude() { return 500.0; }

    @Override
    public void swim() {
        System.out.println(name + " paddles in water!");
    }
}
\`\`\`

### Abstract Class vs Interface

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Constructors | ✅ Yes | ❌ No |
| State (fields) | ✅ Instance fields | Constants only |
| Multiple | ❌ Single inheritance | ✅ Multiple implementation |
| Methods | Abstract + Concrete | Abstract + Default + Static |
| Use when | Shared state & base logic | Defining capabilities |`
      },
      {
        id: 'records',
        title: 'Records (Java 16+)',
        content: `## Record Classes

Records are **immutable data carriers** — Java auto-generates constructor, getters, \`equals()\`, \`hashCode()\`, and \`toString()\`.

### Basic Record

\`\`\`java
// This single line replaces ~50 lines of boilerplate!
public record Point(int x, int y) { }

Point p = new Point(3, 4);
System.out.println(p.x());      // 3 (accessor, not getX!)
System.out.println(p.y());      // 4
System.out.println(p);          // Point[x=3, y=4]

Point p2 = new Point(3, 4);
System.out.println(p.equals(p2)); // true (value equality)
\`\`\`

### Records with Validation

\`\`\`java
public record Person(String name, int age) {
    // Compact constructor for validation
    public Person {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be blank");
        }
        if (age < 0 || age > 150) {
            throw new IllegalArgumentException("Invalid age: " + age);
        }
        name = name.strip(); // can modify before assignment
    }
}

// Custom methods in records
public record Rectangle(double width, double height) {
    public double area() {
        return width * height;
    }

    public double perimeter() {
        return 2 * (width + height);
    }

    // Static factory method
    public static Rectangle square(double side) {
        return new Rectangle(side, side);
    }
}

Rectangle rect = new Rectangle(5, 3);
System.out.println(rect.area());     // 15.0
Rectangle sq = Rectangle.square(4);
System.out.println(sq);             // Rectangle[width=4.0, height=4.0]
\`\`\`

### Records with Interfaces

\`\`\`java
public sealed interface Shape permits Circle, Rectangle { 
    double area();
}

public record Circle(double radius) implements Shape {
    public double area() { return Math.PI * radius * radius; }
}

public record Rectangle(double w, double h) implements Shape {
    public double area() { return w * h; }
}
\`\`\``
      },
      {
        id: 'sealed-classes',
        title: 'Sealed Classes (Java 17+)',
        content: `## Sealed Classes

Sealed classes **restrict which classes** can extend or implement them — giving you control over your type hierarchy.

\`\`\`java
// Only these 3 classes can extend Shape
public sealed class Shape
    permits Circle, Rectangle, Triangle {

    private final String color;

    public Shape(String color) {
        this.color = color;
    }

    public String getColor() { return color; }
}

// 'final' — cannot be further extended
public final class Circle extends Shape {
    private final double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    public double area() { return Math.PI * radius * radius; }
}

// 'sealed' — further restricts its own hierarchy
public sealed class Rectangle extends Shape
    permits Square {

    protected final double width, height;

    public Rectangle(String color, double w, double h) {
        super(color);
        this.width = w;
        this.height = h;
    }
}

// 'non-sealed' — open for extension by anyone
public non-sealed class Triangle extends Shape {
    public Triangle(String color) { super(color); }
}

public final class Square extends Rectangle {
    public Square(String color, double side) {
        super(color, side, side);
    }
}
\`\`\`

### Sealed Interfaces

\`\`\`java
public sealed interface Payment
    permits CreditCard, DebitCard, UPI {
}

public record CreditCard(String number, String cvv) implements Payment {}
public record DebitCard(String number, String pin) implements Payment {}
public record UPI(String vpa) implements Payment {}

// Exhaustive pattern matching (Java 21)
String processPayment(Payment p) {
    return switch (p) {
        case CreditCard c -> "CC ending " + c.number().substring(12);
        case DebitCard d -> "Debit: " + d.number();
        case UPI u -> "UPI: " + u.vpa();
        // No default needed — sealed ensures exhaustiveness!
    };
}
\`\`\``
      },
      {
        id: 'enums',
        title: 'Enums',
        content: `## Enums

Enums define a **fixed set of constants** with type safety.

### Basic Enum

\`\`\`java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY,
    FRIDAY, SATURDAY, SUNDAY
}

Day today = Day.FRIDAY;
System.out.println(today);          // FRIDAY
System.out.println(today.name());   // FRIDAY
System.out.println(today.ordinal()); // 4 (0-indexed)

// Iterate all values
for (Day d : Day.values()) {
    System.out.println(d);
}

// Parse from string
Day parsed = Day.valueOf("MONDAY");
\`\`\`

### Enum with Fields & Methods

\`\`\`java
public enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS  (4.869e+24, 6.0518e6),
    EARTH  (5.976e+24, 6.37814e6),
    MARS   (6.421e+23, 3.3972e6);

    private final double mass;    // kg
    private final double radius;  // meters

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    // Surface gravity: G * mass / radius²
    public double surfaceGravity() {
        final double G = 6.67300E-11;
        return G * mass / (radius * radius);
    }

    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}

double earthWeight = 75.0;
double mass = earthWeight / Planet.EARTH.surfaceGravity();
for (Planet p : Planet.values()) {
    System.out.printf("Your weight on %s is %.2f N%n",
        p, p.surfaceWeight(mass));
}
\`\`\`

### Enum with Abstract Methods

\`\`\`java
public enum Operation {
    ADD {
        @Override
        public double apply(double a, double b) { return a + b; }
    },
    SUBTRACT {
        @Override
        public double apply(double a, double b) { return a - b; }
    },
    MULTIPLY {
        @Override
        public double apply(double a, double b) { return a * b; }
    };

    public abstract double apply(double a, double b);
}

double result = Operation.ADD.apply(5, 3); // 8.0
\`\`\``
      }
    ]
  },
  {
    id: 'collections',
    title: 'Collections Framework',
    icon: 'Database',
    color: '#f472b6',
    chapters: [
      {
        id: 'collections-overview',
        title: 'Collections Overview',
        content: `## Java Collections Framework

The Collections Framework provides **data structures** and **algorithms** for storing and manipulating groups of objects.

### Collection Hierarchy

\`\`\`
            Iterable
               |
           Collection
          /    |     \\
        List  Set   Queue
        |      |      |
   ArrayList  HashSet  PriorityQueue
   LinkedList TreeSet  ArrayDeque
              LinkedHashSet

        Map (separate hierarchy)
         |
     HashMap
     TreeMap
     LinkedHashMap
\`\`\`

### Creating Collections (Java 9+ Factory Methods)

\`\`\`java
// Immutable collections
List<String> names = List.of("Alice", "Bob", "Charlie");
Set<Integer> nums = Set.of(1, 2, 3, 4, 5);
Map<String, Integer> scores = Map.of(
    "Alice", 95,
    "Bob", 87,
    "Charlie", 92
);

// These are IMMUTABLE — .add() or .put() throws UnsupportedOperationException

// Mutable copies
List<String> mutableList = new ArrayList<>(names);
Set<Integer> mutableSet = new HashSet<>(nums);
Map<String, Integer> mutableMap = new HashMap<>(scores);
\`\`\`

### Common Operations

\`\`\`java
List<String> list = new ArrayList<>();

// Add
list.add("Alpha");
list.add("Beta");
list.add(1, "Gamma"); // insert at index 1

// Access
String first = list.get(0);       // "Alpha"
int size = list.size();            // 3
boolean has = list.contains("Beta"); // true

// Remove
list.remove("Beta");       // by value
list.remove(0);            // by index

// Iterate
for (String s : list) { System.out.println(s); }
list.forEach(System.out::println);

// Sort
Collections.sort(list);
list.sort(Comparator.naturalOrder());
list.sort(Comparator.reverseOrder());
\`\`\``
      },
      {
        id: 'list-implementations',
        title: 'List: ArrayList vs LinkedList',
        content: `## List Implementations

### ArrayList

Backed by a **resizable array** — best for random access.

\`\`\`java
List<Integer> list = new ArrayList<>();
list.add(10);       // O(1) amortized
list.add(20);
list.add(30);
list.get(1);        // O(1) — fast random access
list.set(1, 25);    // O(1) — replace element
list.remove(0);     // O(n) — shifts elements left

// Useful patterns
List<Integer> nums = new ArrayList<>(List.of(5, 3, 8, 1));
Collections.sort(nums);              // [1, 3, 5, 8]
Collections.reverse(nums);           // [8, 5, 3, 1]
int idx = Collections.binarySearch(nums, 5); // requires sorted
Collections.frequency(nums, 5);      // count occurrences
\`\`\`

### LinkedList

Backed by a **doubly-linked list** — best for frequent insertions/removals at ends.

\`\`\`java
LinkedList<String> list = new LinkedList<>();
list.addFirst("A");   // O(1)
list.addLast("C");    // O(1)
list.add(1, "B");     // O(n) — traverse to index

list.getFirst();      // "A" — O(1)
list.getLast();       // "C" — O(1)
list.get(1);          // "B" — O(n) ⚠️ slow random access

list.removeFirst();   // O(1)
list.removeLast();    // O(1)
\`\`\`

### Performance Comparison

| Operation | ArrayList | LinkedList |
|-----------|-----------|------------|
| get(index) | **O(1)** ✅ | O(n) |
| add(end) | **O(1)** amortized | **O(1)** |
| add(index) | O(n) | O(n)* |
| remove(index) | O(n) | O(n)* |
| addFirst / addLast | O(n) | **O(1)** ✅ |
| Memory | Less (array) | More (node pointers) |

> **Rule of thumb**: Use \`ArrayList\` in 99% of cases. Use \`LinkedList\` only when you need fast operations at both ends (as a Deque).`
      },
      {
        id: 'set-implementations',
        title: 'Set: HashSet, TreeSet, LinkedHashSet',
        content: `## Set Implementations

A **Set** stores **unique elements** — no duplicates allowed.

### HashSet

Backed by a **HashMap** — fastest, no ordering guarantee.

\`\`\`java
Set<String> set = new HashSet<>();
set.add("Java");
set.add("Python");
set.add("Java");    // duplicate — ignored
System.out.println(set.size()); // 2

set.contains("Java");  // O(1) — fast lookup
set.remove("Python");  // O(1)
\`\`\`

### TreeSet

Backed by a **Red-Black Tree** — elements are **sorted**.

\`\`\`java
Set<Integer> sorted = new TreeSet<>();
sorted.add(30);
sorted.add(10);
sorted.add(20);
System.out.println(sorted); // [10, 20, 30] — always sorted!

// NavigableSet methods
TreeSet<Integer> tree = new TreeSet<>(sorted);
tree.first();              // 10 (smallest)
tree.last();               // 30 (largest)
tree.floor(25);            // 20 (≤ 25)
tree.ceiling(15);          // 20 (≥ 15)
tree.headSet(20);          // [10] (< 20)
tree.tailSet(20);          // [20, 30] (≥ 20)
\`\`\`

### LinkedHashSet

Maintains **insertion order**.

\`\`\`java
Set<String> ordered = new LinkedHashSet<>();
ordered.add("C");
ordered.add("A");
ordered.add("B");
System.out.println(ordered); // [C, A, B] — insertion order
\`\`\`

### Set Operations

\`\`\`java
Set<Integer> a = new HashSet<>(Set.of(1, 2, 3, 4));
Set<Integer> b = new HashSet<>(Set.of(3, 4, 5, 6));

// Union
Set<Integer> union = new HashSet<>(a);
union.addAll(b);    // [1, 2, 3, 4, 5, 6]

// Intersection
Set<Integer> intersection = new HashSet<>(a);
intersection.retainAll(b);  // [3, 4]

// Difference
Set<Integer> diff = new HashSet<>(a);
diff.removeAll(b);  // [1, 2]
\`\`\` `
      },
      {
        id: 'map-implementations',
        title: 'Map: HashMap, TreeMap & More',
        content: `## Map Implementations

### HashMap Internal Architecture & Mechanics

\`\`\`
+-----------------------------------------------------------------------------------+
|                            HASHMAP BUCKET ARRAY (Table)                           |
+-----------------------------------------------------------------------------------+
|  Index | Bucket Content                                                           |
| -------+------------------------------------------------------------------------- |
|   [0]  | null                                                                     |
|   [1]  | [ Node: key="Alice", hash=101, val=95 ]                                  |
|   [2]  | [ Node: key="Bob" ] ---> [ Node: key="Dave" ] (Linked List Collision)    |
|   ...  |                                                                          |
|   [7]  | [ TreeNode (Red-Black Tree Root) ]                                       |
|        |     /                          \                                         |
|        |  [ TreeNode: "C" ]        [ TreeNode: "Z" ] (Treeified: Threshold >= 8)  |
+-----------------------------------------------------------------------------------+
\`\`\`

#### How HashMap Works Internally:
1. **Hash Calculation**: Computes \`hash = (key.hashCode()) ^ (h >>> 16)\` to spread bits.
2. **Bucket Indexing**: Computes \`index = hash & (n - 1)\` (where \`n\` is array length, default = 16).
3. **Collision Handling**:
   - Uses **Separate Chaining**.
   - **LinkedList Phase**: When bucket has \`< 8\` elements, collisions form a LinkedList.
   - **Treeification Phase (Java 8+)**: When bucket size reaches \`TREEIFY_THRESHOLD = 8\` and table capacity \`>= 64\`, the LinkedList converts into a **Red-Black Tree** to improve worst-case search time from **O(n)** to **O(log n)**!
4. **Load Factor & Resizing**: Default Load Factor = \`0.75\`. When \`size > capacity * 0.75\`, the capacity doubles (e.g. 16 -> 32) and all entries are rehashed.

### Basic HashMap Usage

\`\`\`java
Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 87);
scores.put("Charlie", 92);

scores.get("Alice");         // 95
scores.getOrDefault("Dave", 0); // 0 (key not found)
scores.containsKey("Bob");   // true
scores.containsValue(87);    // true
scores.size();               // 3
scores.remove("Charlie");

// Iterate
for (Map.Entry<String, Integer> entry : scores.entrySet()) {
    System.out.println(entry.getKey() + " = " + entry.getValue());
}

scores.forEach((k, v) -> System.out.println(k + ": " + v));
\`\`\`

### Advanced Map Operations

\`\`\`java
Map<String, Integer> wordCount = new HashMap<>();

// Counting pattern
String[] words = {"the", "cat", "sat", "on", "the", "mat"};
for (String w : words) {
    wordCount.merge(w, 1, Integer::sum);
    // Or: wordCount.put(w, wordCount.getOrDefault(w, 0) + 1);
}
// {the=2, cat=1, sat=1, on=1, mat=1}

// computeIfAbsent — lazy initialization
Map<String, List<String>> groups = new HashMap<>();
groups.computeIfAbsent("fruits", k -> new ArrayList<>()).add("apple");
groups.computeIfAbsent("fruits", k -> new ArrayList<>()).add("banana");
// {fruits=[apple, banana]}

// putIfAbsent
scores.putIfAbsent("Dave", 0); // only puts if key absent

// replaceAll
scores.replaceAll((key, value) -> value + 5); // boost all scores
\`\`\`

### TreeMap (Sorted Map)

\`\`\`java
Map<String, Integer> sorted = new TreeMap<>(scores);
// Keys are in natural (alphabetical) order

TreeMap<Integer, String> tree = new TreeMap<>();
tree.put(3, "C");
tree.put(1, "A");
tree.put(2, "B");

tree.firstKey();          // 1
tree.lastKey();           // 3
tree.floorKey(2);         // 2
tree.ceilingKey(2);       // 2
tree.subMap(1, 3);        // {1=A, 2=B} (from 1 inclusive to 3 exclusive)
\`\`\`

### LinkedHashMap

\`\`\`java
// Maintains insertion order
Map<String, Integer> linked = new LinkedHashMap<>();
linked.put("C", 3);
linked.put("A", 1);
linked.put("B", 2);
System.out.println(linked.keySet()); // [C, A, B]

// LRU Cache with LinkedHashMap
Map<String, String> lruCache = new LinkedHashMap<>(16, 0.75f, true) {
    @Override
    protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
        return size() > 100; // max 100 entries
    }
};
\`\`\``
      },
      {
        id: 'queue-stack',
        title: 'Queue, Deque & Stack',
        content: `## Queue, Deque & Stack

### Queue (FIFO)

\`\`\`java
Queue<String> queue = new LinkedList<>();
queue.offer("First");   // add to end
queue.offer("Second");
queue.offer("Third");

queue.peek();           // "First" (view front, don't remove)
queue.poll();           // "First" (remove from front)
queue.size();           // 2
\`\`\`

### PriorityQueue (Min-Heap)

\`\`\`java
// Default: Min-Heap (smallest first)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(30);
minHeap.offer(10);
minHeap.offer(20);
minHeap.poll();   // 10 (smallest)
minHeap.poll();   // 20
minHeap.poll();   // 30

// Max-Heap
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(
    Comparator.reverseOrder()
);
maxHeap.offer(30);
maxHeap.offer(10);
maxHeap.offer(20);
maxHeap.poll();   // 30 (largest)

// Custom comparator
PriorityQueue<int[]> pq = new PriorityQueue<>(
    (a, b) -> a[1] - b[1]  // sort by second element
);
\`\`\`

### Deque (Double-Ended Queue)

\`\`\`java
Deque<String> deque = new ArrayDeque<>();

// Use as Stack (LIFO)
deque.push("A");     // addFirst
deque.push("B");
deque.push("C");
deque.pop();         // "C" (removeFirst)
deque.peek();        // "B" (peekFirst)

// Use as Queue (FIFO)
deque.offerLast("X");
deque.offerLast("Y");
deque.pollFirst();   // "X"

// Both ends
deque.addFirst("front");
deque.addLast("back");
deque.peekFirst();   // "front"
deque.peekLast();    // "back"
\`\`\`

> ⚠️ **Don't use \`java.util.Stack\`** — it's a legacy class. Use **\`ArrayDeque\`** instead.

### Choosing the Right Collection

| Need | Use |
|------|-----|
| Indexed access | \`ArrayList\` |
| Fast add/remove at ends | \`ArrayDeque\` |
| Unique elements | \`HashSet\` |
| Sorted unique elements | \`TreeSet\` |
| Key-Value lookup | \`HashMap\` |
| Sorted key-value | \`TreeMap\` |
| Priority ordering | \`PriorityQueue\` |
| LIFO stack | \`ArrayDeque\` |
| FIFO queue | \`ArrayDeque\` or \`LinkedList\` |`
      }
    ]
  },
  {
    id: 'modern-java',
    title: 'Modern Java (8–21)',
    icon: 'Sparkles',
    color: '#facc15',
    chapters: [
      {
        id: 'lambdas-functional',
        title: 'Lambdas & Functional Interfaces',
        content: `## Lambda Expressions (Java 8+)

Lambdas enable **functional programming** in Java — passing behavior as arguments.

### Syntax

\`\`\`java
// Full syntax
(parameters) -> { statements; return value; }

// Simplified
(a, b) -> a + b           // expression body (implicit return)
x -> x * 2                // single param (no parens needed)
() -> System.out.println("Hello") // no params
\`\`\`

### Functional Interfaces

A functional interface has **exactly one abstract method** — perfect for lambdas.

\`\`\`java
// Built-in functional interfaces (java.util.function)
Function<String, Integer>   fn = s -> s.length();      // T → R
Predicate<Integer>          p  = n -> n > 0;           // T → boolean
Consumer<String>            c  = s -> System.out.println(s); // T → void
Supplier<Double>            s  = () -> Math.random();  // () → T
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
UnaryOperator<String>       upper = s -> s.toUpperCase();

// Using them
System.out.println(fn.apply("Hello"));   // 5
System.out.println(p.test(42));          // true
c.accept("Printed!");                    // Printed!
System.out.println(s.get());             // 0.7342...
\`\`\`

### Method References

\`\`\`java
// Instead of lambdas, reference existing methods:
Function<String, Integer> len = String::length;       // instance method ref
Consumer<String> printer = System.out::println;        // static method ref
Supplier<List<String>> listFactory = ArrayList::new;   // constructor ref

// Example usage
List<String> names = List.of("Charlie", "Alice", "Bob");

// Lambda
names.stream().sorted((a, b) -> a.compareTo(b));
// Method reference (equivalent)
names.stream().sorted(String::compareTo);

// Print all
names.forEach(System.out::println);
\`\`\`

### Custom Functional Interface

\`\`\`java
@FunctionalInterface
public interface MathOperation {
    double compute(double a, double b);
}

MathOperation add = (a, b) -> a + b;
MathOperation pow = Math::pow;

System.out.println(add.compute(3, 4)); // 7.0
System.out.println(pow.compute(2, 10)); // 1024.0
\`\`\``
      },
      {
        id: 'streams-api',
        title: 'Streams API',
        content: `## Streams API (Java 8+)

Streams provide a **declarative** way to process collections — filter, transform, aggregate.

### Creating Streams

\`\`\`java
// From collections
List<String> names = List.of("Alice", "Bob", "Charlie", "Dave");
Stream<String> stream = names.stream();

// From values
Stream<Integer> nums = Stream.of(1, 2, 3, 4, 5);

// From arrays
int[] arr = {1, 2, 3};
IntStream intStream = Arrays.stream(arr);

// Infinite streams
Stream<Integer> infinite = Stream.iterate(0, n -> n + 2); // 0, 2, 4, ...
Stream<Double> randoms = Stream.generate(Math::random);
\`\`\`

### Intermediate Operations (lazy, return Stream)

\`\`\`java
List<String> names = List.of("Alice", "Bob", "Charlie", "Dave", "Anna");

names.stream()
    .filter(s -> s.startsWith("A"))     // [Alice, Anna]
    .map(String::toUpperCase)           // [ALICE, ANNA]
    .sorted()                           // [ALICE, ANNA]
    .distinct()                         // remove duplicates
    .limit(5)                           // first 5 elements
    .skip(1)                            // skip first element
    .peek(System.out::println)          // debug: print each
    .collect(Collectors.toList());      // terminal operation
\`\`\`

### Terminal Operations (trigger processing)

\`\`\`java
List<Integer> nums = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Collect
List<Integer> evens = nums.stream()
    .filter(n -> n % 2 == 0)
    .toList(); // Java 16+ shorthand for collect(Collectors.toList())

// Reduce
int sum = nums.stream().reduce(0, Integer::sum); // 55
Optional<Integer> max = nums.stream().max(Integer::compareTo);

// Count, min, max
long count = nums.stream().filter(n -> n > 5).count(); // 5

// forEach
nums.stream().forEach(System.out::println);

// anyMatch, allMatch, noneMatch
boolean hasEven = nums.stream().anyMatch(n -> n % 2 == 0);  // true
boolean allPos = nums.stream().allMatch(n -> n > 0);         // true

// toArray
Integer[] arr = nums.stream().toArray(Integer[]::new);
\`\`\`

### Collectors (Grouping & Partitioning)

\`\`\`java
List<String> words = List.of("apple", "banana", "avocado", "blueberry", "cherry");

// Group by first letter
Map<Character, List<String>> grouped = words.stream()
    .collect(Collectors.groupingBy(w -> w.charAt(0)));
// {a=[apple, avocado], b=[banana, blueberry], c=[cherry]}

// Partition by condition
Map<Boolean, List<String>> partitioned = words.stream()
    .collect(Collectors.partitioningBy(w -> w.length() > 5));

// Joining
String csv = words.stream()
    .collect(Collectors.joining(", ")); // "apple, banana, avocado, ..."

// Summarizing
IntSummaryStatistics stats = words.stream()
    .collect(Collectors.summarizingInt(String::length));
// count=5, sum=34, min=5, average=6.8, max=9

// toMap
Map<String, Integer> wordLengths = words.stream()
    .collect(Collectors.toMap(w -> w, String::length));
\`\`\``
      },
      {
        id: 'optionals',
        title: 'Optional<T>',
        content: `## Optional (Java 8+)

\`Optional\` is a container that may or may not hold a value — eliminates **NullPointerException**.

### Creating Optionals

\`\`\`java
Optional<String> present = Optional.of("Hello");       // must be non-null
Optional<String> nullable = Optional.ofNullable(null);  // may be null
Optional<String> empty = Optional.empty();              // explicitly empty
\`\`\`

### Using Optionals

\`\`\`java
Optional<String> name = Optional.of("Karthik");

// Check and get
if (name.isPresent()) {
    System.out.println(name.get()); // "Karthik"
}

// ifPresent — functional style
name.ifPresent(n -> System.out.println("Name: " + n));

// ifPresentOrElse (Java 9+)
name.ifPresentOrElse(
    n -> System.out.println("Found: " + n),
    () -> System.out.println("Not found")
);

// Default values
String result = name.orElse("Unknown");
String result2 = name.orElseGet(() -> computeDefault());
String result3 = name.orElseThrow(); // throws NoSuchElementException
String result4 = name.orElseThrow(
    () -> new IllegalStateException("Name required!")
);
\`\`\`

### Transforming Optionals

\`\`\`java
Optional<String> name = Optional.of("  karthik  ");

// map — transform value
Optional<String> upper = name
    .map(String::strip)
    .map(String::toUpperCase);
// Optional["KARTHIK"]

// filter — conditional
Optional<String> long_name = name
    .filter(n -> n.strip().length() > 3);
// Optional["  karthik  "]

// flatMap — when transformation returns Optional
Optional<Integer> length = name
    .flatMap(n -> n.isBlank() ? Optional.empty()
                              : Optional.of(n.strip().length()));
// Optional[7]

// Chaining with or() (Java 9+)
Optional<String> fallback = Optional.<String>empty()
    .or(() -> Optional.of("default"));
// Optional["default"]
\`\`\`

### Stream Integration

\`\`\`java
// Optional.stream() (Java 9+)
List<Optional<String>> opts = List.of(
    Optional.of("A"),
    Optional.empty(),
    Optional.of("B")
);

List<String> values = opts.stream()
    .flatMap(Optional::stream)
    .toList();
// ["A", "B"]
\`\`\``
      },
      {
        id: 'pattern-matching',
        title: 'Pattern Matching (Java 21)',
        content: `## Pattern Matching

Java 21 brings **powerful pattern matching** capabilities.

### Pattern Matching for instanceof (Java 16+)

\`\`\`java
Object obj = "Hello World";

if (obj instanceof String s && s.length() > 5) {
    System.out.println("Long string: " + s.toUpperCase());
}
\`\`\`

### Pattern Matching for switch (Java 21)

\`\`\`java
// Match on type
static String describe(Object obj) {
    return switch (obj) {
        case Integer i when i > 0 -> "Positive int: " + i;
        case Integer i            -> "Non-positive int: " + i;
        case String s             -> "String of length " + s.length();
        case int[] arr            -> "int array of length " + arr.length;
        case null                 -> "null value";
        default                   -> "Unknown: " + obj.getClass();
    };
}

describe(42);         // "Positive int: 42"
describe(-5);         // "Non-positive int: -5"
describe("Hi");       // "String of length 2"
describe(null);       // "null value"
\`\`\`

### Record Patterns (Java 21)

\`\`\`java
record Point(int x, int y) {}
record Circle(Point center, double radius) {}

// Destructure nested records!
static String describeShape(Object shape) {
    return switch (shape) {
        case Circle(Point(int x, int y), double r)
            when r > 10 -> "Large circle at (" + x + "," + y + ")";
        case Circle(Point(int x, int y), double r)
            -> "Circle at (" + x + "," + y + ") r=" + r;
        default -> "Unknown shape";
    };
}

var c = new Circle(new Point(3, 4), 15.0);
describeShape(c); // "Large circle at (3,4)"
\`\`\`

### Guarded Patterns (when clause)

\`\`\`java
sealed interface Shape permits Circle, Rectangle {}
record Circle(double radius) implements Shape {}
record Rectangle(double w, double h) implements Shape {}

## Virtual Threads (Project Loom)

Virtual Threads are **lightweight threads** managed by the JVM, not the OS — enabling millions of concurrent tasks with minimal memory footprint.

### Virtual Threads Architecture & Mounting/Unmounting

\`\`\`
+---------------------------------------------------------------------------------------+
|                                JVM VIRTUAL THREAD POOL                                |
|  [ VThread 1 ]   [ VThread 2 ]   [ VThread 3 ]   ...   [ VThread 1,000,000 ]           |
+---------------------------------------------------------------------------------------+
        |                | (Blocked on I/O)
        | Mounts         v Unmounts (Yields Carrier)
+---------------------------------------------------------------------------------------+
|                       CARRIER THREADS (JVM ForkJoinPool)                             |
|  [ Carrier Thread #1 ]                    [ Carrier Thread #2 ]                       |
+---------------------------------------------------------------------------------------+
        |                                           |
        v                                           v
+---------------------------------------------------------------------------------------+
|                             OS KERNEL THREADS (1:1 with OS)                           |
|  [ OS Thread A ]                          [ OS Thread B ]                             |
+---------------------------------------------------------------------------------------+
\`\`\`

#### How Virtual Threads Work:
1. **Mounting**: When a Virtual Thread runs CPU operations, the JVM **mounts** it onto an OS Carrier Thread (ForkJoinPool worker).
2. **Unmounting on Blocking I/O**: When the Virtual Thread makes a blocking call (DB query, HTTP request, socket read), the JVM **unmounts** it from the Carrier Thread and saves its stack in Heap memory.
3. **Re-mounting**: The Carrier Thread becomes free to process other Virtual Threads immediately. Once the I/O completes, the Virtual Thread is scheduled onto an available Carrier Thread again.

### Creating Virtual Threads

\`\`\`java
// Start a single virtual thread
Thread vt = Thread.startVirtualThread(() -> {
    System.out.println("Running in virtual thread: "
        + Thread.currentThread());
});
vt.join(); // wait for completion

// Using Thread.ofVirtual()
Thread thread = Thread.ofVirtual()
    .name("my-vthread")
    .start(() -> {
        System.out.println("Named virtual thread");
    });
\`\`\`

### Virtual Thread Executor

\`\`\`java
// Process 10,000 tasks concurrently!
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    List<Future<String>> futures = new ArrayList<>();

    for (int i = 0; i < 10_000; i++) {
        final int taskId = i;
        futures.add(executor.submit(() -> {
            Thread.sleep(Duration.ofSeconds(1)); // simulated I/O
            return "Result-" + taskId;
        }));
    }

    // Collect results
    for (var future : futures) {
        System.out.println(future.get());
    }
}
// All 10,000 tasks complete in ~1 second (not 10,000 seconds)
\`\`\`

### Platform vs Virtual Threads

| Feature | Platform Thread | Virtual Thread |
|---------|----------------|----------------|
| Managed by | OS | JVM |
| Cost | ~1MB stack each | ~few KB |
| Max count | ~thousands | **millions** |
| Best for | CPU-bound work | I/O-bound work |
| Scheduling | OS scheduler | JVM carrier threads |

### Structured Concurrency (Preview)

\`\`\`java
// Java 21 Preview — manage related tasks as a unit
try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Subtask<String> user = scope.fork(() -> fetchUser(id));
    Subtask<List<Order>> orders = scope.fork(() -> fetchOrders(id));

    scope.join();           // wait for both
    scope.throwIfFailed();  // propagate errors

    return new UserProfile(user.get(), orders.get());
}
\`\`\`

### When to Use Virtual Threads

✅ **Use for**: HTTP servers, database queries, file I/O, API calls, any blocking I/O
❌ **Don't use for**: CPU-intensive computation (use platform threads + ForkJoinPool)`
      }
    ]
  },
  {
    id: 'exception-handling',
    title: 'Exception Handling',
    icon: 'ShieldAlert',
    color: '#f87171',
    chapters: [
      {
        id: 'exceptions',
        title: 'Exceptions & Error Handling',
        content: `## Exception Handling

### Exception Hierarchy

\`\`\`
Throwable
├── Error (don't catch these)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── ...
└── Exception
    ├── IOException (checked)
    ├── SQLException (checked)
    ├── RuntimeException (unchecked)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── IllegalArgumentException
    │   ├── ArithmeticException
    │   └── ClassCastException
    └── ...
\`\`\`

### try-catch-finally

\`\`\`java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
} catch (Exception e) {
    System.out.println("General error: " + e);
} finally {
    System.out.println("Always executes (cleanup)");
}
\`\`\`

### Multi-catch (Java 7+)

\`\`\`java
try {
    // risky code
} catch (IOException | SQLException e) {
    System.out.println("I/O or DB error: " + e.getMessage());
}
\`\`\`

### try-with-resources (Java 7+)

\`\`\`java
// AutoCloseable resources are automatically closed
try (
    var reader = new BufferedReader(new FileReader("data.txt"));
    var writer = new BufferedWriter(new FileWriter("output.txt"))
) {
    String line;
    while ((line = reader.readLine()) != null) {
        writer.write(line.toUpperCase());
        writer.newLine();
    }
} catch (IOException e) {
    System.out.println("File error: " + e.getMessage());
}
// reader & writer are auto-closed even if exception occurs
\`\`\`

### Custom Exceptions

\`\`\`java
// Checked exception
public class InsufficientFundsException extends Exception {
    private final double amount;

    public InsufficientFundsException(double amount) {
        super("Insufficient funds: need " + amount + " more");
        this.amount = amount;
    }

    public double getAmount() { return amount; }
}

// Unchecked exception
public class InvalidUserException extends RuntimeException {
    public InvalidUserException(String userId) {
        super("Invalid user: " + userId);
    }
}

// Using custom exceptions
public void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance) {
        throw new InsufficientFundsException(amount - balance);
    }
    balance -= amount;
}
\`\`\`

### Best Practices

\`\`\`java
// ❌ Don't catch generic Exception
try { } catch (Exception e) { }

// ✅ Catch specific exceptions
try { } catch (FileNotFoundException e) { }

// ❌ Don't swallow exceptions silently
try { } catch (IOException e) { /* empty */ }

// ✅ Log or rethrow
try { } catch (IOException e) {
    logger.error("Failed to read file", e);
    throw new ServiceException("File processing failed", e);
}
\`\`\``
      }
    ]
  },
  {
    id: 'generics',
    title: 'Generics',
    icon: 'Shapes',
    color: '#34d399',
    chapters: [
      {
        id: 'generics-basics',
        title: 'Generics & Type Safety',
        content: `## Generics

Generics enable **type-safe** code that works with any type, caught at compile time rather than runtime.

### Generic Class

\`\`\`java
public class Box<T> {
    private T content;

    public Box(T content) {
        this.content = content;
    }

    public T getContent() { return content; }
    public void setContent(T content) { this.content = content; }
}

Box<String> stringBox = new Box<>("Hello");
String value = stringBox.getContent(); // no casting needed!

Box<Integer> intBox = new Box<>(42);
int num = intBox.getContent();
\`\`\`

### Generic Method

\`\`\`java
public class Util {
    public static <T> T firstNonNull(T a, T b) {
        return a != null ? a : b;
    }

    public static <T extends Comparable<T>> T max(T a, T b) {
        return a.compareTo(b) >= 0 ? a : b;
    }
}

String s = Util.firstNonNull(null, "default"); // "default"
int m = Util.max(10, 20);                      // 20
\`\`\`

### Bounded Type Parameters

\`\`\`java
// Upper bound: T must be a Number or subclass
public static <T extends Number> double sum(List<T> list) {
    double total = 0;
    for (T item : list) {
        total += item.doubleValue();
    }
    return total;
}

// Multiple bounds
public static <T extends Comparable<T> & Serializable> void process(T item) {
    // T must implement BOTH Comparable AND Serializable
}
\`\`\`

### Wildcards

\`\`\`java
// ? — unknown type
void printAll(List<?> list) {
    for (Object item : list) {
        System.out.println(item);
    }
}

// ? extends T — upper bound (read-only)
double sum(List<? extends Number> nums) {
    double total = 0;
    for (Number n : nums) total += n.doubleValue();
    return total;
    // nums.add(42); // ❌ Cannot add — type unknown
}

// ? super T — lower bound (write)
void addIntegers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
    // Integer i = list.get(0); // ❌ Cannot read as Integer
}
\`\`\`

### PECS Principle

> **P**roducer **E**xtends, **C**onsumer **S**uper

\`\`\`java
// If you READ from a generic collection → use extends
// If you WRITE to a generic collection → use super

public static <T> void copy(
    List<? extends T> source,  // producer (read from)
    List<? super T> dest       // consumer (write to)
) {
    for (T item : source) {
        dest.add(item);
    }
}
\`\`\``
      }
    ]
  },
  {
    id: 'io-files',
    title: 'I/O & File Handling',
    icon: 'FileText',
    color: '#fb923c',
    chapters: [
      {
        id: 'file-io',
        title: 'File I/O (NIO.2)',
        content: `## File I/O with java.nio.file

### Reading Files

\`\`\`java
import java.nio.file.*;

// Read entire file as string
String content = Files.readString(Path.of("data.txt"));

// Read all lines
List<String> lines = Files.readAllLines(Path.of("data.txt"));

// Stream lines (lazy, memory-efficient for large files)
try (Stream<String> stream = Files.lines(Path.of("data.txt"))) {
    stream
        .filter(line -> !line.isBlank())
        .map(String::strip)
        .forEach(System.out::println);
}
\`\`\`

### Writing Files

\`\`\`java
// Write string
Files.writeString(Path.of("output.txt"), "Hello, Java 21!");

// Write with options
Files.writeString(
    Path.of("log.txt"),
    "New log entry\\n",
    StandardOpenOption.CREATE,
    StandardOpenOption.APPEND
);

// Write lines
List<String> lines = List.of("Line 1", "Line 2", "Line 3");
Files.write(Path.of("output.txt"), lines);
\`\`\`

### Path Operations

\`\`\`java
Path path = Path.of("src", "main", "java", "App.java");

path.getFileName();    // App.java
path.getParent();      // src/main/java
path.toAbsolutePath(); // /home/user/project/src/main/java/App.java
path.getNameCount();   // 4

// Check file properties
Files.exists(path);
Files.isRegularFile(path);
Files.isDirectory(path);
Files.size(path);            // bytes
Files.getLastModifiedTime(path);
\`\`\`

### Directory Operations

\`\`\`java
// Create directory
Files.createDirectory(Path.of("newDir"));
Files.createDirectories(Path.of("a/b/c")); // creates parents too

// List directory
try (Stream<Path> entries = Files.list(Path.of("."))) {
    entries.forEach(System.out::println);
}

// Walk directory tree (recursive)
try (Stream<Path> walk = Files.walk(Path.of("src"))) {
    walk.filter(p -> p.toString().endsWith(".java"))
        .forEach(System.out::println);
}

// Copy, Move, Delete
Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
Files.move(source, target, StandardCopyOption.ATOMIC_MOVE);
Files.delete(path); // throws if not exists
Files.deleteIfExists(path);
\`\`\``
      }
    ]
  },
  {
    id: 'concurrency',
    title: 'Concurrency',
    icon: 'Layers',
    color: '#60a5fa',
    chapters: [
      {
        id: 'threads-basics',
        title: 'Threads & Synchronization',
        content: `## Concurrency in Java

### Creating Threads

\`\`\`java
// 1. Implementing Runnable (preferred)
Runnable task = () -> {
    System.out.println("Thread: " + Thread.currentThread().getName());
};
Thread t = new Thread(task, "worker-1");
t.start();

// 2. Extending Thread
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Running in " + getName());
    }
}
new MyThread().start();

// 3. Virtual Threads (Java 21)
Thread.startVirtualThread(() -> {
    System.out.println("Virtual thread!");
});
\`\`\`

### ExecutorService

\`\`\`java
// Thread pool — reuse threads
ExecutorService pool = Executors.newFixedThreadPool(4);

// Submit tasks
Future<String> future = pool.submit(() -> {
    Thread.sleep(1000);
    return "Done!";
});

String result = future.get();       // blocks until complete
String result2 = future.get(5, TimeUnit.SECONDS); // with timeout

// Shutdown
pool.shutdown();                    // graceful
pool.awaitTermination(10, TimeUnit.SECONDS);
\`\`\`

### Synchronization

\`\`\`java
public class BankAccount {
    private double balance;

    // Synchronized method — only one thread at a time
    public synchronized void deposit(double amount) {
        balance += amount;
    }

    public synchronized void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
        }
    }

    // Synchronized block — finer control
    public void transfer(BankAccount to, double amount) {
        synchronized (this) {
            if (this.balance >= amount) {
                this.balance -= amount;
                synchronized (to) {
                    to.balance += amount;
                }
            }
        }
    }
}
\`\`\`

### Concurrent Collections

\`\`\`java
// Thread-safe collections
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("key", 1);
map.computeIfAbsent("key2", k -> 42);

CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
BlockingQueue<String> queue = new LinkedBlockingQueue<>(100);

// Atomic variables
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();     // thread-safe ++
counter.addAndGet(5);          // thread-safe += 5
counter.compareAndSet(6, 10);  // CAS operation
\`\`\`

### CompletableFuture

\`\`\`java
// Async pipeline
CompletableFuture<String> future = CompletableFuture
    .supplyAsync(() -> fetchUserFromDB(userId))
    .thenApply(user -> user.getName())
    .thenApply(String::toUpperCase)
    .exceptionally(ex -> "UNKNOWN");

String name = future.join(); // blocks for result

// Combine multiple futures
CompletableFuture<String> userFuture = CompletableFuture
    .supplyAsync(() -> fetchUser(id));
CompletableFuture<List<Order>> orderFuture = CompletableFuture
    .supplyAsync(() -> fetchOrders(id));

CompletableFuture<UserProfile> combined = userFuture
    .thenCombine(orderFuture, (user, orders) ->
        new UserProfile(user, orders));
\`\`\``
      }
    ]
  },
  {
    id: 'dsa-java',
    title: 'DSA in Java',
    icon: 'GitBranch',
    color: '#2dd4bf',
    chapters: [
      {
        id: 'big-o',
        title: 'Big-O Notation & Complexity',
        content: `## Big-O Notation

Big-O describes how an algorithm's time or space grows as input size \`n\` increases.

### Common Complexities

| Big-O | Name | Example |
|-------|------|---------|
| O(1) | Constant | Array access, HashMap get |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search, single loop |
| O(n log n) | Linearithmic | Merge sort, Tim sort |
| O(n²) | Quadratic | Nested loops, bubble sort |
| O(2ⁿ) | Exponential | Recursive fibonacci |
| O(n!) | Factorial | Permutations |

### Analyzing Code

\`\`\`java
// O(1) — constant
int first = arr[0];

// O(n) — linear
for (int i = 0; i < n; i++) {
    // constant work
}

// O(n²) — quadratic
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // constant work
    }
}

// O(log n) — logarithmic
while (n > 0) {
    n /= 2;
}

// O(n log n)
Arrays.sort(arr); // Tim Sort
\`\`\`

### Space Complexity

\`\`\`java
// O(1) space — in-place
void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// O(n) space — new array
int[] doubled = new int[n];
for (int i = 0; i < n; i++) {
    doubled[i] = arr[i] * 2;
}

// O(n) space — recursion call stack
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // n stack frames
}
\`\`\``
      },
      {
        id: 'sorting-algorithms',
        title: 'Sorting Algorithms',
        content: `## Sorting Algorithms in Java

### Built-in Sorting

\`\`\`java
int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr); // Tim Sort — O(n log n)

List<String> names = new ArrayList<>(List.of("Charlie", "Alice", "Bob"));
Collections.sort(names); // Tim Sort

// Custom comparator
names.sort(Comparator.comparingInt(String::length));
names.sort(Comparator.comparing(String::length).reversed());
\`\`\`

### Merge Sort Implementation

\`\`\`java
public static void mergeSort(int[] arr, int left, int right) {
    if (left >= right) return;

    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

private static void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    System.arraycopy(temp, 0, arr, left, temp.length);
}
\`\`\`

### Quick Sort Implementation

\`\`\`java
public static void quickSort(int[] arr, int low, int high) {
    if (low >= high) return;

    int pivotIdx = partition(arr, low, high);
    quickSort(arr, low, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, high);
}

private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }

    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    return i + 1;
}
\`\`\`

### Sorting Comparison

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ |
| Tim Sort | O(n) | O(n log n) | O(n log n) | O(n) | ✅ |`
      },
      {
        id: 'common-patterns',
        title: 'Common DSA Patterns',
        content: `## Common DSA Patterns in Java

### Visual Algorithmic Patterns

#### 1. Two Pointers (Inward Convergence)
\`\`\`
  [ 1,  2,  4,  6,  8,  11 ]   Target = 10
    ^                    ^
   Left                Right    (Sum = 12 > 10 -> Right--)

  [ 1,  2,  4,  6,  8,  11 ]
    ^               ^
   Left           Right         (Sum = 9 < 10 -> Left++)

  [ 1,  2,  4,  6,  8,  11 ]
        ^           ^
       Left       Right         (Sum = 10 == 10 -> Found [2, 8]!)
\`\`\`

#### 2. Sliding Window (Dynamic Expansion & Contraction)
\`\`\`
Subarray Sum / Frequency Window:
   Step 1: [ 2,  1,  5,  1 ], k = 3   Window = [2, 1, 5] (Sum = 8)
             L       R

   Step 2: [ 2,  1,  5,  1,  3 ]       Window = [1, 5, 1] (Sum = 7)
                 L       R

   Step 3: [ 2,  1,  5,  1,  3 ]       Window = [5, 1, 3] (Sum = 9 -> Max!)
                     L       R
\`\`\`

#### 3. Tree Traversal Mechanics (BFS vs DFS)
\`\`\`
          ( 1 )                 BFS (Level Order): [1] -> [2, 3] -> [4, 5, 6]
         /     \                Queue: Front -> 4, 5, 6 -> Back
       ( 2 )   ( 3 )
      /    \      \             DFS (Pre-order):  Root -> Left -> Right (1, 2, 4, 5, 3, 6)
    ( 4 ) ( 5 )   ( 6 )         DFS (In-order):   Left -> Root -> Right (4, 2, 5, 1, 3, 6)
                                DFS (Post-order): Left -> Right -> Root (4, 5, 2, 6, 3, 1)
\`\`\`

#### 4. Dynamic Programming State Transitions
\`\`\`
   Staircase Problem: dp[i] = dp[i-1] + dp[i-2]

   +-------+-------+-------+-------+-------+
   | dp[0] | dp[1] | dp[2] | dp[3] | dp[4] |
   |   1   |   1   |   2   |   3   |   5   |
   +-------+-------+-------+-------+-------+
                       ^       ^       ^
                       |       |       +-- dp[2] + dp[3] = 5
                       +-------+---------- dp[1] + dp[2] = 3
\`\`\`

### Two Pointers

\`\`\`java
// Check if sorted array has pair summing to target
public boolean twoSum(int[] sorted, int target) {
    int left = 0, right = sorted.length - 1;
    while (left < right) {
        int sum = sorted[left] + sorted[right];
        if (sum == target) return true;
        else if (sum < target) left++;
        else right--;
    }
    return false;
}
\`\`\`

### Sliding Window

\`\`\`java
// Max sum of subarray of size k
public int maxSumSubarray(int[] arr, int k) {
    int windowSum = 0, maxSum = 0;
    for (int i = 0; i < arr.length; i++) {
        windowSum += arr[i];
        if (i >= k) windowSum -= arr[i - k];
        if (i >= k - 1) maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}
\`\`\`

### Binary Search Template

\`\`\`java
public int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2; // avoids overflow
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1; // not found
}
\`\`\`

### BFS Template (Graph/Tree)

\`\`\`java
public void bfs(Map<Integer, List<Integer>> graph, int start) {
    Queue<Integer> queue = new LinkedList<>();
    Set<Integer> visited = new HashSet<>();
    queue.offer(start);
    visited.add(start);

    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.println("Visit: " + node);

        for (int neighbor : graph.getOrDefault(node, List.of())) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                queue.offer(neighbor);
            }
        }
    }
}
\`\`\`

### DFS Template (Graph/Tree)

\`\`\`java
public void dfs(Map<Integer, List<Integer>> graph, int node, Set<Integer> visited) {
    visited.add(node);
    System.out.println("Visit: " + node);

    for (int neighbor : graph.getOrDefault(node, List.of())) {
        if (!visited.contains(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}
\`\`\`

### Backtracking Template

\`\`\`java
public void backtrack(List<List<Integer>> result, List<Integer> current,
                      int[] nums, int start) {
    result.add(new ArrayList<>(current)); // save snapshot

    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);             // choose
        backtrack(result, current, nums, i + 1); // explore
        current.remove(current.size() - 1); // un-choose
    }
}
\`\`\`

### Dynamic Programming Template

\`\`\`java
// Bottom-up (tabulation)
public int climbStairs(int n) {
    if (n <= 2) return n;
    int[] dp = new int[n + 1];
    dp[1] = 1;
    dp[2] = 2;
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Space-optimized
public int climbStairsOptimized(int n) {
    if (n <= 2) return n;
    int a = 1, b = 2;
    for (int i = 3; i <= n; i++) {
        int temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
\`\`\``
      }
    ]
  }
];
