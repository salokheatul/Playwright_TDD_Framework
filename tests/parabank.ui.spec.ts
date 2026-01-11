import {test} from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('Parabank Registration', () => {
    let registerPage: RegisterPage;
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.navigate();
    });

    test('should register a new user successfully', async () => {
        await registerPage.register();
        await registerPage.successMessage.waitFor();
    });
});