'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [serverError, setServerError] = useState<string>('')

  const validateField = (name: keyof ContactFormData, value: string) => {
    const fieldSchema = contactSchema.shape[name]
    const result = fieldSchema.safeParse(value)

    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        [name]: result.error.errors[0]?.message,
      }))
    } else {
      setErrors((prev) => {
        const { [name]: _, ...rest } = prev
        return rest
      })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      validateField(name as keyof ContactFormData, value)
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    validateField(name as keyof ContactFormData, value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setServerError('')

    const result = contactSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: FormErrors = {}
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors
        if (field) {
          fieldErrors[field] = err.message
        }
      })
      setErrors(fieldErrors)
      setStatus('error')
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Erro ao enviar mensagem')
      }

      setStatus('success')
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      setStatus('error')
      setServerError(
        error instanceof Error ? error.message : 'Erro ao enviar mensagem'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle
          size={48}
          className="text-green-500 mx-auto mb-4"
          aria-hidden="true"
        />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Mensagem enviada com sucesso!
        </h3>
        <p className="text-green-700 mb-6">
          Obrigado por entrar em contato. Retornaremos em breve.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-green-600 hover:text-green-700 font-medium focus:outline-none focus:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg border border-neutral-200 p-8 shadow-sm"
    >
      {status === 'error' && serverError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle
            size={20}
            className="text-red-500 flex-shrink-0"
            aria-hidden="true"
          />
          <p className="text-red-700 text-sm" role="alert">
            {serverError}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Nome <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-md border text-neutral-800 placeholder:text-neutral-400 transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-accent/20 ${
              errors.name
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                : 'border-neutral-300 focus:border-accent'
            }`}
            placeholder="Seu nome"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={errors.name ? 'true' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 mb-2"
          >
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-md border text-neutral-800 placeholder:text-neutral-400 transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-accent/20 ${
              errors.email
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                : 'border-neutral-300 focus:border-accent'
            }`}
            placeholder="seu@email.com"
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={errors.email ? 'true' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Company */}
      <div className="mb-6">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Empresa <span className="text-neutral-400">(opcional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-neutral-300 text-neutral-800 placeholder:text-neutral-400 transition-all duration-fast focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="Nome da sua empresa"
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          Mensagem <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 rounded-md border text-neutral-800 placeholder:text-neutral-400 transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-accent/20 resize-y min-h-[120px] ${
            errors.message
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-neutral-300 focus:border-accent'
          }`}
          placeholder="Conte-nos sobre seu projeto ou ideia..."
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={errors.message ? 'true' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-accent text-white py-3 px-6 rounded-md font-semibold
          transition-all duration-fast ease-out
          hover:bg-accent-600 hover:scale-[1.02] hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={20} className="animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={20} aria-hidden="true" />
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  )
}