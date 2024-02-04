
const sayDate = function (str) {
    console.log(str, Date.now());
}

const intervalId = setInterval(sayDate, 100, "Hi");  // in setInterval we can use third parameter (HI)


clearInterval(intervalId);

