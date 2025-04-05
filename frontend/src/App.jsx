import {BrowserRouter, Routes, Route} from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Biryani } from "./pages/Biryani";
import { Bbq } from "./pages/Bbq";
import { Fastfood } from "./pages/Fastfood";
import { Contact } from "./pages/Contact";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";

import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>}/>
    <Route path="/bbq" element={<Bbq/>}/>
    <Route path="/biryani" element={<Biryani/>}/>
    <Route path="/fastfood" element={<Fastfood/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="*" element={<Error/>}/>

    </Routes>
  <Footer />
    </BrowserRouter>
    </>
  );
};

export default App;