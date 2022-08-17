import React from "react";
import CardSettings from "./Cards/CardSettings.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
      </div>
    </>
  );
}
