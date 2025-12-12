
import React from 'react';

export function FloatingSymbolsBackground(): React.JSX.Element {
  const symbols = [
    { char: '∫', color: 'text-blue-900 dark:text-blue-950', top: '10%', left: '5%', size: 'text-6xl', delay: '0s', duration: '12s' },
    { char: '∑', color: 'text-red-900 dark:text-red-950', top: '20%', left: '85%', size: 'text-7xl', delay: '2s', duration: '15s' },
    { char: 'π', color: 'text-green-900 dark:text-green-950', top: '45%', left: '15%', size: 'text-5xl', delay: '1s', duration: '13s' },
    { char: '√', color: 'text-yellow-900 dark:text-yellow-950', top: '65%', left: '75%', size: 'text-6xl', delay: '3s', duration: '14s' },
    { char: '∞', color: 'text-purple-900 dark:text-purple-950', top: '80%', left: '10%', size: 'text-7xl', delay: '0.5s', duration: '16s' },
    { char: 'θ', color: 'text-pink-900 dark:text-pink-950', top: '15%', left: '45%', size: 'text-4xl', delay: '4s', duration: '11s' },
    { char: '∂', color: 'text-indigo-900 dark:text-indigo-950', top: '50%', left: '90%', size: 'text-5xl', delay: '1.5s', duration: '17s' },
    { char: '∆', color: 'text-teal-900 dark:text-teal-950', top: '75%', left: '55%', size: 'text-5xl', delay: '2.5s', duration: '12.5s' },
    { char: '÷', color: 'text-orange-900 dark:text-orange-950', top: '35%', left: '65%', size: 'text-4xl', delay: '1s', duration: '13.5s' },
    { char: '×', color: 'text-cyan-900 dark:text-cyan-950', top: '90%', left: '80%', size: 'text-5xl', delay: '3.5s', duration: '15.5s' },
    { char: '≈', color: 'text-emerald-900 dark:text-emerald-950', top: '5%', left: '25%', size: 'text-5xl', delay: '0.2s', duration: '14s' },
    { char: '≠', color: 'text-rose-900 dark:text-rose-950', top: '55%', left: '5%', size: 'text-4xl', delay: '2.8s', duration: '11.5s' },
    { char: 'e', color: 'text-lime-900 dark:text-lime-950', top: '85%', left: '40%', size: 'text-6xl', delay: '1.2s', duration: '16.5s' },
    { char: '±', color: 'text-fuchsia-900 dark:text-fuchsia-950', top: '30%', left: '30%', size: 'text-5xl', delay: '0.8s', duration: '12.8s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
      {symbols.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.color} ${item.size} font-serif opacity-10 dark:opacity-20`}
          style={{
            top: item.top,
            left: item.left,
            animation: `float ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          {item.char}
        </div>
      ))}
    </div>
  );
}
