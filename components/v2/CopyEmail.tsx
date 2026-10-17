'use client';
import { useRef, useState } from 'react';

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState('Adresi kopyala');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setLabel('Kopyalandı');
    } catch {
      const node = document.getElementById('contact-email');
      const selection = window.getSelection();
      if (node && selection) { const range = document.createRange(); range.selectNodeContents(node); selection.removeAllRanges(); selection.addRange(range); }
      setLabel('Seçildi — Ctrl+C');
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel('Adresi kopyala'), 2200);
  }
  return <button type="button" className="primary" onClick={copy}>{label}</button>;
}
