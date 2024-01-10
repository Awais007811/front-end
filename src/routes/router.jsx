import ReactDOM from 'react-dom/client'
import App from '../App.jsx'
import { Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from "../Pages/NotFound";
import UnAuthorized from "../Pages/Unauthorized";
import { Outlet } from "react-router-dom";
import Protected from "./Protected";
import AboutUs from '../Pages/About.jsx';
import Contact from '../Pages/Contact.jsx';
import Login from '../Pages/Login.jsx';
import AddPost from '../Pages/AddPost.jsx';
import SignUp from '../Pages/SignUp.jsx';
import PostDetail  from '../Pages/PostDetails.jsx';
import MainContent from '../components/MainContent.jsx';
const Router = ()=>{
    return(
<Routes>
<Route path="/" element={<App />} />
<Route path="/post-detail/:postId" element={<Protected/>} />
<Route path="/post-detail/:postId" element={<PostDetail />}>
</Route>
<Route path="/about-us" element={<AboutUs />} />
<Route path="/contact-us" element={<Contact />} />
<Route element={<Protected />}>
<Route path="/add-post" element={<AddPost />}/>    
</Route>
<Route path="/login" element={<Login />} />
<Route path="/sign-up" element={<SignUp />} />
</Routes>
)}
export default Router;