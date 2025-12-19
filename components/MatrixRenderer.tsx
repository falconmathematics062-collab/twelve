
import React from 'react';

interface MatrixRendererProps {
  matrixString: string; // e.g., "2 5 19 -7; 35 -2 5/2 12; √3 1 -5 17"
}

export const MatrixRenderer: React.FC<MatrixRendererProps> = ({ matrixString }) => {
  // Split into rows by semicolon, trim each row.
  const rawRows = matrixString.split(';').map(row => row.trim());
  
  // Split each row into elements, filter out empty strings
  const parsedRows = rawRows.map(row => 
    row.split(/\s+/).filter(Boolean).map(element => element.trim())
  );

  // Determine maximum column widths
  const maxColWidths: number[] = [];
  parsedRows.forEach(row => {
    row.forEach((element, colIndex) => {
      if (!maxColWidths[colIndex] || element.length > maxColWidths[colIndex]) {
        maxColWidths[colIndex] = element.length;
      }
    });
  });

  // Format the matrix with padding
  const formattedMatrix = parsedRows.map(row => {
    const paddedElements = row.map((element, colIndex) => {
      // If a column doesn't exist for this row (e.g., ragged array), use width 0
      const width = maxColWidths[colIndex] || 0;
      return element.padEnd(width, ' ');
    });
    return `[ ${paddedElements.join('   ')} ]`; // 3 spaces between elements for better visual separation
  }).join('\n');

  return (
    <pre className="!bg-slate-50 dark:!bg-slate-900/50 !p-4 !rounded-lg !overflow-x-auto !text-base">
      {formattedMatrix}
    </pre>
  );
};
