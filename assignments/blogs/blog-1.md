Here’s an organized version for your content:

---

## Union (|)

A union type allows a variable to be one of several types. For example, consider the type `feeling = "happy" | "sad"`. Here, we define that a person’s feeling can either be "happy" or "sad". Union types are particularly useful when a value can vary among specific options.

### Benefits of Union Types:

1. **Flexibility**: Union types enable you to define a variable that can accept multiple types, making your code adaptable to different kinds of data. This is especially helpful when dealing with values that can vary.

2. **Type Narrowing**: TypeScript provides type guards and conditional logic to narrow down union types to specific types within the union, enhancing code safety. Using `typeof` or `instanceof` checks allows TypeScript to "narrow" down a union type, helping you work with it effectively.

3. **Reusable Functions**: Union types make function parameters more versatile by accepting multiple types, which increases function reusability across different inputs.

---

## Intersection (&)

An intersection type combines multiple types into one, requiring a variable to satisfy all types simultaneously. This is useful when you want an object or variable to meet multiple criteria.

```typescript
type Human = {
    name: string;
    eat: boolean;
};

type Student = {
    name: string;
    study: boolean;
};

const student1: Human & Student = {
    name: "Tahmina",
    eat: true,
    study: true
};
```

In this example, `student1` combines properties from both `Human` and `Student` types, meaning it must have `name`, `eat`, and `study` properties.

### Summary
Intersection types allow you to merge properties from multiple types, which is especially useful when a type needs to satisfy several requirements at once.