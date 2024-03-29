import { TPipeGetServerSideProps } from "lib/ssrHelpers";
import axiosInstance from "/lib/axiosInstance";

const tvPopularSSP = (): TPipeGetServerSideProps => async (context, input) => {
  const [{ data: popular1 }, { data: popular2 }] = await Promise.all([
    axiosInstance.get("/tv/popular"),
    axiosInstance.get("/tv/popular?page=2"),
  ]);

  const filterMissingInfo = (f: any) => f.backdrop_path && f.overview;
  popular1.results = popular1.results.filter(filterMissingInfo);
  popular2.results = popular2.results.filter(filterMissingInfo);

  // merge props and pass down to the next function
  return {
    props: {
      ...input.props,
      tv: { ...input.props.tv, popular1, popular2 },
    },
  };
};

export default tvPopularSSP;
