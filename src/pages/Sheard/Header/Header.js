import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headericon from '../../../assets/Headericon.png'
const Header = () => {
    const [handleResponsiveNav,setHandleResponsiveNav] = useState(false)
    const menuItems = <>
    <li><Link className='px-0 lg:px-2' to='/' >Home</Link></li>
    <li><Link className='px-0 lg:px-2' to='/appointment' >Appointment</Link></li>
    <li><Link className='px-0 lg:px-2' to='/' >Reviews</Link></li>
    <li><Link className='px-0 lg:px-2' to='/' >Contact Us</Link></li>
    </>
    return (
        <div className="navbar px-10 lg:mx-24 ">
           <div className='navbar lg:hidden items-start '>
           <div className="flex-1">
                    <Link to='/'>Doctors Portal</Link>
            </div>
            <div className='flex flex-row-reverse relative'>
            <label onClick={()=> setHandleResponsiveNav(!handleResponsiveNav)}><img src={headericon} alt="" /></label>
            {
                handleResponsiveNav &&
                <div className="menu  mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute top-0 mr-5">
            <div>
                    <Link to='/'>Doctors Portal</Link>
                </div>
                <div className="flex-none">
                    <ul>
                    {menuItems}
                    <Link className='font-bold'  to='/login'>Login</Link>
                    </ul>
                </div>
            </div>
            }
            </div>
           </div>
           <div className="navbar bg-base-100 hidden lg:flex">
                <div className="flex-1">
                <Link to='/'>Doctors Portal</Link>
                </div>
                <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                    <div className='ml-36'>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Header;