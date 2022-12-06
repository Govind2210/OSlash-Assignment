import './App.css';
import { createContext, useEffect, useState } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {HiShare} from "react-icons/hi"
import Search from './Components/Mysearch';
import Input from './Components/Myinput';
export const Context = createContext();

function App() {
  const [myuser,setMyuser] = useState({});
  const [set,setSet] = useState(new Set());
  const [arr,setArr] = useState([]);
  const [display,setDisplay] = useState("none");
  useEffect(()=>{
    
      if(set.has(myuser.name)||!myuser.name) return;
      set.add(myuser.name);
      setArr([...arr,myuser]);
  
  },[myuser])
  
  return (
    <>
    <Context.Provider value={{myuser,setMyuser,arr}}>
    <div className="Myapp">
      <h2>Click on Share Button</h2>
      <button onClick={()=>setDisplay("block")} id='box1'>Share &nbsp;<HiShare/></button>
      <Routes>
      <Route path='/' element={<Input display={display}/>}/>
      <Route path='/add' element={<Search/>} />
      </Routes>
    </div>
      </Context.Provider>
      </>
  );
}

export default App;
