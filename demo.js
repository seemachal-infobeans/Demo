//by Class Name
const item = document.getElementsByClassName("list-group-item");
for (let i = 0; i < item.length; i++) {
    item[i].style.fontWeight = "bold";
  }
item[2].style.backgroundColor ="green";
item[2].textContent ="item changed";


//By Tag Name


const li =  document.getElementsByTagName('li');

   li[4].style.fontWeight="bold";

   //By querySelector

   const list = document.querySelectorAll('li');
   list[1].style.color="green";
   list[2].style.visibility="hidden"

   for (let j = 0; j < item.length; j++) {
    if(j%2!=0){
      list[j].style.backgroundColor = "lightgreen";
    }
    
  }

  //Creating Nodes and Modifying Dom

  var itemList = document.querySelector('#items');
  //parentNode
  //itemList.parentNode.style.backgroundColor="#f4f4f4";
   //parentElement
   itemList.parentElement.style.backgroundColor="#f4f4f4"

   //childNode
   itemList.children[0].style.backgroundColor='blue';

   //FirstElementChild
   itemList.firstElementChild.textContent="Hello first";

   //lastelementchild

   itemList.lastElementChild.textContent="hello last";

   //nextElementSibling
   itemList.nextElementSibling.style.fontWeight="bold";

   //previousElementSibling
   itemList.previousElementSibling.style.color="lightblue";

   //crateElement

   //create div

   var newdiv = document.createElement('div');
   //add class
   newdiv.className="hello";

   //add id
   newdiv.id = "hello1";

   //add attribute
   newdiv.setAttribute("title","hello div");

   //create text node
   var newDivtext = document.createTextNode("hello world");

   //add to div
   newdiv.appendChild(newDivtext);
var container = document.querySelector('header .container')
   var h1 = document.querySelector('header h1');

   container.insertBefore(newdiv,h1)

   

 

 
