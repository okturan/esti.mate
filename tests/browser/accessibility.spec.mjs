import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Estimate: $0.00", { exact: true })).toBeVisible();
});

test("has no automatically detectable WCAG A or AA violations", async ({ page }) => {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});

test("supports a keyboard-only mixed-service estimate", async ({ page }) => {
  for (const name of ["Translation", "Transcription", "Design", "Development", "Meeting"]) {
    const checkbox = page.getByRole("checkbox", { name });
    await checkbox.focus();
    await expect(checkbox).toBeFocused();
    await page.keyboard.press("Space");
    await expect(checkbox).toBeChecked();
  }

  await expect(page.getByText("Cost: $287.00", { exact: true })).toBeVisible();
  await expect(page.getByText("Profit: $86.10", { exact: true })).toBeVisible();
  await expect(page.getByText("Estimate: $373.10", { exact: true })).toBeVisible();
});

test("exposes named controls and hides inactive rate fields", async ({ page }) => {
  const extraction = page.getByRole("checkbox", { name: "Extraction" });
  const extractionRate = page.locator("#extraction-rate");

  await expect(page.getByRole("spinbutton", { name: "Word Count:" })).toHaveValue("1000");
  await expect(page.getByRole("spinbutton", { name: "profit margin:" })).toHaveValue("30");
  await expect(extractionRate).toBeHidden();

  await extraction.check();
  await expect(extractionRate).toBeVisible();
});
