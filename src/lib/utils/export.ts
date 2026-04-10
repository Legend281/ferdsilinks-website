export function exportToCSV<T extends Record<string, unknown>>(
  data: T[],
  filename: string,
  columns?: { key: keyof T; label: string }[]
): void {
  if (data.length === 0) {
    alert('No data to export');
    return;
  }

  const headers = columns || Object.keys(data[0]).map((key) => ({
    key: key as keyof T,
    label: key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
  }));

  const csvRows: string[] = [];
  
  csvRows.push(headers.map((h) => h.label).join(','));

  for (const row of data) {
    const values = headers.map((h) => {
      let value: unknown = row[h.key];
      if (value === null || value === undefined) {
        value = '';
      }
      let strValue = String(value);
      if (strValue.includes(',') || strValue.includes('"') || strValue.includes('\n')) {
        strValue = `"${strValue.replace(/"/g, '""')}"`;
      }
      return strValue;
    });
    csvRows.push(values.join(','));
  }

  const csvContent = csvRows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
