import React from 'react';
import Search from '../components/Search';
import HouseList from '../components/HouseList';

const Home = () => {
  return <div className="mb-9 " >
    <Search />
    <HouseList />
  </div>;
};

export default Home;
