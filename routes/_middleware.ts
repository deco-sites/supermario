import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 602,
  site: "supermario",
  domains: ["supermario.deco.site"],
});