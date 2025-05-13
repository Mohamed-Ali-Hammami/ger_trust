import Link from "next/link";
import { ButtonHTMLAttributes, ComponentType, forwardRef, JSX } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  as?: ComponentType | keyof JSX.IntrinsicElements; // Allow `as` to be a component or HTML element
  href?: string; // Optional for links
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, as, href, children, ...props }, ref) => {
    const baseStyles = "btn";
    const variantStyles = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      outline: "btn-outline"
    };
    const sizeStyles = {
      sm: "h-9 rounded-md px-4 py-2 text-sm",
      md: "h-12 rounded-md px-6 py-3 text-base",
      lg: "h-11 rounded-md px-8 py-3 text-lg"
    };

    // If as="a" and href is provided, render a Next.js Link for client-side navigation
    if (as === "a" && href) {
      return (
        <Link
          href={href}
          className={[baseStyles, variantStyles[variant], sizeStyles[size], className].filter(Boolean).join(' ')}
          {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    // Otherwise, render a button
    return (
      <button
        className={[baseStyles, variantStyles[variant], sizeStyles[size], className].filter(Boolean).join(' ')}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
