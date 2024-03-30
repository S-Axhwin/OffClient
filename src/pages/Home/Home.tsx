import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Scroll } from '@/pages/Home/Scroll'
import { GlobeDemo } from "./Globe";
import { Link } from "react-router-dom";
import { SignIn } from "./SignIn";
import { ScrollReveal } from "./ScrollReveal";
import { Experts } from "./Experts";

export default function Home() {
  return (
    <div>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br  from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        OffIcium <br />
        <div className="md:text-4xl mt-5">
          <div>Find Your Career</div>
          <Link to={"/login"}>
          <div className="md:text-xl">
          <SignIn/>
          </div>
          </Link>
        </div>
      </motion.h1>
    </LampContainer>
    <ScrollReveal/>
    <Experts/>
    <GlobeDemo/>
    <Scroll/>
    </div>
  );
}
