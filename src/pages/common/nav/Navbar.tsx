import { useSelector } from "react-redux"
import LogUser from "./LogUser"
import { NotLog } from "./NotLog"

const Navbar = () => {
  const user = useSelector((item:any) => item.user)

  if(user.isloggedIn){
    return <LogUser user={user}/>
  }
  return <NotLog/>

}

export default Navbar