//by Class Name
// const item = document.getElementsByClassName("list-group-item");
// for (let i = 0; i < item.length; i++) {
//     item[i].style.fontWeight = "bold";
//   }
// item[2].style.backgroundColor ="green";
// item[2].textContent ="item changed";


// //By Tag Name


// const li =  document.getElementsByTagName('li');

//    li[4].style.fontWeight="bold";

//    //By querySelector

//    const list = document.querySelectorAll('li');
//    list[1].style.color="green";
//    list[2].style.visibility="hidden"

//    for (let j = 0; j < item.length; j++) {
//     if(j%2!=0){
//       list[j].style.backgroundColor = "lightgreen";
//     }
    
//   }

//   //Creating Nodes and Modifying Dom

//   var itemList = document.querySelector('#items');
//   //parentNode
//   //itemList.parentNode.style.backgroundColor="#f4f4f4";
//    //parentElement
//    itemList.parentElement.style.backgroundColor="#f4f4f4"

//    //childNode
//    itemList.children[0].style.backgroundColor='blue';

//    //FirstElementChild
//    itemList.firstElementChild.textContent="Hello first";

//    //lastelementchild

//    itemList.lastElementChild.textContent="hello last";

//    //nextElementSibling
//    itemList.nextElementSibling.style.fontWeight="bold";

//    //previousElementSibling
//    itemList.previousElementSibling.style.color="lightblue";

//    //crateElement

//    //create div

//    var newdiv = document.createElement('div');
//    //add class
//    newdiv.className="hello";

//    //add id
//    newdiv.id = "hello1";

//    //add attribute
//    newdiv.setAttribute("title","hello div");

//    //create text node
//    var newDivtext = document.createTextNode("hello world");

//    //add to div
//    newdiv.appendChild(newDivtext);
// var container = document.querySelector('header .container')
//    var h1 = document.querySelector('header h1');

//    container.insertBefore(newdiv,h1)

   

   ///functionality adding on form submit and delete button

   var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  

  //create Edit button 
  var editBtn = document.createElement("button");

  //Add classes to edit button
  editBtn.className = "btn btn-outline-dark btn-sm float-right edit";

  // Append text node
  editBtn.appendChild(document.createTextNode('+'));

  //Appemd edit button to li
  li.appendChild(editBtn)

  // Append li to list
  itemList.appendChild(li);


}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }

 

 
