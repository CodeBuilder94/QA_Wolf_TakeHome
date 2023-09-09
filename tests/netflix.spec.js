const { test, expect } = require("@playwright/test");

// run tests in headful mode so you can see the browser
test.use({ headless: true, slowMo: 1000 });

test("my first test", async ({ page }) => {
  // go to Netflix.com
  await page.goto("https://www.netflix.com");

  // assert page title appears
  await expect(page.locator('[data-uia="hero-title"]')).toHaveText(
    "Unlimited movies, TV shows, and more."
  );
});

// ADD YOUR TESTS HERE!
test("bad sign in", async({page}) =>{
  await page.goto("https://www.netflix.com");

  //click sign in button to move to sing up page
  await page.getByRole('button', {name: 'Sign In'}).click();
  //enter fake email
  await page.getByRole("input",{name: "userLoginId"}).fill("testemail@test.com");
  //enter fake password
  await page.getByRole("input",{name: "password"}).fill("123456");
  //submit information
  await page.getByRole('button', {name: "Sign In"}).click();
  //test too see if the bad loging prompt appeared
  await expect(page.getByText('Incorrect password.')).toBeVisible();
});

