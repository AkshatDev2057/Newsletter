import React from 'react';
import './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => (
  <div>
    {label && <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>}
    <input
      className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400 ${
        error ? 'border-red-500 focus:ring-4 focus:ring-red-100' : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
      } ${className}`}
      aria-label={label}
      aria-invalid={!!error}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);