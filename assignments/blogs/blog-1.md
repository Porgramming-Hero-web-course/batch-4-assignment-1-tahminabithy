*  Union (|)

   A union type allows a variable to be one of several types. For example, consider the type feeling = "happy" | "sad". Here, we define that a person’s feeling can be either "happy" or "sad". Union types are particularly useful when a value might vary among specific options.

   1. Flexibility: Union types enable you to define a variable that can accept multiple types, making your code flexible for handling various kinds of data. This is especially useful when working with values that can vary.

   2. Type Narrowing: TypeScript provides type guards and conditional logic to help narrow down union types to specific types within the union, which enhances code safety. For example, using typeof or instanceof checks allows TypeScript to "narrow" down a union type, helping you work with it more effectively.

   3. Reusable Functions: Union types allow function parameters to accept multiple types, making functions more versatile and reusable for different inputs.

* Intersection (&):

  An intersection type combines multiple types into one, requiring a variable to satisfy all types simultaneously. This is useful when you want to ensure that an object or variable meets multiple criteria. For example 

  type human = {
name:string;
eat:boolean
    }
    type student = {
    name:string;
    study:boolean
    }

    const student1 : human & student = {
    name: "Tahmina"
    eat: true,
    study: true
     }

    In short, intersection types let you combine properties of multiple types, which is especially useful when you want to ensure that a type meets multiple requirements.
