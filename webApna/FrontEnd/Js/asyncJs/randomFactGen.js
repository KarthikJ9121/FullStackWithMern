let buttonEle = document.querySelector("button");
let paraEle = document.querySelector("p");

buttonEle.addEventListener("click", function()
{
    let url = "https://catfact.ninja/fact"; 
    async function getFacts()
    {
       try
       {
            let res = await axios.get(url);
            console.log(res.data.fact);
            paraEle.textContent = res.data.fact;    
       }
       catch(err)
       {
            console.log("Error : " + err);
       }
    }
     getFacts();

});