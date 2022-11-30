import React,{useState,useEffect,useContext} from 'react';
import {Menu} from '@headlessui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {HouseContext} from './HouseContext';

const PriceRangeDropdown = () => {
  const {price,setPrice} = useContext(HouseContext);
  // console.log(property);
  const [isOpen,setIsOpen] = useState(false);

  const prices = [
    {      value:"price range (any)" },
    {      value:'100000-130000'    },
    {      value:'130000-160000'    },
    {      value:'160000-190000'    },
    {      value:'190000-220000'    },
    {      value:'10000-30000'    },
    {      value:'30000-40000'    },
   
  ];
  
    return <Menu as="div" className="dropdown relative" >
      <Menu.Button onClick={()=>setIsOpen(!isOpen)}   className="dropdown-btn w-full  text-left" >
       
        <div  >
          <div className="text-[13px] " >Choose your price </div> 
          <div className="text-[15px]  font-medium leading-tight" >{price}   </div>   
          </div>
          {isOpen?(
              <KeyboardArrowUpIcon className="dropdown-icon-secondary"/>
            ): (
              <KeyboardArrowDownIcon className="dropdown-icon-secondary" />
            )}       
       
      </Menu.Button>
      <Menu.Items className="dropdown-menu" >
        {prices.map((price,index)=>{
          return(
            <Menu.Item onClick={()=>setPrice(price.value)} className="cursor-pointer hover:text-voilet-700 transition" as="li" key={index} >
            {price.value}  
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>;
};

export default PriceRangeDropdown;
