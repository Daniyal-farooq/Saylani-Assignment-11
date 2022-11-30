import React from 'react'
import BUTTON from '../BUTTON/button'
import styles from '../../styles/todo.module.css'
import {useState} from 'react'




const todo = () => {

    const [task,setTask] = useState<string[]>(["A sample task..."])
    console.log(task);

    const [ne , setNe] = useState<string>()

    const [edit , setEdit] = useState<string>()

    
    
    const adder = (e) =>{
        setTask([...task,ne])
        console.log(e.target.value);
    }
    
    const kuch = (e) => {
        setNe(e.target.value);
    }

  

    const deleter = (display:string)=>{
        
        let mini = task.filter( (Taske,i) =>{
            if ( Taske != display ){
                console.log(Taske);
                
                return Taske
            }
        } );
        setTask(mini);   
    } 
    const edithandler = (index:number)=>{
        let edited = task.map((todo,i)=>{
            if ( i == index ){
                return edit
            }
            else{
                return todo
            }

        })
        setTask(edited)

           
    }
    const editor = (e)=>{
        setEdit(e.target.value)
    }

  return (
    <>  
        <div className={`${styles.addtask} container`}><BUTTON  buttonTitle="ADD TASK" handler={adder} />
        <input type="text"  onChange={kuch}/></div>
        
        {
        task.map((display,index)=>{
            return(
                 
                //                           <BUTTON buttonTitle='REMOVE' handler={deleter(display)} />
            <>
            <div className={`container ${styles.cont}`}>
                <div className="row"><div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"></div></div>
                <div className="row">
                    <div className={`col-4 ${styles.left}`}><p className={styles.task}>{display}</p></div><div className="col-1"><button className={styles.btn} onClick={ ()=>deleter(display)}>REMOVE</button></div>
                    <div className="col-1"></div>
                    <div className={`col-4 ${styles.right}`}><input className={styles.inpt} size="7" type="text" placeholder="Edit the task"  onChange={editor}></input></div><div className="col-1"><button className={styles.btn} onClick={()=>edithandler(index)}>EDIT</button></div>
                </div>
                <div className="row"></div>
            </div>
            <div></div>
           
                </>
            )
        })
        }

    </>
  )
}

export default todo