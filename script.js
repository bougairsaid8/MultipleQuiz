let num1=Math.round(Math.random()*10)
let num2=Math.round(Math.random()*10)

let h2=document.getElementById('qestion');
h2.textContent=`What is ${num1} multiply by ${num2} ?`;

let score=document.getElementById('score');


let btn=document.getElementById('submit');
btn.addEventListener('click',()=>{
    
    let point=Number(score.textContent);

    let input=Number(document.getElementById('input').value)||0;
    (num1*num2==input)?point++:point--;
    score.textContent=point

    num1=Math.round(Math.random()*10)
    num2=Math.round(Math.random()*10)
    h2.textContent=`What is ${num1} multiply by ${num2} ?`;
    document.getElementById('input').value=""
})
