import React,{useState} from 'react'
function Todo(){
    const [tasks,setTasks]=useState(["leran React","Scroll Instagram","Panorama"]);
    const [newTask,setNewTask]=useState("");
    function handleInputChange(event){
        setNewTask(event.target.value);
        

    }
    function addTask(){
        setTasks(t=>[...t,newTask]);
        setNewTask("");

    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=>i!=index));

    }
    function moveTaskUp(index){
        if (index>0){
        const UpdatedTasks=[...tasks];
        [UpdatedTasks[index],UpdatedTasks[index-1]]=[UpdatedTasks[index-1],UpdatedTasks[index]];
        setTasks(UpdatedTasks);
        }
    }
    function moveTaskDown(index){
        if (index<tasks.length-1){
            const UpdatedTasks=[...tasks];
            [UpdatedTasks[index+1],UpdatedTasks
        [index]]=[UpdatedTasks[index],UpdatedTasks[index+1]];
        setTasks(UpdatedTasks);

        }

    }
    return (<>
    <div className='to-do-list'>
        <h2 className=''>To-Do List</h2>
        <div>
            <input type="text" value={newTask} placeholder='enter e new task' onChange={handleInputChange} />
            <button className='Add-Task' onClick={addTask}>ADD Task</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
                <button className='move' onClick={()=>moveTaskUp(index)}>👆</button>
                <button className='move' onClick={()=>moveTaskDown(index)}>👎</button>
            </li>)}
        </ol>

    </div>
    
    
    
           </>)
}


export default Todo