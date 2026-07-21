let input=document.getElementById("inp");
let length_result=document.getElementById("length-result");
let volume_result=document.getElementById("volume-result");
let mass_result=document.getElementById("mass-result");
let button=document.querySelector(".btn");
let meter=3.281;
let liter=0.264;
let kg=2.204;
button.addEventListener("click",function()
{
    let a=Number(input.value);
    let r1=a*meter;
    let r2=a*liter;
    let r3=a*kg;
    length_result.innerHTML=`${a} meters = ${r1.toFixed(3)}`;
    volume_result.innerHTML=`${a} liters = ${r2.toFixed(3)}`;
    mass_result.innerHTML=`${a} kilos = ${r3.toFixed(3)}`;
});
