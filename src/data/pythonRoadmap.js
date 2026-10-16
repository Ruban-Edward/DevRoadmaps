// Python roadmap data. Each learning track keeps its content in a separate module.

export const pythonRoadmap = [
  {
    id: "python-basics-variables-strings-operators",
    title: "Python Basics, Variables, Strings & Operators",
    video: "aJEyovo21C8",
    topics: [
      {
        id: "introduction-to-python", title: "Introduction to Python", level: "Beginner", at: "0:13",
        summary: "Python is a simple, readable, high-level language used for web, data, AI, automation and more. Code runs line by line (interpreted).",
        syntax: `print("your message")`,
        example: `print("Hello, World!")`,
        output: `Hello, World!`,
        when: "Automation scripts, web apps, data analysis and AI.",
        mistakes: ["Python is case-sensitive: Print() is not print()","Forgetting quotes around text"],
      },
      {
        id: "comments", title: "Comments", level: "Beginner", at: "10:01",
        summary: "Notes for humans; Python ignores them. # for single line, triple quotes for multi-line.",
        syntax: `# single line
"""multi-line note"""`,
        example: `# single line
"""multi
line note"""`,
        when: "Explaining why code does something, or switching a line off while testing.",
        mistakes: ["Writing comments that only repeat the code","Forgetting that Python ignores everything after #"],
      },
      {
        id: "variables", title: "Variables", level: "Beginner", at: "15:10",
        summary: "A name that stores a value. No type declaration needed.",
        syntax: `name = value`,
        example: `age = 20
name = "Asha"
print(name, age)`,
        output: `Asha 20`,
        when: "Keeping a value so you can reuse or change it later.",
        mistakes: ["Using a variable before assigning it","Confusing = (assign) with == (compare)"],
      },
      {
        id: "multi-word-variable-names", title: "Multi-word variable names", level: "Beginner", at: "25:18",
        summary: "Use snake_case (words joined by _). Names can't start with a digit or contain spaces.",
        syntax: `student_name = "Ravi"`,
        example: `student_name = "Ravi"   # good
# 1name = "x"  -> error`,
        when: "Giving variables clear, readable names.",
        mistakes: ["Spaces or hyphens in a name","Starting a name with a digit"],
      },
      {
        id: "data-types", title: "Data types", level: "Beginner", at: "29:20",
        summary: "Kind of value: int, float, str, bool, list, tuple, set, dict. Check with type().",
        syntax: `type(value)`,
        example: `print(type(10))
print(type(3.5))
print(type("hi"))`,
        output: `<class 'int'>
<class 'float'>
<class 'str'>`,
        when: "Knowing which operations a value supports.",
        mistakes: ["Treating \"5\" (text) like the number 5","Forgetting that / always returns a float"],
      },
      {
        id: "type-casting-input", title: "Type casting & input()", level: "Beginner", extra: true,
        summary: "Convert one type to another. input() always returns a string.",
        syntax: `int(x)   float(x)   str(x)`,
        example: `n = int(input("Number: "))
print(float("2.5"), str(10), int(3.9))`,
        output: `2.5 10 3`,
        when: "Turning typed input into numbers for calculations.",
        mistakes: ["input() returns text, so \"5\" + \"5\" gives \"55\"","int(\"abc\") raises ValueError"],
      },
      {
        id: "strings", title: "Strings", level: "Beginner", at: "47:48",
        summary: "Text inside quotes. Strings are immutable (cannot be changed in place).",
        syntax: `text = "some text"
len(text)`,
        example: `s = "Python"
print(len(s))`,
        output: `6`,
        when: "Names, messages and any text data.",
        mistakes: ["Trying to change one character: s[0] = \"J\" fails","Forgetting to close a quote"],
      },
      {
        id: "string-slicing", title: "String slicing", level: "Beginner", at: "59:31",
        summary: "Take part of a string: s[start:stop:step]. Stop is NOT included. Negative index counts from end.",
        syntax: `text[start:stop:step]`,
        example: `s = "Python"
print(s[0:3])
print(s[-1])
print(s[::-1])`,
        output: `Pyt
n
nohtyP`,
        when: "Extracting part of a string or reversing it.",
        mistakes: ["The stop index is not included","Indexing starts at 0, not 1"],
      },
      {
        id: "string-concatenation", title: "String concatenation", level: "Beginner", at: "1:10:27",
        summary: "Join strings with + ; repeat with *.",
        syntax: `a + b
text * n`,
        example: `print("Hi " + "there")
print("ab" * 3)`,
        output: `Hi there
ababab`,
        when: "Joining pieces of text into one message.",
        mistakes: ["\"Age: \" + 20 raises TypeError; use str(20) or an f-string","Forgetting spaces between joined words"],
      },
      {
        id: "string-modification-replace", title: "String modification & replace", level: "Beginner", at: "1:17:21",
        summary: "Methods return a NEW string.",
        syntax: `text.upper()
text.strip()
text.replace(old, new)`,
        example: `s = " hello world "
print(s.upper())
print(s.strip().title())
print(s.replace("o", "0"))`,
        output: ` HELLO WORLD 
Hello World
 hell0 w0rld `,
        when: "Cleaning user input and fixing text.",
        mistakes: ["Strings are immutable; methods return a new string","Forgetting to store the result: s.upper() alone changes nothing"],
      },
      {
        id: "split", title: "split()", level: "Beginner", at: "1:34:34",
        summary: "Breaks a string into a list.",
        syntax: `text.split(separator)`,
        example: `print("a,b,c".split(","))
print("one two".split())`,
        output: `['a','b','c']
['one','two']`,
        when: "Breaking a sentence or CSV line into parts.",
        mistakes: ["split() with no argument splits on any whitespace","The result is a list, not a string"],
      },
      {
        id: "formatting-strings", title: "Formatting strings", level: "Beginner", at: "1:42:37",
        summary: "Insert values into text. f-strings are the modern way.",
        syntax: `f"{value}"
"{}".format(value)`,
        example: `name, mark = "Asha", 92.456
print(f"{name} scored {mark:.1f}")
print("{} scored {}".format(name, mark))`,
        output: `Asha scored 92.5
Asha scored 92.456`,
        when: "Building readable messages with variables.",
        mistakes: ["Forgetting the f before the quote","Mixing up the order of values in .format()"],
      },
      {
        id: "boolean", title: "Boolean", level: "Beginner", at: "1:53:16",
        summary: "Only True or False. Result of comparisons. 0, '', [], None are treated as False.",
        syntax: `True / False
bool(value)`,
        example: `print(5 > 3)
print(bool(""))`,
        output: `True
False`,
        when: "Results of comparisons and conditions.",
        mistakes: ["Writing true or false in lowercase","Forgetting that empty values like \"\" and [] are False"],
      },
      {
        id: "arithmetic-operators", title: "Arithmetic operators", level: "Beginner", at: "1:59:05",
        summary: "+ - * / // % **",
        syntax: `a + b   a - b   a * b
a / b   a // b   a % b   a ** b`,
        example: `print(7 / 2, 7 // 2, 7 % 2, 2 ** 3)`,
        output: `3.5 3 1 8`,
        when: "Calculations, even/odd checks and remainders.",
        mistakes: ["/ always gives a float; use // for whole division","Using ^ for power; Python uses **"],
      },
      {
        id: "assignment-operators", title: "Assignment operators", level: "Beginner", at: "2:06:59",
        summary: "Store/update values: = += -= *= /=",
        syntax: `x += 1   x -= 1   x *= 2`,
        example: `x = 5
x += 3    # x = x + 3
print(x)`,
        output: `8`,
        when: "Updating counters and totals.",
        mistakes: ["Writing x =+ 1 instead of x += 1","Updating a variable that was never created"],
      },
      {
        id: "comparison-operators", title: "Comparison operators", level: "Beginner", at: "2:09:53",
        summary: "Compare values, give True/False: == != > < >= <=",
        syntax: `a == b   a != b   a > b   a <= b`,
        example: `print(5 == 5, 5 != 3, 4 >= 9)`,
        output: `True True False`,
        when: "Conditions in if statements and loops.",
        mistakes: ["Using = instead of ==","Comparing different types: 5 == \"5\" is False"],
      },
      {
        id: "logical-operators", title: "Logical operators", level: "Beginner", at: "2:14:47",
        summary: "and, or, not",
        syntax: `a and b   a or b   not a`,
        example: `age = 20
print(age > 18 and age < 30)
print(not True)`,
        output: `True
False`,
        when: "Combining several conditions.",
        mistakes: ["Writing x > 1 and < 5 instead of x > 1 and x < 5","Forgetting that and needs both sides True"],
      },
      {
        id: "identity-operators", title: "Identity operators", level: "Beginner", at: "2:19:52",
        summary: "is / is not check if two names point to the SAME object (not just equal value).",
        syntax: `a is b   a is not b`,
        example: `a = [1]; b = [1]; c = a
print(a == b, a is b, a is c)`,
        output: `True False True`,
        when: "Checking if two names refer to the same object, such as is None.",
        mistakes: ["Using is to compare values; use ==","Expecting two equal lists to be the same object"],
      },
      {
        id: "membership-operators", title: "Membership operators", level: "Beginner", at: "2:23:45",
        summary: "in / not in check if something exists inside a sequence.",
        syntax: `item in collection
item not in collection`,
        example: `print("y" in "Python")
print(3 not in [1, 2])`,
        output: `True
True`,
        when: "Searching inside strings, lists, sets and dictionaries.",
        mistakes: ["On a dictionary, in checks keys, not values","in on strings is case-sensitive"],
      },
      {
        id: "bitwise-operators", title: "Bitwise operators", level: "Intermediate", at: "2:26:26",
        summary: "Work on bits: & | ^ ~ << >>",
        syntax: `a & b   a | b   a ^ b
~a   a << n   a >> n`,
        example: `print(5 & 3)
print(5 | 3)
print(5 << 1)`,
        output: `1
7
10`,
        when: "Low-level flags, permissions and binary tricks.",
        mistakes: ["Confusing & with and","Forgetting the numbers are handled as binary bits"],
      },
    ],
  },
  {
    id: "control-flow-statements",
    title: "Control Flow Statements",
    video: "y-RnZgZa6pM",
    topics: [
      {
        id: "control-flow", title: "Control flow", level: "Beginner", at: "0:16",
        summary: "Decide which code runs and how many times: conditions and loops.",
        syntax: `if / elif / else
for / while`,
        example: `# if / elif / else  -> decisions
# for / while       -> repetition`,
        when: "Controlling which code runs and how many times.",
        mistakes: ["Forgetting the colon : at the end of a line","Wrong indentation"],
      },
      {
        id: "if-statement", title: "if statement", level: "Beginner", at: "1:50",
        summary: "Run code only when the condition is True. Indentation is required.",
        syntax: `if condition:
    code`,
        example: `age = 20
if age >= 18:
    print("Adult")`,
        output: `Adult`,
        when: "Running code only when something is true.",
        mistakes: ["Missing colon","Mixing tabs and spaces for indentation"],
      },
      {
        id: "elif-else", title: "elif / else", level: "Beginner", at: "11:03",
        summary: "Check many conditions in order; else runs if none match.",
        syntax: `if a:
    ...
elif b:
    ...
else:
    ...`,
        example: `m = 72
if m >= 90: print("A")
elif m >= 70: print("B")
else: print("C")`,
        output: `B`,
        when: "Choosing one path out of many, like grades.",
        mistakes: ["Writing else if instead of elif","Putting a condition after else"],
      },
      {
        id: "nested-if", title: "Nested if", level: "Beginner", at: "17:55",
        summary: "An if inside another if.",
        syntax: `if a:
    if b:
        code`,
        example: `age, has_id = 20, True
if age >= 18:
    if has_id:
        print("Entry allowed")`,
        when: "Checking a second condition only after the first is true.",
        mistakes: ["Too many levels make code hard to read","Mixing up indentation levels"],
      },
      {
        id: "ternary-one-line-if", title: "Ternary (one-line if)", level: "Beginner", extra: true,
        summary: "Short form of if/else.",
        syntax: `value_if_true if condition else value_if_false`,
        example: `print("Pass" if 60 >= 40 else "Fail")`,
        output: `Pass`,
        when: "Short, simple choices in one line.",
        mistakes: ["Using it for complex logic","Forgetting the else part"],
      },
      {
        id: "for-loop", title: "for loop", level: "Beginner", at: "27:06",
        summary: "Repeat for each item in a sequence.",
        syntax: `for item in iterable:
    code`,
        example: `for fruit in ["apple", "mango"]:
    print(fruit)`,
        when: "Doing something for every item in a collection.",
        mistakes: ["Changing the list while looping over it","Forgetting the colon"],
      },
      {
        id: "range", title: "range()", level: "Beginner", at: "35:29",
        summary: "Generates numbers: range(start, stop, step). Stop not included.",
        syntax: `range(stop)
range(start, stop, step)`,
        example: `for i in range(1, 10, 3):
    print(i)`,
        output: `1
4
7`,
        when: "Looping a fixed number of times.",
        mistakes: ["Stop is not included: range(5) ends at 4","Forgetting that counting starts at 0"],
      },
      {
        id: "nested-loop", title: "Nested loop", level: "Beginner", at: "40:28",
        summary: "A loop inside a loop (e.g. patterns, tables).",
        syntax: `for a in x:
    for b in y:
        code`,
        example: `for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end=" ")
    print()`,
        when: "Tables, grids and star patterns.",
        mistakes: ["Using the same variable name in both loops","Loops multiply: 100 x 100 runs 10,000 times"],
      },
      {
        id: "while-loop", title: "while loop", level: "Beginner", at: "44:34",
        summary: "Repeats while the condition stays True. Don't forget to update the variable!",
        syntax: `while condition:
    code`,
        example: `n = 1
while n <= 3:
    print(n)
    n += 1`,
        when: "Repeating until something changes, like a menu or a game.",
        mistakes: ["Infinite loop: forgetting to update the variable","Wrong starting value"],
      },
      {
        id: "break", title: "break", level: "Beginner", at: "52:18",
        summary: "Stops the loop immediately.",
        syntax: `break`,
        example: `for i in range(10):
    if i == 3: break
    print(i)`,
        output: `0
1
2`,
        when: "Stopping early when you have found what you need.",
        mistakes: ["break only exits the innermost loop","Using it outside a loop"],
      },
      {
        id: "continue", title: "continue", level: "Beginner", at: "1:03:15",
        summary: "Skips the rest of this round and goes to the next.",
        syntax: `continue`,
        example: `for i in range(5):
    if i == 2: continue
    print(i)`,
        output: `0
1
3
4`,
        when: "Skipping unwanted items and carrying on.",
        mistakes: ["In a while loop, skipping the update line causes an infinite loop","Confusing it with break"],
      },
      {
        id: "pass", title: "pass", level: "Beginner", at: "1:10:03",
        summary: "Does nothing. A placeholder for empty blocks.",
        syntax: `pass`,
        example: `if True:
    pass   # write code later`,
        when: "Keeping an empty block valid while you write the code later.",
        mistakes: ["Leaving pass in finished code","Thinking pass skips the loop; it does nothing"],
      },
      {
        id: "iterable-iterator-iteration", title: "Iterable, Iterator & Iteration", level: "Intermediate", at: "1:19:44",
        summary: "Iterable = can be looped over (list, str). Iterator = object giving one item at a time via next(). Iteration = the looping process.",
        syntax: `iterator = iter(iterable)
next(iterator)`,
        example: `it = iter([10, 20])
print(next(it))
print(next(it))`,
        output: `10
20`,
        when: "Understanding how for loops work behind the scenes.",
        mistakes: ["Confusing an iterable (list) with an iterator (iter(list))","Calling next() after the items run out raises StopIteration"],
      },
    ],
  },
  {
    id: "collections-list-tuple-set-dictionary",
    title: "Collections: List, Tuple, Set, Dictionary",
    video: "9ql3lrC8F1w",
    topics: [
      {
        id: "list", title: "List", level: "Beginner", at: "3:43",
        summary: "Ordered, changeable collection. Allows duplicates.",
        syntax: `items = [a, b, c]`,
        example: `nums = [10, 20, 30, 20]
print(len(nums))`,
        output: `4`,
        when: "Storing an ordered group that can change.",
        mistakes: ["Index starts at 0","b = a shares the same list; use a.copy()"],
      },
      {
        id: "list-constructor", title: "List constructor", level: "Beginner", at: "15:43",
        summary: "list() builds a list from any iterable.",
        syntax: `list(iterable)`,
        example: `print(list("abc"))
print(list(range(3)))`,
        output: `['a','b','c']
[0,1,2]`,
        when: "Converting a string, range or tuple into a list.",
        mistakes: ["list(\"abc\") splits into letters","list(5) fails; numbers are not iterable"],
      },
      {
        id: "access-list-items", title: "Access list items", level: "Beginner", at: "19:16",
        summary: "By index (starts at 0), negative index, or slice.",
        syntax: `items[index]
items[start:stop]`,
        example: `l = ["a", "b", "c", "d"]
print(l[0], l[-1], l[1:3])`,
        output: `a d ['b','c']`,
        when: "Reading the first, last or a range of items.",
        mistakes: ["IndexError when the index is too big","Forgetting that -1 means the last item"],
      },
      {
        id: "membership-in-list", title: "Membership in list", level: "Beginner", at: "30:17",
        summary: "Check if an item exists.",
        syntax: `value in items`,
        example: `print("b" in ["a", "b"])`,
        output: `True`,
        when: "Checking if something is already stored.",
        mistakes: ["Text matching is case-sensitive","in checks items, not items inside nested lists"],
      },
      {
        id: "add-items", title: "Add items", level: "Beginner", at: "38:39",
        summary: "append() adds at end, insert(i, x) adds at a position.",
        syntax: `items.append(x)
items.insert(i, x)`,
        example: `l = [1, 2]
l.append(3); l.insert(0, 0)
print(l)`,
        output: `[0,1,2,3]`,
        when: "Adding new data as it arrives.",
        mistakes: ["append() adds ONE item; a list becomes nested","Printing the result of append(), which is None"],
      },
      {
        id: "extend", title: "Extend", level: "Beginner", at: "49:16",
        summary: "Adds all items of another iterable.",
        syntax: `items.extend(other)`,
        example: `l = [1]; l.extend([2, 3])
print(l)`,
        output: `[1,2,3]`,
        when: "Joining another list or iterable to the end.",
        mistakes: ["append([1,2]) adds a list inside; extend adds the items","extend(5) fails; give it an iterable"],
      },
      {
        id: "remove-items", title: "Remove items", level: "Beginner", at: "56:45",
        summary: "remove(value), del l[i], clear().",
        syntax: `items.remove(x)
del items[i]
items.clear()`,
        example: `l = [1, 2, 3]
l.remove(2); del l[0]
print(l)`,
        output: `[3]`,
        when: "Deleting unwanted values.",
        mistakes: ["remove() raises ValueError if the value is missing","remove() deletes only the first match"],
      },
      {
        id: "pop", title: "pop()", level: "Beginner", at: "1:02:38",
        summary: "Removes and RETURNS an item (last by default).",
        syntax: `items.pop()
items.pop(index)`,
        example: `l = [1, 2, 3]
print(l.pop(), l)`,
        output: `3 [1,2]`,
        when: "Taking an item out and using it, like a stack.",
        mistakes: ["pop() on an empty list raises IndexError","Mixing up pop (by position) and remove (by value)"],
      },
      {
        id: "list-comprehension", title: "List comprehension", level: "Intermediate", at: "1:13:39",
        summary: "Build a list in one line: [expression for item in iterable if condition].",
        syntax: `[expr for item in iterable if condition]`,
        example: `sq = [x * x for x in range(5) if x % 2 == 0]
print(sq)`,
        output: `[0, 4, 16]`,
        when: "Creating filtered or transformed lists in one line.",
        mistakes: ["Making it so long it becomes unreadable","Forgetting that it builds a new list"],
      },
      {
        id: "sorting-handy-functions", title: "Sorting & handy functions", level: "Beginner", extra: true,
        summary: "sort() changes the list; sorted() returns a new one. Also len, sum, min, max.",
        syntax: `items.sort()
sorted(items)
len(items)   sum(items)`,
        example: `l = [3, 1, 2]
print(sorted(l, reverse=True), sum(l), max(l))`,
        output: `[3,2,1] 6 3`,
        when: "Ordering data and getting quick totals.",
        mistakes: ["sort() returns None; it sorts in place","Sorting mixed types like numbers and text fails"],
      },
      {
        id: "tuple", title: "Tuple", level: "Beginner", at: "1:29:29",
        summary: "Ordered but UNCHANGEABLE (immutable). Use for fixed data.",
        syntax: `t = (a, b, c)`,
        example: `t = (1, 2, 3)
# t[0] = 9  -> error`,
        when: "Fixed data that should not change, like coordinates.",
        mistakes: ["Trying to assign t[0] = x","(5) is just a number; a one-item tuple needs a comma: (5,)"],
      },
      {
        id: "tuple-constructor", title: "Tuple constructor", level: "Beginner", at: "1:33:15",
        summary: "tuple() converts; a single item needs a comma.",
        syntax: `tuple(iterable)`,
        example: `print(tuple([1, 2]))
single = (5,)`,
        output: `(1,2)`,
        when: "Converting a list into an unchangeable tuple.",
        mistakes: ["Forgetting the comma in a single-item tuple","tuple(\"abc\") splits into letters"],
      },
      {
        id: "access-tuple", title: "Access tuple", level: "Beginner", at: "1:37:56",
        summary: "Same as list: index and slicing.",
        syntax: `t[index]
t[start:stop]`,
        example: `t = (10, 20, 30)
print(t[1], t[-1], t[:2])`,
        output: `20 30 (10,20)`,
        when: "Reading values from fixed data.",
        mistakes: ["IndexError for a missing position","Trying to change a value"],
      },
      {
        id: "tuple-operations", title: "Tuple operations", level: "Beginner", at: "1:41:40",
        summary: "Join with +, repeat with *, count(), index().",
        syntax: `t1 + t2
t * n
t.count(x)   t.index(x)`,
        example: `print((1, 2) + (3,))
print((1, 1, 2).count(1))`,
        output: `(1,2,3)
2`,
        when: "Combining and counting fixed data.",
        mistakes: ["Expecting + to change the original tuple","index() raises ValueError if the value is missing"],
      },
      {
        id: "packing-unpacking", title: "Packing & unpacking", level: "Beginner", at: "1:48:29",
        summary: "Pack values into a tuple; unpack into variables.",
        syntax: `a, b = (1, 2)
a, *rest = values`,
        example: `p = 1, 2, 3        # packing
a, b, c = p         # unpacking
a, *rest = p        # a=1, rest=[2,3]`,
        when: "Swapping values and returning many values from a function.",
        mistakes: ["The number of variables must match the number of values","Forgetting the * when you want the remainder"],
      },
      {
        id: "set", title: "Set", level: "Beginner", at: "1:53:12",
        summary: "Unordered collection of UNIQUE items. No indexing.",
        syntax: `s = {a, b, c}`,
        example: `s = {1, 2, 2, 3}
print(s)`,
        output: `{1, 2, 3}`,
        when: "Removing duplicates and fast membership checks.",
        mistakes: ["{} creates an empty dictionary, not a set","Sets have no order and no index"],
      },
      {
        id: "set-constructor", title: "Set constructor", level: "Beginner", at: "1:55:59",
        summary: "set() converts; use set() for an empty set ({} makes a dict).",
        syntax: `set(iterable)`,
        example: `print(set([1, 1, 2]))`,
        output: `{1, 2}`,
        when: "Turning a list into unique values.",
        mistakes: ["Items must be hashable (no lists inside a set)","The order may change"],
      },
      {
        id: "add-remove-set-items", title: "Add & remove set items", level: "Beginner", at: "2:02:32",
        summary: "add(), update(), remove() (error if missing), discard() (no error).",
        syntax: `s.add(x)
s.discard(x)
s.remove(x)`,
        example: `s = {1}
s.add(2); s.discard(9)
print(s)`,
        output: `{1, 2}`,
        when: "Keeping a changing collection of unique values.",
        mistakes: ["remove() raises KeyError if missing; discard() does not","add() takes one item; use update() for many"],
      },
      {
        id: "set-operations", title: "Set operations", level: "Intermediate", at: "2:14:08",
        summary: "Union |, intersection &, difference -.",
        syntax: `a | b   a & b   a - b   a ^ b`,
        example: `a, b = {1, 2, 3}, {3, 4}
print(a | b, a & b, a - b)`,
        output: `{1,2,3,4} {3} {1,2}`,
        when: "Comparing two groups: common, different, combined.",
        mistakes: ["Using + on sets (not allowed)","Expecting a - b to equal b - a"],
      },
      {
        id: "dictionary", title: "Dictionary", level: "Beginner", at: "2:23:53",
        summary: "Key : value pairs. Fast lookup by key. Keys are unique.",
        syntax: `d = {key: value}`,
        example: `d = {"name": "Asha", "age": 20}`,
        when: "Looking up values by name, like records and settings.",
        mistakes: ["Duplicate keys: the last one wins","Using a list as a key; keys must be immutable"],
      },
      {
        id: "dictionary-constructor", title: "Dictionary constructor", level: "Beginner", at: "2:27:59",
        summary: "dict() or {} creates one.",
        syntax: `dict(key=value)
{}`,
        example: `d = dict(a=1, b=2)
print(d)`,
        output: `{'a':1,'b':2}`,
        when: "Creating dictionaries in different ways.",
        mistakes: ["dict(a=1) keys are written without quotes","{} is an empty dict, not a set"],
      },
      {
        id: "access-dictionary-values", title: "Access dictionary values", level: "Beginner", at: "2:30:05",
        summary: "Use d[key] or d.get(key) (safe, no error).",
        syntax: `d[key]
d.get(key, default)`,
        example: `d = {"name": "Asha"}
print(d["name"], d.get("age", "N/A"))`,
        output: `Asha N/A`,
        when: "Reading a value safely.",
        mistakes: ["d[key] raises KeyError if the key is missing; use get()","Keys are case-sensitive"],
      },
      {
        id: "remove-dictionary-items", title: "Remove dictionary items", level: "Beginner", at: "2:37:05",
        summary: "pop(key), del d[key], clear().",
        syntax: `d.pop(key)
del d[key]
d.clear()`,
        example: `d = {"a": 1, "b": 2}
d.pop("a")
print(d)`,
        output: `{'b': 2}`,
        when: "Deleting entries you no longer need.",
        mistakes: ["Removing a key that does not exist raises KeyError","Changing a dictionary while looping over it"],
      },
      {
        id: "dictionary-methods", title: "Dictionary methods", level: "Beginner", at: "2:41:09",
        summary: "keys(), values(), items(), update().",
        syntax: `d.keys()   d.values()   d.items()
d.update(other)`,
        example: `d = {"a": 1, "b": 2}
for k, v in d.items():
    print(k, v)`,
        when: "Looping and merging dictionary data.",
        mistakes: ["Looping over d gives keys only","Forgetting items() when you need both key and value"],
      },
      {
        id: "nested-dictionary", title: "Nested dictionary", level: "Intermediate", at: "2:45:09",
        summary: "A dictionary inside a dictionary.",
        syntax: `d[outer][inner]`,
        example: `s = {"101": {"name": "Ravi", "marks": 88}}
print(s["101"]["marks"])`,
        output: `88`,
        when: "Records inside records, like students with details.",
        mistakes: ["KeyError if the outer key is missing","Too much nesting becomes hard to read"],
      },
    ],
  },
  {
    id: "functions-modules",
    title: "Functions & Modules",
    video: "REalD7dSCUk",
    topics: [
      {
        id: "functions", title: "Functions", level: "Beginner", at: "0:15",
        summary: "A reusable block of code, created with def and run by calling it. Write once, use many times.",
        syntax: `def name():
    code
name()`,
        example: `def greet():
    print("Hello!")
greet()`,
        output: `Hello!`,
        when: "Avoiding repeated code.",
        mistakes: ["Defining a function but never calling it","Missing the colon or indentation"],
      },
      {
        id: "types-of-functions", title: "Types of functions", level: "Beginner", at: "4:55",
        summary: "Built-in (print, len), module functions (math.sqrt) and user-defined (your own).",
        syntax: `built-in  |  module  |  user-defined`,
        example: `print(len("hi"))`,
        output: `2`,
        when: "Knowing where a function comes from.",
        mistakes: ["Naming your function like a built-in (list, print)","Forgetting to import a module function"],
      },
      {
        id: "user-defined-function", title: "User-defined function", level: "Beginner", at: "7:04",
        summary: "Your own function with parameters (inputs).",
        syntax: `def name(parameters):
    code`,
        example: `def add(a, b):
    return a + b
print(add(2, 3))`,
        output: `5`,
        when: "Packaging a task you perform often.",
        mistakes: ["Mixing up parameters (definition) and arguments (call)","Passing the wrong number of arguments"],
      },
      {
        id: "void-function", title: "Void function", level: "Beginner", at: "13:34",
        summary: "Does a job but returns nothing (returns None).",
        syntax: `def name():
    print(...)`,
        example: `def hello(name):
    print("Hi", name)
hello("Ravi")`,
        when: "Actions like printing, saving or updating.",
        mistakes: ["Printing the result of a void function shows None","Expecting a value back"],
      },
      {
        id: "non-void-function", title: "Non-void function", level: "Beginner", at: "24:25",
        summary: "Sends back a result using return.",
        syntax: `def name():
    return value`,
        example: `def square(n):
    return n * n
x = square(4)   # 16`,
        when: "Calculations whose result you need later.",
        mistakes: ["Code after return never runs","Printing instead of returning"],
      },
      {
        id: "default-args-kwargs", title: "Default, *args & **kwargs", level: "Intermediate", extra: true,
        summary: "Default values; any number of positional (*args) or keyword (**kwargs) arguments.",
        syntax: `def f(a, b=0, *args, **kwargs):`,
        example: `def f(a, b=10, *args, **kw):
    print(a, b, args, kw)
f(1, 2, 3, 4, x=5)`,
        output: `1 2 (3,4) {'x':5}`,
        when: "Flexible functions with optional or unlimited inputs.",
        mistakes: ["Default arguments must come after required ones","Using a list as a default value (it is shared)"],
      },
      {
        id: "lambda", title: "Lambda", level: "Intermediate", extra: true,
        summary: "Small one-line anonymous function.",
        syntax: `lambda params: expression`,
        example: `double = lambda x: x * 2
print(double(5))`,
        output: `10`,
        when: "Short throwaway functions for sorted(), map() and filter().",
        mistakes: ["Writing long logic in a lambda","A lambda holds only one expression"],
      },
      {
        id: "variable-scope", title: "Variable scope", level: "Intermediate", extra: true,
        summary: "Variables inside a function are local; outside are global.",
        syntax: `global_name
def f():
    local_name`,
        example: `x = 10
def f():
    x = 5      # local
f(); print(x)`,
        output: `10`,
        when: "Knowing where a variable can be used.",
        mistakes: ["Using a local variable outside its function","Changing a global without the global keyword"],
      },
      {
        id: "module", title: "Module", level: "Beginner", at: "34:36",
        summary: "A .py file (or library) with ready-made code. Bring it in with import.",
        syntax: `import module
from module import name`,
        example: `import math
from math import sqrt
print(math.pi, sqrt(16))`,
        output: `3.14159... 4.0`,
        when: "Reusing code written by others or by you.",
        mistakes: ["Naming your file like a module (random.py)","Forgetting to import before use"],
      },
      {
        id: "random-module", title: "Random module", level: "Beginner", at: "46:50",
        summary: "Generates random values.",
        syntax: `import random`,
        example: `import random`,
        when: "Games, sampling and test data.",
        mistakes: ["Naming your file random.py","Expecting repeatable results (use random.seed)"],
      },
      {
        id: "random-methods", title: "Random methods", level: "Beginner", at: "48:48",
        summary: "random(), randint(a,b), choice(seq), shuffle(list).",
        syntax: `random.randint(a, b)
random.choice(seq)
random.shuffle(list)`,
        example: `print(random.randint(1, 6))
print(random.choice(["a", "b", "c"]))
l = [1, 2, 3]; random.shuffle(l)`,
        when: "Dice rolls, picking winners and shuffling.",
        mistakes: ["randint includes both ends","shuffle() changes the list and returns None"],
      },
    ],
  },
  {
    id: "object-oriented-programming-oop",
    title: "Object-Oriented Programming (OOP)",
    video: "bXF0trk_o3E",
    topics: [
      {
        id: "programming-paradigm", title: "Programming paradigm", level: "Beginner", at: "0:14",
        summary: "A style of writing programs: procedural (functions step by step) and object-oriented (objects with data + actions).",
        syntax: `procedural  |  object-oriented`,
        example: `# Python supports both styles`,
        when: "Choosing the style that fits your program.",
        mistakes: ["Thinking one paradigm is always better","Putting everything in one big function"],
      },
      {
        id: "oop-concepts", title: "OOP concepts", level: "Beginner", at: "5:56",
        summary: "Class, Object, Inheritance, Polymorphism, Encapsulation, Abstraction.",
        syntax: `Class  Object  Inheritance
Polymorphism  Encapsulation  Abstraction`,
        example: `# Think: Class = blueprint, Object = real thing`,
        when: "Organising larger programs into reusable parts.",
        mistakes: ["Mixing up class (blueprint) and object (real item)","Using OOP for tiny scripts that do not need it"],
      },
      {
        id: "class", title: "Class", level: "Beginner", at: "9:58",
        summary: "A blueprint that describes what an object will have and do.",
        syntax: `class ClassName:
    ...`,
        example: `class Car:
    pass`,
        when: "Describing something with data and behaviour, like Student.",
        mistakes: ["Using lowercase names; use CamelCase","Forgetting the colon"],
      },
      {
        id: "object", title: "Object", level: "Beginner", at: "20:47",
        summary: "A real instance created from a class.",
        syntax: `obj = ClassName()`,
        example: `c1 = Car()
c2 = Car()   # two objects, one class`,
        when: "Creating many separate items from one class.",
        mistakes: ["Forgetting the () when creating an object","Expecting two objects to share instance data"],
      },
      {
        id: "creating-a-class", title: "Creating a class", level: "Beginner", at: "33:55",
        summary: "Use the class keyword; names in CamelCase.",
        syntax: `class Name:
    attribute = value`,
        example: `class Student:
    school = "ABC School"   # class attribute`,
        when: "Starting a new type of thing in your program.",
        mistakes: ["Class attributes are shared by all objects","Forgetting to indent the class body"],
      },
      {
        id: "attributes", title: "Attributes", level: "Beginner", at: "36:38",
        summary: "Variables that belong to the object (its data).",
        syntax: `self.name = value
obj.name`,
        example: `s = Student()
s.name = "Asha"
print(s.name, s.school)`,
        when: "Storing data for each object.",
        mistakes: ["Forgetting self. inside methods","Reading an attribute that was never set"],
      },
      {
        id: "methods", title: "Methods", level: "Beginner", at: "44:19",
        summary: "Functions inside a class (its actions). First parameter is self.",
        syntax: `def method(self):
    code`,
        example: `class Dog:
    def bark(self):
        print("Woof!")
Dog().bark()`,
        when: "Actions an object can do.",
        mistakes: ["Forgetting self as the first parameter","Calling a method without ()"],
      },
      {
        id: "constructor-init", title: "Constructor (__init__)", level: "Beginner", at: "48:34",
        summary: "Special method that runs automatically when an object is created. Sets up its data.",
        syntax: `def __init__(self, params):
    self.x = params`,
        example: `class Student:
    def __init__(self, name):
        self.name = name
s = Student("Ravi")`,
        when: "Setting up each object with its starting data.",
        mistakes: ["Writing _init_ with one underscore","Forgetting self in the parameter list"],
      },
      {
        id: "self-keyword", title: "self keyword", level: "Beginner", at: "56:51",
        summary: "Refers to the current object. Lets methods use that object's data.",
        syntax: `self.attribute`,
        example: `class Student:
    def __init__(self, name): self.name = name
    def show(self): print(self.name)
Student("Asha").show()`,
        output: `Asha`,
        when: "Letting a method use the object's own data.",
        mistakes: ["Leaving self out of the method definition","Using self outside a class"],
      },
      {
        id: "inheritance", title: "Inheritance", level: "Beginner", at: "1:14:40",
        summary: "A child class reuses the parent class's code.",
        syntax: `class Child(Parent):
    ...`,
        example: `class Animal:
    def eat(self): print("eating")
class Dog(Animal): pass
Dog().eat()`,
        output: `eating`,
        when: "Reusing code instead of copying it.",
        mistakes: ["Forgetting to put the parent name in ()","Using inheritance when an object should simply contain another"],
      },
      {
        id: "single-inheritance", title: "Single inheritance", level: "Beginner", at: "1:26:30",
        summary: "One parent, one child: B(A)",
        syntax: `class B(A):`,
        example: `class A: pass
class B(A): pass`,
        when: "A simple parent and child relationship.",
        mistakes: ["Forgetting super().__init__()","Calling parent methods incorrectly"],
      },
      {
        id: "multiple-inheritance", title: "Multiple inheritance", level: "Intermediate", at: "1:31:21",
        summary: "One child, many parents: C(A, B)",
        syntax: `class C(A, B):`,
        example: `class A: pass
class B: pass
class C(A, B): pass`,
        when: "Combining features from two classes.",
        mistakes: ["Name clashes between the parents","The order of parents matters (MRO)"],
      },
      {
        id: "multilevel-inheritance", title: "Multilevel inheritance", level: "Beginner", at: "1:38:31",
        summary: "Chain: grandparent → parent → child.",
        syntax: `class C(B):   # B inherits A`,
        example: `class A: pass
class B(A): pass
class C(B): pass`,
        when: "Building on a child class step by step.",
        mistakes: ["Too many levels are hard to follow","Not calling parent constructors"],
      },
      {
        id: "hierarchical-inheritance", title: "Hierarchical inheritance", level: "Beginner", at: "1:44:05",
        summary: "One parent, many children.",
        syntax: `class B(A):
class C(A):`,
        example: `class A: pass
class B(A): pass
class C(A): pass`,
        when: "Many specialised classes from one common parent.",
        mistakes: ["Changing the parent affects every child","Forgetting child-specific data"],
      },
      {
        id: "hybrid-inheritance", title: "Hybrid inheritance", level: "Intermediate", at: "1:51:01",
        summary: "A mix of two or more types above.",
        syntax: `class D(B, C):   # B and C inherit A`,
        example: `class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass`,
        when: "Mixing inheritance types (diamond shape).",
        mistakes: ["The diamond problem: which parent runs first?","Making a design more complex than needed"],
      },
      {
        id: "super-method-overriding", title: "super() & method overriding", level: "Intermediate", extra: true,
        summary: "Child redefines a parent's method; super() calls the parent version.",
        syntax: `super().method()`,
        example: `class A:
    def hi(self): print("A")
class B(A):
    def hi(self):
        super().hi(); print("B")
B().hi()`,
        output: `A
B`,
        when: "Extending or changing what a parent method does.",
        mistakes: ["Using different parameters than the parent method","Forgetting super().__init__()"],
      },
      {
        id: "encapsulation-abstraction", title: "Encapsulation & abstraction", level: "Intermediate", extra: true,
        summary: "Encapsulation: hide data using _name / __name. Abstraction: show only what's needed.",
        syntax: `self.__private`,
        example: `class Acc:
    def __init__(self): self.__bal = 0   # private
    def deposit(self, x): self.__bal += x
    def balance(self): return self.__bal`,
        when: "Protecting data and hiding complexity.",
        mistakes: ["Private names are a convention, not a lock","Touching private data from outside the class"],
      },
      {
        id: "str-method", title: "__str__ method", level: "Intermediate", extra: true,
        summary: "Controls what print(object) shows.",
        syntax: `def __str__(self):
    return text`,
        example: `class P:
    def __str__(self): return "I am P"
print(P())`,
        output: `I am P`,
        when: "Readable output when printing objects.",
        mistakes: ["Printing instead of returning text","Returning a non-string"],
      },
    ],
  },
  {
    id: "file-handling-exceptions-built-ins",
    title: "File Handling, Exceptions & Built-ins",
    video: "TdPDfoSQxyk",
    topics: [
      {
        id: "file-handling", title: "File handling", level: "Beginner", at: "0:14",
        summary: "Reading and writing files with open(). Always use the right mode.",
        syntax: `f = open("file", "mode")
f.close()`,
        example: `f = open("notes.txt", "w")
f.write("Hello")
f.close()`,
        when: "Saving and loading data like notes, logs and scores.",
        mistakes: ["Wrong file path or name","Forgetting to close the file"],
      },
      {
        id: "file-modes", title: "File modes", level: "Beginner", at: "8:24",
        summary: "r read · w write (overwrites) · a append · x create (error if exists) · b binary · + read & write.",
        syntax: `r   w   a   x   b   +`,
        example: `open("a.txt", "r")    # read
open("a.txt", "a")    # append
open("img.png", "rb") # read binary`,
        when: "Choosing how to open a file.",
        mistakes: ["w erases existing content","Using r on a file that does not exist"],
      },
      {
        id: "reading-a-file", title: "Reading a file", level: "Beginner", at: "21:16",
        summary: "read() gets the whole content.",
        syntax: `f.read()`,
        example: `f = open("notes.txt")
print(f.read())
f.close()`,
        when: "Loading all file text at once.",
        mistakes: ["Reading a huge file all at once","Reading twice: the pointer is already at the end"],
      },
      {
        id: "readline-readlines", title: "readline() & readlines()", level: "Beginner", at: "40:51",
        summary: "readline() = one line; readlines() = list of all lines.",
        syntax: `f.readline()
f.readlines()`,
        example: `f = open("notes.txt")
print(f.readline())
print(f.readlines())`,
        when: "Reading one line or all lines as a list.",
        mistakes: ["Lines end with \\n","readline() returns an empty string at the end"],
      },
      {
        id: "read-using-a-for-loop", title: "Read using a for loop", level: "Beginner", at: "49:25",
        summary: "Best for big files: one line at a time.",
        syntax: `for line in f:
    code`,
        example: `for line in open("notes.txt"):
    print(line.strip())`,
        when: "Processing big files line by line.",
        mistakes: ["Forgetting to strip the \\n","Looping after the file is closed"],
      },
      {
        id: "close", title: "close()", level: "Beginner", at: "52:58",
        summary: "Frees the file. Forgetting it can lose data.",
        syntax: `f.close()`,
        example: `f.close()`,
        when: "Releasing the file and saving written data.",
        mistakes: ["Using the file after close()","Skipping close() when an error happens; use with"],
      },
      {
        id: "write-mode", title: "Write mode", level: "Beginner", at: "58:46",
        summary: "'w' creates the file or ERASES old content.",
        syntax: `open("file", "w")
f.write(text)`,
        example: `with open("a.txt", "w") as f:
    f.write("New text\\n")`,
        when: "Creating a file or replacing its content.",
        mistakes: ["w deletes everything already in the file","write() does not add a new line automatically"],
      },
      {
        id: "append-create-mode", title: "Append & create mode", level: "Beginner", at: "1:06:21",
        summary: "'a' adds at the end; 'x' creates a new file only.",
        syntax: `open("file", "a")
open("file", "x")`,
        example: `with open("a.txt", "a") as f:
    f.write("More text\\n")`,
        when: "Adding to logs without losing old data.",
        mistakes: ["x raises an error if the file already exists","Forgetting \\n between appended lines"],
      },
      {
        id: "readable-closed", title: "readable() & closed", level: "Beginner", at: "1:15:46",
        summary: "Check file state.",
        syntax: `f.readable()
f.closed`,
        example: `f = open("a.txt")
print(f.readable(), f.closed)
f.close(); print(f.closed)`,
        output: `True False
True`,
        when: "Checking a file's state before using it.",
        mistakes: ["Reading a file opened in w mode","Trying to read after closing"],
      },
      {
        id: "context-manager-with", title: "Context manager (with)", level: "Beginner", at: "1:19:09",
        summary: "Closes the file automatically, even on errors. Preferred way.",
        syntax: `with open("file") as f:
    code`,
        example: `with open("a.txt") as f:
    data = f.read()
# file is closed here`,
        when: "Safe file handling with automatic closing.",
        mistakes: ["Using f outside the with block","Forgetting the colon"],
      },
      {
        id: "reading-a-binary-file", title: "Reading a binary file", level: "Beginner", at: "1:35:31",
        summary: "Use 'rb' for images, PDFs, etc. Gives bytes.",
        syntax: `open("file", "rb")`,
        example: `with open("img.png", "rb") as f:
    print(f.read(10))`,
        when: "Images, PDFs and audio.",
        mistakes: ["Opening an image in text mode","Expecting text; binary gives bytes"],
      },
      {
        id: "remove-a-file", title: "Remove a file", level: "Beginner", at: "1:47:20",
        summary: "Use the os module.",
        syntax: `os.remove(path)`,
        example: `import os
if os.path.exists("a.txt"):
    os.remove("a.txt")`,
        when: "Cleaning up temporary files.",
        mistakes: ["Deleting a file that does not exist","Removing a file that is still open"],
      },
      {
        id: "exception-handling", title: "Exception handling", level: "Beginner", at: "1:57:59",
        summary: "Handle errors so the program doesn't crash. try / except / else / finally.",
        syntax: `try:
    risky code
except Error:
    handle`,
        example: `try:
    print(10 / 0)
except ZeroDivisionError:
    print("Can't divide by zero")
finally:
    print("Always runs")`,
        when: "Keeping programs running when something goes wrong.",
        mistakes: ["A bare except hides real bugs","Putting too much code inside try"],
      },
      {
        id: "handling-errors-in-python", title: "Handling errors in Python", level: "Beginner", at: "2:20:20",
        summary: "Catch specific errors first. Common: ValueError, TypeError, FileNotFoundError, KeyError, IndexError.",
        syntax: `except ValueError as e:`,
        example: `try:
    n = int("abc")
except ValueError as e:
    print("Bad number:", e)`,
        when: "Showing friendly messages instead of crashes.",
        mistakes: ["Catching the general Exception first","Ignoring the error message"],
      },
      {
        id: "raise-your-own-errors", title: "raise (your own errors)", level: "Intermediate", extra: true,
        summary: "Trigger an error yourself.",
        syntax: `raise ErrorType("message")`,
        example: `age = -1
if age < 0:
    raise ValueError("Age can't be negative")`,
        when: "Stopping when data is invalid.",
        mistakes: ["Writing a vague error message","Forgetting that raise stops the function"],
      },
      {
        id: "built-ins-in-python", title: "Built-ins in Python", level: "Beginner", at: "2:17:03",
        summary: "Ready-to-use functions/errors: print, len, type, range, sum, min, max, sorted, enumerate, zip, abs, round.",
        syntax: `print()   len()   type()   range()   sum()`,
        example: `names = ["A", "B"]
for i, n in enumerate(names):
    print(i, n)
print(list(zip(names, [1, 2])))`,
        when: "Everyday tools that need no import.",
        mistakes: ["Using a built-in name as a variable (list = [])","Forgetting that some return iterators, not lists"],
      },
      {
        id: "json-files", title: "JSON files", level: "Intermediate", extra: true,
        summary: "Save and load dictionaries/lists in files.",
        syntax: `json.dump(data, f)
json.load(f)`,
        example: `import json
with open("d.json", "w") as f: json.dump({"a": 1}, f)
with open("d.json") as f: print(json.load(f))`,
        when: "Saving structured data like dictionaries.",
        mistakes: ["Forgetting to import json","JSON keys must be text"],
      },
    ],
  },
  {
    id: "sample-program-student-report-manager",
    title: "Sample Program: Student Report Manager",
    topics: [
      {
        id: "goal", title: "Goal", level: "Beginner",
        summary: "A menu-driven program that adds students, saves them to a file, shows grades and picks a random winner. Copy it, run it, then change it!",
        syntax: `python students.py`,
        example: `# Concepts used:
# variables, input, f-strings, if/elif, while, break
# list + list comprehension, dict, functions, import/random
# class + constructor + methods, try/except, file + json, with`,
        when: "See how the topics combine in one program.",
        mistakes: ["Writing everything at once; build it step by step"],
      },
      {
        id: "full-program", title: "Full program", level: "Intermediate",
        summary: "Save as students.py and run: python students.py",
        syntax: `python students.py`,
        example: `import json, os, random
FILE = "students.json"

class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks
    def average(self):
        return sum(self.marks) / len(self.marks)
    def grade(self):
        avg = self.average()
        if avg >= 90: return "A"
        elif avg >= 75: return "B"
        elif avg >= 50: return "C"
        return "F"
    def __str__(self):
        return f"{self.name:<10} avg={self.average():.1f} grade={self.grade()}"

def load():
    if not os.path.exists(FILE):
        return []
    with open(FILE) as f:
        return json.load(f)

def save(data):
    with open(FILE, "w") as f:
        json.dump(data, f)

def add_student(data):
    name = input("Name: ").strip().title()
    try:
        marks = [int(m) for m in input("Marks (space separated): ").split()]
        if not marks:
            raise ValueError
    except ValueError:
        print("Please enter valid numbers!")
        return
    data.append({"name": name, "marks": marks})
    save(data)
    print("Saved!")

def show_all(data):
    for d in data:
        print(Student(d["name"], d["marks"]))

def lucky_draw(data):
    if data:
        print("Winner:", random.choice(data)["name"])

def main():
    data = load()
    menu = {"1": add_student, "2": show_all, "3": lucky_draw}
    while True:
        print("\\n1.Add  2.Show  3.Lucky draw  4.Exit")
        choice = input("Choose: ")
        if choice == "4":
            break
        elif choice in menu:
            menu[choice](data)
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()`,
        when: "Revising every topic in one working program.",
        mistakes: ["Wrong indentation when copying","Running from another folder: the JSON file is created there"],
      },
      {
        id: "try-these-challenges", title: "Try these challenges", level: "Intermediate",
        summary: "Practice by extending the program.",
        syntax: `# edit students.py`,
        example: `# 1. Add a "delete student" option (dict/list remove)
# 2. Show the topper using max()
# 3. Add a Teacher class that inherits from a Person class
# 4. Log errors to a text file using append mode`,
        when: "Practising by extending working code.",
                                mistakes: ["Changing too much at once","Not testing after each change"],
                        },
                ],
        },
];


