import React,{useState} from 'react'
import './header.css'
import Mobile from './header/Mobile'
import Web from './header/Web'

function Header() {

    const [isOpen, setisOpen] = useState(false);
    return (
        <div className='header'>
            <div className='logo'><a href='/'>Mehedi</a></div>
            <div className='menu'>
                <div className='web-menu'>
                   <Web/>
                </div>
                <div className='mobile-menu'>
                    <div onClick={ ()=> setisOpen(!isOpen)}>
                       <i class='fi-rr-apps menu-icon'></i> 
                       
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen}/>}
                </div>

            </div>
            
            
        </div>
    )
}

export default Header
