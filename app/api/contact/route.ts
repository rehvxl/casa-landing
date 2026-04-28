import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const details: Record<string, string> = {}
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          details[err.path[0] as string] = err.message
        }
      })

      return NextResponse.json(
        {
          success: false,
          error: 'Dados inválidos',
          details,
        },
        { status: 400 }
      )
    }

    const { name, email, company, message } = result.data

    // Create transporter - configure with your SMTP settings via environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_FROM || '"CASA Software House" <noreply@casa.com.br>',
      to: process.env.CONTACT_EMAIL || 'contato@casa.com.br',
      subject: `Novo contato de ${name}${company ? ` (${company})` : ''}`,
      text: `
Nome: ${name}
Email: ${email}
Empresa: ${company || 'Não informada'}
Mensagem:
${message}
      `.trim(),
      html: `
<h2>Novo contato via site</h2>
<p><strong>Nome:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Empresa:</strong> ${company || 'Não informada'}</p>
<h3>Mensagem:</h3>
<p>${message.replace(/\n/g, '<br>')}</p>
      `.trim(),
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao enviar mensagem',
      },
      { status: 500 }
    )
  }
}
