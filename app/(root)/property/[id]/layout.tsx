import { Metadata } from "next";
import React, { JSX } from "react";
import { PROPERTIES } from "@/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const property = PROPERTIES.find((p) => p.id.toString() === id);

  if (!property) {
    return {
      title: "Property Not Found",
      description: "The requested property could not be found.",
    };
  }

  return {
    title: `${property.name}`,
    description: property.description,
  };
}

export default function PropertyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <>{children}</>;
}
