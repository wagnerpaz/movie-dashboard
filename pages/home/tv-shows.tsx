import { GetServerSideProps } from "next";

import type { NextPageWithLayout } from "/pages/_app";
import HomeLayout from "/layouts/HomeLayout";
import WatchCarrousel from "/components/WatchCarrousel/WatchCarrousel";

import { ssrHelpers } from "/lib/ssrHelpers";
import configurationSSP from "/server-side-props/configurationSSP";
import tvPopularSSP from "/server-side-props/tvPopuparSSP";
import WatchCarrouselEntry from "/components/WatchCarrousel/WatchCarrouselEntry";
import WatchGrid from "/components/WatchGrid/WatchGrid";
import WatchGridItem from "/components/WatchGrid/WatchGridItem";

interface TvShowsProps {
  apiConfig: any;
  tv: any;
}

const TvShows: NextPageWithLayout<TvShowsProps> = ({ apiConfig, tv }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <WatchCarrousel autoScroll>
        {tv.popular1.results.map((current: any) => (
          <WatchCarrouselEntry
            key={current.name}
            title={current.name}
            imageUrl={`${apiConfig.images.base_url}w1280${current.backdrop_path}`}
          />
        ))}
      </WatchCarrousel>
      <div className="font-lato text-2xl">Popular on Movies Dashboard</div>
      <WatchGrid>
        {tv.popular2.results.map((current: any) => (
          <WatchGridItem
            key={current.name}
            title={current.name}
            imageUrl={`${apiConfig.images.base_url}w342${current.poster_path}`}
          />
        ))}
      </WatchGrid>
    </div>
  );
};

TvShows.Layout = HomeLayout;

export default TvShows;

export const getServerSideProps: GetServerSideProps = ssrHelpers.pipe(
  configurationSSP(),
  tvPopularSSP()
);
