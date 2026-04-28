import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to services page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Serviços')
    await expect(page).toHaveURL(/\/servicos/)
  })

  test('should navigate to portfolio page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Portfolio')
    await expect(page).toHaveURL(/\/portfolio/)
  })

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Contato')
    await expect(page).toHaveURL(/\/contato/)
  })

  test('should navigate back to home from other pages', async ({ page }) => {
    await page.goto('/servicos')
    await page.click('text=Início')
    await expect(page).toHaveURL('/')
  })
})