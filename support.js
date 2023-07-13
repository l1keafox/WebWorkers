
let i = 0;
function askGoogle()  {
    setTimeout(() => {
      console.log("Done with google " + i);
      i++;
    }, getRandomInt(0, 500));
}

    askGoogle();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Child Process " + process.argv[2] + " executed.DD" );