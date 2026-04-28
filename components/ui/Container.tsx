import { HTMLAttributes, forwardRef } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'lg' | 'full'
}

const sizeClasses = {
  default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  lg: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
  full: 'w-full',
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'default', className = '', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${sizeClasses[size]} ${className}`.trim()}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Container.displayName = 'Container'

export default Container