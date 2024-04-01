import { fetchUser } from "@/redux/Slice/userSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function RegForm() {
  const Navigate = useNavigate()
  const dispatch = useDispatch();
  const [gmail, setgmail] = useState<String>("");
  const [password, setpassword] = useState<String>("");
  const [number, setnumber] = useState<String>("");
  const [isRec, setIsRec] = useState(false);
  const handleForm = async () => {
  if(password && gmail){
    await dispatch(fetchUser({gmail, password, isRec, reg:true, phone:number}) as any)
    Navigate("/login")
}
  }
  return (
    <div className="h-screen w-screen grid place-items-center">
    <Card className="w-[350px] transition-all duration-400 hover:drop-shadow-[0_35px_35px_#646464] hover:scale-110">
      <CardHeader>
        <CardTitle>REGISTER</CardTitle>
        <CardDescription>FIND 100+ JOBS IN ONE PLACE</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Gmail</Label>
              <Input
                id="name"
                placeholder="Enter your gmail"
                onChange={(e) => setgmail(e.target.value)}
                value={gmail.toString()}
                />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input
                id="pass"
                placeholder="Password"
                type="password" 
                onChange={(e) => setpassword(e.target.value)}
                value={password.toString()}
                />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Phone Number</Label>
              <Input
                id="num"
                placeholder=""
                type="number"
                onChange={(e) => setnumber(e.target.value)}
                value={number.toString()}
                />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
      <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" onClick={() => setIsRec(!isRec)} />
      <Label htmlFor="airplane-mode">As {isRec?"Recruiter":"Job Seeker"}</Label>
    </div>
        <Button onClick={handleForm}>Login</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
