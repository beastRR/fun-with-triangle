const input=document.querySelectorAll(".inp");
console.log(input[1].value);
function isTriangle(){
    const sumOfAngles=calculateSumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value));
    console.log(sumOfAngles);
    if(sumOfAngles===180)
    {console.log("Its a triangle");
    document.querySelector("#output").innerHTML="its  a triangle..";
    }
    else
    {
    console.log("Not a triangle.");
    document.querySelector("#output").innerHTML="oops not a triangle..";}

}
subBtn.addEventListener("click",isTriangle);

function calculateSumOfAngles(a,b,c){
    
    return a+b+c;
}