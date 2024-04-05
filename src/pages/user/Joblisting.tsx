import { HoverEffect } from "@/components/ui/card-hover-effect";
import axios from "axios";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export default function Joblisting() {
  const [list, setlist] = useState<any>([]);
  const [slist, setSlist] = useState<[]>();
  useEffect(() => {
    axios.get("https://offserver-production.up.railway.app/user/listing").then((res:any) => {
      console.log(res.data);
      setlist(res.data.list);
    })
  }, []);
  const handleFilter = (e:any) => {
    setSlist(list.filter((res:any) => {
      return res.title.includes(e.target.value || "")
    }))

  }
  return (
    <>
     <div className="grid place-items-center py-4 w-screen">
        <Input
          placeholder="Filter on Title"
          onChange={handleFilter}
          
          className="max-w-sm"
        />
      </div>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={slist || list} />
    </div>
    </>
  );
}
