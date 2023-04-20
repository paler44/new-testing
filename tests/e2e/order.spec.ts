// @ts-check
import { test, expect } from "@playwright/test";
test("TODO: name test", async ({ page }) => {
  await page.goto("https://ml-panel-fe-dev-3.herokuapp.com/logowanie");
  const loginButton = page.locator(".button-primary");
  await expect(loginButton).toBeVisible();
  await page.type("#email", "test.testerski854@gmail.com");
  await page.type("#password", "Polka123");
  await page.click(".button-primary");
  await page.locator("button.button-primary-500").first().click();
  const orderHeader = page.locator(".page-header > h2");
  await expect(orderHeader).toContainText("Zamówienia");
  await expect(page.url()).toEqual("https://ml-panel-fe-dev-3.herokuapp.com/");

  await page.locator(`div:text-is("Nowe zamówienie")`).click();
  //  await expect(page.url()).toEqual('https://ml-panel-fe-dev-3.herokuapp.com/nowe-zamowienie')
  await page.locator(".fa-chevron-down").first().click();
  await page.getByRole("option", { name: "KETO" }).click();
  await page.locator(".fa-chevron-down").nth(1).click();
  await page.getByRole("option", { name: "1000" }).click();
  await page.locator(".is-available-for-edit").first().click();
  await page.locator('input[type="text"]').fill("10");
  await page
    .getByRole("listitem")
    .filter({ hasText: "Warszawa, ul. dsadsadas 2w" })
    .click();
  await page.getByRole("button", { name: "Przejdź dalej" }).click();

  // await page.locator('#downshift-10-item-0').click()
  // await page.locator(`div:text-is("Wybierz...")`).click()
  // await page.locator('#downshift-11-item-0').click()
  //  await page.locator(`div:text-is("22")`).click()
  //  await page.locator(`button:text-is("Przejdź dalej")`).click()
  //  await expect(page.url()).toEqual('https://ml-panel-fe-dev-3.herokuapp.com/wybierz-dodatki')
  //  await page.locator(`div:text-is("Konfiguruj menu")`).click()
  //  await expect(page.url()).toEqual('https://ml-panel-fe-dev-3.herokuapp.com/konfiguracja-menu')
  //  await page.locator(`div:text-is("Przejdź do koszyka")`).click()
  //  await expect(page.url()).toEqual('https://ml-panel-fe-dev-3.herokuapp.com/koszyk')
  //  await expect(page.url()).toEqual('undefined')
});
