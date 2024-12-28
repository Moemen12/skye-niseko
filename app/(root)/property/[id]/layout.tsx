import { Metadata } from "next";
import React from "react";
import { PROPERTIES } from "@/constants";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = params;

  const property = PROPERTIES.find((p) => p.id.toString() === id);

  if (!property) {
    return {
      title: "Property Not Found",
      description: "The requested property could not be found.",
    };
  }

  return {
    title: property.name,
    description: property.description,
  };
}

export default function PropertyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const property = PROPERTIES.find((p) => p.id.toString() === params.id);

  if (!property) {
    notFound();
  }

  return <>{children}</>;
}
