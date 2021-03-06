const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
dotenv.config();
const crawler = async () => {
    try{
        const browser = await puppeteer.launch({headless: false, args: ['--window-size=1920, 1080']});
        const page = await browser.newPage();
        page.setViewport({
            height:1080,
            width: 1080
        });
        await page.goto("https://daum.net");
        await page.waitFor(1234);
        await page.screenshot({path: `${__dirname}/screenshot/daum01.jpg`, fullPage: true});
        await page.click(".link_login");
        await page.waitFor(1427);
        await page.type("#id", process.env.ID);
        await page.waitFor(1329);
        await page.type("#inputPwd", process.env.PASSWORD);
        await page.waitFor(1618);
        await page.screenshot({path: `${__dirname}/screenshot/daum02.jpg`, fullPage: true});
        await page.click("#loginBtn");
        await page.waitFor(1529);
        await page.screenshot({path: `${__dirname}/screenshot/daum03.jpg`, fullPage: true});
        await page.click(".txt_pctop.link_mail");
        await page.waitFor(2528);
        await page.screenshot({path: `${__dirname}/screenshot/daum04.jpg`, fullPage: true});
        await page.click(".btn_comm.btn_my");
        await page.waitFor(1311);
        await page.type("#mailSubject", "크롤링... 테스트...");
        await page.waitFor(1329);
        const frame = page.frames().find(frame => frame.name() === 'tx_canvas_wysiwyg');
        frame.type(".tx-content-container", "테스트 중입니다.");
        await page.screenshot({path: `${__dirname}/screenshot/daum05.jpg`, fullPage: true});
        await page.waitFor(1234);
        await page.click(".btn_toolbar.btn_write");
        await page.waitFor(1618);
        await page.screenshot({path: `${__dirname}/screenshot/daum06.jpg`, fullPage: true});
        await page.close();
        await browser.close();
    }
    catch(err){
        console.log(err);
    }
}
crawler();