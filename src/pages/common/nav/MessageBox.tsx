import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { logout } from "@/redux/Slice/userSlice"; 
import { Button } from "@/components/ui/button"
import { useDispatch } from "react-redux";
  export function MessageBox() {
      const dispatch = useDispatch();
      const Logout = () => {
        dispatch(logout())
      }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="hover:bg-red-900">Logout</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm That You Want to Logout</AlertDialogTitle>
            <AlertDialogDescription>
              This session will be logout from this device
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={Logout}  >Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  