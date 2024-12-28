import React from "react";
import { NotFound as NotExist } from "@/components/shared/NotFound";

const NotFound = () => {
  return (
    <NotExist
      title="Page Not Found"
      message="Sorry, we couldn't find the page you're looking for."
    />
  );
};

export default NotFound;
