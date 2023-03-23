import { TPipeGetServerSideProps } from "lib/ssrHelpers";
import axiosInstance from "/lib/axiosInstance";

const tvGenresSSP = (): TPipeGetServerSideProps => async (context, input) => {
  const {
    data: { genres },
  } = await axiosInstance.get("/genre/tv/list");

  // merge props and pass down to the next function
  return {
    props: {
      ...input.props,
      tv: { ...input.props.tv, genres },
    },
  };
};

export default tvGenresSSP;
