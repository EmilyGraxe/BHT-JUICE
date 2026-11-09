import { createFileRoute, redirect } from "@tanstack/react-router";

// The BHT Juice site is plain HTML/CSS/JS served from public/bht.html.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BHT Juice | Fresh Flavors, Naturally Refreshing" },
      { name: "description", content: "Fresh fruit juices in Muyenga, Kampala. Order on WhatsApp." },
      { property: "og:title", content: "BHT Juice | Fresh Flavors, Naturally Refreshing" },
      { property: "og:description", content: "Fresh fruit juices in Muyenga, Kampala. Order on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ href: "/bht.html" });
  },
});
