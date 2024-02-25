class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText){
        if (taskText){
            //clonar template
            
            let template = document.querySelector('.task').cloneNode(true);

            // remover class hide
            template.classList.remove('hide');

            //manipula texto
            let templateText = template.querySelector('.task-title');
            templateText.textContent = taskText;

            let list = document.querySelector('#tasks-container');

            //inserir lista
            list.appendChild(template);

            //adiciona evento as tasks
            this.AddEvents();
            this.checkTasks('add');

        }
    }

    removeTask(task){
        let parentEl = task.parentElement;

        parentEl.remove();

        this.checkTasks('remove');
    }
    
    completeTask(task){

        task.classList.add('done');
        this.checkTasks('add');
    }
    
    
    AddEvents(){

        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length -1];
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length -1];
        
        
        removeBtn.addEventListener('click', function(){
            todo.removeTask(this);
        });

        // adicionar evento de completar tarefa
        
        doneBtn.addEventListener('click', function(){
            todo.completeTask(this);
        });

    }

    checkTasks(command){

        let msg = document.querySelector('#empty-tasks');

        //logica de add ou remv tasks
        if(command === 'add'){
            this.totalTasks += 1;
        } else if (command === 'remove'){
            this.totalTasks -= 1;
        }

        // checa qtd tsks / add ou remv

        if(this.totalTasks == 1) {
            msg.classList.remove('hide');
        } else {
            msg.classList.add('hide'); 
        }

    }

}

let todo = new Todo();

// eventos

let addBtn = document.querySelector('#add');

addBtn.addEventListener('click',function(e){

    e.preventDefault();

    let taskText = document.querySelector('#task');

    todo.addTask(taskText.value);

    //limpa campo de texto

    taskText.value = '';

});