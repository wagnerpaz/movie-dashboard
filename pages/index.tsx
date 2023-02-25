import Head from "next/head";

import SideMenu from "/components/SideMenu/SideMenu";
import SideMenuGroup from "/components/SideMenu/SideMenuGroup";
import SideMenuItem from "/components/SideMenu/SideMenuItem";

import HomeIcon from "/icons/home.svg";
import DiscoverIcon from "/icons/discover.svg";
import AwardsIcon from "/icons/awards.svg";
import CelebritiesIcon from "/icons/celebrities.svg";

import RecentIcon from "/icons/recent.svg";
import TopRatedIcon from "/icons/top-rated.svg";
import DownloadedIcon from "/icons/downloaded.svg";
import PlaylistsIcon from "/icons/playlists.svg";
import WatchlistIcon from "/icons/watchlist.svg";
import CompletedIcon from "/icons/completed.svg";

import SettingsIcon from "/icons/settings.svg";
import LogOutIcon from "/icons/log-out.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-dark-2">
        <SideMenu>
          <SideMenuGroup title="Menu">
            <SideMenuItem icon={<HomeIcon />}>Home</SideMenuItem>
            <SideMenuItem icon={<DiscoverIcon />}>Discover</SideMenuItem>
            <SideMenuItem icon={<AwardsIcon />}>Awards</SideMenuItem>
            <SideMenuItem icon={<CelebritiesIcon />}>Celebrities</SideMenuItem>
          </SideMenuGroup>
          <SideMenuGroup title="Library">
            <SideMenuItem icon={<RecentIcon />}>Recent</SideMenuItem>
            <SideMenuItem icon={<TopRatedIcon />}>Top Rated</SideMenuItem>
            <SideMenuItem icon={<DownloadedIcon />}>Downloaded</SideMenuItem>
            <SideMenuItem icon={<PlaylistsIcon />}>Playlists</SideMenuItem>
            <SideMenuItem icon={<WatchlistIcon />}>Watchlist</SideMenuItem>
            <SideMenuItem icon={<CompletedIcon />}>Completed</SideMenuItem>
          </SideMenuGroup>
          <SideMenuGroup title="General">
            <SideMenuItem icon={<SettingsIcon />}>Settings</SideMenuItem>
            <SideMenuItem icon={<LogOutIcon />}>Log out</SideMenuItem>
          </SideMenuGroup>
        </SideMenu>
      </main>
    </>
  );
}
