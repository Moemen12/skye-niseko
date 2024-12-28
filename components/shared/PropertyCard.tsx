import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: string;
  name: string;
  image: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  name,
  image,
}: PropertyCardProps): JSX.Element => {
  return (
    <Link href={`/property/${id}`}>
      <article className="relative rounded-lg overflow-hidden shadow-lg group">
        <figure className="relative h-64 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white truncate font-semibold">{name}</h3>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
};

export default PropertyCard;
