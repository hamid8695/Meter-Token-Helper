'use client'
import React, { useEffect } from "react";

const Toast = ({ message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-5 right-5 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4 z-50">
      <span>{message}</span>
      <button
        className="text-white font-bold"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;
