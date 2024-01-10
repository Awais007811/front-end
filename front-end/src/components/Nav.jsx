import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { LOGIN, LOGOUT } from '../redux/actions';


const Navbar = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state)=>state.user.userData)
  const handleLogout = () => {
   dispatch({ type: LOGOUT });
 }

  return (
    <nav className="bg-cyan-400">
      <div className="px-4 py-4">
        <div className="flex justify-around items-center">
          <Link to="/" className="text-white font-bold text-xl">
          {/* Creative Hideout */}
          RandomThoughts
          </Link>
          <div className="text-white flex item-center gap-5 ml-5">
            <Link to="/" className="text-white">
              Home
            </Link>
            <Link to="/about-us" className="text-white">
              About
            </Link>
            <Link to="/contact-us" className="text-white">
              Contact Us
            </Link>

            {userData?(
            <Link to="/add-post" className="text-white">
            Add New Blog
          </Link>  
            ):""}

          </div>
          
          <div className='flex gap-4 text-xl'>
              
            {/* <Link to="/login" className="text-white">
              Login
            </Link>
            <Link to="/sign-up" className="text-white">
              Signup
            </Link> */}
            
            <div className="flex gap-6 items-center">
              {/* {userData?(
                        <h4 className="font-bold text-white">{userData.username}</h4>

              ):(
                <Link to="/sign-up" className='text-white'>SignUp</Link>
              )} */}
                {userData ? (
                    /* <Link to="/profile"> */
                    <div className="flex items-center gap-2 ">
                     
                        <h4 className="font-bold text-white">Welcome {userData.username}</h4>
                        <button onClick={handleLogout} className='text-white'>Logout</button>
                    </div>
                ) : (
                    /* </Link> */
                    <>
                    <Link to="/sign-up" className='text-white'>SignUp</Link>
                    <Link to="/login" className='text-white'>Login</Link>
                    
                    </>
                   
                   
                   )}
                </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;