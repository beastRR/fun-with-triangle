const response=document.querySelector("#form");
console.log(response);
const correctAnswer=['90','right angled','3'];
function calculateScore()
{
    const data=new FormData(response);
    var index=0;
    var score=0;
    for(let x of data.values()){
    //var res=x;
        //console.log(x);
    if(x===correctAnswer[index]){
    score++;
    console.log(score);     
    }
    
     index++;
    
    }

    
    document.querySelector('#output').innerHTML=`score: ${score}/3`;
}
subBtn.addEventListener("click", calculateScore);