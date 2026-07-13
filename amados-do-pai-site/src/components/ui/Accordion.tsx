'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { FaqItem } from '@/types/content';

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-bronze/20 rounded-2xl border border-bronze/20 bg-white/60">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-graphite hover:text-evergreen"
              >
                {item.question}
                <Icon name="arrowRight" className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-4 text-sm leading-relaxed text-warm-gray"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
