import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Login } from "./pages/user/Login"
import PrivateRouter from "./PrivateRoute"
import Navbar from "./pages/common/nav/Navbar"
import { JobForm } from "./pages/Recs/Jobhosting"
import PrivateRouterRec from "./PrivateRouteRec"
import Joblisting from "./pages/user/Joblisting"
import { Form } from "./pages/user/Form"
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
          <Route path="/joblisting" element={<Joblisting/>}></Route>
          <Route path="/joblisting/:list" element={<Form/>}></Route>
        </Route>
        <Route path="" element={<PrivateRouterRec/>}>
          <Route path="/Recdashboard" element={<h1>Rec Dashboard</h1>}></Route>
          <Route path='/jobpost' element={<JobForm/>} />
        </Route>
      </Routes>
      </div>
    </>
  )
}

export default App