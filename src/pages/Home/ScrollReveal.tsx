import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

import W from "./asset/W.png"
const content = [
  {
    title: "Infosys",
    description:
      "Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation.",
    content: (
      <div className="h-full w-full flex items-center justify-center dark:bg-transparent">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGQeSI4OZp7wrcYTOpjidDArgWn8XH8xcjPVqCkhHo1pKDvISIhfAeku6cynwpwhXG_o&usqp=CAU"/>
      </div>
    ),
  },
  {
    title: "Wipro",
    description:
      "Wipro Limited is a leading global information technology, consulting and business process services company. Wipro is recognized globally for its comprehensive portfolio of services.",
    content: (
      <div className="h-full w-full drop-shadow-2xl flex items-center justify-center text-white text-2xl bg-transparent shadow-lg">
        <img src={W}/>
      </div>
    ),
  },
  {
    title: "Meta",
    description:
      "Meta builds technologies that help people connect, find communities and grow businesses. We're moving beyond 2D screens and into immersive experiences in the metaverse, helping create the next evolution of social technology..",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white text-2xl">
        META
      </div>
    ),
  },
  {
    title: "Amazon",
    description:
      "Amazon was founded by Jeff Bezos from his garage in Bellevue, Washington, on July 5, 1994. Initially an online marketplace for books, it has expanded into a multitude of product categories, a strategy that has earned it the moniker The Everything Store..",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white text-2xl">
        AMAZON
      </div>
    ),
  },
];
export function ScrollReveal() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
