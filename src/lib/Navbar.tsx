"use client"
import React from 'react'
import Image from "next/image"

export function TestimonialCard() {
  const images = [
    { src: "/images/logos2.png", alt: "logos" },
  ];

  return (
    <div className="container mx-auto px-8">
      <div className="flex items-center justify-center border border-black">
        <div className="w-1/2 bg-white p-4 text-center">
          <div className="flex flex-wrap items-center justify-center border border-black">
            {images.map((image, index) => (
              <div key={index} className="flex flex-row p-4">
                <Image
                  className="border border-black"
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={350}
                  quality={75}
                />
              </div>
            ))}
          </div>
          <div className="p-8">
          <h2 className="text-3xl font-semibold text-center">Eclipse of Independent</h2>
          <div className="mt-8">
          <div className="grid grid-cols-2 gap-4 border border-black p-4">
            <div className="text-center mx-auto">
              The Eclipse of Independent collection in Northern Dreamscape reflects someones 
              <div className="text-center mx-auto">
              journey, who, through darkness and solitude, eventually finds warmth and support in human connection. 
              <div className="text-center mx-auto">
                Its designs incorporate elements from the northern wilderness, depicting the changing seasons and their personal journey. 
                <div className="text-center mx-auto">
                These garments serve as a reminder that true strength comes from the other
                 side when we choose to share burdens with others 
              and let the light into our lives.
              </div>
              </div>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
