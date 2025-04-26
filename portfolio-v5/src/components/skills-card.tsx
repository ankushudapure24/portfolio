import { RetroGrid } from "./magicui/retro-grid";
import Image from "next/image";
import { BorderBeam } from "./magicui/border-beam";
import { DATA } from "@/data/resume";

const SkillsCard = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <div className="absolute inset-0 z-0">
        <RetroGrid />
      </div>
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-10">
        {DATA.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={skill.icons_url}
              alt={skill.name}
              width={50}
              height={50}
              className="mb-2"
            />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
      <BorderBeam />
    </div>
  );
};

export default SkillsCard;

<section id="skills" className="py-8">
  {/* <div className="flex min-h-0 flex-col gap-y-3"> */}
</section>;
