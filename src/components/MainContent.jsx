import React from 'react';
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { LOGIN, LOGOUT } from '../redux/actions';
import { Link } from 'react-router-dom';


import axios from 'axios';
import Aside from './Aside';

const MainContent = () => {


  const dispatch = useDispatch();
  const userData = useSelector((state)=>state.user.userData)
  const handleLogout = () => {
   dispatch({ type: LOGOUT });
 }
  

  const [data, setData] = useState([]);
  // fetch('https://api.example.com/data')
  //   .then(response => response.json())
  //   .then(data => {
  //     // Do something with the fetched data
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     // Handle any errors that occurred during the fetch
  //     console.error(error);
  //   });

  useEffect(() => {
    // Define the API endpoint you want to fetch data from
    const apiUrl = 'http://localhost:5001/posts';

    // Use axios to make a GET request
    axios.get(apiUrl)
      .then(response => {
        // Handle the successful response
        setData(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount


  return (
    <React.Fragment>

    
      <div className="container mx-auto">
        {/* {userData} */}
        {
          console.log(userData)
        }
        <div className="flex flex-wrap">
          {/* <h1 className="text-4xl font-bold  mb-4 text-center">Blogger</h1> gradient-to-r from-cyan-900 to-gray-400 */}
          <div className="flex  flex-wrap w-full h-full md:w-full md:h-full p-4">

            {data.map(post => (


              <div key={post.id} class="max-w-sm rounded overflow-hidden shadow-lg m-2">
                <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{post.title}</div>
                  <p class="text-gray-700 text-base">
                    {post.content}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span> */}
                  <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Published On: {new Date(post?.date).toLocaleDateString() +
                      " " +
                      new Date(post?.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    {/* {JSON.stringify(post)} */}
                  </p>
                  <br />
                  { post?.author?.username &&
                  <p class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Author:{post?.author?.username} </p>
                  }

        
                </div>
                {userData &&
                <div className='m-3'>
               <button > <Link
         to={`/post-detail/${post._id}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
            
          >
           Post Detail

          </Link>
          </button>
                </div>
}

              </div>
            ))}

          </div>

      
        </div>
      </div>
   

    

    </React.Fragment>

  );
};

export default MainContent;