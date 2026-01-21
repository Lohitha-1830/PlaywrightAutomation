import {test,expect,request} from '@playwright/test';

test('validate get API', async ({}) => {

const apiContext = await request.newContext({
baseURL: 'https://jsonplaceholder.typicode.com/',
ignoreHTTPSErrors: true
});

const response= await apiContext.get('/todos/1');
console.log('HTTP status:', response.status());

expect(response.ok()).toBeTruthy();

const body= await response.json();
console.log('Body: ',body);
expect(body).toMatchObject({
    id:1,
});



});