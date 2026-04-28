import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated'
  hover?: boolean
}

const variantClasses = {
  default: 'bg-white shadow-sm',
  elevated: 'bg-white shadow-lg',
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = 'default', hover = false, className = '', children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`
          rounded-lg p-6
          transition-all duration-normal ease-out
          ${variantClasses[variant]}
          ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''}
          ${className}
        `.trim()}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card