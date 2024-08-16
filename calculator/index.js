const display=document.getElementById('display')
const num1=document.getElementById('num1')
const num2=document.getElementById('num2')
const add=document.getElementById('add')
const sub=document.getElementById('sub')
const mul=document.getElementById('mul')
const div=document.getElementById('div')
const mod=document.getElementById('mod')
const submit=document.getElementById('submit')

let calculate={
    
    "add":function(num1,num2){
        display.innerText=`addition is ${Number(num1)+Number(num2)}`;
    },
    "sub":function(num1,num2){
        display.innerText=`substract is ${Number(num1)-Number(num2)}`;
    },
    "mul":function(num1,num2){
        display.innerText=`multiplication is ${Number(num1)*Number(num2)}`;
    },
    "div":function(num1,num2){
        display.innerText=`division is ${Number(num1)/Number(num2)}`;
    },
    "mod":function(num1,num2){
        display.innerText=`modules is ${Number(num1)%Number(num2)}`;
    }
    
}
add.addEventListener('click',()=>calculate.add(num1.value,num2.value));
sub.addEventListener('click',()=>calculate.sub(num1.value,num2.value));
mul.addEventListener('click',()=>calculate.mul(num1.value,num2.value));
div.addEventListener('click',()=>calculate.div(num1.value,num2.value));
mod.addEventListener('click',()=>calculate.mod(num1.value,num2.value));