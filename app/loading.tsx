// components/loading.tsx
"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <h1 className="text-white text-xl font-bold animate-pulse">
        Ładowanie...
      </h1>
    </div>
  );
}
