import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["playwright-json-summary-reporter"],
    ["html"], // other reporters
  ],
});
