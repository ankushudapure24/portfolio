import Image from "next/image";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";

// Reusable Component for Each Education Entry
const EducationItem = ({ school, href, degree, logoUrl, start, end }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border flex items-center justify-between p-4 w-full h-24",
        // Light mode styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] bg-white",
        // Dark mode styles
        "dark:border-gray-50/[.1] dark:bg-gray-900 dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center gap-4">
        <Image
          src={logoUrl}
          alt={school}
          width={60}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{school}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{degree}</p>
        </div>
      </div>
      
      {/* Date Section */}
      <div className="text-right text-gray-500 text-sm">
        <p>{start} - {end ? end : "Present"}</p>
      </div>

      {/* <BorderBeam /> */}
    </a>
  );
};

export default EducationItem;


// Main Education Section Component
// const EducationSection = () => {
//   return (
//     <section>
//       <h2 className="text-xl font-bold mb-4">Education</h2>
//       <div className="space-y-4">
//         {DATA.education.map((edu, index) => (
//           <EducationItem key={index} {...edu} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EducationSection;

