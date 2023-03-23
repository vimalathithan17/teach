let body=document.body;
let div1=document.getElementById("one");
let d1p=document.querySelector(".para1");
const button=document.getElementById("button");
let i=0;
button.addEventListener("click",create);
/*
let div=document.createElement('div');
div.setAttribute("id","sec");
div.innerText="poda";
div.style.backgroundColor="#555111";
div.innerHTML="<p>jelly bean</p>";
div1.append(div);
console.log(d1p);
d1p.textContent="he opp";
div1.style.backgroundColor="red";
cls[0].style.width='20rem';
cls[0].style.height='20rem';
cls[0].style.backgroundColor="blue";*/
function create()
{
    const div=document.createElement("div");
    div.textContent="hurray!";
    div.innerHTML=`<div> in div${i}</div>`;
    div.setAttribute("class",'sec');
    div.setAttribute("id",`n${i}`);
    div1.append(div);
    i++;
}
