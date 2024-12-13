import React from "react";
import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("FirstTime");
  });
  return <div>BasicEffect|| Pleace check console.</div>;
};

export default BasicEffect;
