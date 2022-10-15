import { AccordionSummary, Accordion, AccordionDetails } from "@mui/material";
import { mapArray, runIfFn, useRouting } from "libs";
import React from "react";

export const NavigationSidebar: React.FC<{
  links: NavigationLink[];
}> = ({ links }) => {
  const { getCurrentPath } = useRouting();

  const _url = getCurrentPath();

  let currentUrl = _url[0] === "/" ? _url.slice(1) : _url;
  const routeSlugs = currentUrl.split("?")[0].split("/");

  return (
    <div className="w-full p-4 border-r border-opacity-20 border-r-black h-full gap-4">
      <Accordion>
        <NestedLinks
          canBeSelected={true}
          deepSlugs={[]}
          lastDeepNum={0}
          links={links}
          routeSlugs={routeSlugs}
        />
      </Accordion>
    </div>
  );
};

type NavigationLink = {
  name: string;
  icon: React.ReactNode;
  slug: string;
  onClick: () => void;
  subLinks: NavigationLink[];
};

const NestedLinks: React.FC<{
  links: NavigationLink[];
  routeSlugs: string[];
  lastDeepNum: number;
  deepSlugs: string[];
  canBeSelected: boolean;
}> = ({ lastDeepNum, links, routeSlugs, deepSlugs, canBeSelected }) => {
  const { visit } = useRouting();
  const currDeepNum = lastDeepNum + 1;

  return (
    <div className="flex flex-col gap-2 w-full">
      {mapArray(links, ({ icon, name, onClick, slug, subLinks }, i) => {
        const selected = routeSlugs[lastDeepNum] === slug && canBeSelected;

        return subLinks.length > 0 ? (
          <Accordion>
            <AccordionSummary
              className={`${
                lastDeepNum === 0 && selected
                  ? "text-white"
                  : selected
                  ? "text-primary"
                  : "text-black"
              }`}
            >
              <div
                style={{
                  paddingLeft: `${currDeepNum * 0.5}rem`,
                }}
                className={`${
                  selected
                    ? `${
                        lastDeepNum === 0
                          ? "bg-primary rounded text-white"
                          : "text-primary"
                      }`
                    : "text-black"
                } flex text-lg items-center py-2 gap-2`}
              >
                {runIfFn(icon)} {name}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <NestedLinks
                canBeSelected={selected}
                lastDeepNum={currDeepNum}
                links={subLinks}
                routeSlugs={routeSlugs}
                deepSlugs={[...deepSlugs, slug]}
              />
            </AccordionDetails>
          </Accordion>
        ) : (
          <div
            onClick={() =>
              visit((r) => r.addPath([...deepSlugs, slug].join("/")), false)
            }
            style={{
              paddingLeft: `${currDeepNum * 0.5}rem`,
            }}
            className={`${
              selected
                ? `${
                    lastDeepNum === 0
                      ? "bg-primary rounded text-white"
                      : "text-primary"
                  }`
                : "text-black"
            } flex text-lg items-center py-2 gap-2`}
          >
            {runIfFn(icon)} {name}
          </div>
        );
      })}
    </div>
  );
};
