import { Locator, Page } from "@playwright/test"

export class NyhederPage {

    readonly page: Page

    constructor (page: Page) {
        this.page = page
    }

    async navigateToRoot() {
        await this.page.goto('https://danskespil.dk/om/nyheder');
    }

    heroTitle(): Locator {
        return this.page.locator('.ds-hero').locator('h1')
    }

    heroCta(): Locator {
        return this.page.locator('.ds-hero').getByRole('link', {name: "Nyhedsarkiv"})
    }

    complianceItem(complianceText: string): Locator {
        return this.page.locator('.compliance > .compliance__items').getByText(complianceText)
    }
    
}
    