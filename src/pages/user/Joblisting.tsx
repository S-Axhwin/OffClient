import { HoverEffect } from "@/components/ui/card-hover-effect";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Joblisting() {
  const [list, setlist] = useState<any>([]);
  useEffect(() => {
    axios.get("https://offserver-production.up.railway.app/user/listing").then((res:any) => {
      console.log(res.data);
      setlist(res.data.list)
    })
  }, [])
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={list} />
    </div>
  );
}
