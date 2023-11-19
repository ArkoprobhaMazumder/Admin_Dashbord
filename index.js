
const btn=document.getElementById('btn');
const sideTop=document.getElementById('side-top');
const sideBar=document.getElementById('sideBar');
const Table=document.getElementById('main-table');
const sales=document.getElementById('sales');
const expences=document.getElementById('expences');
const income=document.getElementById('income');
const Update=document.getElementById('update');
const item1=document.getElementById('item1');
const item2=document.getElementById('item2');
const item3=document.getElementById('item3');
const Date2=document.getElementById('date');
const Date1=document.getElementById('date-Type');
const ancor=document.getElementById('ancor');

const modeChange= ()=>{
   if(btn.innerText === "Enable Darkmode"){
    btn.innerText="Lightmode"
    btn.style.backgroundColor='white';
    document.body.style.backgroundColor="black"
    document.body.style.color="grey"
    sideTop.style.background="black"
    sideTop.style.color="white"
    sideBar.style.background='black';
    Table.style.background='black';
    sales.style.background='rgb(55, 27, 27)';
    expences.style.background='rgb(59, 59, 26)';
    income.style.background='rgb(11, 9, 58)';
    Update.style.background='black';
    item1.style.background='black';
    item2.style.background='black';
    item3.style.background='black';
    Date2.style.background='gray';
    Date1.style.color='white';
    ancor.style.color='white';
   }
   else{
    btn.innerText="Enable Darkmode";
    btn.style.backgroundColor='blue';
    document.body.style.backgroundColor="white";
    document.body.style.color="black"
    Table.style.background='whitesmoke';
    income.style.background='whitesmoke';
    sideTop.style.background="whitesmoke"
    sideTop.style.color="black"
    sideBar.style.background='whitesmoke';
    sales.style.background='whitesmoke';
    expences.style.background='whitesmoke';
    Update.style.background='whitesmoke';
    item1.style.background='whitesmoke';
    item2.style.background='whitesmoke';
    item3.style.background='whitesmoke';
    Date2.style.background='whitesmoke';
    Date1.style.color='black';
    ancor.style.color='black';
   }
}