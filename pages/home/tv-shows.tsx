import { FC } from "react";
import { GetServerSideProps } from "next";

import type { NextPageWithLayout } from "/pages/_app";
import HomeLayout from "/layouts/HomeLayout";
import WatchCarrousel from "/components/WatchCarrousel/WatchCarrousel";

import { ssrHelpers } from "/lib/ssrHelpers";
import configurationSSP from "/server-side-props/configurationSSP";
import tvPopularSSP from "/server-side-props/tvPopuparSSP";
import tvGenresSSP from "/server-side-props/tvGenresSSP";
import WatchCarrouselEntry from "/components/WatchCarrousel/WatchCarrouselEntry";
import WatchGrid from "/components/WatchGrid/WatchGrid";
import WatchGridItem from "/components/WatchGrid/WatchGridItem";
import LabeledSlider from "/components/LabeledSlider/LabeledSlider";
import LabeledSliderItem from "/components/LabeledSlider/LabeledSliderItem";

interface TvShowsProps {
  apiConfig: any;
  tv: any;
}

const TvShowsMain: FC<TvShowsProps> = ({ apiConfig, tv }) => {
  return (
    <div key="main" className="grid grid-cols-1 gap-6">
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
            vote={current.vote_average}
            overview={current.overview}
          />
        ))}
      </WatchGrid>
    </div>
  );
};

const TvShowsRightPanel: FC<TvShowsProps> = ({ tv }) => {
  return (
    <div key="right">
      <LabeledSlider className="m-4">
        {tv.genres.map((genre: any) => (
          <LabeledSliderItem
            key={genre.id}
            label={genre.name}
            imageUrl={encodeURI(
              `https://source.unsplash.com/random/500x500/?${genre.name}`
            )}
          />
        ))}
      </LabeledSlider>
    </div>
  );
};

const TvShows: NextPageWithLayout<TvShowsProps> = ({ section, ...props }) => {
  return section === "rightPanel" ? // <TvShowsRightPanel {...props} />
  null : (
    <TvShowsMain {...props} />
  );
};

TvShows.Layout = HomeLayout;

export default TvShows;

export const getServerSideProps: GetServerSideProps = ssrHelpers.pipe(
  configurationSSP(),
  tvPopularSSP(),
  tvGenresSSP()
);
