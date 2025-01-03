import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";
  

export default [
    index("routes/home.tsx"),
    ...prefix("concerts", [
    layout("./layouts/mobile-aumbc.tsx",[
        index("routes/mobile-home.tsx")
    ]) ])

] satisfies RouteConfig;
