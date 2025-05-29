import Link from "next/link";
import Image from "next/image";

interface AnnouncmentCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  slug: string;
}

const AnnouncmentCard: React.FC<AnnouncmentCardProps> = ({
  imageUrl,
  title,
  subtitle,
  slug,
}) => {
  return (
    <Link href={`/ogloszenia/${slug}`}>
      <div className="group max-w-m shadow-lg overflow-hidden bg-white cursor-pointer">
        <div className="overflow-hidden">
          {imageUrl ? (
            <Image
              width={500}
              height={500}
              src={imageUrl}
              alt="Announcement image"
              className="w-[280px] sm:w-[300px] md:w-[320px] shadow-lg aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-[280px] sm:w-[300px] md:w-[320px] bg-gray-200 aspect-square flex items-center justify-center text-gray-500">
              No image
            </div>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <h3 className="text-md text-gray-600">{subtitle}</h3>
        </div>
      </div>
    </Link>
  );
};

export default AnnouncmentCard;
