import { TextAnimate } from "@/components/magicui/text-animate";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const ProfileCard = () => {
  return (
    <Card className="w-full max-w-screen-lg shadow-lg">
      <CardContent className="flex items-center gap-4">
        <div>
          <TextAnimate
            animation="blurIn"
            as="h1"
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black"
          >
            {`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
          </TextAnimate>
          <p className="text-gray-800 text-lg">{DATA.description}</p>
        </div>
        <Avatar className="size-28 border">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
