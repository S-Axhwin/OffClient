import React, { useState } from "react";
import { Label } from "@/components/ui/labels";
import { Input } from "@/components/ui/inputs";
import { cn } from "@/lib/utils";
import { Span } from "./Span";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function JobForm() {
  const [loading, setloadin] = useState<boolean>(false)
  const [title, settitle] = useState<any>();
  const [experience, setexperience] = useState<any>();
  const [curSkill, setcurSkill] = useState<any>("");
  const [salary, setsalary] = useState<any>("");
  const [skills, setskills] = useState<any>([]);
  const Navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    console.log(title, experience);
    setloadin(true)
    axios.post("https://offserver-production.up.railway.app/rec/newPost", {title, experience, skills, salary}).then(res => {console.log(res); setloadin(false); Navigate("/Recdashboard")}
    )
  };
  return (
    <div className="grid place-items-center h-screen">
    <div className=" max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to OffIcium :
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Add your requirements for the job.
      </p>

      <form className="my-8" >
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Tittle</Label>
            <Input id="firstname" onChange={(e)=>settitle(e.target.value)} placeholder="Full-Stack" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Experience</Label>
            <Input id="lastname" onChange={(e)=>setexperience(e.target.value)} placeholder="Atleast 2-years" type="number" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Salary</Label>
          <Input id="email" onChange={(e) => setsalary(e.target.value)} placeholder="Starts From 15K In Dollars" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Skills</Label>
          <div className="">
            <div className="flex overflow-x-clip  rounded-xl bg-black">
              {skills.map((item:any) => {
                return <Span skill={item}></Span>
              })}
            </div>
            <Input placeholder="enter skill here" onChange={(e) => setcurSkill(e.target.value)} value={curSkill}/>
            <Button
            onClick={() => {curSkill?setskills([...skills, curSkill]):null; setcurSkill("")}}>
              Add Skill
            </Button>
          </div>
        </LabelInputContainer>


        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          onClick={(e) => handleSubmit(e)}
          disabled={loading}
          >
          HOST JOB &rarr;
          <BottomGradient />
        </button>

        
      </form>
    </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
``