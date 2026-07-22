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
    length_result.innerHTML=`${a} meters = ${(a * meter).toFixed(3)} feet | ${a} feet =${(a / meter).toFixed(3)} meters`;;
    volume_result.innerHTML=`${a} liters = ${(a * liter).toFixed(3)} gallons | ${a} gallons =${(a / liter).toFixed(3)} liters`;
    mass_result.innerHTML=`${a} kilos = ${(a * kg).toFixed(3)} pounds | ${a} pounds = ${(a / kg).toFixed(3)} kilos`;
});
