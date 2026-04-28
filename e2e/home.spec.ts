import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load home page successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/CASA/i)
  })

  test('should display hero section with CTA', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('h1')
    await expect(hero).toBeVisible()
  })

  test('should display services teaser on home page', async ({ page }) => {
    await page.goto('/')
    const servicesSection = page.locator('text=Nossos Serviços')
    await expect(servicesSection).toBeVisible()
  })

  test('should display portfolio teaser on home page', async ({ page }) => {
    await page.goto('/')
    const portfolioSection = page.locator('text=Projetos Recentes')
    await expect(portfolioSection).toBeVisible()
  })
})