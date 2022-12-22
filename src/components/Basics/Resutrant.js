import React, {useState} from 'react'
import "./style.css"
import Menu from "./menuApi";
import { MenuCard } from './MenuCard';
import { Navbar } from './Navbar';

const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];

 const Resutrant = () => {
    const [menuData, setmenuData]=useState(Menu);
    const [menuList, setMenuList]=useState(uniqueList);
    // console.log(menuData);
    const filteritem=(category)=>{
        if(category ==="All"){
            setmenuData(Menu);
            return;
        }
        const updateList=Menu.filter((curElem)=>{
            return curElem.category === category;
        });
        setmenuData(updateList);
    };
  return (<> 
  <Navbar filteritem={filteritem} menuList={menuList}/>
  <MenuCard menuData={menuData}/>  
  </>
  )
}
export default Resutrant;