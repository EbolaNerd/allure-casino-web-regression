import { Locator, Page } from "@playwright/test"

export class OmDanskeSpilPage {

    readonly page: Page

    constructor (page: Page) {
        this.page = page
    }

    async navigateToRoot() {
        await this.page.goto('https://danskespil.dk/om');
    }

    heroTitle(): Locator {
        return this.page.locator('.ds-hero').locator('h1')
    }

    complianceItem(complianceText: string): Locator {
        return this.page.locator('.compliance > .compliance__items').getByText(complianceText)
    }
    
}
    