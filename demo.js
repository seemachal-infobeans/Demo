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
 

 
