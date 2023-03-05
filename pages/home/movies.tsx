import { GetServerSideProps } from "next";

import type { NextPageWithLayout } from "/pages/_app";
import HomeLayout from "/layouts/HomeLayout";

import { ssrHelpers } from "/lib/ssrHelpers";
import configurationSSP from "/server-side-props/configurationSSP";

interface HomeProps {}

export default function Movies({}: NextPageWithLayout<HomeProps>) {
  return <div>Welcome to Movies Page</div>;
}

Movies.Layout = HomeLayout;

export const getServerSideProps: GetServerSideProps = ssrHelpers.pipe(
  configurationSSP()
);
