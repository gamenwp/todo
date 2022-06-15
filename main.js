let taskAdd = document.querySelector('.addTasks');
let currentTasks = [];
let Tasks = document.querySelector('.tasksInner');



taskAdd.addEventListener("keypress" ,function(e){
if (event.key === "Enter"){

    let taskAddText = document.querySelector('.addTasks').value;
    let newTask = `<div class="taskItem">
    <input class="chekbox" type="checkbox" name="" id="">
    <label class="labelTask">${taskAddText}</label>
    <span class="deleteTask"></span>
    </div>`;
currentTasks.push(newTask);
Tasks.innerHTML = currentTasks.join('');



}


});


    const observer = new MutationObserver(mutations =>{

    let currentTaskItem = document.querySelectorAll('.taskItem');
    let arrayElem = [];
    let amountCheked = document.querySelector('.amount');
    for (var i = 0 ;i < currentTaskItem.length ; i++){
    arrayElem.push( currentTaskItem[i]);
    currentTaskItem[i].addEventListener('click',function(e){

    if(e.target.className == 'deleteTask') {
 
        currentTasks.splice(arrayElem.indexOf(e.target.parentElement),1);
        Tasks.innerHTML = currentTasks.join('');
      
        }


        else if ( e.target.className == 'chekbox' ){
         
            let currentsChekboxes = document.querySelectorAll('.chekbox:checked').length;
            
            amountCheked.innerHTML = currentsChekboxes +  'items left';
            

        }
   
    });


        }
             });

observer.observe(Tasks ,{
childList:true
});





