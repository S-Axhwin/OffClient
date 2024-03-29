import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Scroll() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
    "I stumbled upon Officium while searching for job opportunities in my field, and I must say, it's been a game-changer! The user-friendly interface made it effortless to navigate through various listings.Thanks to Officium, I landed my dream job!",
    name: "Charles Dickens",
    title: "User",
  },
  {
    quote:
    "As a recent graduate, job hunting can be overwhelming.I appreciated the variety of filters available, allowing me to narrow down my search based on location, industry, and job type.I highly recommend Officium to anyone embarking on their job search journey.",
    name: "William Sam",
    title: "Empolyee",
  },
  {
    quote: "Officium isn't just your average job search website; it's a community. The forums and discussion boards provided a platform for professionals to share insights, tips, and advice.",
    name: "Edgar Allan Poe",
    title: "User",
  },
  {
    quote:
    "I've been using Officium for several years now, both as a job seeker and as a hiring manager.",
    name: "Jane Austen",
    title: "Hiring Manager",
  },
  {
    quote:
      "Officium isn't just another job website; it's a comprehensive platform designed to empower individuals at every stage of their career journey.",
    name: "Herman Melville",
    title: "User",
  },
];
