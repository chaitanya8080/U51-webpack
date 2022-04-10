import "./index.css";
// import "file-loader";
import logo from  "./totoimg.jpg";
// const Root = document.getElementById("root");


const logo_div = document.getElementById("logoid");


const image = document.createElement("img");
image.src = logo;

logo_div.append(image);

var count =1;

const Btn = document.createElement("button");
Btn.setAttribute("class","button");
Btn.innerText = "click";

Btn.addEventListener("click",function (){
     Listadd()
})




// const data_table = document.createElement("div");

let table = document.createElement('table');
table.setAttribute("class","border");

let tbody = document.createElement('tbody');
let thead = document.createElement('thead');
 

// table.appendChild(tbody);

// // Adding the entire table to the body tag
// document.getElementById('root').appendChild(table,Btn);
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Todo";


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
thead.appendChild(row_1);
table.append(thead);
document.getElementById('root').append(table,Btn);

function Listadd(){
var inputed = document.getElementById("take_input").value;
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = `${count++}`;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = `${inputed}`;
// let row_2_data_3 = document.createElement('td');
// row_2_data_3.innerHTML = "";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
// row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);

table.append(tbody);
document.getElementById('root').append(table);
}