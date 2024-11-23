import { useQuery } from "@tanstack/react-query";
import { getMoviesService } from "./getMoviesService";

export default function Slot() {
  const { data } = useQuery({
    queryKey: ["movies"],
    queryFn: getMoviesService,
  });
  console.log(data);

  return <div>isla</div>;
}
