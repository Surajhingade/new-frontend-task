import React,{useState,useEffect,useContext} from 'react';
import {Menu} from '@headlessui/react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {HouseContext} from './HouseContext';


const CountryDropdown = () => {
  const {country,setCountry,countries} = useContext(HouseContext);
// console.log(countries);
const [isOpen,setIsOpen] = useState(false);

  return <Menu as="div" className="dropdown relative" >
    <Menu.Button onClick={()=>setIsOpen(!isOpen)}   className="dropdown-btn w-full  text-left" >
      {/* <LocationOnIcon className="dropdown-icon-primary" /> */}
      <div  >
        <div className="text-[13px] " >Select your location</div> 
        <div className="text-[15px]  font-medium leading-tight" >{country}   </div>   
        </div>
        {isOpen?(
            <KeyboardArrowUpIcon className="dropdown-icon-secondary"/>
          ): (
            <KeyboardArrowDownIcon className="dropdown-icon-secondary" />
          )}       
      
    </Menu.Button>
    <Menu.Items className="dropdown-menu" >
      {countries.map((country,index)=>{
        return(
          <Menu.Item onClick={()=>setCountry(country)} className="cursor-pointer hover:text-voilet-700 transition" as="li" key={index} >
          {country}  
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default CountryDropdown;
