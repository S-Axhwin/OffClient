import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = useSelector((item:any) => item.user);
  if(user.isloggedIn){
    return (<Outlet/>)
  }
  return (
    <Navigate to={"/login"}/>
  )
}

export default PrivateRouter