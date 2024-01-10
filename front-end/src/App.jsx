import React from "react"
import Navbar from "./components/Nav";
import Footer from "./components/Footer"
import MainContent from "./components/MainContent";
import Aside from "./components/Aside"
function App() {
  //const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Navbar />

      <MainContent />

      <Footer />
    </React.Fragment>
  )
}

export default App
