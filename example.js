const worker = new Worker('example-worker.js')

worker.onmessage = (msg) =>{
  console.log(msg.data)
}

worker.postMessage({text:"Hellow From Main Thread!"})