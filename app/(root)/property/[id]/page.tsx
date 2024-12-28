"use client";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import React, { JSX } from "react";
import { PROPERTIES } from "@/constants";
import Image from "next/image";
import { Bath, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property as PropertyType } from "@/types";
import { NotFound } from "@/components/shared/NotFound";

const Property: NextPage = (): JSX.Element => {
  const params = useParams<{ id: string }>();

  const id = params.id as string;

  const property = PROPERTIES.find((p: PropertyType) => p.id.toString() === id);

  if (!property) {
    return (
      <NotFound
        title="Property Not Found"
        message="Sorry, we couldn't find the property you're looking for."
      />
    );
  }

  return (
    <div className="mx-auto px-4 py-8 pt-0 max-w-6xl lg:mx-auto ">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
            quality={100}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="nano:text-xl text-3xl md:text-4xl font-bold mb-4">
              {property.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {property.description}
            </p>
          </div>

          <div className="grid nano:grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-[#b45e30]" />
              <p className="text-sm text-gray-600">Standard Capacity</p>
              <p className="font-semibold">{property.standardPax} persons</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-[#b45e30]" />
              <p className="text-sm text-gray-600">Maximum Capacity</p>
              <p className="font-semibold">{property.maximumPax} persons</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Bath className="w-6 h-6 mx-auto mb-2 text-[#b45e30]" />
              <p className="text-sm text-gray-600">Bathrooms</p>
              <p className="font-semibold">{property.bathrooms}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Home className="w-6 h-6 mx-auto mb-2 text-[#b45e30]" />
              <p className="text-sm text-gray-600">Floor Area</p>
              <p className="font-semibold">{property.floorArea}m²</p>
            </div>
          </div>

          <div className="bg-gray-50 nano:p-0 sm:p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
            <div className="grid nano:grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(property.amenities).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span
                    className={`w-3 h-3 rounded-full ${
                      value ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  <span className="capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <Button className="transition-colors text-lg bg-[#b45e30] nano:px-2 nano:py-2 sm:py-6 nano:w-fit font-semibold sm:w-full py-8">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
