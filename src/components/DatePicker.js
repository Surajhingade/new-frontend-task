import React,{useState,useEffect,useContext} from 'react';
import {Menu} from '@headlessui/react'
 
import { HouseContext } from './HouseContext';

const DatePicker = () => {

  const {date,setDate} = useContext(HouseContext);

  
    

 return <Menu as="div" className="dropdown relative" >
       
       
        <div  >
          {/* <div className="text-[13px] " >Choose your date </div>  */}
          <div className="text-[15px]  font-medium leading-tight" ></div>  
          <input type="date"  onChange={e=>setDate(e.target.value)} /> 
          </div>
          
      
    </Menu>;
}

export default DatePicker