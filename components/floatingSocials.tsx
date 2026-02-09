'use client';

import { MessageCircle, Send, Instagram } from 'lucide-react';

export default function FloatingSocials() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">

      <a
        href="https://wa.me/905551234567"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        <MessageCircle className="text-white" />
      </a>

      <a
        href="https://t.me/username"
        className="w-14 h-14 rounded-full bg-sky-500 flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        <Send className="text-white" />
      </a>

      <a
        href="https://instagram.com/username"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        <Instagram className="text-white" />
      </a>

    </div>
  );
}
