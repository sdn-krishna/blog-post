import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Write from "./components/Write";
import Profile from "./components/Profile"

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]  font-mono">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Hero/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/create" element={<Write/>} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
