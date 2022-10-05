const input=document.querySelectorAll(".inp");   //querySelectorAll return an array
subBtn.addEventListener("click",calculateHypotenuse);
function calculateHypotenuse(l1,l2){
    var hyp=Math.sqrt((Number(input[0].value)*Number(input[0].value))+(Number(input[1].value)*Number(input[1].value)));
    //var hyp=Math.sqrt((l1*l1)+(l2*l2));
    console.log(hyp);
    console.log(input[1].value);
    document.querySelector("#output").innerHTML=`Hypotenuse is ${hyp}`;
}
//querySelectorAll mein always use .value to access the value of particular html element