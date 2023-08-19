import { MOVIE_IMAGE_PREFIX } from "@/core/constants";
import Image from "next/image";
import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="flex flex-col w-full h-full border border-black border-solid overflow-x-hidden">
      <img
        src={`${MOVIE_IMAGE_PREFIX}${movie.poster_path}`}
        alt="movie"
        className="max-h-[80%] object-cover"
      />
      <div className="p-[10px] border-t border-black border-solid flex-1 flex flex-col">
        <h3 className="text-[16px] font-bold m-0">{movie.title}</h3>
        <p className="text-[14px] m-0">{movie.overview.substring(0, 80)}...</p>
      </div>
    </div>
  );
}

export default MovieCard;
