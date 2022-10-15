export type RoutesType = MainRouterInterface;
export type RoutingQueryType = Record<string, string>;
export type MainRouterInterface = {
  route: string;
  query: RoutingQueryType;
  addQuery: (query: RoutingQueryType) => RoutesType;
  removeQuery: (query: string) => RoutesType;
  id: (id: string) => RoutesType;
  addPath: (path: string) => RoutesType;
}

export const MainRoutes: MainRouterInterface = {
  route: "",
  query: {},
  addPath(path: string) {
    this.route = `${this.route}/${path}`;
    return this;
  },
  id(id: string) {
    this.addPath(id);
    return this;
  },
  
  addQuery(query: RoutingQueryType) {
    this.query = { ...this.query, ...query };
    return this;
  },
  removeQuery(query) {
    delete this.query[query];
    return this;
  },
};
