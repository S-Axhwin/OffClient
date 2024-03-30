import { HoverEffect } from "@/components/ui/card-hover-effect";
import axios from "axios";
import { useEffect, useState } from "react";

export default function JoblistingRec() {
  const [list, setlist] = useState<any>([]);
  useEffect(() => {
    axios.get("http://localhost:5001/rec/getall").then((res:any) => {
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
