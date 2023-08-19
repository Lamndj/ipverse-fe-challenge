"use client";
import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./CustomModal";

const ResponsiveBreakpoints = {
  desktop: 5,
  tablet: 3,
  mobile: 1,
};

function Carousel({ movieData }) {
  const containerRef = React.useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getNumberOfElementsFromWidth = (width) => {
    if (width > 1024) {
      return ResponsiveBreakpoints.desktop;
    }
    if (width > 768 && width < 1023) {
      return ResponsiveBreakpoints.tablet;
    }
    if (width < 768) {
      return ResponsiveBreakpoints.mobile;
    }
  };

  const scrollToNextBatch = () => {
    const validNumberOfElements = getNumberOfElementsFromWidth(
      window.innerWidth
    );
    const oneElementScrollAmount = window.innerWidth / validNumberOfElements;
    containerRef.current.scrollLeft +=
      oneElementScrollAmount * validNumberOfElements;
  };

  const scrollToPrevBatch = () => {
    const validNumberOfElements = getNumberOfElementsFromWidth(
      window.innerWidth
    );
    const oneElementScrollAmount = window.innerWidth / validNumberOfElements;
    containerRef.current.scrollLeft -=
      oneElementScrollAmount * validNumberOfElements;
  };

  return (
    <>
      {selectedMovie ? (
        <>
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        </>
      ) : (
        <></>
      )}
      <div className="flex items-center w-full h-[450px] group relative">
        {/* Previous button */}
        <div
          className="h-full pl-[15px] pr-[15px] text-white flex items-center justify-center cursor-pointer absolute left-0 bg-black/[0.5] invisible group-hover:visible"
          onClick={scrollToPrevBatch}
        >
          {"<"}
        </div>

        <div
          className="flex items-center w-full h-full flex-1  overflow-x-auto"
          ref={containerRef}
        >
          {/* Actual data */}
          {movieData?.map((movie, index) => {
            return (
              <div
                key={movie.id}
                onClick={() => setSelectedMovie(movie)}
                className={`
                h-full 
                cursor-pointer
                lg:min-w-[calc(100vw/5)] lg:max-w-[calc(100vw/5)] 
                md:min-w-[calc(100vw/3)] md:max-w-[calc(100vw/3)]
                min-w-[calc(100vw/1)] max-w-[calc(100vw/1)]
                `}
              >
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>

        {/* Next button */}
        <div
          className="h-full pl-[15px] pr-[15px] text-white flex items-center justify-center cursor-pointer absolute right-0 bg-black/[0.5] invisible group-hover:visible"
          onClick={scrollToNextBatch}
        >
          {">"}
        </div>
      </div>
    </>
  );
}

export default Carousel;
