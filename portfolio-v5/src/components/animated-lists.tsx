import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";
import { DATA2 } from "@/data/resume";
import Achievement from "./Achivements";

// Animated list
interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  title: string;
  year: string;
  event: string;
}

const AnimatedListDemo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden p-2 items-center",
        className
      )}
    >
      <AnimatedList>
        {DATA2.achievements.map((item, idx) => (
          <Achievement {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
};

export default AnimatedListDemo;
