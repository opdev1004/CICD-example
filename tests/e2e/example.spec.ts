import {test, expect} from '@playwright/test';

test('homepage loads', async ({page}: any) =>
{
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle('Rino.js');
    await expect(page.locator('h1')).toHaveText(/Fast learning, preprocessing, intuitive web framework/i);
});