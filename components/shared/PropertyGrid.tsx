"use client";
import { Property } from "@/types";
import { JSX, useMemo, useState } from "react";
import PropertyCard from "@/components/shared/PropertyCard";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

interface PropertyGridProps {
  properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
}: PropertyGridProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProperties: Property[] = useMemo(() => {
    return properties.filter((property: Property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [properties, searchTerm]);

  return (
    <div>
      <div className="bg-[#92B6C8] flex flex-col items-center justify-center gap-12 px-4 py-8">
        <h1 className="text-white text-lg sm:text-2xl md:text-4xl text-center font-medium">
          Check Availability and Book Now
        </h1>
        <div className="flex flex-col gap-3 w-full max-w-[280px] sm:max-w-[300px]">
          <Label htmlFor="search" className="text-white uppercase">
            Search For a Property
          </Label>
          <Input
            className="bg-white focus-visible:ring-0 w-full"
            id="search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search properties..."
          />
        </div>
      </div>

      <section className="mx-auto px-4 py-8 max-w-6xl lg:mx-auto">
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#b45e30] text-lg">
              Oops! No properties found matching your search <b> :)</b>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map(({ id, name, images }: Property) => (
              <PropertyCard key={id} name={name} image={images[0]} id={id} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PropertyGrid;
