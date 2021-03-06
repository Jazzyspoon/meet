import puppeteer from "puppeteer";
import { describe, expect, test, beforeAll } from "@jest/globals";

describe("show/hide an event details", () => {
  jest.setTimeout(30000);
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ["--disable-extensions", "--no-sandbox"],
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".event");
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .event__details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .detailsButton");
    const eventDetails = await page.$(".event .event__details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .detailsButton");
    const eventDetails = await page.$(".event .event__details");
    expect(eventDetails).toBeNull();
    browser.close();
  });
});
