

import React, { useState } from "react";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios  from "axios";
import Swal from 'sweetalert2'
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
const AddPost = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector((state)=>state.user.userData)
  const handleLogout = () => {
   dispatch({ type: LOGOUT });
 }

 
 //console.log(userData._id)
 const [formData, setFormData] = useState({
    title: "",
    content: "",
    author:userData._id
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
    const data =  axios.post("http://localhost:5001/posts",formData);
    if(data){
      console.log("Post added Successfully");
      Swal.fire({
        title: formData.title,
        text: "Post has been added",
        icon: 'success',
        confirmButtonText: 'Done'
      });

      setFormData({
        title:"",
        content:""
        
      });

    }
    else{
      console.log("Registration Unsuccessful");
    }

  };

  // const navigate = useNavigate();
  // if(userData){

  //   console.log("User is signed in")
  
  //  }else{
  //   console.log("Go and Login");
  //   navigate('/login');
  //  }
  return (

<React.Fragment>
    <Nav />

    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-center p-3  text-white cursor-text text-2xl bolder  rounded-full mb-5 bg-black"> Add Your Post</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Post Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                required
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Post Description
              </label>
              <textarea
                type="text"
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                required
              >
              </textarea>
            </div>

            <div className="mt-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Image

              </label>
              <input
                type="file"
                id="image"
                name="image"
                value={formData.image}
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
                Add Post
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

export default AddPost;