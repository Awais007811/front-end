
// import React, { useState } from "react";
// import axios  from "axios";
// import {useNavigate} from 'react-router-dom'
// import {useDispatch, useSelector} from 'react-redux';
// import { LOGIN, LOGOUT } from '../redux/actions';

// import Nav from '../components/Nav'
// import Footer from '../components/Footer'
// import Swal from 'sweetalert2'
// const Login = (props) => {
//   const state = useSelector(state=> state?.user);
//   const dispatch = useDispatch();
//   const globalState = useSelector((state)=>state)
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//     // author:"658a7f2e6c5eba829e2918d2"
//     // cardNumber: "",
//     // expiryDate: "",
//     // cvv: "",
//   });
//   const [message,setMessage] = useState();
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     console.log(formData)
//     try {
//       const response = await axios.post('localhost:5001/users/login',formData);

//       console.log(response.data);
//       //console.log(res)
//       //setUserData(response.data); // Set fetched user data to state
//       dispatch({type:LOGIN,payload: response.data})
//       // setIsLoggedIn(true)
//       navigate('/')           
//     } catch (error) {
//       setMessage("incorrect email or password");
//     }
//     //console.log(state)
//   //console.log('Login form submitted:', formData);
//   // Reset form fields after submission
//   setFormData({
//     email: '',
//     password: '',
//   });
    
//   };

//   return (
//     <React.Fragment>
//     <Nav />

//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <h1 className="text-center p-3  text-white cursor-text text-2xl bolder  rounded-full mb-5 bg-cyan-200">Sign In </h1>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
//                 required
//               />
//             </div>

//             <div className="mt-6">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
//                 required
//               />
             
//             </div>
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="w-full py-3 px-6 text-white bg-gradient-to-r from-cyan-400 to-light-blue-500 hover:from-cyan-500 hover:to-light-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-md text-sm shadow-lg"
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     <div>{JSON.stringify(state)}</div>
//     <Footer />
//     </React.Fragment>
//   );
// };

// export default Login;
import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { LOGIN} from '../redux/actions';
import  axios  from 'axios';
import Nav from '../components/nav';
import Footer from '../components/Footer';
export default function Login() {
          const state = useSelector(state=> state?.user);
          const dispatch = useDispatch();
          const [message, setMessage] = useState();
          const globalState = useSelector((state)=>state)
          const navigate = useNavigate();
          const [userData,setUserData] = useState();
          const [formData, setFormData] = useState({
          email: '',
          password: ''
        });
        const handleChange = (e) => {
          e.preventDefault();
          const { name, value } = e.target; 
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
        const handleSubmit = async (e) => {
          e.preventDefault();
          // Perform login logic here (e.g., API request to authenticate user)
            try {
              const response = await axios.post('http://localhost:5001/users/login',{
                email: formData.email,
                password:formData.password
              }); 
              setUserData(response.data); // Set fetched user data to state
              dispatch({type:LOGIN,payload: response.data})
              // setIsLoggedIn(true)
              navigate('/')           
            } catch (error) {
              setMessage("incorrect email or password");
            }
          console.log('Login form submitted:', formData);
          // Reset form fields after submission
          setFormData({
            email: '',
            password: '',
          });
        };
    return (
    <React.Fragment>
  
    <Nav />

    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <h1 className="text-center p-1  text-white cursor-text text-2xl bolder  rounded-full mb-5 bg-black"> Sign In</h1>
        
              <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                required
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                required
              />
             
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 px-6 text-white bg-gradient-to-r from-cyan-400 to-light-blue-500 hover:from-cyan-500 hover:to-light-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-md text-sm shadow-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </React.Fragment>
    //   <main>
    //   <div className="max-w-md mx-auto mt-10 p-[10vh] bg-gray-200 rounded-md">
    //   <h2 className="mb-4 text-2xl font-bold text-center">Login</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-4">
    //       <label htmlFor="email" className="block text-gray-700">
    //         Email:
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label htmlFor="password" className="block text-gray-700">
    //         Password:
    //       </label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleChange}
    //         required
    //         className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
    //       />
    //     </div>
    //     <button
    //       type="submit"
    //       className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>
    // <div className='bg-red-400'> {message}</div>
    // </main>
  )
}