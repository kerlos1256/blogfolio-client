import React from "react";
import { PassPropsToChild } from "./PassPropsToChilds";

export function PassPropsToFnOrElem<Props>(
  valueOrFn: React.ReactNode | Function,
  props: Props
) {
  const isFn = typeof valueOrFn === "function";
  return isFn ? valueOrFn(props) : PassPropsToChild(valueOrFn, props);
}
