* Type Gaurds 
Type guards in TypeScript are essential for safely working with variables of union or unknown types. They help the TypeScript compiler understand which specific type a variable holds in a certain block of code, enabling safer access to properties or methods.

There 3 types of type gaurd : TypeOf , in , instanceOf

 1. TypeOf: TypeOf is used for the primitive type such as string,number,boolean etc.

    function printLength(input: string | number) {
         if (typeof input === "string") {
         console.log(input.length);
       } 
        else {
       console.log(input);
      }
    }

 2. instanceOf: instanceOf is used for class. It 

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

  3. in operator: it checks if a property (key) exists in an object, helping to narrow down types with specific properties.

  type Fish = { swim: () => void };
type Bird = { fly: () => void };

  function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim(); 
    } else {
        animal.fly();
    }
}