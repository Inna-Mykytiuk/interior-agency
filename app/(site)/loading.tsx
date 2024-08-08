import React from "react";
import Loader from "@/components/Loader";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-mainBcg">
      <Loader />
    </div>
  );
}
