import PropertyGrid from "@/components/shared/PropertyGrid";
import { PROPERTIES } from "@/constants";
import { NextPage } from "next";
import { JSX } from "react";

const Home: NextPage = (): JSX.Element => {
  return <PropertyGrid properties={PROPERTIES} />;
};

export default Home;
