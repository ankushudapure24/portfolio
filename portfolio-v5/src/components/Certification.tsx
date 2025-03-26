import Image from "next/image";
import { useState } from "react";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl?: string; // Optional prop
}

const Certification: React.FC<CertificationProps> = ({
  title,
  issuer,
  date,
  description,
  imageUrl,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex bg-white shadow-lg rounded-lg p-4 mb-4 w-full dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <div className="flex-1 pr-4">
        <h3 className="text-lg text-blue-800 font-semibold dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-100">
          Issued by: {issuer}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-100">{date}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      </div>

      {!imageError && imageUrl && (
        <div className="flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            width={100}
            height={80}
            className="hidden md:flex rounded-lg shadow-md"
            onError={() => setImageError(true)} // Hide image if there's an error
          />
        </div>
      )}
    </div>
  );
};

export default Certification;
