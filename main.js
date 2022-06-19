
// переменные 
let newTasksinfo = [{
    title: '',
    compleater: false,  

}];
let [{title, compleater}] = newTasksinfo;
let clearTasks = []
let newTask = [];

const Tasks = document.querySelector('.todos_inner')
let inpTask = document.querySelector('.needs');

// Для добавления дел
inpTask.addEventListener("keypress" , function(e){
if (e.key === "Enter"){
    title = inpTask.value ;
    let template=`<div class="taskItem">
    <div class="taskCompleated">
    </div>
    <div class="taskLabel"> ${title} </div>
    <span class="removeTask"></span>
    </div>
    `;
    newTask.push(template);
    Tasks.innerHTML = newTask.join('');
}
});


// для удаления дел
const observer = new MutationObserver(mutation => {
        let taskItem = document.querySelectorAll('.taskItem');
let removeButton = document.querySelector('.removeTask');
let compleate = `<img class="accept" src="./accept.svg">`
let taskCompleated = document.querySelector('.taskCompleated')
let newArray = []


// taskItem.forEach(item => {
//     item.addEventListener('click', e => {
//     let indexCurrent = newArray.indexOf(e.target.parentElement);
// newArray.push(item);
// if (e.target = removeButton && indexCurrent !== -1){
//     newTask.splice(indexCurrent ,1);
//  Tasks.innerHTML = newTask.join('');
// }
//   })
// })

for (i = 0 ; i < taskItem.length ; i++){
newArray.push(taskItem[i]);


taskItem[i].addEventListener('click',function(e){
    let indexCurrent = newArray.indexOf(e.target.parentElement);
    if (e.target.classList.contains('removeTask') && indexCurrent !== -1){
        console.log(indexCurrent);
                //    let lucky = newTask.filter(function (item,index,array){
                //     return index !== indexCurrent;
                
                //    })
            newTask.splice(indexCurrent ,1);
            Tasks.innerHTML = newTask.join('');
    }
    else if (e.target.classList.contains('taskCompleated') && indexCurrent !== -1 && e.target.childElementCount == 0){
    
        e.target.innerHTML = compleate;
        newTask[indexCurrent] = ''
newTask[indexCurrent] = e.target.closest('.taskItem').innerHTML;
Tasks.innerHTML = ''
Tasks.innerHTML = newTask.join('');

    }
    else if(e.target.classList.contains('accept') ){
        e.target.closest(".taskCompleated").innerHTML = '';
        // newTask[indexCurrent] = e.target.closest(".taskItem").parentElement.innerHTML;
        // Tasks.innerHTML = newTask.join('');
    }


//     if (e.target == removeButton && indexCurrent !== -1 && e.target != taskCompleated){

//         console.log(indexCurrent);
//         //    let lucky = newTask.filter(function (item,index,array){
//         //     return index !== indexCurrent;
        
//         //    })
//     newTask.splice(indexCurrent ,1);
//     Tasks.innerHTML = newTask.join('');
//     }
// else if(e.target == taskCompleated && indexCurrent !== -1 && e.target != removeButton){
//     console.log('true')
// }

});



}



});

observer.observe(Tasks ,{
childList:true
});






