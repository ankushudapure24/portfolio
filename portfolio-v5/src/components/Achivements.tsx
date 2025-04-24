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
        <div className="flex flex-col sm:flex-row-reverse bg-white shadow-lg rounded-2xl p-4 sm:p-6 mb-6 w-full items-center sm:items-start justify-between gap-4 sm:gap-6 dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transition-all duration-300">
          {/* Image Section (Top on mobile, Right on larger screens) */}
          <div
            className="w-full sm:min-w-[180px] sm:max-w-[240px] h-auto relative rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={image}
              alt={title}
              width={240}
              height={160}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col flex-grow text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm sm:text-md text-blue-600 dark:text-gray-100 font-medium mt-1">
              {event} - {year}
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-full max-w-5xl p-4 sm:p-6">
              <Image
                src={image}
                alt={title}
                width={1400}
                height={900}
                className="rounded-2xl object-contain w-full h-auto"
              />
            </div>
          </div>
        )}
      </>
    );
  };

  export default Achievement;
