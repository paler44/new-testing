import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("https://ml-panel-fe-dev-3.herokuapp.com/logowanie");
  const loginButton = page.locator(".button-primary");
  await expect(loginButton).toBeVisible();
  await page.type("#email", "test.testerski854@gmail.com");
  await page.type("#password", "Polka123");
  await page.click(".button-primary");
  await page.locator("button.button-primary-500").first().click();
  const orderHeader = page.locator(".page-header > h2");
  await expect(orderHeader).toContainText("Zamówienia");
  await page.locator("div.navigation-footer__user-icon").click();
  const logoutButton = page.locator("div.navigation-footer-link");
  await expect(logoutButton).toBeVisible();
  await logoutButton.click();
  await expect(loginButton).toContainText("dupa");
});
