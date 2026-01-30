import { expect, test } from '@playwright/test';
import { OmDanskeSpilPage } from '../page-objects/OmOs/omDanskeSpil';
import { NyhederPage } from '../page-objects/OmOs/nyheder';


test.describe('Om Os', ()=> {
    test.beforeEach(async ({page}) => {
      //Navigate to root site  
      await page.goto('https://danskespil.dk');
      // Accept cookies
      await page.getByLabel('Tillad valgte').click();
    })

    test.describe('Om Danske Spil', () => {
      test.beforeEach(async ({page}) => {
      //Navigate to root page  
       await page.goto('https://danskespil.dk/om');
      })
      
      test('Verify hero section', async ({page}) => {
        //Create page object
        const omDanskeSpilPage = new OmDanskeSpilPage(page); 
        // Fetch title locator
        const heroTitle = omDanskeSpilPage.heroTitle();
        // Assert text
        await expect(heroTitle).toContainText('Der er en grund til, at vi hedder Danske Spil');
      });

      test('Verify compliance links', async ({ page }) => {
        //Create page object
        const omDanskeSpilPage = new OmDanskeSpilPage(page);
        //Compliance item elements
        const complianceLinks = [
          {
            text: 'Du skal være over 18 år for at kunne spille hos Danske Spil',
            url: 'https://danskespil.dk/om/sunde-spillevaner',
          },
          {
            text: 'Du kan udelukke dig fra spil via ROFUS',
            url: 'https://www.rofus.nu/',
          },
          {
            text: 'Spillemyndighedens hjælpelinje til ansvarligt spil.',
            url: 'https://www.stopspillet.dk/',
          },
          {
            text: 'Danske Spil koncernen kontrolleres af Spillemyndigheden',
            url: 'https://www.spillemyndigheden.dk/',
          },
        ];
        //Find, execute and assert compliance items links
        for (const { text, url } of complianceLinks) {
          await omDanskeSpilPage.complianceItem(text).click();
          await expect(page).toHaveURL(url);
          await omDanskeSpilPage.navigateToRoot();
        }

      });
    });

    test.describe('Nyheder', () => {
      test.beforeEach(async ({page}) => {
      //Navigate to root page  
       await page.goto('https://danskespil.dk/om/nyheder');
      })
      
      test('Verify hero section', async ({page}) => {
        //Create page object
        const nyhederPage = new NyhederPage(page); 
        // Fetch title locator
        const heroTitle = nyhederPage.heroTitle();
        // Assert text
        await expect(heroTitle).toContainText('Nyheder');
      });

       test('Verify hero cta', async ({page}) => {
        //Create page object
        const nyhederPage = new NyhederPage(page); 
        // Fetch title locator
        const heroCta = nyhederPage.heroCta();
        // Click cta
        await heroCta.click();
        // Assert text
       await expect(page).toHaveTitle('Pressemeddelelser | Danske Spil A/S');
      });
    });
});