// import { cn } from "@/lib/utils";
// import { Marquee } from "@/components/magicui/marquee";

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
// ];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({
//   img,
//   name,
//   username,
//   body,
// }: {
//   img: string;
//   name: string;
//   username: string;
//   body: string;
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// export function MarqueeDemoVertical() {

//   return (
//     <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
//       <Marquee pauseOnHover className="[--duration:15s] flex">
//         {reviews.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//       <Marquee reverse pauseOnHover className="[--duration:20s] flex">
//         {reviews.map((review) => (
//           <ReviewCard key={review.username} {...review} />
//         ))}
//       </Marquee>
//     </div>
//   );
// }

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { DATA } from "@/data/resume";
import Image from "next/image";

console.log(Marquee);

const WorkCard = ({
  company,
  title,
  logoUrl,
  start,
  end,
}: {
  company: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4 flex items-center gap-4",
        // Light mode styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // Dark mode styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <Image
        src={logoUrl}
        alt={company}
        width={48}
        height={48}
        className="h-12 w-12 rounded-lg object-contain"
      />
      <div className="flex flex-col">
        <figcaption className="text-lg font-semibold dark:text-white">
          {company}
        </figcaption>
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {start} - {end}
        </p>
      </div>
    </figure>
  );
};

export function MarqueeWorkExperience() {
  return (
    <section className="p-6 bg-gray-100 rounded-xl max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Work Experince</h2>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:15s] flex">
          {DATA.work.map((job) => (
            <WorkCard key={job.company} {...job} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] flex">
          {DATA.work.map((job) => (
            <WorkCard key={job.company} {...job} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

