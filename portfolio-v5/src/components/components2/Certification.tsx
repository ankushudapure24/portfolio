import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { BorderBeam } from "../magicui/border-beam";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl?: string;
}

const Certification: React.FC<CertificationProps> = ({
  title,
  issuer,
  date,
  description,
  imageUrl,
}) => {
  if (!imageUrl) return null;

  return (
    <Card className="relative w-[90%] max-w-[300px] md:w-[380px] md:max-w-md h-[400px] md:h-[520px] glass-card p-0 overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 backdrop-blur-xl rounded-xl">
      <div className="absolute inset-0 rounded-xl border border-transparent [background:linear-gradient(120deg,#00e0ff,#8a2be2)] opacity-15" />

      <div className="relative h-40 md:h-56 bg-black rounded-t-xl overflow-hidden z-10 m-2">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <CardHeader className="z-10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
        <CardTitle className="text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-gray-100">
          {title}
        </CardTitle>
        <CardDescription className="text-center text-sm md:text-base text-gray-700 dark:text-gray-300">
          Issued by <span className="font-semibold">{issuer}</span>. <br />
          <em>{date}</em>
        </CardDescription>
      </CardHeader>

      <CardContent className="text-sm md:text-base font-[cursive] text-gray-700 dark:text-gray-300 px-4 md:px-5 pb-4 md:pb-6 text-center z-10 m-2 md:m-4">
        {description}
      </CardContent>

      <BorderBeam />
    </Card>
  );
};

export default Certification;
