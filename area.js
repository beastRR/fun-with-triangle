const input=document.querySelectorAll(".inp");   //querySelectorAll return an array
subBtn.addEventListener("click",calculateArea);
function calculateArea(){
    var area=1/2*Number(input[0].value)*Number(input[1].value);
    //var hyp=Math.sqrt((l1*l1)+(l2*l2));
    // console.log(hyp);
    // console.log(input[1].value);
    document.querySelector("#output").innerHTML=`Area is ${area} unitsq`;
}
//querySelectorAll mein always use .value to access the value of particular html element