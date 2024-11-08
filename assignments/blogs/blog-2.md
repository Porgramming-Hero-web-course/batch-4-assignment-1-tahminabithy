* Using Callbacks : With callbacks, we pass a function to be called after an operation finishes. However, this can quickly very hard to understand if we have multiple callbacks 

function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData((data) => {
  console.log(data); 
});

* Using Promises : Promises allow us to handle asynchronous code without nesting callbacks, but .then and .catch chaining can still be hard to read if we have several async tasks.

function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data)) 
  .catch((error) => console.error(error));

* Using async/await : async/await makes it easier to write and read asynchronous code by letting you work with promises as if they were synchronous. With async/await, you can wait for the result of a promise, making it look like regular code.

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
    console.log(data); // Logs "Data fetched"
  } catch (error) {
    console.error("Error:", error);
  }
}
