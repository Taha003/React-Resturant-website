// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Resturant from './Components/Resturant'
import { menu } from './Components/Menu';
import Nav from './Components/Nav';
import { useState } from 'react';

function App() {
  //getting data from menu api
  const [menuData, setMenuData] = useState(menu);
  console.log(menu)
  //getting category for navbar
  let category = [...new Set(menu.map((currElem) => {
    return currElem.category
  })),'All']
  console.log(category)
  //setting category
  let [currCategory, setCategory] = useState(category);
  //filtering categorg on click
  const filterItem = (category) => {

    let updatedList = menu.filter((currElem) => {
      if (currElem.category === category) {
        return currElem;

      }
      

    })
    

    setMenuData(updatedList)
    if(category==='All'){
      setMenuData(menu)
    }

  }
  return (
    <>
            <h1 style={{ fontFamily: 'ariel', textAlign: 'center', textDecorationLine: 'underline' }}>Resturant</h1>

      <Nav currCategory={currCategory} filterItem={filterItem} />
      <Resturant menuData1={menuData} />

    </>
  );
}

export default App;
