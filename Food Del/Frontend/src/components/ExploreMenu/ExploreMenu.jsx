import React from 'react'
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

export const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
          <h1>Explore our menu</h1>
          <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to s</p>
          <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
              return (
                <div className='explore-menu-list-item' key={index}>
                  <img src={item.menu_image} alt={item.name} />
                  <p>{item.menu_name}</p>
                </div>
              )
            })}
          </div>
          <hr/>
    </div>
  )
}
