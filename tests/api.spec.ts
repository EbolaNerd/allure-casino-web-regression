import { test, expect } from '@playwright/test';

test('Search games & providers', async ({ request }) => {
  const response = await request.get('https://casino-app-gateway.ds-api.dk/api/casino/game/v1/search', {params: {query: 'Play'}})

  // Expect status code is 200
  await expect(response.status()).toBe(200);
});

test('Search games (Depricated)', async ({ request }) => {
  const response = await request.get('https://casino-app-gateway.ds-api.dk/api/casino/game/v1/games', {params: {name: 'Play'}})

  // Expect status code is 200
  await expect(response.status()).toBe(200);
});

test('Get Jackpot', async ({ request }) => {
  const response = await request.get('https://casino-app-gateway.ds-api.dk/api/casino/game/v1/jackpot/gold_jackpot')

  // Expect status code is 200
  await expect(response.status()).toBe(200);
});

test('GET Campaigns', async ({ request }) => {
  const response = await request.get('https://casino-app-gateway.ds-api.dk/api/casino/content/v1/campaigns')

  // Expect status code is 200
  await expect(response.status()).toBe(200);
});

test('Get Lobby', async ({ request }) => {
  const response = await request.get('https://casino-app-gateway.ds-api.dk/api/casino/game/lobby/v1?type=Casino', {params: {type: 'Casino'}})

  // Expect status code is 200
  await expect(response.status()).toBe(200);
});
