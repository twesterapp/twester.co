import React from 'react';

export function Footer() {
    return (
        <footer className="bg-secondary pb-3 sm:pb-6 pt-4 sm:pt-8">
            <div className="content-wrapper content-spacing">
                <p className="text-alter text-center">
                    Created & Designed by{' '}
                    <a
                        href="https://ceoshikhar.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        <b className="text-alter">@ceoshikhar</b>{' '}
                    </a>
                    with love in India
                </p>
            </div>
        </footer>
    );
}
