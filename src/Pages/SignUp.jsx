// import React, { useState } from 'react';
// import Nav from '../components/Nav'
// import Footer from '../components/Footer'

// const SignUp = () => {
//   const [data,setData] = useState([]);
//     const onSubmitHandler  = (e)=>{
//       e.preventDefault();
//       alert("Form Submit");
  
//   }

//   const onChangeHandler = ()=>{

//   }


//  return (
//     <React.Fragment>
//     <Nav />
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Register Your Self
//           </h2>
//         </div>
//         <form onSubmit={onSubmitHandler} className="mt-8 space-y-6" action="#" method="POST">
//           <input type="hidden" name="remember" defaultValue="true" />
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="username" className="sr-only">
//                 Title
//               </label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 autoComplete="username"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Username"
//               />
//             </div>
//             <div>
//               <label htmlFor="email-address" className="sr-only">
//                 Title
//               </label>
//               <input
//                 id="email-address"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />

//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     <Footer />
//     </React.Fragment>

//  );
// };

// export default SignUp;


// import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// export default function Checkout() {
//   const globalState = useSelector((state) => state);
//   return (
//     <div>
//       Checkout
//       <hr />
//       <table>
//         <thead>
//           <tr>
//             <th> # </th>
//             <th> name </th>
//             <th> price </th>
//             <th> quantity </th>
//             <th> net price </th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.keys(globalState.cart).map((itemKey, counterKey) => (
//             <tr key={itemKey}>
//               <td>{counterKey + 1}</td>
//               <td>{globalState?.cart[itemKey]?.name}</td>
//               <td>{globalState?.cart[itemKey]?.price}</td>
//               <td>{globalState?.cart[itemKey]?.qty}</td>
//               <td>
//                 {globalState?.cart[itemKey]?.qty *
//                   globalState?.cart[itemKey]?.price}
//               </td>
//             </tr>
//           ))}

//           <tr className="border-t-orange-300 border-[1px]">
//             <td colSpan={"4"}></td>
//             <td>400</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
// //

import React, { useState } from "react";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios  from "axios";
import Swal from 'sweetalert2'
const SignUp = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password:""
    // cardNumber: "",
    // expiryDate: "",
    // cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    const data =  axios.post("http://localhost:5001/users",formData);
    if(data){
      console.log("Successfully Registered");
      Swal.fire({
        title: formData.username,
        text: "Thanks for Registratioin",
        icon: 'success',
        confirmButtonText: 'Done'
      });

      setFormData({
        username:"",
        email:"",
        password:""
      });

    }
    else{
      console.log("Registration Unsuccessful");
    }

  };

  return (
    <React.Fragment>
    <Nav />

    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <h1 className="text-center p-1  text-white cursor-text text-2xl bolder  rounded-full mb-5 bg-black"> Sign Up</h1>
        
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                required
              />
            </div>

            <div className="mt-6">
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

            {/* <div className="mt-6">
              <label
                htmlFor="expiryDate"
                className="block text-sm font-medium text-gray-700"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                required
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                required
              />
            </div> */}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 px-6 text-white bg-gradient-to-r from-cyan-400 to-light-blue-500 hover:from-cyan-500 hover:to-light-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-md text-sm shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </React.Fragment>
    
  );
};

export default SignUp;
