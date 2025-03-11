interface AchievementProps {
  title: string;
  event: string;
  year: string;
  description: string;
}

const Achievement: React.FC<AchievementProps> = ({
  title,
  event,
  year,
  description,
}) => {
  return (
    <div className="bg-blue-50 shadow-md rounded-lg p-4 mb-4 w-full dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <h3 className="text-lg font-semibold text-blue-800 dark:text-white">{title}</h3>
      <p className="text-sm text-blue-600 dark:text-gray-100">
        {event} - {year}
      </p>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Achievement;
    