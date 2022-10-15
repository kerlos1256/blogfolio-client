import React from "react";
import { RoutesType } from "../routes";

interface RoutingContextInterface {
  routesObject: Record<string, (...props: any) => RoutesType>;
  visit: (url: string) => any;
  getCurrentPath: () => string;
  getParam: (param: string) => string | null;
  getQuery: () => any;
  getBaseUrl: () => string;
  // removeParam: (param: string) => any;
  // getParams:(params:string[])=> string[]
  // getHash:()=> string
}

export const routingContext = React.createContext<RoutingContextInterface>({
  visit: () => {},
  getCurrentPath: () => "",
  getParam: (param) => "",
  getQuery: () => {},
  getBaseUrl: () => "",
  // removeParam: () => {},
  routesObject: {},
});

export const RoutingProvider: React.FC<RoutingContextInterface> = ({
  visit,
  getCurrentPath,
  getParam,
  // removeParam,
  getQuery,
  getBaseUrl,
  routesObject,
  ...props
}) => {
  return (
    <routingContext.Provider
      value={{
        visit,
        getCurrentPath,
        getParam,
        getQuery,
        getBaseUrl,
        routesObject,
      }}
      {...props}
    />
  );
};
