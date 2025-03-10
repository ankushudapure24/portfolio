interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const Certification: React.FC<CertificationProps> = ({
  title,
  issuer,
  date,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full max-w-lg">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">Issued by: {issuer}</p>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default Certification;

