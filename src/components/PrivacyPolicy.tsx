import React from "react";
import { X, ShieldCheck, Lock, Eye, FileText } from "lucide-react";

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "sw";
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md transition-opacity">
      <div 
        className="bg-[#FAF8F5] text-[#1A3D2B] w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl border border-[#1A3D2B]/10 overflow-hidden flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#1A3D2B] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#C4A66B]" />
            <div>
              <h2 className="font-serif text-lg md:text-xl font-bold tracking-wide">
                {lang === "en" ? "Privacy Policy" : "Sera ya Faragha"}
              </h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed text-[#2C3E33]">
          {lang === "en" ? (
            <>
              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#C4A66B]" /> 1. Overview &amp; Data Collection
                </h3>
                <p>
                  At <strong>ZEIDA</strong>, we respect your privacy and are committed to protecting any personal information you share with us. We do <strong>NOT</strong> collect personal data automatically when you browse our website, except for basic, non-identifiable technical data required for proper page rendering and security.
                </p>
                <p>
                  We only receive personal information (such as your name, phone number, or email) when you voluntarily submit an inquiry or place a purchase request via WhatsApp, email, or telephone.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#C4A66B]" /> 2. How We Use Your Information
                </h3>
                <p>Any information voluntarily provided is strictly used to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Process livestock inquiries, orders, and custom batch calculations.</li>
                  <li>Coordinate farm visits or direct delivery services within Tanzania.</li>
                  <li>Respond to customer support requests and agricultural consultation questions.</li>
                </ul>
                <p>We do <strong>NOT</strong> sell, rent, lease, or share your personal information with third-party marketers or external advertisers under any circumstances.</p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#C4A66B]" /> 3. Data Security &amp; Retention
                </h3>
                <p>
                  We maintain strict operational measures to protect your inquiry details and communication records. Your order details are retained only for as long as necessary to fulfill your agricultural purchases and comply with local commercial regulations.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight">4. Third-Party Links &amp; Messaging</h3>
                <p>
                  Our website contains direct communication links to external platforms such as WhatsApp, Instagram, and LinkedIn. When navigating to these external platforms, their respective privacy policies apply.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight">5. Contact Us</h3>
                <p>
                  If you have any questions regarding this Privacy Policy or wish to update your inquiry records, please reach out to us at:
                </p>
                <div className="bg-[#1A3D2B]/5 p-4 rounded-xl text-xs font-mono space-y-1 text-[#1A3D2B]">
                  <p><strong>ZEIDA Enterprise</strong></p>
                  <p>Location: Lingato, Kisarawe II, Kigamboni, Dar es Salaam, Tanzania</p>
                  <p>Phone: +255 713 322 000</p>
                  <p>Email: info@zeida.co.tz</p>
                </div>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#C4A66B]" /> 1. Muhtasari na Ukusanyaji wa Taarifa
                </h3>
                <p>
                  Katika <strong>ZEIDA</strong>, tunaheshimu faragha yako na tumejitolea kulinda taarifa zote za kibinafsi unazoshiriki nasi. Hatuokoti wala hatuhifadhi taarifa zako za kibinafsi kiotomatiki unapotembelea tovuti yetu, isipokuwa taarifa za kimsingi za kiufundi zinazohitajika kuonyesha ukurasa vizuri.
                </p>
                <p>
                  Tunapokea tu taarifa za kibinafsi (kama jina lako, namba ya simu, au barua pepe) unapotuma ombi la bidhaa au kuulizia kupitia WhatsApp, barua pepe, au simu.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#C4A66B]" /> 2. Matumizi ya Taarifa Zako
                </h3>
                <p>Taarifa yoyote unayotoa inatumiwa pekee kwa:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Kushughulikia maagizo ya mifugo, bidhaa za shamba na mchanganuo wa bei.</li>
                  <li>Kuratibu ratiba za kutembelea shamba au usafirishaji ndani ya Tanzania.</li>
                  <li>Kujibu maswali ya wateja na kutoa ushauri wa kilimo na ufugaji.</li>
                </ul>
                <p>Hatuuzi, hatukodishi, wala hatushiriki taarifa zako na wafanyabiashara wa nje kwa hali yoyote.</p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight">3. Wasiliana Nasi</h3>
                <div className="bg-[#1A3D2B]/5 p-4 rounded-xl text-xs font-mono space-y-1 text-[#1A3D2B]">
                  <p><strong>ZEIDA Enterprise</strong></p>
                  <p>Eneo: Lingato, Kisarawe II, Kigamboni, Dar es Salaam, Tanzania</p>
                  <p>Simu: +255 713 322 000</p>
                  <p>Barua pepe: info@zeida.co.tz</p>
                </div>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#1A3D2B]/5 border-t border-[#1A3D2B]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#1A3D2B] text-white rounded-full text-xs font-sans font-semibold hover:bg-[#2C523B] transition-colors cursor-pointer"
          >
            {lang === "en" ? "Close & Accept" : "Funga na Kubali"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
