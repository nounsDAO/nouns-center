import React from 'react';
import { cn } from '../../lib/cn';

interface ButtonProps {
  link: string;
  text: string;
  download?: boolean;
  self?: boolean;
  small?: boolean;
  className?: string;
}

const Button = ({ link, text, download, self, small, className }: ButtonProps) => {
  return (
    <a
      download={download && download}
      href={link}
      target={self ? '_self' : '_blank'}
      rel="noreferrer"
      className={cn(
        `
        inline-flex
        capitalize
        items-center
        justify-center
        rounded-xl
        border
        border-transparent
      text-white
      bg-blue-base
      focus:ring-gray-200
        hover:bg-opacity-80
      dark:bg-nouns-bg-blue
      dark:hover:bg-blue-700
      dark:focus:ring-nouns-bg-blue
        ${small ? 'px-3 py-2' : 'px-4 py-3'} 
        ${small ? 'text-xs' : 'text-sm'} 
        font-medium
        shadow-sm
        transition
        duration-100
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        sm:w-auto
      `,
        className,
      )}
    >
      {text}
    </a>
  );
};

export default Button;
