import React from "react";
import Aside from "../components/Aside";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Nav />

      <div className="flex h-screen">
        <main className="container mx-auto px-4 w-3/4">
          <h1 className="text-4xl font-bold mb-4">
            About Us Page
          </h1>
          <p className="text-xl mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, magni dignissimos voluptatum, iste harum corrupti velit excepturi laborum exercitationem ut dolorum fugiat pariatur dolore architecto quod, minus enim! Est, reprehenderit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut minima fuga tenetur incidunt labore ea amet praesentium pariatur deserunt, dolor adipisci quis. Unde, veniam placeat? Adipisci ea laboriosam facilis?
          </p>
          {/* Your other components */}
        </main>

        {/* <Aside /> */}
      </div>
      <Footer />

    </React.Fragment>


  );
};

export default AboutUs;