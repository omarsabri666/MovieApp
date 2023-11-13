import { useQuery } from "@tanstack/react-query";
import { getTopSeriesDetails } from "../api/api";
import Loader from "../componots/Loader";
import SriesItem from "../componots/seriesItem";

function Series() {
    const { data, isLoading } = useQuery({
      queryFn: getTopSeriesDetails,
      queryKey: ["topS"],
    });
    console.log(data);
    if (isLoading)
      return (
        <div className=" flex justify-center items-center">
          <Loader />
        </div>
      );
    return (
      <div className=" gap-8 mt-10 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-6 ">
        {data?.map((series) => (
          <SriesItem key={series.imdbid} series={series} />
        ))}
      </div>
    );
}

export default Series
