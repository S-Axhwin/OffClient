import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    skills: Array<any>;
    description: string;
    link: string;
    salary: string;
    id: string;
    gmail: string
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const user = useSelector((item:any) => item.user)
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 z-0",
        className
      )}
    >
      {items?.map((item, idx) => (
        <Link
          to={user.isRec?"":(`/joblisting/${item.id}`)}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >

          <AnimatePresence >
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block z-0 rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{user.isRec?"Name: "+item.gmail.substring(0, item.gmail.lastIndexOf("@")):item.title}</CardTitle>
            {user.isRec?<CardTitle>{item.gmail}</CardTitle>:null}
            <CardDescription>{user.isRec?"Skills":"requried Skills"}: {item.skills.join()}</CardDescription>
            {item.salary?<CardDescription>Base Salary: ${item.salary}</CardDescription>:null}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-40",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide z-0 leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
