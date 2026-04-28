import { TextareaHTMLAttributes, forwardRef, useId } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', id: propId, ...props }, ref) => {
    const generatedId = useId()
    const id = propId || generatedId
    const errorId = `${id}-error`
    const hintId = `${id}-hint`

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-neutral-700"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            [error ? errorId : null, hint ? hintId : null]
              .filter(Boolean)
              .join(' ') || undefined
          }
          className={`
            w-full px-4 py-3 rounded-md border text-neutral-800
            placeholder:text-neutral-400
            transition-all duration-fast
            focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20
            disabled:bg-neutral-100 disabled:cursor-not-allowed
            resize-y min-h-[120px]
            ${
              error
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                : 'border-neutral-300'
            }
            ${className}
          `.trim()}
          {...props}
        />
        {hint && !error && (
          <p id={hintId} className="text-sm text-neutral-500 mt-1">
            {hint}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm text-red-600 mt-1" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea