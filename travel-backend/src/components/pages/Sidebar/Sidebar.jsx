import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './sidebar.css'

const sidebar__links =[
   {
    path:'/dasboard',
    display:'Dasboard'
   },
   {
    path:'/package',
    display:'Package'
   },
   {
    path:'/user',
    display:'User'
   },
   {
    path:'/blog',
    display:'Blog'
   }
]

const sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
          {
            sidebar__links.map( (item, index) => (
              <li key={index}>
                <NavLink to={item.path}>{item.display}</NavLink>
              </li>
            ) )
          }
        </ul>
    </div>
  )
}

export default sidebar
