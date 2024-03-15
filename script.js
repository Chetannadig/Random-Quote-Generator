const btn=document.getElementById("btn");
const output=document.querySelector(".output");

let quote=["The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.","It's not the load that breaks you down, it's the way you carry it.","By failing to prepare, you are preparing to fail.","Success is not final, failure is not fatal: It is the courage to continue that counts." ,"The way to get started is to quit talking and begin doing.","If you don't know where you are going, any road will get you there.","Quality is not an act, it is a habit.","Plans are nothing; planning is everything.","The best way to predict the future is to create it.","It does not matter how slowly you go as long as you do not stop." ];

btn.addEventListener("click",()=>{
    console.log("Clicked");
    let random=Math.floor(Math.random()*quote.length);
    output.textContent=quote[random];
});