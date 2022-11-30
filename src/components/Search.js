import React,{useContext} from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import {HouseContext} from './HouseContext';
// import {RiSearch2line} from 'react-icons/ri'
import DatePicker from "./DatePicker";


const Search = () => {

  const {handleClick} = useContext(HouseContext);
  // console.log(houses);

  return (
  <>

    <div className=" px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-2    " >
    <div>
      <h1 className="text-2xl font-bold "  >Search Property To - Rent</h1>
    </div>
    <div>
      <input style={{textAlign:"center",border:"none",outline:'none',borderRadius:"5px"}} type="text" placeholder="Search property" />
    </div>
    </div>



<div className="px-[20px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-2 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur  " >

<div className=" pr-6 border-r-2 text-start">
  <span className="text-gray text-xs  " >Location</span>
  <CountryDropdown /> 
</div>
<div className=" pr-6 border-r-2 text-start" >
  <span className="text-gray text-xs" >When</span>
  <DatePicker />
</div>
<div className=" pr-6 border-r-2 text-start">
  <span className="text-gray text-xs" >Price</span>
  <PriceRangeDropdown /> 
</div>
<div className=" pr-6 border-r-2 text-start" >
  <span className="text-gray text-xs" >Property type</span>
  <PropertyDropdown /> 
</div>

<button  onClick={()=>handleClick()} className="  bg-violet-700 hover:bg-voilet-800 text-white px-4 py-0   rounded-lg transition" >Search</button>
  </div>
  </>
  )
};

export default Search;
