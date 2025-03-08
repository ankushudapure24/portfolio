import { TextAnimate } from "@/components/magicui/text-animate";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/data/resume";

const ProfileCard = () => {
  return (
    <Card className="w-full max-w-screen-lg text-white bg-gradient-to-r from-blue-50 to-indigo-200 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-md overflow-hidden p-6">
      <CardContent className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        {/* Avatar Section */}
        <Avatar className="size-32 border-4 border-white shadow-lg rounded-full">
          <AvatarImage
            alt={DATA.name}
            src={DATA.avatarUrl}
            className="rounded-full"
          />
          <AvatarFallback className="text-2xl font-semibold">
            {DATA.initials}
          </AvatarFallback>
        </Avatar>

        {/* Text Section */}
        <div className="text-center sm:text-left">
          <TextAnimate
            animation="fadeIn"
            as="h1"
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {`Hi, I'm ${DATA.name.split(" ")[0]}`}
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            className="text-gray-700 text-lg sm:text-xl mt-2 leading-relaxed dark:text-gray-400"
          >
            {DATA.description}
          </TextAnimate>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

