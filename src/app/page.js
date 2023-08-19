import { API_KEY, API_URL } from "@/core/constants";
import Carousel from "./components/Carousel";

export const fetchMovies = async () => {
  try {
    // Fetching movies data
    const res = await fetch(`${API_URL}?api_key=${API_KEY}&language=en-US`);
    const data = await res.json();

    // Slicing the original data to just 10 movies.
    return data.results.slice(0, 10);
  } catch (err) {
    console.log(err);
  }
};

export default async function Home() {
  const data = await fetchMovies();

  return (
    <div className="pt-[100px]">
      <Carousel movieData={data} />
    </div>
  );
}
