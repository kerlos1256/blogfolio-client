import React from "react";

export type MaybeFn<T> = React.ReactNode | ((props: T) => React.ReactNode);

export function runIfFn<TProps>(
  valueOrFn: MaybeFn<TProps>,
  props: TProps = {} as TProps
) {
  const isFn = typeof valueOrFn === "function";
  return isFn ? valueOrFn(props) : valueOrFn;
}
