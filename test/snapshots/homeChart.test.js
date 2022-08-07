describe("home page", () => {
    it("should render correct line chart", async () => {
        const page = await goto("/");
        await delay(1000);
        await page.waitForSelector('div.line-chart');
        const lineChart = await page.$('div.line-chart'); 
        const image = await lineChart.screenshot();
        expect(image).toMatchImageSnapshot();
    });
});