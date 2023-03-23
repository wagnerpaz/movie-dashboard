import React, { ComponentProps, FC, ReactElement, ReactNode } from "react";

import DashboardMenu, { MENU } from "/components/DashboardMenu";
import TabGroup from "/components/Tabs/TabGroup";
import TabList from "/components/Tabs/TabList";
import Tab from "/components/Tabs/Tab";
import TabPanels from "/components/Tabs/TabPanels";
import TabPanel from "/components/Tabs/TabPanel";
import { useRouter } from "next/router";

const TABS = {
  MOVIES: { label: "Movies", section: `/${MENU.HOME.page}/movies` },
  TV_SHOWS: { label: "TV Shows", section: `/${MENU.HOME.page}/tv-shows` },
  ANIME: { label: "Anime", section: `/${MENU.HOME.page}/anime` },
};

interface DashboardLayoutProps extends ComponentProps<"div"> {}

const HomeLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const router = useRouter();
  const selectedTabIndex = Object.values(TABS).findIndex(
    (f) => router.pathname === f.section
  );

  const section = (id: string) =>
    React.Children.map(children, (child) =>
      React.cloneElement(child as ReactElement, { section: id })
    );

  const rightPanelSection = section("rightPanel");

  return (
    <div className="flex flex-row bg-dark-2">
      <DashboardMenu selectedPage={MENU.HOME.page} />
      <main className="flex-1 px-16 py-8">
        <TabGroup
          selectedIndex={selectedTabIndex}
          onChange={(index: number) => {
            const found = Object.values(TABS)[index];
            router.push(found ? found.section : TABS.MOVIES.section);
          }}
        >
          <TabList className="sticky top-0 bg-dark-2 z-10">
            {Object.values(TABS).map(({ label, section }) => (
              <Tab key={section} onClick={() => router.push(section)}>
                {label}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="flex justify-center text-white-1 relative mt-8">
            {Object.values(TABS).map(({ section }, index) => (
              <TabPanel key={section}>
                {selectedTabIndex === index ? children : null}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </main>
      {rightPanelSection && (
        <aside className="flex-1 bg-dark-1">{rightPanelSection}</aside>
      )}
    </div>
  );
};

export default HomeLayout;
