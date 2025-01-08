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
    layout("./layouts/mobile-aumbc.jsx",[

        route("event","routes/app/event.jsx"),
        route("event/details", "routes/app/event-details.jsx"),
        route("event/join-in", "routes/app/join-in.jsx"),

        route("settle-up", "routes/app/settle-up.jsx"),

        route("locations", "routes/app/locations.jsx"),
        
        route("medical", "routes/app/medical.jsx"),
        route("medical/me", "routes/app/my-medical.jsx"),

        route("profile", "routes/app/profile.jsx")
    ]) ])

] satisfies RouteConfig;
