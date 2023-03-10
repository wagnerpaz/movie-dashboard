import { GetServerSideProps, NextPage } from "next";

import type { NextPageWithLayout } from "/pages/_app";
import HomeLayout from "../layouts/HomeLayout";

import { ssrHelpers } from "/lib/ssrHelpers";
import configurationSSP from "/server-side-props/configurationSSP";

interface HomeProps {}

export default function Home({}: NextPageWithLayout<HomeProps>) {
  return null;
}

Home.Layout = HomeLayout;

export const getServerSideProps: GetServerSideProps = ssrHelpers.pipe(
  configurationSSP()
);
