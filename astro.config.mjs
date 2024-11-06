// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

const site = "https://javisin22.github.io";
const base = "/portfolio";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [tailwind()],
});
