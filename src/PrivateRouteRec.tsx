import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRouterRec = () => {
  const user:any = useSelector((item:any) => item.user);

  if(user.isloggedIn && user.isRec){
    return (<Outlet/>)
  }
  return (
    <Navigate to={"/login"}/>
  )
}

export default PrivateRouterRec