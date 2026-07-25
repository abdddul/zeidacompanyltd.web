import React, { useState, useEffect } from "react";
import { Cookie, X, Check } from "lucide-react";

interface CookieNoticeProps {
  lang: "en" | "sw";
  onOpenPrivacy: () => void;
}

export const CookieNotice: React.FC<CookieNoticeProps> = ({ lang, onOpenPrivacy }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("zeida_cookies_accepted");
    if (!hasAccepted) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("zeida_cookies_accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-fade-in">
      <div className="bg-[#1A3D2B] text-white p-4 md:p-5 rounded-2xl shadow-2xl border border-[#C4A66B]/30 backdrop-blur-md flex flex-col space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5 text-[#C4A66B]">
            <Cookie className="w-5 h-5 shrink-0" />
            <h4 className="font-serif text-xs md:text-sm font-bold tracking-wide">
              {lang === "en" ? "Cookie &amp; Privacy Notice" : "Taarifa ya Kuki na Faragha"}
            </h4>
          </div>
          <button 
            onClick={handleAccept} 
            className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-white/80 leading-relaxed">
          {lang === "en" 
            ? "We use minimal cookies for basic site performance and language preferences. No aggressive tracking or personal data collection."
            : "Tunatumia kuki za kimsingi kuboresha ufanisi wa tovuti na kukumbuka lugha unayopendelea. Hatuokoti taarifa za kibinafsi."
          }
        </p>

        <div className="flex items-center justify-between pt-1 text-xs">
          <button 
            onClick={onOpenPrivacy}
            className="text-[#C4A66B] hover:underline font-sans text-[11px] font-medium transition-colors cursor-pointer"
          >
            {lang === "en" ? "Read Privacy Policy" : "Soma Sera ya Faragha"}
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 bg-[#C4A66B] text-[#1A3D2B] font-sans font-bold text-xs rounded-full hover:bg-[#D4B67B] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Check className="w-3.5 h-3.5" />
            {lang === "en" ? "Got It" : "Nalielewa"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieNotice;
