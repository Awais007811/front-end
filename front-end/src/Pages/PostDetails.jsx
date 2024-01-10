
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useSearchParams,useParams } from 'react-router-dom';
const PostDetails = (props) => {
  const [data,setData] = useState([]);
  const searchParams = useSearchParams();
  const { postId } = useParams();
  console.log(postId);
  // const { _id } = props.match.params;
  //const post_id =  searchParams.get('post-detail/'); 
  //console.log(post_id);
  // const { post_id } = props.match.params;
  // console.log(props+"Props data")
 const [comments, setComments] = useState([]);
 const [newComment, setNewComment] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
 };

 useEffect(() => {
  // Define the API endpoint you want to fetch data from
  // const apiUrl = ;

  // Use axios to make a GET request
  const response  = axios.get(`http://localhost:5001/posts/postDetail/${postId}`)
    .then(response => {
      // Handle the successful response
      setData(response.data);
      console.log(data)
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
}, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

 
 return (
    <React.Fragment>

    <Nav />
    
    
    <div className="container mx-auto">
        
      <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
      <p className="mb-8">{data.content}</p>

      <h2 className="text-3xl font-bold mb-4">Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="mb-4">
            {comment}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="mb-8">
        <label htmlFor="comment" className="block mb-2">
          Comment:
        </label>
        <textarea
          id="comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-[30%] h-12 p-2 border rounded"
        ></textarea>
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ">
          Submit Comment
        </button>
      </form>
    </div>
    </React.Fragment>

 );
};

export default PostDetails;