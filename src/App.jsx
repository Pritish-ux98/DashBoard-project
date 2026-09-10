import './App.css'
import { useState } from 'react'; 
import { MainContent } from './component/MainContent';
import {Header} from './component/Header';
import {Footer} from './component/Footer';
import './index.css'


function App() {

  const [Exp,setExp]=useState(0);
  const [Task,setTask]=useState([]);
  const [Level,setLevel]=useState(1);
  const [isLevelUp,setLevelUp]=useState(false);
  const [TaskCompleted,setTaskCompleted]=useState(0);
  const [TaskLeft,setTaskLeft]=useState(0);
  const maxExp=100;

  const addTask=(TaskText,TaskRank)=>{
      const NewTask={
        text:TaskText,
        rank:TaskRank,
        id:crypto.randomUUID(),
        completed:false,
        claim:false,
      };
      setTask([...Task,NewTask]);
      setTaskLeft(prevCount=>prevCount+1);
  }

  const onToggleTask=(id)=>{
      setTask(Task.map(task=>task.id===id?{...task,completed:!task.comleted}:task

      ));
  }

  const ClaimEveryThing = () => {
    
    // 1. Handle clearing out the tasks and counting finished ones
    const completedCount = Task.filter(task => task.completed === true).length;
    
    if (completedCount > 0) {
      setTaskCompleted(prevCount => prevCount + completedCount);
      setTask(Task.filter(task => task.completed === false));

    // 2. Handle EXP points and Level Up calculations cleanly
    const GainEXP = completedCount * 16.6666666667;
    const TotalExp= GainEXP+Exp;
    if (TotalExp >= maxExp) {
        // 👑 This will now fire exactly ONCE!
        setLevel(prevLevel => prevLevel + 1); 
        setExp(0); // Wipes it clean to 0% like you wanted!
      } else {
        setExp(TotalExp);
      }
    }
    if (Task.length === 6 && Task.every(task => task.completed)) {
      setLevelUp(true); // 🚀 Triggers the display banner!
    }
    setTimeout(()=>{
      setLevelUp(false);
    },4000)
  };
  
  return (
    <div className="dashboard-container">
    <Header Exp={Exp} Level={Level} maxExp={maxExp}/>
    <MainContent Task={Task} onAddTask={addTask} onToggleTask={onToggleTask} isLevelUp={isLevelUp}/>
    <Footer Task={Task}  TaskCompleted={TaskCompleted} TaskLeft={TaskLeft-TaskCompleted} ClaimEveryThing={ClaimEveryThing}/>
    </div>

  );
}

export default App
