'use client';

import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq__row" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
            <div className="faq__left">
                <div className="faq__title">{question}</div>
                <div
                    style={{ display: isOpen ? 'block' : 'none' }}
                    className="faq__answer"
                    dangerouslySetInnerHTML={{ __html: answer }}
                />
            </div>
            <img
                src="https://assets.website-files.com/5837424ae11409586f837994/615935589047f98085c90963_arrow-down-1%201.svg"
                loading="lazy"
                alt=""
                className="faq__arrow"
                style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                }}
            />
        </div>
    );
}
