import { TextAnimate } from "@/components/magicui/text-animate";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/data/resume";

const ProfileCard = () => {
  return (
    <Card className="w-full max-w-screen-lg p-6 shadow-lg">
      <CardContent className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/me.png" alt="Profile" />
          <AvatarFallback>D</AvatarFallback>
        </Avatar>
        <div>
          <TextAnimate
            animation="blurIn"
            as="h1"
            className="text-4xl font-bold"
          >
            {`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
          </TextAnimate>
          <p className="text-gray-800">{DATA.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
