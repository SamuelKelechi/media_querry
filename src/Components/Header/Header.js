import React,{useState} from 'react'
import './Header.css'
import {FaTimes, FaBeer} from 'react-icons/fa'
import {FiAlignJustify} from 'react-icons/fi'
import {Link} from 'react-router-dom'


const Header = () => {
    const [toggle, setToggle] = useState(true)
    const handleToggle = () => setToggle(!toggle)
    
  return (
    <div className='Header_Container'>
        <div className='Header_Wrapper'>
            <div>LOGO</div>

            <div className='Nav_Contain'>
                <Link to='/' className='Links'>HOME</Link>
                <Link to='/product' className='Links'>PRODUCTS</Link>
                <Link to='/contact' className='Links'>CONTACT</Link>
            </div>

            <div className='Burger'>
                {toggle ? (<FiAlignJustify onClick={handleToggle} fontSize='30px'/>)
                :(<FaTimes onClick={handleToggle} fontSize='30px'/>)}     
            </div>
        </div>
    </div>
  )
}

export default Header