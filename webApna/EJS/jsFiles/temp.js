let btns = document.querySelectorAll("button");        //belongs to instaPage.ejs

for(let btn of btns)
{
    btn.addEventListener("click", function(){
        console.log("Button was Clicked");
        this.style.backgroundColor("orange")
    });
}