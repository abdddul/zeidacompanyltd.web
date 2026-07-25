import React from "react";
import { X, Scale, FileCheck, HelpCircle } from "lucide-react";

interface TermsAndConditionsProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "en" | "sw";
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ isOpen, onClose, lang }) => {
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
            <Scale className="w-6 h-6 text-[#C4A66B]" />
            <div>
              <h2 className="font-serif text-lg md:text-xl font-bold tracking-wide">
                {lang === "en" ? "Terms & Conditions" : "Vigezo na Masharti"}
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
                  <FileCheck className="w-4 h-4 text-[#C4A66B]" /> 1. Nature of Business
                </h3>
                <p>
                  <strong>ZEIDA</strong> operates a modernized livestock farming enterprise based in Dar es Salaam, Tanzania. We specialize in raising and supplying healthy, bio-secure livestock (including poultry, ducks, geese, guinea fowl, and goats) along with high-protein feeds and organic farm produce.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight">2. Product Specifications &amp; Live Estimations</h3>
                <p>
                  Calculations, weights, and rates generated via our online Smart Calculator or catalog are reasonable estimates based on our live flock averages. Final weight verifications and unit pricing are confirmed at the time of physical selection, order confirmation, or dispatch from our farm.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight">3. Animal Health &amp; Bio-Security Disclaimers</h3>
                <p>
                  ZEIDA strictly enforces rigorous bio-security, organic feeding protocols, and veterinary monitoring up to the moment of sale. Once livestock is handed over to the buyer or dispatched via agreed third-party transport, responsibility for proper housing, feeding, and care shifts to the purchaser.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight">4. Orders &amp; Payment Terms</h3>
                <p>
                  Orders initiated via WhatsApp or direct phone communication are finalized upon mutual agreement. All payments are processed in Tanzanian Shillings (TZS) or agreed local banking/mobile channels prior to or upon physical delivery as specified in your sales confirmation.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#C4A66B]" /> 5. Intellectual Property &amp; Website Use
                </h3>
                <p>
                  All text, photography, brand identity, calculators, and editorial content on this website are the property of ZEIDA. Unauthorized reproduction or commercial mirroring without written authorization is prohibited.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#C4A66B]" /> 1. Shughuli za Biashara
                </h3>
                <p>
                  <strong>ZEIDA</strong> ni mradi wa kisasa wa ufugaji na kilimo uliopo Dar es Salaam, Tanzania. Tunajishughulisha na kufuga na kuuza mifugo iliyo na afya na iliyolindwa (kama vile kuku, bata, bata mzinga, na mbuzi) pamoja with chakula bora cha mifugo na mazao ya shamba.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight">2. Makadirio ya Bei na Uzito</h3>
                <p>
                  Mchanganuo na uzito unaoonyeshwa kwenye kikokotoo chetu cha mtandaoni ni makadirio ya wastani. Uzito kamili na bei halisi vinathibitishwa wakati wa kuchagua mifugo au kukamilisha agizo shambani.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-sans text-sm md:text-base font-bold text-[#1A3D2B] tracking-tight">3. Afya ya Mifugo na Usalama</h3>
                <p>
                  ZEIDA inazingatia kikamilifu kanuni za usafi, chanjo, na lishe bora hadi wakati wa kukabidhi mifugo. Baada ya mteja kupokea mifugo, jukumu la utunzi na lishe linakuwa la mnunuzi.
                </p>
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

export default TermsAndConditions;
