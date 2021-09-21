import React, { ReactNode } from 'react';
import { IconType } from './Icons';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: IconType;
    children?: ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
}

export function Button({
    icon,
    children,
    variant = 'primary',
    className = '',
    href = '',
    ...rest
}: ButtonProps) {
    const Icon = icon || null;
    let buttonClasses =
        'flex items-center justify-center bg-primary hover:bg-onPrimaryHover ' +
        'active:bg-primary py-3 px-6 font-bold rounded-xl transition-colors duration-200 ease-out';

    if (variant === 'secondary') {
        buttonClasses +=
            ' bg-alter hover:bg-onAlterHover active:bg-alter text-white';
    }

    buttonClasses += ' ' + className;

    const button = (
        <button className={buttonClasses} {...rest}>
            {Icon && <Icon size={32} className="mr-2" />}
            {children}
        </button>
    );

    if (href) {
        return (
            <a
                className={className}
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                {button}
            </a>
        );
    }

    return button;
}
