const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const run = async () => {
  // headless로 크롬 드라이버 실행
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options())
    .build();

  try {
    // 자동화 하려는 사이트로 이동
    await driver.get("https://google.com/");

    // 자바스크립트 실행 예제 : user agent확인
    let userAgent = await driver.executeScript("return navigator.userAgent;");
    console.log("UserAgent : ", userAgent);

    // 검색단어를 입력할 element를 찾아서 검색어 "google 입력 후 엔터"

    let searchInput = await driver.findElement(By.css('input[name="q"]'));
    let keyword = "google";
    searchInput.sendKeys(keyword, Key.ENTER);

    // h3라는 태그가 보여질 때까지 기다린다. 최대 10초간 기다린다.
    await driver.wait(until.elementLocated(By.css("h3")), 10000);

    // 검색결과 제목들을 출력함.

    let elements = await driver.findElements(By.css("#search h3"));

    for (var i = 0; i < elements.length; i++) {
      console.log(await elements[i].getAttribute("innerText"));
    }
  } catch (e) {
    console.log(e);
  } finally {
    //브라우저를 종료하고 싶으면 아래 주석을 해제해줍니다.
    //driver.quit();
  }
};
run();
