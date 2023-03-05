import { ComponentProps, useState } from "react";

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

interface DashboardMenuProps extends ComponentProps<typeof SideMenu> {
  selectedPage: string;
}

export const MENU = {
  HOME: { title: "Home", page: "home", icon: HomeIcon },
  DISCOVER: { title: "Discover", page: "discover", icon: DiscoverIcon },
  AWARDS: { title: "Awards", page: "awards", icon: AwardsIcon },
  CELEBRITIES: {
    title: "Celebrities",
    page: "celebrities",
    icon: CelebritiesIcon,
  },
};

const DashboardMenu: React.FC<DashboardMenuProps> = ({
  children,
  selectedPage,
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SideMenu
      collapsed={collapsed}
      onCollapsedChange={(value) => setCollapsed(value)}
    >
      <SideMenuGroup title="Menu">
        {Object.values(MENU).map(({ title, page, icon }) => (
          <SideMenuItem key={page} icon={icon} selected={selectedPage === page}>
            {title}
          </SideMenuItem>
        ))}
      </SideMenuGroup>
      <SideMenuGroup title="Library">
        <SideMenuItem icon={RecentIcon}>Recent</SideMenuItem>
        <SideMenuItem icon={TopRatedIcon}>Top Rated</SideMenuItem>
        <SideMenuItem icon={DownloadedIcon}>Downloaded</SideMenuItem>
        <SideMenuItem icon={PlaylistsIcon}>Playlists</SideMenuItem>
        <SideMenuItem icon={WatchlistIcon}>Watchlist</SideMenuItem>
        <SideMenuItem icon={CompletedIcon}>Completed</SideMenuItem>
      </SideMenuGroup>
      <SideMenuGroup title="General">
        <SideMenuItem icon={SettingsIcon}>Settings</SideMenuItem>
        <SideMenuItem icon={LogOutIcon}>Log out</SideMenuItem>
      </SideMenuGroup>
    </SideMenu>
  );
};

DashboardMenu.displayName = "DashboardMenu";

export default DashboardMenu;
