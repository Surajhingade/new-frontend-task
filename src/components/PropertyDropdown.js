import React,{useState,useEffect,useContext} from 'react';
import {Menu} from '@headlessui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
 
import {HouseContext} from './HouseContext';

const PropertyDropdown = () => {
  const {property,setProperty,properties} = useContext(HouseContext);
  // console.log(property);
  const [isOpen,setIsOpen] = useState(false);
  
    return <Menu as="div" className="dropdown relative" >
      <Menu.Button onClick={()=>setIsOpen(!isOpen)}   className="dropdown-btn w-full  text-left" >
       
        <div >
          <div className="text-[13px] " >Select your property  </div> 
          <div className="text-[15px]  font-medium leading-tight" >{property}   </div>   
          </div>
          {isOpen?(
              <KeyboardArrowUpIcon className="dropdown-icon-secondary"/>
            ): (
              <KeyboardArrowDownIcon className="dropdown-icon-secondary" />
            )}       
       
      </Menu.Button>
      <Menu.Items className="dropdown-menu" >
        {properties.map((property,index)=>{
          return(
            <Menu.Item onClick={()=>setProperty(property)} className="cursor-pointer hover:text-voilet-700 transition" as="li" key={index} >
            {property}  
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>;
};

export default PropertyDropdown;
