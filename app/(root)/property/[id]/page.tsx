"use client";
import { NextPage } from "next";
import { useParams, useRouter } from "next/navigation";
import React, { JSX } from "react";
import { PROPERTIES } from "@/constants";
import Image from "next/image";
import { ArrowLeft, Bath, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Property: NextPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const property = PROPERTIES.find((p) => p.id.toString() === id);

  if (!property) {
    return (
      <div className="min-h-[50vh] container mx-auto p-4 flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-[#b45e30]">
            Property Not Found
          </h1>
          <p className="text-gray-600">
            Sorry, we couldn&apos;t find the property you&apos;re looking for.
          </p>
          <Button
            onClick={() => router.push("/")}
            className="transition-colors bg-[#b45e30] text-white hover:bg-[#b45e30]"
          >
            <ArrowLeft size={20} />
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="relative h-[300px] md:h-[500px] w-full rounded-xl overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {property.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {property.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
            <Button className="transition-colors text-lg bg-[#b45e30] font-semibold w-full py-8">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
