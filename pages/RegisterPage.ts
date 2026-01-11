import { expect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly url: string;
    
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly phone: Locator;
    readonly ssn: Locator;
    
    readonly username: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = '/register';
        
        this.firstName = page.locator('input[id="customer.firstName"]');
        this.lastName = page.locator('input[id="customer.lastName"]');
        this.address = page.locator('input[id="customer.address.street"]');
        this.city = page.locator('input[id="customer.address.city"]');
        this.state = page.locator('input[id="customer.address.state"]');
        this.zipCode = page.locator('input[id="customer.address.zipCode"]');
        this.phone = page.locator('input[id="customer.phoneNumber"]');        
        this.ssn = page.locator('input[id="customer.ssn"]');
        
        this.username = page.locator('input[id="customer.username"]');
        this.password = page.locator('input[id="customer.password"]');
        this.confirmPassword = page.locator('input[id="repeatedPassword"]');
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.successMessage = page.locator('//p[text()="Your account was created successfully. You are now logged in."]');
    }

    async navigate() {
    await this.page.goto('https://parabank.parasoft.com/');
    await this.page.click('text=Register');
    }

    async register() {
        await this.firstName.fill('Rohit');
        await this.lastName.fill('Sharma');
        await this.address.fill('123 Main Street');
        await this.city.fill('New York');
        await this.state.fill('NY');
        await this.zipCode.fill('10001');
        await this.phone.fill('1234567890');
        await this.ssn.fill('123-45-6789');

        await this.username.fill('RohitSharma');
        await this.password.fill('Password123!');
        await this.confirmPassword.fill('Password123!');
        await this.registerButton.click();
    }

    async verifyRegistrationSuccess() {
        await expect.soft(this.successMessage).toBeVisible();
    }
}