import { HoverEffect } from "@/components/ui/card-hover-effect";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function JoblistingRec() {
  const user = useSelector((item:any) => item.user );
  const [list, setlist] = useState<any>([]);
  useEffect(() => {
    axios.post("https://offserver-production.up.railway.app/rec/job", {recGmail: user.gmail}).then((res:any) => {
      console.log(res.data);
      setlist(res.data.data);
    })
  }, [])
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={list} />
    </div>
  );
}
