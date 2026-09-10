import { useState } from "react";

export function MainContent({Task,onAddTask,onToggleTask,isLevelUp}){
    const [inputText,setInputText]=useState("");
    const [selectRank,setSelectRank]=useState("C-Rank");
    const HandleAddClick=()=>{
        if (Task.length >= 6) {
            alert("Quest log full! Complete or claim existing quests before adding more.");
            return; // Stops the function from running and adding a new task
        }
        onAddTask(inputText,selectRank);
        setInputText("");
    }
    return(
        <div className="main-content">
            <div className="task-input-row">
                <input type="text" 
                    placeholder="Enter your task..."
                    value={inputText}
                    onChange={(e)=>setInputText(e.target.value)}
                    className="input-task"
                />
                <select
                    value={selectRank}
                    onChange={(e)=>setSelectRank(e.target.value)}
                    className="rank-picker"                    
                >
                    <option value="C-Rank">C-Rank</option>
                    <option value="B-Rank">B-Rank</option>
                    <option value="A-Rank">A-Rank</option>
                    <option value="S-Rank">S-Rank</option>
                </select>
                <button onClick={HandleAddClick} className="quest-button">
                    Add Quest
                </button>
            </div>
            <div className="task-input-container">
                    {isLevelUp && (
                        <div className="level-up-banner">
                            <h2>🏆 LEVEL UP! 🏆</h2>
                            <p>Rewards claimed successfully. Level Increased!</p>
                        </div>
                    )}
                    {Task.map((task,index)=>(
                        <div key={task.id} className="task-input-display">
                            <span className="task-index">{index+1}.  </span>
                            <span className={`task ${task.completed ? 'completed' : ''}`}>{task.text} </span>
                            <span className="task-rank-badge">{task.rank}  </span>
                            <input type="checkbox" onChange={()=>onToggleTask(task.id)} className="input-checkbox"></input>
                        </div>
                    ))}
            </div>
        </div>
    );
}