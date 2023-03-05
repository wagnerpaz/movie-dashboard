import { GetServerSideProps } from "next";

import type { NextPageWithLayout } from "/pages/_app";
import HomeLayout from "/layouts/HomeLayout";

import { ssrHelpers } from "/lib/ssrHelpers";
import configurationSSP from "/server-side-props/configurationSSP";

interface HomeProps {}

export default function Anime({}: NextPageWithLayout<HomeProps>) {
  return <div>Welcome to Anime Page</div>;
}

Anime.Layout = HomeLayout;

export const getServerSideProps: GetServerSideProps = ssrHelpers.pipe(
  configurationSSP()
);
