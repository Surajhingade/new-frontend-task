import React,{useState,useEffect,useContext,createContext} from 'react';
import {housesData} from '../data'


export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {

  const [houses,setHouses] = useState(housesData);
  const [country,setCountry] = useState('Location (any)');
  const [countries,setCountries] = useState([]);
  const [property,setProperty] = useState('Property type(any)');
  const [properties,setProperties] = useState([]);
  const [price,setPrice] = useState('Price range(any)');
  const [loading,setLoading] = useState(false);
  const [date,setDate] = useState('01-01-2022');


  // import country all
  useEffect(()=>{
    const allCountries = houses.map((house)=>{
      return house.country       
   
    });
    const uniqueCountries = ['Location (any)',...new Set(allCountries)]
  
    setCountries(uniqueCountries);

  },[])

  useEffect(()=>{
    const allProperties = houses.map((house)=>{
      return house.type;      
   
    });
    const uniqueProperties = ['Property (any)',...new Set(allProperties)]
    // console.log(uniqueProperties)
    setProperties(uniqueProperties);

  },[]);


 const handleClick = () =>{

  setLoading(true);
  
  const isDefault = (str)=>{
    return str.split(' ').includes('(any)');
  }
  
  // console.log(isDefault(country));
  
  const minPrice = parseInt(price.split(' ')[0]);
  const maxPrice = parseInt(price.split('-')[1]);

  const month = parseInt(date.split('-')[1]);
  

  const newHouses = housesData.filter((house)=>{
    
    const housePrice = parseInt(house.price);
    // console.log(house);

   

    if(house.country === country && house.type === property && housePrice >= minPrice && housePrice  <= maxPrice  ){
      return house;
    }

    if(isDefault(country) && isDefault(property) && isDefault(price)){
      return house;
    }

    if(!isDefault(country) && isDefault(property) && isDefault(price)){
      return house.country === country ;
    }

    if(isDefault(country) && !isDefault(property) && isDefault(price)){
      return house.type === property
    }

    if(isDefault(country) && isDefault(property) &&  !isDefault(price)){
      if(housePrice >= minPrice && housePrice <= maxPrice){
        return house;
      }
    }
    if(isDefault(country) && !isDefault(property) &&  !isDefault(price)){
      if(housePrice >= minPrice && housePrice <= maxPrice ){
        return house && house.type === property;
      }
    }

    if(!isDefault(country) && !isDefault(property) && isDefault(price) ){
      return house.country === country && house.type === property;
    }
    
    if(!isDefault(country) && !isDefault(price) && isDefault(property) ){
      if(housePrice >= minPrice && housePrice <= maxPrice){
        return house.country === country;
      }
    }

    if(!isDefault(country) && !isDefault(price) &&  !isDefault(property)){
      if(housePrice >= minPrice && housePrice <= maxPrice){
        return house.type === property;
      }
    }



  });
        //  return  setHouses(newHouses);
        // console.log(newHouses);
  setTimeout(()=>{
  return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
  setLoading(false);
},1000)
 }

  return <HouseContext.Provider value={{country,setCountry,countries,property,setProperty,properties,price,setPrice,houses,loading,date,setDate,handleClick}} > {children} </HouseContext.Provider>;
};

export default HouseContextProvider;
