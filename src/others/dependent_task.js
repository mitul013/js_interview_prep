// in everyTask, we should have isCompleted, subscribedList
// 1. iterate deps and add callback when that dep executed
// 2. when callback call, we need to check every dep are completed or not, and if completed then execute job
// 3. in callback, we call job and in job method we need to pass done() method which has logic to update isCompleted and call all subscribedList callbacks

class Task {
  constructor(dependencies, name, job) {
    this.dependencies = dependencies;
    this.job = job;
    this.name = name;
    this.isCompleted = false;
    this.subscribedList = [];
    this.processTasks();
  }
  processTasks() {
    if (this.dependencies == null || this.dependencies.length == 0) {
      this.job(this.done.bind(this));
      return;
    }
    this.dependencies.forEach((dep) => {
      console.log("hello");
      dep?.subscribedList.push(this.callback.bind(this));
    });
  }
  callback() {
    const arr = this.dependencies.filter((dep) => !dep.isCompleted);
    if (arr.length == 0) {
      this.job(this.done.bind(this));
    }
  }
  done() {
    this.isCompleted = true;
    console.log(this.name);
    this.subscribedList.forEach((job) => {
      job();
    });
  }
}

const processA = new Task(null, "A", (done) => {
  setTimeout(() => {
    console.log("Process A");
    done();
  }, 100);
});

const processB = new Task([processA], "B", (done) => {
  setTimeout(() => {
    console.log("Process B");
    done();
  }, 1500);
});

const processD = new Task([processA, processB], "D", (done) => {
  setTimeout(() => {
    console.log("Process D");
    done();
  }, 1000);
});

const processC = new Task(null, "c", (done) => {
  setTimeout(() => {
    console.log("Process C");
    done();
  }, 500);
});

const processE = new Task([processC, processD], "E", (done) => {
  setTimeout(() => {
    console.log("Process E");
    done();
  }, 100);
});

const createAllDoneInstance = (allDoneCallback) =>
  new Task(
    [processA, processB, processC, processD, processE],
    "All",
    allDoneCallback,
  );
createAllDoneInstance((done) => {
  console.log("All is done!");
  done();
});
