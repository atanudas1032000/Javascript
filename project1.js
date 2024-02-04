//generate random color

const randomColor =  function ()
{
    const hex = "123456789ABCDEF"; //16
    let color = '#';

    for(let i = 0; i < 6; i++)  // 0 - 5 value
    {
        color += hex[(Math.floor(Math.random() * 16))]
    }

    return color;
}

// const randomValue = (Math.floor(Math.random() * 16));
// console.log(randomColor());


let intervalId;    //global scope

const startChangingColor = function()
{
    if(!intervalId)
    {
        intervalId = setInterval(changeBgColor, 500);
    }

    function changeBgColor()
    {
        document.body.style.backgroundColor = randomColor();
    }
   
}

const stopChangingColor = function()
{
    clearInterval(intervalId);
    intervalId = null;
}


document.querySelector("#stop").addEventListener('click',stopChangingColor)


document.querySelector("#start").addEventListener('click',startChangingColor)