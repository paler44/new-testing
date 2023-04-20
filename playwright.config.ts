import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["list"],
    ["playwright-json-summary-reporter"],
    ["html"], // other reporters
  ],
});
