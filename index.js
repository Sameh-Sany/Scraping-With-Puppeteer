const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://amazon.com");

  //   await page.screenshot({ path: "amazon.png", fullPage: true });
  //   await page.pdf({ path: "amazon.pdf", format: "A4" });
  //   const html = await page.content();
  //   fs.writeFileSync(path.join(__dirname, "amazon.html"), html);

  //   const title = await page.evaluate(() => {
  //     return document.querySelector("title").innerText;
  //   });

  //   console.log(title);

  //   const links = await page.evaluate(() => {
  //     const anchors = Array.from(document.querySelectorAll("a"));
  //     return anchors.map((anchor) => anchor.href);
  //   });

  //   console.log(links);

  //   await page.type("#twotabsearchtextbox", "Playstation 5");
  //   await page.click("#nav-search-submit-button");
  //   await page.waitForSelector(".a-price-whole");

  //   const price = await page.evaluate(() => {
  //     return document.querySelector(".a-price-whole").innerText;
  //   });

  const productsTitle = await page.evaluate(() => {
    const titles = Array.from(document.querySelectorAll("span"));
    return titles.map((title) => title.innerText);
  });

  productsPrice = await page.evaluate(() => {
    const prices = Array.from(document.querySelectorAll(".a-price"));
    return prices.map((price) => price.innerText);
  });

  console.log(productsTitle);
  console.log(productsPrice);

  // to save the data in a json file
  // fs.writeFileSync(
  //     path.join(__dirname, "products.json"),
  //     JSON.stringify({ productsTitle, productsPrice })
  //   );

  await browser.close();
}

main();
