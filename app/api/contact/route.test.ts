import { describe, it, expect, vi, beforeEach } from 'vitest'
import nodemailer from 'nodemailer'

vi.mock('nodemailer')

const mockedNodemailer = vi.mocked(nodemailer)

describe('POST /api/contact', () => {
  const validPayload = {
    name: 'João Silva',
    email: 'joao@exemplo.com',
    company: 'Empresa XYZ',
    message: 'Olá, gostaria de saber mais sobre os serviços.',
  }

  beforeEach(() => {
    vi.clearAllMocks()
    mockedNodemailer.createTransport.mockReturnValue({
      sendMail: vi.fn().mockResolvedValue({ messageId: 'test-id' }),
    } as unknown as nodemailer.Transporter)
  })

  it('retorna 200 quando dados válidos', async () => {
    const { POST } = await import('./route')
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validPayload),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.message).toBe('Mensagem enviada com sucesso')
  })

  it('retorna 400 quando nome muito curto', async () => {
    const { POST } = await import('./route')
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validPayload, name: 'J' }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.error).toBe('Dados inválidos')
    expect(data.details.name).toBeDefined()
  })

  it('retorna 400 quando email inválido', async () => {
    const { POST } = await import('./route')
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validPayload, email: 'email-invalido' }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.details.email).toBeDefined()
  })

  it('retorna 400 quando mensagem muito curta', async () => {
    const { POST } = await import('./route')
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...validPayload, message: 'Curta' }),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.details.message).toBeDefined()
  })

  it('aceita empresa opcional', async () => {
    const { POST } = await import('./route')
    const { company: _, ...payloadSemCompany } = validPayload
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payloadSemCompany),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
  })

  it('retorna 500 quando envio de email falha', async () => {
    mockedNodemailer.createTransport.mockReturnValue({
      sendMail: vi.fn().mockRejectedValue(new Error('SMTP connection failed')),
    } as unknown as nodemailer.Transporter)

    const { POST } = await import('./route')
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validPayload),
    })

    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data.success).toBe(false)
    expect(data.error).toBe('Erro ao enviar mensagem')
  })

  it('chama nodemailer com parâmetros corretos', async () => {
    const { POST } = await import('./route')
    const request = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validPayload),
    })

    await POST(request)

    expect(mockedNodemailer.createTransport).toHaveBeenCalledWith(
      expect.objectContaining({
        host: expect.any(String),
        port: expect.any(Number),
      })
    )
  })
})