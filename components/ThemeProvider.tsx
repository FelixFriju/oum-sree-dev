'use client';
import { useEffect, useState } from 'react';

export default function ThemeProvider() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = saved ? saved === 'dark' : prefers;
    setDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    const button = document.getElementById('theme-toggle');
    if (button) button.innerHTML = dark ? '☀' : '◐';
  }, [dark]);
  useEffect(() => {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    const handler = () => setDark(v => !v);
    button.addEventListener('click', handler);
    return () => button.removeEventListener('click', handler);
  }, []);
  return null;
}
