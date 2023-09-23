"use client"
import React, { useState } from 'react'
import Image from "next/image"

export function EclipseIndependent() {
  const images = [
    { src: "/images/front.png", alt: "front" },
    { src: "/images/ECPLISEINDEPENDENT.png", alt: "back" },
  ];

  const itemsPerPage = 1; // Jumlah gambar per halaman
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (indexOfLastItem < images.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-8">
      <div className="flex items-center justify-center border border-black">
        <div className="w-1/2 bg-white p-4 text-center">
          <div className="flex flex-wrap items-center justify-center border border-black">
            {currentImages.map((image, index) => (
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
          <div className="mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 mr-2 cursor-pointer text-3xl font-semibold text-center"
            >
              Previous
            </button>             
            <button
              onClick={nextPage}
              disabled={indexOfLastItem >= images.length}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer text-3xl font-semibold text-center mr-2"
            >
               Next
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};
