import { test, expect } from '@playwright/test'

test.describe('Portfolio Page', () => {
  test('should load portfolio page', async ({ page }) => {
    await page.goto('/portfolio')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Portfolio')
  })

  test('should display portfolio cards', async ({ page }) => {
    await page.goto('/portfolio')
    const cards = page.locator('.bg-white.rounded-lg')
    await expect(cards.first()).toBeVisible()
  })

  test('should have 6 portfolio items', async ({ page }) => {
    await page.goto('/portfolio')
    const items = page.locator('h3')
    await expect(items.first()).toBeVisible()
  })
})