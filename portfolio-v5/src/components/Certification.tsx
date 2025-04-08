import Image from "next/image";
import { useState } from "react";

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
  return (
    <div className="flex flex-col items-center bg-white p-5 shadow-xl rounded-lg w-[500px] max-w-[320px] md:w-[700px] h-[420px] border border-gray-300 dark:border-gray-700 dark:bg-gray-900 transition-transform transform hover:scale-105">
      {imageUrl ? (
        <div className="w-full flex justify-center mb-4">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={150}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-[150px] mb-4"></div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-black dark:text-gray-50">
          {title}
        </h3>
        <p className="text-sm text-gray-600 font-medium dark:text-gray-200">
          <span className="font-bold text-gray-700 dark:text-gray-100">
            Issued by:
          </span>{" "}
          {issuer}
        </p>
        <p className="text-sm text-gray-600 italic dark:text-gray-200">
          {date}
        </p>
        <p className="mt-3 text-gray-700 leading-relaxed text-base dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Certification;
