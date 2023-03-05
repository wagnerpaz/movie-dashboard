import { TPipeGetServerSideProps } from "lib/ssrHelpers";

const configurationSSP =
  (): TPipeGetServerSideProps => async (context, input) => {
    // merge props and pass down to the next function
    return {
      props: {
        ...input.props,
        apiConfig: JSON.parse(process.env.API_CONFIGURATION || ""),
      },
    };
  };

export default configurationSSP;
