import React, { JSX } from "react";
import { NextPage } from "next";

interface CardProps {
   children:React.ReactNode;
}

const Card: NextPage<CardProps> = ({ children }:CardProps): JSX.Element => {
  return <article>
      {children}
  </article>;
};

export default Card;