import { test, expect } from '@playwright/test'

test.describe('Services Page', () => {
  test('should load services page', async ({ page }) => {
    await page.goto('/servicos')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Nossos Serviços')
  })

  test('should display service cards', async ({ page }) => {
    await page.goto('/servicos')
    const cards = page.locator('.bg-white.rounded-lg')
    await expect(cards.first()).toBeVisible()
  })

  test('should have 6 services', async ({ page }) => {
    await page.goto('/servicos')
    // Services section has a grid with 6 items
    const cards = page.locator('section >> h3')
    await expect(cards).toHaveCount(6)
  })
})