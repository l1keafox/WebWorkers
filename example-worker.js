self.onmessage = (msg) =>{
  console.log(msg.data);
  self.postMessage({text:"hellow from worker!"})
}