// components/ui/Card.tsx
import React from 'react';
import { twMerge } from 'tailwind-merge';

// Generic Card component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge('rounded-xl border border-white/10 bg-white/5 p-6', className)}
    {...props}
  />
));
Card.displayName = 'Card';


// Service Block Card
interface ServiceBlockProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}
const ServiceBlock: React.FC<ServiceBlockProps> = ({ title, icon, description }) => (
    <div className="text-center p-6">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan">
            {/* FIX: Added a more specific type assertion to the icon to resolve cloneElement error. */}
            {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 24 })}
        </div>
        <h3 className="text-xl font-bold font-display mb-2">{title}</h3>
        <p className="text-dark-subtext">{description}</p>
    </div>
);


// Testimonial Card
interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => (
    <Card className="h-full flex flex-col text-center">
      <p className="text-dark-subtext italic mb-6 flex-grow">"{quote}"</p>
      <div>
        <p className="font-bold text-dark-text">{author}</p>
        <p className="text-sm text-dark-subtext">{role}</p>
      </div>
    </Card>
);

export { Card, ServiceBlock, TestimonialCard };