
const clearTime = setTimeout(() => 
{
    sayAtanu();
    changeText();
}, 2000);



const sayAtanu = function() 
{
    console.log("Atanu");
}


const changeText = function ()
{
    document.querySelector('h1').innerHTML = `This is the code for heading chnage`;

}


document.querySelector("#stop").addEventListener('click',function() {
    clearTimeout(clearTime)
    alert("Stop")
})