let btns = document.querySelectorAll("button");

for(let btn of btns)
{
    btn.addEventListener("click", function(){
        console.log("Button was Clicked");
    });
}