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
  return (
    <div className="flex flex-col items-center bg-white p-5 shadow-xl rounded-lg w-[500px] md:w-[700px] h-[450px] border dark:border-gray-50/[.1] transition-transform transform hover:scale-105">
      {imageUrl ? (
        <div className="w-full flex justify-center mb-2">
          <Image
            src={imageUrl}
            alt={title}
            width={200}
            height={150}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-[150px] mb-4"></div> // Keeps space even if no image
      )}

      <div className="text-center">
        <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-600 font-medium">
          <span className="font-bold text-gray-700">Issued by:</span> {issuer}
        </p>
        <p className="text-sm text-gray-600 italic">{date}</p>
        <p className="mt-3 text-gray-700 leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Certification;
