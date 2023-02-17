// var input = document.querySelectorAll('.task_input');
// var tasks_section = document.querySelectorAll('.appeded');
// var button = document.querySelectorAll('.btn');
// var live = document.querySelectorAll('#vehicle1');
// var live2 = document.querySelectorAll('.fa-times-hexagon');

// function inner_task(value,parent_section){
//     var element = document.createElement('p');
//     var elemt_value = document.createTextNode(value);
//     element.append(elemt_value);
//     parent_section.append(element);
// }

// button[0].addEventListener('click',function(){
//     inner_task(input[0].value,tasks_section[0]);
// })   

// live[0].addEventListener('click',function(){
//     tasks_section[0].classList.toggle('show');
// })   

// live2[0].addEventListener('click',function(){
//     var div = this.parentNode;
//    div.style.display = "none";
// })   
 

var input = document.querySelectorAll('.task_input');
var button = document.querySelectorAll('.btn');
var task_body = document.querySelectorAll('.appeded')
var checked = document.querySelectorAll('.check_mark')
var deleted = document.querySelectorAll('.delete')

button[0].addEventListener('click',function(){

   var div =document.createElement('div')
   div.classList="section"
 

   var checked = document.createElement('input')
   checked.classList="check_mark"
   checked.type="checkbox"
   div.appendChild(checked)

   var text =document.createTextNode(input[0].value)
   var element = document.createElement('span');
   element.classList="text"
   element.append(text);
   div.appendChild(element)

   var btn_delete = document.createElement('button')
   btn_delete.classList = "delete"
   btn_delete.append("x")
   div.appendChild(btn_delete)

   task_body[0].appendChild(div)

   
var deleted = document.querySelectorAll('.delete');

for( var i=0 ; i<deleted.length ;i++){
   deleted[i].onclick = function(){
       this.parentNode.remove();
}
}
if(task_body[0].children.length===0){
   clear[0].style.display='none'
}
else{
   clear[0].style.display='block'
}
})

task_body[0].addEventListener('click',function(event){
   if(event.target.type==='checkbox'){
        event.target.parentElement.classList.toggle('checked')
   }
})
if(task_body[0].children.length===0){
   clear[0].style.display='none'
}


clear[0].addEventListener('click',function(){

   for(var x=0;x<task_body[0].children.length;x++){
       task_body[0].children[x].style.display='none'
   }
   
    clear[0].style.display='none'
})
