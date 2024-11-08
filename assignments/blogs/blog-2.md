
# Handling Asynchronous Operations in JavaScript

In JavaScript, there are three main approaches to handling asynchronous operations: callbacks, promises, and `async/await`. Here’s a quick overview of each, with examples.

---

### 1. Using Callbacks

With callbacks, we pass a function that will be called after an operation finishes. However, if we have multiple callbacks, this can quickly become hard to understand due to "callback hell."

```typescript
function fetchData(callback: (data: string) => void) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});
```

---

### 2. Using Promises

Promises allow us to handle asynchronous code without nesting callbacks. However, chaining multiple `.then` and `.catch` blocks can still become difficult to read if there are many async tasks in sequence.

```typescript
function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

fetchData()
    .then((data) => console.log(data))  // Logs "Data fetched" after 1 second
    .catch((error) => console.error(error));
```

---

### 3. Using `async/await`

`async/await` makes asynchronous code easier to write and read by allowing you to use promises as if they were synchronous. Using `await` lets you pause execution until a promise resolves, making code look and behave like regular synchronous code.

```typescript
async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log(data); // Logs "Data fetched" after 1 second
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();
```

---

Using `async/await` is generally recommended for readability and maintainability, especially when handling complex asynchronous logic.

