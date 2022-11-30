import React from 'react'
import styles from '../../styles/footer.module.css'


const footer = () => {
  return (
    <>
        <div className={styles.divider}>
        <hr/>
        <div className="container">
            <div className="row">
               <div className="col-4"></div>
               <div className="col-lg-4">
                <h4>Description:</h4>
                <p>Write the task in the input filed and click the buttton. <br/>The task will appear permanently. <br/>Not only this but you also have the option to edit your task using the edit field. All you have to do is re-write the task and press the "EDIT button.<br/>YOu can also remove the task on completion or any reasons by clicking the "REMOVE" button.</p>
               </div>
               <div className="col-4"></div>
               <hr/>
               <h6 align="center">@2022 Daniyal-Apps</h6>
               <hr/>
            </div>
        </div>
        </div>
    </>
  )
}

export default footer