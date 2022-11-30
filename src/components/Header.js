import React from 'react';
import {Link} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Header = () => {
  return <header className="py-6 mb-12 border-b"  >
    <div className="container mx-auto flex justify-between items-center  " >
      <div className="flex items-center gap-6 ">
      <Link to="/" >
        {/* <img src={Logo} alt="logo" /> */}
        <h1 className="text-2xl "style={{fontWeight:"bold",fontSize:"35px"}} ><u> RealEstate</u> </h1>
        
      </Link>
      <div className="flex gap-6 ">
          <Link>Rent</Link>
          <Link>Buy</Link>
          <Link>Sell</Link>
          <Link>Manage Property <KeyboardArrowDownIcon/> </Link> 
          <Link>Resources <KeyboardArrowDownIcon/> </Link>
        </div>
        </div>
      {/* buttons */}
      <div className="flex items-center gap-6 " >
        <Link className="hover:text-violet-900 transition "  to="" >Login</Link>
        <Link className="bg-violet-700 hover:bg-voilet-800 text-white px-4 py-3 rounded-lg transition"  to="" >Sign up</Link>
      </div>
    </div>
  </header>;
};

export default Header;
