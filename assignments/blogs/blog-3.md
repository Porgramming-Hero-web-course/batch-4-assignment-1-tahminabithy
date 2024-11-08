
# Type Guards in TypeScript

Type guards in TypeScript are essential for safely working with variables of union or unknown types. They allow the TypeScript compiler to understand the specific type a variable holds within a particular block of code, enabling safer access to properties or methods. 

TypeScript provides three main types of type guards: `typeof`, `instanceof`, and `in`.

---

### 1. `typeof` Operator

The `typeof` operator is used for checking primitive types, such as `string`, `number`, and `boolean`.

```typescript
function printLength(input: string | number) {
    if (typeof input === "string") {
        console.log(input.length); // Safe because input is narrowed to a string
    } else {
        console.log(input); // Otherwise, input is a number
    }
}
```

---

### 2. `instanceof` Operator

The `instanceof` operator is used to check if an object is an instance of a specific class. This is particularly useful when working with custom classes.

```typescript
class Dog {
    bark() { console.log("Woof!"); }
}

class Cat {
    meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark(); // Safe to call `bark`
    } else {
        animal.meow(); // Safe to call `meow`
    }
}
```

---

### 3. `in` Operator

The `in` operator checks if a specific property (key) exists in an object, helping to narrow down types based on the presence of properties.

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim(); // Safe to call `swim`
    } else {
        animal.fly(); // Safe to call `fly`
    }
}
```

---

These type guards make TypeScript more robust, as they provide clear checks for each possible type, leading to safer and more predictable code.