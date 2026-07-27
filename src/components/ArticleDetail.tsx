import React, { useEffect } from "react";
import { ArrowLeft, Clock, BookOpen, Shield, HelpCircle, Leaf, Globe, CheckCircle } from "lucide-react";

interface ArticleDetailProps {
  articleId: string;
  lang: "en" | "sw";
  onBack: () => void;
}

export default function ArticleDetail({ articleId, lang, onBack }: ArticleDetailProps) {
  // Scroll to top when article is loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [articleId]);

  const isEn = lang === "en";

  const renderOrganicFeed = () => {
    if (isEn) {
      return (
        <article className="max-w-4xl mx-auto py-12 px-4 md:px-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C4A66B] uppercase tracking-widest mb-3">
              <Leaf className="w-4 h-4" />
              <span>Category: Agricultural Feed & Nutrition</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#1D2B22] leading-tight mb-4">
              Organic Feed Formulation: The Science of Biological Vitality
            </h1>
            <p className="text-lg text-[#3B4F43]/85 font-light leading-relaxed mb-6">
              A comprehensive study on how ZEIDA designs and produces premium, chemical-free nutrition on-site to ensure optimal cellular growth, robust immune health, and pristine poultry meat density.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#7A8C82] font-mono border-y border-[#3B4F43]/10 py-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C4A66B]" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#C4A66B]" />
                <span>Verified Fact-checked</span>
              </div>
              <div>Published: June 2026</div>
              <div>Author: Rajab J Koya, Feeds & Animal Nutrition Specialist</div>
            </div>
          </div>

          {/* Article Image / Visual Placeholder */}
          <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-[#F7F5F0] relative border border-[#3B4F43]/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D2B]/5 to-transparent z-0" />
            <div className="relative z-10 text-center max-w-lg px-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A66B] block mb-2">Technical Diagram Outline</span>
              <p className="font-serif text-lg text-[#1D2B22] italic">
                "Precision Organic Nutrition: 100% On-Site Crop Sourcing & Amino Acid Profile Integration"
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-neutral max-w-none text-[#3B4F43] font-light text-[15px] md:text-base leading-[1.8] space-y-8">
            <p>
              In modern animal husbandry, the phrase "you are what you eat" applies with absolute bio-chemical precision. At ZEIDA, we operate under a foundational principle: <strong>true organic quality cannot be bought off the shelf; it must be built from the soil up.</strong> By rejecting commercial, pesticide-treated concentrates, we cultivate our own crops, ensuring a completely transparent feed formula that maximizes animal welfare and consumer safety.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              1. How Organic Poultry Feed is Made
            </h2>
            <p>
              The production of certified-grade organic feed at ZEIDA involves a multi-stage, controlled process that balances biological necessity with physical purity:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Raw Crop Sourcing:</strong> We grow premium yellow maize, local soy, and nutrient-dense greens directly on our Kisarawe II farmland. No chemical fertilizers or synthetic pesticides are applied to these crops.
              </li>
              <li>
                <strong>Mechanical Cleaning & Milling:</strong> Grains are cleaned mechanically to remove impurities and then hammer-milled to custom particle sizes (coarser for mature goats and sheep, finer for young poultry chicks).
              </li>
              <li>
                <strong>Macro-Nutrient Blending:</strong> Ingredients are mixed in state-of-the-art batch mixers. Yellow maize provides the energy (carbohydrate base), while toasted soybeans provide highly digestible proteins.
              </li>
              <li>
                <strong>Micro-Nutrient Enrichment:</strong> Natural calcium from crushed marine shells is added for bone development and eggshell strength. Essential sea salt and organic trace minerals are blended to complete the physiological requirements.
              </li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              2. Scientific Proportions: The Amino Acid Puzzle
            </h2>
            <p>
              Developing feed isn’t simply about satisfying hunger; it is about matching precise cellular requirements. Poultry require key limiting amino acids—specifically <strong>Methionine</strong> and <strong>Lysine</strong>—to build lean muscle tissue. 
            </p>
            <p>
              While industrial producers use cheap, chemically synthesized amino acids, ZEIDA relies entirely on the natural synergy of toasted soybeans, sunflower seed meal, and high-quality local fish meal from sustainable coastal Tanzanian fisheries. This organic protein profiling results in a superior, firm meat texture and high-yield egg quality, completely free of chemical residue.
            </p>

            <div className="bg-[#F7F5F0] border-l-4 border-[#C4A66B] p-6 rounded-r-xl my-6">
              <h3 className="font-serif font-semibold text-sm uppercase tracking-wider text-[#1D2B22] mb-2 flex items-center gap-2">
                <Shield className="w-4.5 h-4.5 text-[#C4A66B]" />
                Our Formulation Standard
              </h3>
              <p className="text-xs md:text-sm italic leading-relaxed">
                "Every batch is formulated to match the specific growth curves of our birds: 20% crude protein for chicks (Starter), 18% for growing pullets (Grower), and 16% for laying hens (Layer). This meticulous scheduling avoids unnecessary growth stress and supports native biological timelines."
              </p>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              3. Benefits of Organic Feed for Poultry & Livestock
            </h2>
            <p>
              Transitioning to an entirely organic feed regime delivers profound advantages across three major horizons:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="border border-[#3B4F43]/10 p-5 rounded-lg bg-white shadow-sm">
                <span className="font-mono text-xs text-[#C4A66B] font-bold block mb-2">01 / IMMUNITY</span>
                <p className="text-xs leading-relaxed text-[#3B4F43]/90">
                  Organic feeds retain natural antioxidants and vitamins, fortifying the birds' immune systems so they naturally resist common coastal diseases without antibiotics.
                </p>
              </div>
              <div className="border border-[#3B4F43]/10 p-5 rounded-lg bg-white shadow-sm">
                <span className="font-mono text-xs text-[#C4A66B] font-bold block mb-2">02 / MEAT QUALITY</span>
                <p className="text-xs leading-relaxed text-[#3B4F43]/90">
                  The natural fats and proteins from yellow maize and seed cakes give the meat a premium, deep flavor profile and high muscle density that institutional chefs prefer.
                </p>
              </div>
              <div className="border border-[#3B4F43]/10 p-5 rounded-lg bg-white shadow-sm">
                <span className="font-mono text-xs text-[#C4A66B] font-bold block mb-2">03 / CONSUMER SAFETY</span>
                <p className="text-xs leading-relaxed text-[#3B4F43]/90">
                  Zero pesticide runoff, heavy metal contamination, or chemical preservatives enter the human food chain through our eggs or meat.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              4. Why We Avoid Synthetic Hormones & Chemical Additives
            </h2>
            <p>
              Traditional commercial farming relies on synthetic growth boosters and chemical coccidiostats to speed up growth artificially. This results in birds gaining weight faster than their skeletal systems can support, leading to joint pain and systemic inflammation.
            </p>
            <p>
              Furthermore, traces of these chemicals persist in the meat, raising long-term public health concerns. ZEIDA rejects these practices entirely. We utilize natural herbal extracts, including <strong>turmeric, garlic, and wild ginger</strong>, which act as organic gut health stabilizers. By honoring natural growth cycles, we ensure our livestock are structurally healthy and biologically sound.
            </p>

            {/* SEO Q&A Section */}
            <div className="border border-[#3B4F43]/20 rounded-xl p-6 md:p-8 bg-[#FAF8F5] mt-10">
              <h4 className="font-serif text-lg font-bold text-[#1D2B22] flex items-center gap-2 mb-6 uppercase tracking-wider">
                <HelpCircle className="w-5 h-5 text-[#C4A66B]" />
                Frequently Asked SEO Questions & Explanations
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Q: How organic feed is made for poultry at ZEIDA?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    A: It is made by crushing on-site cultivated chemical-free yellow maize, blending it with toasted high-protein soybeans, and infusing natural calcium (marine shells) and wild herbs (ginger, garlic) to stabilize digestion. No chemical additives, pesticides, or animal bi-products are ever used.
                  </p>
                </div>
                
                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Q: What are the primary benefits of organic feed for livestock?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    A: Organic feed improves the overall digestive health of the animal, enhances natural disease resistance, produces eggs with richer yellow yolks and meat with superior muscle density, and completely eliminates the risk of synthetic chemical ingestion for consumers.
                  </p>
                </div>

                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Q: Is organic feed formulation more expensive to maintain?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    A: While raw ingredient cultivation demands more manual labor, our integrated vertical loop minimizes external purchases, making it highly cost-competitive while delivering significantly higher-grade health outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    } else {
      // Swahili Version
      return (
        <article className="max-w-4xl mx-auto py-12 px-4 md:px-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C4A66B] uppercase tracking-widest mb-3">
              <Leaf className="w-4 h-4" />
              <span>Jamii: Lishe na Vyakula vya Mifugo</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#1D2B22] leading-tight mb-4">
              Uundaji wa Chakula cha Asili: Sayansi ya Ustawi wa Kibiolojia
            </h1>
            <p className="text-lg text-[#3B4F43]/85 font-light leading-relaxed mb-6">
              Uchunguzi wa kina wa jinsi ZEIDA inavyotengeneza na kuzalisha lishe bora ya asili bila kemikali shambani, ili kuhakikisha ukuaji mzuri wa seli, afya imara, na nyama bora kabisa ya kuku.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#7A8C82] font-mono border-y border-[#3B4F43]/10 py-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C4A66B]" />
                <span>Dakika 6 kusoma</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#C4A66B]" />
                <span>Ukweli Umethibitishwa</span>
              </div>
              <div>Imechapishwa: Juni 2026</div>
              <div>Mwandishi: Rajab J Koya, Mtaalamu wa Lishe na Vyakula vya Mifugo</div>
            </div>
          </div>

          {/* Article Image */}
          <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-[#F7F5F0] relative border border-[#3B4F43]/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D2B]/5 to-transparent z-0" />
            <div className="relative z-10 text-center max-w-lg px-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A66B] block mb-2">Mchoro wa Kiufundi wa Lishe</span>
              <p className="font-serif text-lg text-[#1D2B22] italic">
                "Lishe Bora ya Asili: Kilimo cha Shambani cha 100% na Uwiano wa Protini bila Kemikali"
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-neutral max-w-none text-[#3B4F43] font-light text-[15px] md:text-base leading-[1.8] space-y-8">
            <p>
              Katika ufugaji wa kisasa, usemi kwamba "wewe ni kile unachokula" unafanya kazi kwa usahihi kabisa wa kibayolojia. Hapa ZEIDA, tunaamini kuwa: <strong>ubora wa kweli wa asili hauwezi kununuliwa madukani; lazima uanzie kwenye maandalizi ya udongo shambani.</strong> Kwa kukataa vyakula vilivyotengenezwa kwa kemikali au dawa za kuua wadudu, tunalima mazao yetu wenyewe ili kuhakikisha afya njema ya mifugo na usalama wa walaji.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              1. Jinsi Chakula cha Mifugo cha Asili Kinavyotengenezwa
            </h2>
            <p>
              Uzalishaji wa chakula bora asilia cha ZEIDA hupitia hatua kadhaa makini ili kuhakikisha usalama na ubora:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Mavuno Mapya ya Shambani:</strong> Tunalima mahindi ya njano ya kiwango cha juu, soya, na mboga zenye virutubisho vingi kwenye ardhi yetu ya Kisarawe II bila mbolea au dawa za sumu za viwandani.
              </li>
              <li>
                <strong>Kusafisha na Kusaga kwa Mashine:</strong> Mazao yanasafishwa vizuri ili kuondoa takataka, kisha kusagwa kwa mashine maalumu kulingana na umri wa mifugo (chembe kubwa kwa mbuzi na ndogo kwa vifaranga).
              </li>
              <li>
                <strong>Mchanganyiko wa Virutubisho Vikuu:</strong> Viungo vinachanganywa kwa kutumia mashine za kisasa. Mahindi ya njano yanatoa nishati mwilini, huku soya iliyokaangwa inatoa protini rahisi kusaga.
              </li>
              <li>
                <strong>Kuongeza Madini ya Asili:</strong> Tunaongeza kalsiamu ya asili kutoka kwenye magonye yaliyosagwa kwa ajili ya kuimarisha mifupa ya wanyama na maganda ya mayai, pamoja na chumvi ya bahari na madini mengine muhimu.
              </li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              2. Uwiano wa Kisayansi: Changamoto ya Amino Acid
            </h2>
            <p>
              Kuandaa chakula cha mifugo si tu kuondoa njaa; ni kuhakikisha seli za mnyama zinapata virutubisho sahihi. Kuku wanahitaji amino asidi muhimu—hasa <strong>Methionine</strong> na <strong>Lysine</strong>—ili kujenga nyama safi na imara.
            </p>
            <p>
              Wakati wazalishaji wengi wa viwandani wanatumia amino asidi za kemikali, ZEIDA inategemea protini asilia kutoka kwa soya iliyokaangwa, mashudu ya alizeti, na dagaa safi wa baharini kutoka ukanda wa pwani wa Tanzania. Hii inafanya nyama ya kuku kuwa imara na yenye ladha nzuri asilia, bila mabaki ya kemikali.
            </p>

            <div className="bg-[#F7F5F0] border-l-4 border-[#C4A66B] p-6 rounded-r-xl my-6">
              <h3 className="font-serif font-semibold text-sm uppercase tracking-wider text-[#1D2B22] mb-2 flex items-center gap-2">
                <Shield className="w-4.5 h-4.5 text-[#C4A66B]" />
                Kiwango chetu cha Uundaji
              </h3>
              <p className="text-xs md:text-sm italic leading-relaxed">
                "Kila kundi la chakula limetengenezwa kulingana na ukuaji wa ndege: protini ya asilimia 20 kwa vifaranga (Starter), asilimia 18 kwa kuku wanaokua (Grower), na asilimia 16 kwa kuku wa mayai (Layer). Ratiba hii inasaidia ukuaji wa kawaida na afya bora asilia."
              </p>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              3. Faida za Chakula cha Asili kwa Kuku na Mifugo
            </h2>
            <p>
              Matumizi ya vyakula vya asili yanaleta faida kubwa katika maeneo makuu matatu:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="border border-[#3B4F43]/10 p-5 rounded-lg bg-white shadow-sm">
                <span className="font-mono text-xs text-[#C4A66B] font-bold block mb-2">01 / KINGA YA MWILI</span>
                <p className="text-xs leading-relaxed text-[#3B4F43]/90">
                  Vyakula asilia vina vitamini na vioksidishaji vinavyosaidia kuimarisha kinga ya asili ya mifugo dhidi ya magonjwa ya pwani bila kutumia viuavijasumu (antibiotics).
                </p>
              </div>
              <div className="border border-[#3B4F43]/10 p-5 rounded-lg bg-white shadow-sm">
                <span className="font-mono text-xs text-[#C4A66B] font-bold block mb-2">02 / UBORA WA NYAMA</span>
                <p className="text-xs leading-relaxed text-[#3B4F43]/90">
                  Mafuta na protini asilia kutoka kwenye mahindi ya njano huleta ladha nzuri sana na muundo imara wa nyama unaopendwa sana na wapishi wa hoteli kubwa.
                </p>
              </div>
              <div className="border border-[#3B4F43]/10 p-5 rounded-lg bg-white shadow-sm">
                <span className="font-mono text-xs text-[#C4A66B] font-bold block mb-2">03 / USALAMA WA MLAJI</span>
                <p className="text-xs leading-relaxed text-[#3B4F43]/90">
                  Hakuna mabaki ya dawa za wadudu au sumu nyingine zinazoingia kwenye miili ya binadamu kupitia mayai au nyama yetu.
                </p>
              </div>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              4. Kwa Nini Hatutumii Homoni za Viwandani au Kemikali
            </h2>
            <p>
              Mifumo ya kisasa ya kibiashara mara nyingi hutumia kemikali kuharakisha ukuaji wa kuku. Hii inasababisha kuku kuongezeka uzito haraka kuliko mifupa yao inavyoweza kubeba, jambo linaloleta maumivu ya viungo na magonjwa mbalimbali ya mfumo wa damu.
            </p>
            <p>
              ZEIDA inakataa kabisa mifumo hii. Tunatumia mimea ya asili kama vile <strong>manjano, vitunguu saumu, na tangawizi mwitu</strong> ili kusaidia mfumo wa mmeng'enyo wa chakula. Kwa kuheshimu ukuaji wa asili, tunahakikisha wanyama wetu wana afya bora na salama kabisa kwa walaji.
            </p>

            {/* SEO Q&A Section */}
            <div className="border border-[#3B4F43]/20 rounded-xl p-6 md:p-8 bg-[#FAF8F5] mt-10">
              <h4 className="font-serif text-lg font-bold text-[#1D2B22] flex items-center gap-2 mb-6 uppercase tracking-wider">
                <HelpCircle className="w-5 h-5 text-[#C4A66B]" />
                Maswali yanayoulizwa mara kwa mara kuhusu Ufugaji na Lishe
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Swali: Chakula cha asili cha kuku kinatengenezwaje hapa ZEIDA?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    Jibu: Kinatengenezwa kwa kusaga mahindi ya njano yaliyolimwa shambani kwetu bila kemikali, kuchanganywa na soya iliyokaangwa pamoja na madini ya kalsiamu (magonye ya baharini) na mimea ya asili kama tangawizi na vitunguu saumu ili kulinda tumbo la mifugo.
                  </p>
                </div>
                
                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Swali: Ni zipi faida kuu za chakula cha asili kwa mifugo?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    Jibu: Chakula cha asili huboresha afya ya mmeng'enyo wa mnyama, huongeza kinga ya mwili dhidi ya magonjwa, kinatoa mayai yenye kiini imara cha njano, na kinaondoa kabisa hatari ya walaji kula nyama yenye kemikali za sumu.
                  </p>
                </div>

                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Swali: Je, chakula cha asili kina gharama kubwa zaidi?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    Jibu: Ingawa kilimo asilia kinahitaji nguvu kazi zaidi, mfumo wetu uliokamilika shambani unapunguza ununuzi wa malighafi kutoka nje, jambo linalofanya chakula hiki kuwa na bei ya ushindani huku kikitoa faida kubwa zaidi za kiafya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    }
  };

  const renderValueChain = () => {
    if (isEn) {
      return (
        <article className="max-w-4xl mx-auto py-12 px-4 md:px-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C4A66B] uppercase tracking-widest mb-3">
              <Leaf className="w-4 h-4" />
              <span>Category: Direct Delivery & Farm Operations</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#1D2B22] leading-tight mb-4">
              Integrated Delivery Architecture: A Closed-Loop Supply & Delivery Philosophy
            </h1>
            <p className="text-lg text-[#3B4F43]/85 font-light leading-relaxed mb-6">
              Analyzing how vertical integration, specialized chicks production, and zero-waste farm-to-table delivery stabilize agricultural distribution, reduce resource loss, and guarantee continuous reliability for the Dar es Salaam market.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#7A8C82] font-mono border-y border-[#3B4F43]/10 py-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C4A66B]" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#C4A66B]" />
                <span>Verified Supply & Delivery Study</span>
              </div>
              <div>Published: June 2026</div>
              <div>Author: Abdul Mohamed Shomari (Operations & Finance Manager) & Habibu A Mbiduka (Head of Sales & Delivery)</div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-[#F7F5F0] relative border border-[#3B4F43]/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D2B]/5 to-transparent z-0" />
            <div className="relative z-10 text-center max-w-lg px-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A66B] block mb-2">Process Architecture Flowchart</span>
              <p className="font-serif text-lg text-[#1D2B22] italic">
                "Soil Preparation → Organic Feed Milling → Chicks Production → Managed Breeding → Direct Delivery"
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-neutral max-w-none text-[#3B4F43] font-light text-[15px] md:text-base leading-[1.8] space-y-8">
            <p>
              One of the greatest challenges in sub-Saharan agriculture is supply volatility. Traditional supply chains are fragmented—one enterprise grows the grain, another mills the feed, a third raises the livestock, and a fourth handles transit. Each layer introduces margin markups, bio-security risks, and transportation delays. At ZEIDA, under the financial and operational direction of <strong>Abdul Mohamed Shomari (Operations & Finance Manager)</strong>, we solved this by creating a <strong>fully integrated, closed-loop delivery chain.</strong>
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              1. The Benefits of Integrated Farming Systems & Specialized Hatching
            </h2>
            <p>
              An integrated farming system operates as a singular, cohesive biological engine. The outputs of one subsystem become the inputs of another:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Specialized Chicks Production:</strong> Overseen directly by <strong>Habibu Abdul Mbiduka (Chicks Production Lead)</strong>, our hatchery unit produces healthy, day-old pullets and meat chicks under clinical bio-security, guaranteeing optimal genetic vigor from day one.
              </li>
              <li>
                <strong>Nutrient Re-utilization:</strong> Animal manure from our goats, sheep, and poultry is collected and processed through composting systems. This nitrogen-rich organic compost is returned to our pasturelands and maize crops, eliminating commercial fertilizers.
              </li>
              <li>
                <strong>Cost Protection & Sales Strategy:</strong> Managed by sales officers <strong>Ellis</strong> and <strong>Ramadhani Hassan</strong>, our direct client engagement keeps market pricing transparent and immune to third-party price speculation.
              </li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              2. How Closed-Loop Delivery Prevents Agricultural Waste
            </h2>
            <p>
              In traditional systems, up to 30% of agricultural products are lost post-harvest due to bad storage or delayed transport. Our direct delivery model counters this by matching production directly to active demand metrics:
            </p>
            <p>
              At our Kisarawe II facilities, crops are harvested and milled according to precise livestock growth forecasts. Egg collections are graded, sanitized, packed, and loaded directly into our delivery vans within hours of being laid. Orders placed through our sales channels are fulfilled rapidly under the supervision of <strong>Habibu A Mbiduka (Head of Sales & Delivery)</strong>.
            </p>

            <div className="bg-[#FAF8F5] border-l-4 border-[#1A3D2B] p-6 rounded-r-xl my-6">
              <h3 className="font-serif font-semibold text-sm uppercase tracking-wider text-[#1D2B22] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[#1A3D2B]" />
                Zero-Waste Efficiency
              </h3>
              <p className="text-xs md:text-sm italic leading-relaxed">
                "Our operational delivery data reveals that our integrated model maintains post-harvest loss at under 1.8%, compared to the regional average of 25%. We do not run third-party logistics—we handle direct, reliable farm delivery."
              </p>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              3. Why Direct Delivery Matters for Hotels & Corporate Kitchens
            </h2>
            <p>
              For executive chefs, resort managers, and large-scale catering businesses in Dar es Salaam, raw ingredient consistency is crucial. Menu structures rely on constant portion sizes, clean packaging, and dependable delivery schedules.
            </p>
            <p>
              ZEIDA serves as a key partner by removing the middleman. We do not outsource to third-party logistics; we operate our own fleet of custom-adapted farm vehicles under <strong>Habibu A Mbiduka</strong>, delivering directly from our Kigamboni farm to corporate kitchens. Our sales officers, <strong>Ellis</strong> and <strong>Ramadhani Hassan</strong>, ensure smooth client order coordination so every delivery arrives at peak freshness with complete safety tracking documentation.
            </p>

            {/* SEO Q&A Section */}
            <div className="border border-[#3B4F43]/20 rounded-xl p-6 md:p-8 bg-[#FAF8F5] mt-10">
              <h4 className="font-serif text-lg font-bold text-[#1D2B22] flex items-center gap-2 mb-6 uppercase tracking-wider">
                <HelpCircle className="w-5 h-5 text-[#C4A66B]" />
                Frequently Asked SEO Questions & Explanations
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Q: What are the main benefits of integrated farming systems in East Africa?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    A: Integrated farming systems reduce reliance on expensive external inputs (like chemical fertilizers), lower operational costs, secure steady year-round production, and help build robust resilience against changing regional weather conditions.
                  </p>
                </div>
                
                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Q: How does a closed-loop supply chain prevent post-harvest waste in agriculture?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    A: By synchronizing crop harvest schedules directly with real-time livestock consumption and retail demand. Processing and delivery happen immediately, eliminating intermediate storage times where spoilage typically occurs.
                  </p>
                </div>

                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Q: Why should commercial food distributors partner with vertically integrated farms?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    A: Vertical integration ensures absolute price stability, consistent quality control across all batches, and guarantees that there are no supply chain interruptions, protecting business margins and consumer trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    } else {
      // Swahili Version
      return (
        <article className="max-w-4xl mx-auto py-12 px-4 md:px-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C4A66B] uppercase tracking-widest mb-3">
              <Leaf className="w-4 h-4" />
              <span>Jamii: Mauzo, Utoaji na Operesheni za Shamba</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#1D2B22] leading-tight mb-4">
              Mlolongo Thabiti wa Mauzo na Utoaji: Mfumo wa Usambazaji wa Moja kwa Moja
            </h1>
            <p className="text-lg text-[#3B4F43]/85 font-light leading-relaxed mb-6">
              Uchambuzi wa kina wa jinsi mifumo ya kisasa ya uzalishaji vifaranga, usimamizi na utoaji wa moja kwa moja unavyopunguza upotevu wa bidhaa na kuhakikisha upatikanaji wa uhakika jijini Dar es Salaam.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#7A8C82] font-mono border-y border-[#3B4F43]/10 py-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C4A66B]" />
                <span>Dakika 5 kusoma</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#C4A66B]" />
                <span>Tafiti ya Mauzo na Utoaji</span>
              </div>
              <div>Imechapishwa: Juni 2026</div>
              <div>Mwandishi: Abdul Mohamed Shomari (Meneja Operesheni na Fedha) na Habibu A Mbiduka (Mkuu wa Mauzo na Utoaji)</div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-[#F7F5F0] relative border border-[#3B4F43]/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D2B]/5 to-transparent z-0" />
            <div className="relative z-10 text-center max-w-lg px-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A66B] block mb-2">Mchoro wa Mtiririko wa Kazi</span>
              <p className="font-serif text-lg text-[#1D2B22] italic">
                "Uandaji Ardhi → Usindikaji Lishe → Uzalishaji Vifaranga → Ufugaji Makini → Utoaji wa Moja kwa Moja"
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-neutral max-w-none text-[#3B4F43] font-light text-[15px] md:text-base leading-[1.8] space-y-8">
            <p>
              Moja ya changamoto kubwa katika kilimo cha Afrika Mashariki ni kuyumba kwa ugavi na upatikanaji wa bidhaa. Mifumo mingi ya zamani imegawanyika—kampuni moja inalima mazao, nyingine inatengeneza chakula, ya tatu inafuga, na ya nne inasafirisha. Kila hatua inaongeza gharama za kati na ucheleweshaji. ZEIDA, chini ya usimamizi wa kifedha na kioperesheni wa <strong>Abdul Mohamed Shomari (Meneja Operesheni na Fedha)</strong>, imetatua hili kwa kuunda <strong>mlolongo thabiti na uliokamilika wa utoaji wa bidhaa.</strong>
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              1. Faida za Kilimo Kilichokamilika na Uzalishaji Vifaranga
            </h2>
            <p>
              Mfumo uliokamilika wa kilimo unafanya kazi kama injini moja ya kibiolojia ambapo mabaki ya hatua moja yanakuwa malighafi ya hatua nyingine:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Uzalishaji wa Vifaranga:</strong> Ukiongozwa moja kwa moja na <strong>Habibu Abdul Mbiduka (Mtaalamu wa Uzalishaji Vifaranga)</strong>, mtambo wetu wa kutotolesha unazalisha vifaranga bora na wenye afya imara kuanzia siku ya kwanza.
              </li>
              <li>
                <strong>Matumizi ya Mbolea za Asili:</strong> Mbolea ya asili kutoka kwa mbuzi, kondoo, na kuku inakusanywa na kusindikwa. Mbolea hii inarudishwa kwenye mashamba ya malisho na mahindi, na kuondoa kabisa mbolea za kemikali.
              </li>
              <li>
                <strong>Mkakati wa Mauzo na Bei:</strong> Ukiongozwa na maafisa mauzo <strong>Ellis</strong> na <strong>Ramadhani Hassan</strong>, mawasiliano yetu na wateja yanalinda bei zetu dhidi ya mabadiliko ya kiholela ya sokoni.
              </li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              2. Jinsi Mfumo wa Utoaji Unavyozuia Upotevu wa Mazao
            </h2>
            <p>
              Katika mifumo ya kawaida, hadi asilimia 30 ya mazao hupotea baada ya kuvunwa. Mfumo wetu wa utoaji wa moja kwa moja unazuia hili kwa kuoanisha uzalishaji na mahitaji halisi ya soko:
            </p>
            <p>
              Katika shamba letu la Kisarawe II, mazao yanavunwa na kusindikwa kulingana na mahitaji ya mifugo. Mayai na kuku hufikishwa haraka sana kwa wateja chini ya uongozi wa <strong>Habibu A Mbiduka (Mkuu wa Mauzo na Utoaji)</strong>.
            </p>

            <div className="bg-[#FAF8F5] border-l-4 border-[#1A3D2B] p-6 rounded-r-xl my-6">
              <h3 className="font-serif font-semibold text-sm uppercase tracking-wider text-[#1D2B22] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[#1A3D2B]" />
                Ufanisi wa Juu wa Utoaji
              </h3>
              <p className="text-xs md:text-sm italic leading-relaxed">
                "Takwimu zetu za utoaji wa bidhaa zinaonyesha upotevu wa mazao ni chini ya asilimia 1.8. Hatutegemei makampuni ya nje ya logistics—tunafanya utoaji wa moja kwa moja kutoka shambani kwa uaminifu wa hali ya juu."
              </p>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              3. Kwa Nini Utoaji wa Moja kwa Moja ni Muhimu kwa Hoteli na Migahawa
            </h2>
            <p>
              Kwa wapishi wakuu wa hoteli na makampuni ya vyakula jijini Dar es Salaam, uaminifu wa upatikanaji wa bidhaa ni jambo muhimu sana. Ratiba za vyakula zinategemea vipimo thabiti na utoaji wa haraka.
            </p>
            <p>
              ZEIDA inafanya kazi kama mshirika mkuu kwa kuondoa madalali wa kati. Hatukodishi makampuni ya logistics ya nje; tunaendesha magari yetu wenyewe chini ya <strong>Habibu A Mbiduka</strong>, tukisafirisha na kutoa bidhaa moja kwa moja kutoka shamba la Kigamboni. Maafisa wetu wa mauzo, <strong>Ellis</strong> na <strong>Ramadhani Hassan</strong>, wanahakikisha kila oda inawafikia wateja ikiwa safi na yenye ubora wa juu.
            </p>

            {/* SEO Q&A Section */}
            <div className="border border-[#3B4F43]/20 rounded-xl p-6 md:p-8 bg-[#FAF8F5] mt-10">
              <h4 className="font-serif text-lg font-bold text-[#1D2B22] flex items-center gap-2 mb-6 uppercase tracking-wider">
                <HelpCircle className="w-5 h-5 text-[#C4A66B]" />
                Maswali ya SEO kuhusu Mlolongo wa Thamani ya Kilimo
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Swali: Ni zipi faida kuu za mifumo iliyokamilika ya kilimo katika Afrika Mashariki?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    Jibu: Inapunguza utegemezi wa pembejeo za nje zenye gharama kubwa (kama mbolea za kemikali), inapunguza gharama za uzalishaji, inahakikisha uzalishaji endelevu mwaka mzima, na inasaidia kukabiliana na mabadiliko ya hali ya hewa.
                  </p>
                </div>
                
                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Swali: Mfumo uliokamilika unazuiaje upotevu wa mazao baada ya kuvunwa?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    Jibu: Kwa kuoanisha ratiba za mavuno moja kwa moja na mahitaji halisi ya mifugo na wateja. Maandalizi na usafirishaji unafanyika mara moja, na hivyo kuondoa uhifadhi mrefu ambapo chakula huharibika mara nyingi.
                  </p>
                </div>

                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Swali: Kwa nini wasambazaji wa chakula wanapaswa kufanya kazi na mashamba yaliyokamilika?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    Jibu: Kilimo kilichokamilika kinahakikisha bei thabiti zisizobadilika hovyo, udhibiti thabiti wa ubora kwa kila kundi la bidhaa, na uhakika wa ugavi mwaka mzima bila kukatika kwa bidhaa sokoni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    }
  };

  const renderSustainableFarming = () => {
    if (isEn) {
      return (
        <article className="max-w-4xl mx-auto py-12 px-4 md:px-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C4A66B] uppercase tracking-widest mb-3">
              <Leaf className="w-4 h-4" />
              <span>Category: Ecological Farming & Herd Health</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#1D2B22] leading-tight mb-4">
              Controlled Sustainable Farming: Coastal Adaptation & Eco-Preservation
            </h1>
            <p className="text-lg text-[#3B4F43]/85 font-light leading-relaxed mb-6">
              A deep-dive investigation into how ZEIDA implements regenerative grazing, solar climate controls, and groundwater bio-security protocols inside Dar es Salaam's sensitive coastal ecosystems.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#7A8C82] font-mono border-y border-[#3B4F43]/10 py-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C4A66B]" />
                <span>6 min read</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#C4A66B]" />
                <span>Ecological Impact Certified</span>
              </div>
              <div>Published: June 2026</div>
              <div>Author: Dr. Ally (Doctor of the Farm), Salum Habibu (Head of Direct Operations) & Hashimu Chande Abdallah (CEO)</div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-[#F7F5F0] relative border border-[#3B4F43]/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D2B]/5 to-transparent z-0" />
            <div className="relative z-10 text-center max-w-lg px-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A66B] block mb-2">Sustainable Farm Layout Map</span>
              <p className="font-serif text-lg text-[#1D2B22] italic">
                "Rotational Grazing Paddocks, Integrated Deep Litter Sheds, and Solar Micro-Climate Ducts"
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-neutral max-w-none text-[#3B4F43] font-light text-[15px] md:text-base leading-[1.8] space-y-8">
            <p>
              Agriculture in coastal tropical environments presents unique demands. High ambient humidity, aggressive solar radiation, and seasonal water scarcity require specialized management. At our Kisarawe II facilities in Kigamboni, we prove that <strong>commercial farming doesn't have to deplete natural resources.</strong> Through controlled, eco-designed infrastructure, we preserve our regional water tables, enrich the soil, and maintain peak animal physical welfare.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              1. What is Sustainable Livestock Farming?
            </h2>
            <p>
              Sustainable livestock farming is the practice of breeding animals using methods that are ecologically sound, socially responsible, and economically viable. It is defined by several core requirements:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Regenerative Grazing:</strong> Goats and sheep are not left to overgraze. We segment our pastureland into distinct paddocks, rotating the herds dynamically. This allows the grass roots to regenerate, prevents soil compaction, and maintains local coastal plant biodiversity.
              </li>
              <li>
                <strong>Eco-Housing & Deep Litter Systems:</strong> Our poultry structures use deep litter systems consisting of sawdust and dry agricultural by-products. This litter absorbs moisture, breaks down bird manure organically, and creates heat that eliminates harmful pathogens naturally.
              </li>
              <li>
                <strong>Chemical-Free Water Protection:</strong> We avoid synthetic sanitizers that can leach into Kigamboni’s shallow groundwater. Our operations use rainwater harvesting systems and bio-sand filters, protecting the delicate coastal aquifer.
              </li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              2. Climate Adaptation in Coastal Tanzania
            </h2>
            <p>
              Dar es Salaam’s heat can cause severe heat stress in high-yield livestock, affecting growth rates, egg production, and reproductive health. Traditional farms use intensive air conditioning, which consumes massive amounts of electricity.
            </p>
            <p>
              ZEIDA resolves this through passive climate design. Our poultry houses and goat shelters feature high roofs, open-sided wire netting, and calculated east-west alignment to reduce direct solar exposure. We use solar-powered low-draw ventilation fans and plant native shade trees around facility borders, reducing internal temperatures by 4°C to 6°C compared to external conditions naturally.
            </p>

            <div className="bg-[#FAF8F5] border-l-4 border-[#C4A66B] p-6 rounded-r-xl my-6">
              <h3 className="font-serif font-semibold text-sm uppercase tracking-wider text-[#1D2B22] mb-2 flex items-center gap-2">
                <Shield className="w-4.5 h-4.5 text-[#C4A66B]" />
                Groundwater Protection Protocol
              </h3>
              <p className="text-xs md:text-sm italic leading-relaxed">
                "Our Kisarawe II location undergoes regular soil and water testing. By completely eliminating chemical pesticides and inorganic nitrogen fertilizers, our runoffs show zero synthetic nitrates, keeping regional drinking water safe."
              </p>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              3. Practical Bio-Security Over Synthetic Antibiotics
            </h2>
            <p>
              The global spread of antibiotic-resistant bacteria is directly linked to the overuse of medicine in animal farming. Many commercial operations feed low doses of antibiotics to healthy animals daily just to prevent disease in crowded spaces.
            </p>
            <p>
              At ZEIDA, we focus on prevention through controlled sanitation. Our bio-security rules are strictly enforced: all staff and vehicles pass through disinfectants at access gates, and our stocking density is kept strictly below industrial averages to allow natural, healthy spacing. This careful approach maintains our birds' physical health organically, ensuring that our meat and eggs remain completely antibiotic-free.
            </p>

            {/* SEO Q&A Section */}
            <div className="border border-[#3B4F43]/20 rounded-xl p-6 md:p-8 bg-[#FAF8F5] mt-10">
              <h4 className="font-serif text-lg font-bold text-[#1D2B22] flex items-center gap-2 mb-6 uppercase tracking-wider">
                <HelpCircle className="w-5 h-5 text-[#C4A66B]" />
                Frequently Asked SEO Questions & Explanations
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Q: What is sustainable livestock farming in tropical climates?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    A: It is the practice of breeding healthy livestock using resource-efficient, natural methods. This includes using passive solar shelter ventilation to reduce heat stress, implementing rotational pasture grazing to prevent soil degradation, and protecting local groundwater from agricultural runoff.
                  </p>
                </div>
                
                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Q: How can tropical farms manage poultry heat stress sustainably?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    A: By adopting passive cooling techniques. This includes constructing east-west oriented open-sided houses, using high roofs for thermal buoyancy, using low-energy solar fans, and planting high-canopy shade trees around livestock areas.
                  </p>
                </div>

                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Q: Why is antibiotic-free livestock farming crucial for consumer health?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    A: It eliminates the risk of human ingestion of trace drug residues and prevents the development of drug-resistant superbugs, protecting both individual dietary safety and broader public health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    } else {
      // Swahili Version
      return (
        <article className="max-w-4xl mx-auto py-12 px-4 md:px-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C4A66B] uppercase tracking-widest mb-3">
              <Leaf className="w-4 h-4" />
              <span>Jamii: Kilimo Endelevu na Afya ya Mifugo</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-normal text-[#1D2B22] leading-tight mb-4">
              Kilimo Endelevu Kilichodhibitiwa: Kulinda Mazingira ya Pwani nchini Tanzania
            </h1>
            <p className="text-lg text-[#3B4F43]/85 font-light leading-relaxed mb-6">
              Uchunguzi wa kina wa jinsi ZEIDA inavyotekeleza mifumo ya mzunguko wa malisho, ulinzi wa vyanzo vya maji, na miundo inayostahimili joto la Pwani kule Kigamboni.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#7A8C82] font-mono border-y border-[#3B4F43]/10 py-4">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C4A66B]" />
                <span>Dakika 6 kusoma</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#C4A66B]" />
                <span>Uthibitisho wa Uhifadhi Mazingira</span>
              </div>
              <div>Imechapishwa: Juni 2026</div>
              <div>Mwandishi: Dkt. Ally (Daktari wa Shamba), Salum Habibu (Mkuu wa Operesheni za Shambani) na Hashimu Chande Abdallah (CEO)</div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden mb-10 bg-[#F7F5F0] relative border border-[#3B4F43]/10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3D2B]/5 to-transparent z-0" />
            <div className="relative z-10 text-center max-w-lg px-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C4A66B] block mb-2">Ramani ya Shamba Endelevu</span>
              <p className="font-serif text-lg text-[#1D2B22] italic">
                "Mabanda ya Malisho ya Mzunguko, Mfumo wa Deep Litter, na Vipitisho vya Hewa vya Jua"
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-neutral max-w-none text-[#3B4F43] font-light text-[15px] md:text-base leading-[1.8] space-y-8">
            <p>
              Kilimo katika mazingira ya pwani ya kitropiki kina changamoto zake za kipekee. Unyevunyevu mwingi kwenye hewa, mionzi mikali ya jua, na uhaba wa maji wa msimu unahitaji usimamizi makini sana. Katika shamba letu la Kisarawe II kule Kigamboni, tunathibitisha kuwa <strong>kilimo cha kibiashara si lazima kiharibu rasilimali za asili.</strong> Kupitia miundombinu endelevu na rafiki kwa mazingira, tunalinda vyanzo vyetu vya maji vya chini ya ardhi, tunaboresha ardhi, na kudumisha afya ya mifugo yetu.
            </p>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              1. Kilimo Endelevu cha Mifugo ni nini?
            </h2>
            <p>
              Kilimo endelevu cha mifugo ni mfumo wa ufugaji unaozingatia uhifadhi wa mazingira, uwajibikaji wa kijamii, na tija ya kiuchumi. Kina sifa kuu zifuatazo:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Malisho ya Mzunguko (Regenerative Grazing):</strong> Mbuzi na kondoo hawalishwi eneo moja mpaka majani yaishe kabisa. Tunagawanya shamba letu katika maeneo tofauti na kuhamisha wanyama mara kwa mara. Hili linaruhusu majani kuota upya vizuri, linazuia mmomonyoko wa udongo, na kulinda uoto wa asili wa pwani.
              </li>
              <li>
                <strong>Mfumo wa Deep Litter kwenye Mabanda:</strong> Mabanda yetu ya kuku yanatumia mfumo wa tabaka nene la randa za mbao na mabaki makavu ya mazao. Tabaka hili linanyonya unyevunyevu, linavunja kinyesi cha kuku kiasili, na kuzalisha joto linaloua wadudu wa magonjwa kiasili.
              </li>
              <li>
                <strong>Ulinzi wa Vyanzo vya Maji:</strong> Hatutumii kemikali kali za kusafisha zinazoweza kupenya hadi kwenye maji ya chini ya ardhi ya Kigamboni. Tunavuna maji ya mvua na kutumia vichujio vya asili vya mchanga, huku tukilinda vyanzo vyote vya maji vya pwani.
              </li>
            </ul>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              2. Kukabiliana na Hali ya Hewa ya Pwani nchini Tanzania
            </h2>
            <p>
              Joto kali la Dar es Salaam linaweza kusababisha msongo wa joto (heat stress) kwa mifugo, jambo linaloweza kupunguza kasi ya ukuaji, utagaji wa mayai, na afya ya uzazi. Mashamba mengi ya kibiashara yanatumia mifumo ya viyoyozi inayotumia umeme mwingi sana.
            </p>
            <p>
              ZEIDA inatatua hili kwa miundo rafiki ya mabanda yetu. Mabanda yetu ya kuku na mbuzi yana paa ndefu, kuta za wazi zenye wavu, na yameelekezwa upande wa mashariki-magharibi ili kuzuia mionzi ya moja kwa moja ya jua. Tunatumia feni za sola zinazotumia nishati kidogo, na kupanda miti ya asili ya kivuli pembezoni mwa mabanda, jambo linalopunguza joto ndani kwa nyuzi joto 4°C hadi 6°C kiasili.
            </p>

            <div className="bg-[#FAF8F5] border-l-4 border-[#C4A66B] p-6 rounded-r-xl my-6">
              <h3 className="font-serif font-semibold text-sm uppercase tracking-wider text-[#1D2B22] mb-2 flex items-center gap-2">
                <Shield className="w-4.5 h-4.5 text-[#C4A66B]" />
                Itifaki ya Ulinzi wa Maji ya Chini ya Ardhi
              </h3>
              <p className="text-xs md:text-sm italic leading-relaxed">
                "Maji na udongo wa shamba letu la Kisarawe II hupimwa mara kwa mara. Kwa kuondoa kabisa matumizi ya dawa za sumu za wadudu na mbolea za kemikali, maji yetu hayana mabaki ya sumu, jambo linaloweka vyanzo vya maji vya jirani kuwa salama kwa matumizi ya binadamu."
              </p>
            </div>

            <h2 className="font-serif text-xl md:text-2xl font-semibold text-[#1D2B22] uppercase tracking-wide pt-4 border-b border-[#3B4F43]/10 pb-2">
              3. Udhibiti thabiti wa Usafi badala ya Viuavijasumu (Antibiotics)
            </h2>
            <p>
              Kuenea kwa bakteria sugu wasiosikia dawa duniani kunachangiwa kwa kiasi kikubwa na matumizi yaliyokithiri ya antibiotics kwenye mifugo. Mashamba mengi ya kibiashara huwapa wanyama wao antibiotics kila siku ili kuzuia magonjwa kutokana na msongamano mkubwa wa wanyama kwenye mabanda madogo.
            </p>
            <p>
              Hapa ZEIDA, tunazingatia zaidi kuzuia magonjwa kupitia usafi wa kiwango cha juu. Sheria zetu za kuzuia magonjwa zinatekelezwa kwa makini: wafanyakazi na magari yote yanapita kwenye dawa za kuua wadudu magetini, na idadi ya wanyama kwenye banda inazingatia nafasi ya kutosha ya kuishi kwa uhuru na asili yao. Hii inafanya mifugo yetu kuwa na afya imara bila hitaji la viuavijasumu, ikihakikisha nyama na mayai yetu yako salama kabisa kwa walaji.
            </p>

            {/* SEO Q&A Section */}
            <div className="border border-[#3B4F43]/20 rounded-xl p-6 md:p-8 bg-[#FAF8F5] mt-10">
              <h4 className="font-serif text-lg font-bold text-[#1D2B22] flex items-center gap-2 mb-6 uppercase tracking-wider">
                <HelpCircle className="w-5 h-5 text-[#C4A66B]" />
                Maswali yanayoulizwa mara kwa mara kuhusu Kilimo Endelevu cha Pwani
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Swali: Kilimo endelevu cha mifugo katika hali ya hewa ya joto hufanyikaje?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    Jibu: Ni ufugaji wa mifugo kwa kutumia mbinu asilia zinazolinda mazingira na kutunza rasilimali. Hii inajumuisha matumizi ya mifumo ya kawaida ya kupitisha hewa ili kupunguza joto, mzunguko wa malisho ili kuzuia uharibifu wa ardhi, na kulinda maji ya chini ya ardhi dhidi ya sumu.
                  </p>
                </div>
                
                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Swali: Shamba linawezaje kupunguza joto kwa kuku katika ukanda wa pwani kwa mbinu endelevu?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    Jibu: Kwa kuunda mabanda yanayopitisha hewa ya kutosha asilia yenye paa ndefu, kuweka uelekeo sahihi wa banda ili kuepuka jua kali, kutumia feni zinazotumia umeme wa jua, na kupanda miti ya kivuli pembezoni mwa mabanda ya mifugo.
                  </p>
                </div>

                <div className="border-t border-[#3B4F43]/10 pt-4">
                  <h5 className="font-sans font-semibold text-[#1D2B22] text-sm md:text-base mb-1">
                    Swali: Kwa nini nyama na mayai yasiyo na viuavijasumu ni muhimu kwa walaji?
                  </h5>
                  <p className="text-xs md:text-sm text-[#3B4F43]/90 leading-relaxed">
                    Jibu: Hii inazuia mwanadamu kula mabaki ya dawa yanayoweza kumuathiri kiafya, na inaondoa hatari ya kuenea kwa bakteria sugu wasiosikia dawa (superbugs), na hivyo kulinda usalama na afya ya jamii kwa ujumla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase font-semibold text-[#1A3D2B] hover:text-[#C4A66B] font-sans transition-colors duration-200 cursor-pointer mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>{isEn ? "Back to main page" : "Rudi ukurasa mkuu"}</span>
        </button>

        {/* Render appropriate article */}
        {articleId === "insight-1" && renderOrganicFeed()}
        {articleId === "insight-2" && renderValueChain()}
        {articleId === "insight-3" && renderSustainableFarming()}

        {/* Bottom Back Button for long-scroll convenience */}
        <div className="mt-12 text-center border-t border-[#3B4F43]/10 pt-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase font-semibold bg-[#1A3D2B] hover:bg-[#C4A66B] text-white font-sans px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isEn ? "Return to Main Hub" : "Rudi Mwanzo"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
