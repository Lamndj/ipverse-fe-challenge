import { MOVIE_IMAGE_PREFIX } from "@/core/constants";
import React from "react";

function MovieModal({ movie, onClose }) {
  const modalRef = React.useRef(null);

  const closeDialog = (e) => {
    modalRef.current.classList.replace("animate-bottomIn", "animate-bottomOut");
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div
      onClick={closeDialog}
      className="
          h-screen
          w-screen
          flex
          items-center
          justify-center
          z-[1000]
          bg-black/[0.65]
          fixed
          top-0
          right-0
      "
    >
      {/* dialog box */}
      <div
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        className="p-[50px] w-[800px] h-[600px] flex flex-col gap-[10px] overflow-y-auto bg-white rounded-lg relative
        animate-bottomIn
        duration-[300ms]
        transition 
        ease-in-out 
        "
      >
        <p
          onClick={closeDialog}
          className="absolute right-[20px] top-[10px] cursor-pointer text-[24px]"
        >
          x
        </p>
        <img
          src={`${MOVIE_IMAGE_PREFIX}${movie.backdrop_path}`}
          alt="movie"
          className="w-full object-cover"
        />
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[16px] font-bold m-0">{movie.title}</h3>
          <p className="text-[14px] m-0">{movie.overview}</p>
          <p className="text-[14px] m-0">Release Date: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
