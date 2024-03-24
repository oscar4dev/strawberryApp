import React, { useState } from 'react'
import { GiStrawberry } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { IoMenu } from "react-icons/io5"
import { GiKnifeFork } from "react-icons/gi";

const Header = () => {

   const [sidebar, setSidebar] = useState(false)

   const activeStyle = {
      border: '1px solid',
   }

  return (
   <>
      <header className='header'>
         <ul>
            <li>
               <NavLink 
                  to='/'
                  style={ ({ isActive }) => isActive ? activeStyle : null }   
               >
                  <GiStrawberry 
                     className='strawberry-icon'
                  />
                  <span className='strawberry'>Strawberry</span>
               </NavLink>
            </li>
         </ul>
         <ul className='hide'>
            <li>
               <NavLink 
                  to='menu'
                  style={ ({ isActive }) => isActive ? activeStyle : null }
               >Menu
               </NavLink>
            </li>
            <li>
               <NavLink 
                  to='career'
                  style={ ({ isActive }) => isActive ? activeStyle : null }
               >Career
               </NavLink>
            </li>
            <li>
               <NavLink 
                  to='about'
                  style={ ({ isActive }) => isActive ? activeStyle : null }
               >About
               </NavLink>
            </li>
            <li>
               <NavLink 
                  to='contact'
                  style={ ({ isActive }) => isActive ? activeStyle : null }
               >Contact
               </NavLink>
            </li>
         </ul>
         <ul className='hide'>
            <li>
               <NavLink 
                  to='login'
                  style={ ({ isActive }) => isActive ? activeStyle : null }
               >Login/Register
               </NavLink>
            </li>
            <span> | </span>
            <li>
               <NavLink 
                  style={ ({ isActive }) => isActive ? activeStyle : null }
                  to='book'
               >Book Table
               </NavLink>
            </li>
         </ul>
      </header>  
      <IoMenu 
         className='menu-btn' 
         onClick={ () => { setSidebar(true) } }
      />
      <div>
         {
            sidebar && <div className='sidebar'>
               <GiKnifeFork 
                  className='close-btn'
                  onClick={ () => { setSidebar(false) } } 
               />
               <ul>
                  <li>
                     <Link 
                        to='/' 
                        onClick={ () => { setSidebar(false) } }
                        >Home
                     </Link>
                  </li>
                  <li>
                     <Link 
                        to='menu'
                        onClick={ () => { setSidebar(false) } }
                        >Menu
                     </Link>
                  </li>
                  <li>
                     <Link 
                        to='career'
                        onClick={ () => { setSidebar(false) } }
                        >Career
                     </Link>
                  </li>
                  <li>
                     <Link 
                        to='about'
                        onClick={ () => { setSidebar(false) } }
                        >About
                     </Link>
                  </li>
                  <li>
                     <Link 
                        to='contact'
                        onClick={ () => { setSidebar(false) } }
                        >Contact
                     </Link>
                  </li>
                  <li>
                     <Link 
                        to='login'
                        onClick={ () => { setSidebar(false) } }
                        >Login / Register
                     </Link>
                  </li>
                  <li>
                     <Link 
                        to='book'
                        onClick={ () => { setSidebar(false) } }
                        >Book Table
                     </Link>
                  </li>
               </ul>
            </div>
         }
      </div>
   </>
  )
}

export default Header







// import React, { useState } from 'react'

// const Header = () => {


//    const activeStyle = {
//       color: '#61dafb',
//       border: '1px dotted'
//    }

//   return (
//    <header className='header'>
//       <div className='header-wrapper'>
//          <Link to='/'><span className='berry'><GiStrawberry /></span>STrawberry</Link>
//          <div className='header-wrapper-inner'>
//             <NavLink 
//                to='menu' 
//                style={ ({isActive}) => isActive ? activeStyle : null } >
//                Menu
//             </NavLink>
//             <NavLink 
//                to='career' 
//                style={ ({isActive}) => isActive ? activeStyle : null } >
//                Career
//             </NavLink>
//             <NavLink 
//                to='about' 
//                style={ ({isActive}) => isActive ? activeStyle : null } >
//                About
//             </NavLink>
//             <NavLink 
//                to='contact' 
//                style={ ({isActive}) => isActive ? activeStyle : null } >Contact
//             </NavLink>
//          </div>
//          <div className='header-wrapper-inner'>
//             <NavLink 
//                to='login' 
//                style={ ({isActive}) => isActive ? activeStyle : null } >Login/Register
//             </NavLink>
//             <>|</>
//             <NavLink 
//                to='book' 
//                style={ ({isActive}) => isActive ? activeStyle : null } >Book Table
//             </NavLink>
//          </div>
//          <div className='toggle-icon'>
//             { toggle 
//                ? <div onClick={() => setToggle(false)}><GiKnifeFork /></div> 
//                : <div onClick={() => setToggle(true)}><IoMenu /> </div>
//             }
//          </div>
//       </div>
//       <div className='header-navbar'>
//          { toggle && (<div className='inner'>
//             <NavLink to='.' onClick={() => setToggle(false)}>Home</NavLink>
//             <NavLink to='menu' onClick={() => setToggle(false)}>Menu</NavLink>
//             <NavLink to='career' onClick={() => setToggle(false)}>Career</NavLink>
//             <NavLink to='about' onClick={() => setToggle(false)}>About</NavLink>
//             <NavLink to='contact' onClick={() => setToggle(false)}>Contact</NavLink>
//             <NavLink to='login' onClick={() => setToggle(false)}>Login/Register</NavLink>
//             <NavLink to='book' onClick={() => setToggle(false)}>Book Table</NavLink>
//          </div>) }
//       </div>
//    </header>
//    )
// }

// export default Header