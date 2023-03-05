import { GetServerSideProps } from "next";

import type { NextPageWithLayout } from "/pages/_app";
import HomeLayout from "/layouts/HomeLayout";
import WatchCarrousel from "/components/WatchCarrousel/WatchCarrousel";

import { ssrHelpers } from "/lib/ssrHelpers";
import configurationSSP from "/server-side-props/configurationSSP";
import tvPopularSSP from "/server-side-props/tvPopuparSSP";
import WatchCarrouselEntry from "/components/WatchCarrousel/WatchCarrouselEntry";

interface TvShowsProps {
  apiConfig: any;
  tv: any;
}

const TvShows: NextPageWithLayout<TvShowsProps> = ({ apiConfig, tv }) => {
  return (
    <WatchCarrousel>
      {tv.popular.results.map((current: any) => (
        <WatchCarrouselEntry
          key={current.name}
          title={current.name}
          imageUrl={`${apiConfig.images.base_url}w1280${current.backdrop_path}`}
          imageWidth={1280}
          imageHeight={720}
        />
      ))}
    </WatchCarrousel>
  );
};

TvShows.Layout = HomeLayout;

export default TvShows;

export const getServerSideProps: GetServerSideProps = ssrHelpers.pipe(
  configurationSSP(),
  tvPopularSSP()
);
