function pubSub() {

    const callBackMap = {};
  
    function unSubscribe2(id) {
      delete callBackMap[id];
    }
  
    function subscribe(fn) {
      const currentTime = new Date();
      const id = currentTime.getTime();
      callBackMap[id] = fn;
      const result = {
        unSubscribe() {
          unSubscribe2(id)
        }
      }
      return result;
    }
  
    function publish() {
      const allFns = Object.values(callBackMap);
      console.log({
        allFns
      })
      allFns.forEach(fn => {
        fn()
      })
    }
  
    return {
      subscribe,
      publish
    }
  }
  
  const pubSubObj = pubSub();
  let subscriber = pubSubObj.subscribe(() => {
    console.log("123")
  });
  let subscriber2 = pubSubObj.subscribe(() => {
    console.log("456")
  });
  console.log({
    subscriber
  })
  
  pubSubObj.publish();
  subscriber.unSubscribe();
  pubSubObj.publish();
  