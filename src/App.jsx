import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Dropdown from "./assets/components/divSellector/sellector";
import Form from "./assets/components/Form/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Selector from "./assets/components/useContexttask/Selector/Sellector";
import LanguageProvider from "./assets/components/useContexttask/Context/LanguageContext"

// App.jsx
import Products from "./assets/components/Navbar/Products"; // Check the file extension

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Dropdown/> */}
      {/* <Form/> */}
      {/* <Router>
      <Navbar />
      <Routes>

      <Route path="/electronics" element={<Products category="electronics" />} />
        <Route path="/jewelery" element={<Products category="jewelery" />} />
      </Routes>
    </Router> */}
     
      <LanguageProvider>
        <Selector />
      </LanguageProvider>
    </>
  );
}

export default App;
