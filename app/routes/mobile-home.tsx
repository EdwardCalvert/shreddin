import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shreddin'" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function MobileHome() {
  return <h1>Welcome to AUMBC</h1>;
}
