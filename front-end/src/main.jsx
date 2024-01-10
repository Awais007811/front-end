import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from "./routes/router.jsx";
import { Provider } from "react-redux";
import { store, persistManager } from "./redux/store/index.js";
import { PersistGate } from "redux-persist/integration/react";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import {Provider} from 'react-redux';
// import {store} from './redux/store';

// import AboutUs from './Pages/About.jsx';
// import Contact from './Pages/Contact.jsx';
// import Login from './Pages/Login.jsx';
// import AddPost from './Pages/AddPost.jsx';
// import SignUp from './Pages/SignUp.jsx';
// import PostDetail  from './Pages/PostDetails.jsx';
// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/about-us",
//     element: <AboutUs/>,
//   },
//   {
//     path:"/sign-up",
//     element:<SignUp />
//   },
//   {
//     path: "/contact-us",
//     element: <Contact/>,
//   },
//   {
//     path:"/login",
//     element:<Login />
//   },
//   {
//     path: "/add-post",
//     element: <AddPost />,
//   },
//   {
//     path: "/post-detail/:postId",
//     element: <PostDetail />,
//   },
  


// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistManager}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PersistGate>
  </Provider>
</React.StrictMode>
)
