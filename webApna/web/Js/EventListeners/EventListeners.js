let h1 = document.querySelector("h1");
let samplePara = document.getElementById('samplePara');
let para2 = document.getElementById("para2");
let btn = document.getElementById("btn");
let sampleInput = document.getElementById("sampleInput");

let formDiv = document.getElementById('formDiv');
let userName = document.getElementById("username");
let pass = document.getElementById("pass");
let formBtn = document.getElementById("formBtn");

let p = document.getElementById('inputPara');
let TextGenEle = document.getElementById('textGenInput');

h1.addEventListener("mouseenter", function()
{
    h1.style.color = "orange";
});

btn.addEventListener("click", function()
{
    if(sampleInput.value == "")
    {
        samplePara.textContent = "Mandatory*";
        samplePara.style.color = "red";
    }
    else
        samplePara.textContent = "";
});

formBtn.addEventListener("click", function(event)
{
    console.log("submitted");
    event.preventDefault();
    let userNameEle = userName.value;
    let userPass = pass.value;

    if(userNameEle == "" || userPass == "")
    {
       para2.textContent = "Mandatory*";
       para2.style.color = "red";
    }
   else
    {
        para2.textContent = "";
        alert(`Hey ${userNameEle} Your Password is ${userPass}`);
    }
});

TextGenEle.addEventListener("input", function()
{
    p.textContent = TextGenEle.value;
    p.style.backgroundColor = "black";
    p.style.color = "white";
});