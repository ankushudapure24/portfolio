import { useState } from "react";
import Image from "next/image";

interface AchievementProps {
  title: string;
  event: string;
  year: string;
  description: string;
  image?: string;
}

const Achievement: React.FC<AchievementProps> = ({
  title,
  event,
  year,
  description,
  image,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!image) return null;

  return (
    <>
      <div className="flex bg-white shadow-md rounded-xl p-4 mb-4 w-full items-center justify-between gap-4 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-blue-600 dark:text-gray-100">
            {event} - {year}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
        </div>

        <div
          className="min-w-[120px] max-w-[160px] h-auto relative rounded-md overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src={image}
            alt={title}
            width={160}
            height={120}
            className="rounded-md object-cover"
            style={{ height: "auto", width: "100%" }}
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setIsOpen(false)}
        >
          <div className="max-w-3xl w-full p-4">
            <Image
              src={image}
              alt={title}
              width={1200}
              height={800}
              className="rounded-lg object-contain w-full h-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Achievement;

