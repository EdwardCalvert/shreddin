import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
} from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),
    ...prefix("app", [
    layout("./layouts/mobile-aumbc.tsx",[
        index("routes/app/event.jsx")
    ]) ])

] satisfies RouteConfig;
