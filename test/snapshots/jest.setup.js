require("@testing-library/jest-dom");
require('@testing-library/jest-dom/extend-expect');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
const puppeteer =  require('puppeteer');
const path = require("path");
const fs = require("fs");

jest.setTimeout(20000);

expect.extend({ toMatchImageSnapshot });

const goto = async (link) => {
    const page = await browser.newPage();
    await page.setViewport({width: 1300, height: 1500});
    await page.goto(`http://localhost:3000${link}`);
    return page;
}

global.goto = goto;
global.delay = ms => new Promise(resolve => setTimeout(resolve, ms))

beforeAll(async () => {
    const actualDir = path.resolve(__dirname, './actual/');
    if (!fs.existsSync(actualDir)) {
        fs.mkdirSync(actualDir);
    }
    const helperDir = path.resolve(__dirname, "./_helper/");
    if (!fs.existsSync(helperDir)) {
        fs.mkdirSync(helperDir);
    }

    browser = await puppeteer.launch({
        slowMo: 50,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
            "--disable-gpu",
            "--front-render-hinting=none"
        ]
    });
}, 60000);

afterAll(async () => {
    await browser.close();
}, 60000)