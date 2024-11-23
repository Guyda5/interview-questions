class MyPromise {
  constructor(handler) {
    this.status = "pending";
    this.value = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      }
    };

    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
        this.onRejectedCallbacks.forEach((fn) => fn(value));
      }
    };

    try {
      handler(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "pending") {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    } else if (this.status === "rejected") {
      onRejected(this.value);
    }
  }
  catch(onRejected) {
    if (this.status === "pending") {
      this.onRejectedCallbacks.push(onRejected);
    }
    if (this.status === "rejected") {
      onRejected(this.value);
    }
  }
}

const myFirstPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected!");
  }, 2000);
});

myFirstPromise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
