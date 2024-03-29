import React, { useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
   
    const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   
    const handleSubmit = (e) => {
       e.preventDefault();
   
       // Implement your logic here, e.g., send an email or store the form data
       console.log('Form data:', formData);
    };
    return (
      <React.Fragment>
      <Nav />
      <div className="container min-h-screen mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" placeholder="Your name" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" placeholder="Your email" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" placeholder="Your message" onChange={handleChange} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
      </React.Fragment>

   );
};

export default Contact;