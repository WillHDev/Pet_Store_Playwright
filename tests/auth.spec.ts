import { test, expect } from '@playwright/test';

test('Register', async ({ page }) => {
    const user1 = {
    firstName: makeString(7),
    lastName: makeString(9),
    address: randomAddress(),
    city: makeString(6),
    state: makeString(8),
    zipCode: makeNumber(5),
    phoneNumber: makeNumber(10),
    sSN: makeNumber(9),
    userID: generateRandomUsername('User'),
    password: makeString(4) + makeNumber(3),
    email: "frederick708080@yahoo.com",
    country: makeString(6),
}
    const { firstName, lastName, address, city, state, zipCode, country, phoneNumber, email, sSN, userID, password } = user1;
    await page.goto('https://petstore.octoperf.com/actions/Account.action?newAccountForm=');
    await page.locator('input[name="username"]').fill(userID);
    await page.locator('input[name="password"]').fill(password);
    await page.locator('input[name="repeatedPassword"]').fill(password);
    await page.locator('input[name="account\\.firstName"]').fill(firstName);
    await page.locator('input[name="account\\.lastName"]').fill(lastName);
    await page.locator ('input[name="account\\.address1"]').fill(address);
    await page.locator ('input[name="account\\.city"]').fill(city);
    await page.locator ('input[name="account\\.state"]').fill(state);
    await page.locator('input[name="account\\.zip"]').fill(zipCode);
    await page.locator('input[name="account.country"]').fill(country);
    await page.locator('input[name="account\\.phone"]').fill(phoneNumber);
    await page.locator('input[name="account\\.email"]').fill(email);
    await page.locator('input[name="account.bannerOption"]').check();
    await page.locator('input[name="account.listOption"]').check();
    await  page.getByRole('button', { name: 'Save Account Information' }).click();
    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.locator('input[name="username"]').fill(userID);
    await page.locator('input[name="password"]').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
});


function makeString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function randomAddress() {
    return makeNumber(4) + ' ' + makeString(6) + ' ' + 'Street';
}

function makeNumber(length) {
    return Math.random().toString().substr(length); 
}

function generateRandomUsername(baseUsername) {
    const randomSuffix = Math.random().toString(36).substring(2, 10); 
    return `${baseUsername}_${randomSuffix}`;
  };
   






