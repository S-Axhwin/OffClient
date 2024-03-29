import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Login } from "./pages/user/Login"
import PrivateRouter from "./PrivateRoute"
import Navbar from "./pages/common/nav/Navbar"

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="" element={<PrivateRouter/>}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
        </Route>
      </Routes>
      </div>
    </>
  )
}

export default App