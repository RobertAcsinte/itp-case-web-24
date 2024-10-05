'use client';

import { useState } from 'react';
import style from './BikeStationCard.module.scss';
import { BikeStation } from '../BikeStationType';

export default function BikeStationCard({station}: {station: BikeStation}) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(station.name); 
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
          console.error("Failed to copy text:", err);
        }
      };
    
    return (
        <section>
            <div className={style.container}>
                <div className={style.titleWrapper}>
                    <h2>{station.name}</h2>
                    <button aria-live="polite" aria-label="Copy station title to clipboard" onClick={() => handleCopy()}>{isCopied ? 'Copied!' : 'Copy to clipboard'}</button>
                </div>
                <p><b>Bikes available:</b> {station.bikes_available}</p>
                <p><b>Total bikes:</b> {station.bikes_in_use + station.bikes_available}</p>
            </div>
        </section>
    );
}