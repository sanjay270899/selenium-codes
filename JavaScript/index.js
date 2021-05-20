const { Builder, By } = require("selenium-webdriver");
require("chromedriver");

const run = async () => {
  // Building Chrome Window
  let driver = await new Builder().forBrowser("chrome").build();

  // Go to youtube.com
  await driver.get("https://youtube.com");

  // Typing in search bar
  const searchInput = await driver.findElement(By.id("search"));
  await searchInput.sendKeys("Ritviz Pran");

  // Click on Search Button
  const searchIcon = await driver.findElement(By.id("search-icon-legacy"));
  await searchIcon.click();

  // Wait 3 seconds
  await driver.sleep(3000);

  // Click on first video
  const video = await driver.findElement(
    By.xpath(
      "/html/body/ytd-app/div/ytd-page-manager/ytd-search/div[1]/ytd-two-column-search-results-renderer/div/ytd-section-list-renderer/div[2]/ytd-item-section-renderer/div[3]/ytd-video-renderer[1]/div[1]/ytd-thumbnail/a"
    )
  );
  await video.click();

  // Sleep for 1 minute.
  await driver.sleep(60000);

  // Quit driver
  await driver.quit();
};

run();
