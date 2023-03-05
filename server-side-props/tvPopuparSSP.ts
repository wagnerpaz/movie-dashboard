import { TPipeGetServerSideProps } from "lib/ssrHelpers";
import axiosInstance from "/lib/axiosInstance";

const tvPopularSSP = (): TPipeGetServerSideProps => async (context, input) => {
  const { data: popular } = await axiosInstance.get("/tv/popular");

  // merge props and pass down to the next function
  return {
    props: {
      ...input.props,
      tv: { ...input.props.tv, popular },
    },
  };
};

export default tvPopularSSP;
