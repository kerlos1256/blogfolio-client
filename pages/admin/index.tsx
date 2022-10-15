import { NavigationSidebar } from "@components";
import React from "react";

export default () => {
  return (
    <>
      <div className="grid grid-col-8">
        <div className="col-span-7">
          <NavigationSidebar
            links={[
              {
                icon: "",
                name: "Dashboard",
                onClick() {},
                slug: "dashboard",
                subLinks: [
                  {
                    icon: "",
                    name: "test",
                    slug: "test",
                    onClick() {},
                    subLinks: [],
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};
