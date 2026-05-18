import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
  .dmr-font { font-family: 'Manrope', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
`;

function DMRLogo({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 129.1 57.95" xmlns="http://www.w3.org/2000/svg" aria-label="DMR Sanat Ofisi logo">
      <path fill="currentColor" d="M24.63,39.2H.07c-.1-.47-.1-.91.07-1.33,1.41-.33,2.68-.91,3.63-2.01.5-.57.96-1.28.96-2.12V5.42c0-1.41-.73-2.66-1.86-3.39C1.99,1.48,1.07,1.4.02,1.4l.02-1.4,23.02.02c2.25,0,4.36.53,6.46,1.21,2.37.76,4.53,1.82,6.53,3.28,4.75,3.46,7.2,8.53,7.62,14.36.79,10.9-8.15,20.33-19.04,20.33ZM34.49,17.6c-.22-4.93-2.15-9.16-6.29-11.91-4.03-2.68-9.3-3.63-14.08-3.53-.21,0-.41.17-.41.41v31.71c1.3,1.38,2.88,2.23,4.68,2.64,3.48.8,7.09-.11,9.88-2.32,1.45-1.15,2.57-2.52,3.47-4.13,2.09-3.72,2.94-8.64,2.75-12.86Z"/>
      <path fill="currentColor" d="M108.6,47.5l-7.72-10.01-4.8-5.95c-1.14-1.41-2.65-2.28-4.43-2.62-1.54-.29-3.06-.43-4.64-.45-.42,0-.62-.29-.59-.73,0-.15.07-.44.16-.55s.35-.18.53-.17c3.62.09,7.79-.45,10.85-2.5,2.14-1.44,3.44-3.67,3.59-6.29.12-2.04-.19-4.03-.86-5.97-1.04-3.02-3.15-5.45-5.95-6.98-2.3-1.25-4.01-1.61-6.69-1.62l-12.83-.06c-.28,0-.57-.23-.57-.48v-.98c0-.31.24-.55.58-.55l20.33.36c3.74.07,7.28,1.41,10.1,3.79,3.53,2.99,5.2,7.49,4.42,12.06-.71,4.13-3.3,7.64-7.08,9.46-.25.12-.45.44-.48.64-.04.33.1.62.34.84,3.36,2.95,7.52,8.26,10.24,11.92l7.42,10c1.16,1.56,2.68,3.75,4.23,4.81.89.61,1.8,1.11,2.76,1.61.4.21.85.33,1.28.44l.28.07c.08.02-.03.35-.15.35h-5.92c-4.01,0-8.27-2.6-10.65-5.66l-3.74-4.79Z"/>
      <path fill="currentColor" d="M75.56,35.68l-8.61-22.66-5.21,14.89c-1,2.85-.4,5.86,1.64,8.08,1.16,1.39,2.67,2.32,4.3,3.16h-16.83c1.44-.72,2.88-.98,3.88-2.23.43-.53.28-1.03.06-1.57l-1.44-3.47-7.81-20.12c-.15-.38-.12-.82.02-1.17l3.07-8.14c.08-.22.34-.39.54-.39s.44.15.54.41l10.45,26.72,9.23-26.43c.09-.27.32-.41.53-.42s.44.14.55.4l12.25,30.8c1,2.52,3.06,4.75,5.62,5.61l-10.19.07-6.61-.09,2.49-1.04c.53-.22,1.04-.62,1.43-.99.43-.48.32-.82.1-1.42Z"/>
      <path fill="currentColor" d="M44.37,39.14h-11.05c2.19-1.32,4.09-2.31,5.74-4.37-.34,2.24,1.82,3.23,3.54,3.79l1.76.57Z"/>
    </svg>
  );
}

const scenes = [
  {
    number: "01",
    title: "Amber Residence",
    location: "İstanbul, Türkiye",
    service: "Dış Cephe Görselleştirme",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    number: "02",
    title: "Nocturne Villa",
    location: "Bodrum, Türkiye",
    service: "Villa Render Sunumu",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    number: "03",
    title: "Urban Form",
    location: "Türkiye",
    service: "Mimari Konsept Sunumu",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2400&auto=format&fit=crop",
    ],
  },
];

const dayNightScene = {
  title: "Dış Cephe Atmosferi",
  location: "İstanbul, Türkiye",
  service: "Gündüzden Geceye Dış Cephe Sunumu",
  dayImage: "/images/dmr/exterior-day.jpg",
  nightImage: "/images/dmr/exterior-night.jpg",
};

const processSteps = [
  { number: "01", title: "Keşif", text: "Projenin hedefi, lokasyonu, kullanım amacı ve görsel beklentisi netleştirilir." },
  { number: "02", title: "Konsept", text: "Mimari dil, atmosfer, malzeme yaklaşımı ve ışık karakteri belirlenir." },
  { number: "03", title: "Görselleştirme", text: "Dış cephe, iç mekân veya animasyon sahneleri yüksek kalite standartlarında üretilir." },
  { number: "04", title: "Final Sunum", text: "Revizeler tamamlanır ve proje satışa, yatırıma veya lansmana hazır hale getirilir." },
];

const galleryProjects = [
  {
    title: "Amber Residence",
    city: "İstanbul",
    country: "Türkiye",
    category: "Dış Cephe Render",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    title: "Nocturne Villa",
    city: "Bodrum",
    country: "Türkiye",
    category: "Villa Görselleştirme",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    title: "Urban Form",
    city: "İstanbul",
    country: "Türkiye",
    category: "Mimari Konsept",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    title: "Private Interior",
    city: "Ankara",
    country: "Türkiye",
    category: "İç Mekân Tasarımı",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    title: "Glass House",
    city: "İzmir",
    country: "Türkiye",
    category: "Dış Cephe Render",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400&auto=format&fit=crop",
    ],
  },
  {
    title: "Hill Villa",
    city: "Muğla",
    country: "Türkiye",
    category: "Villa Render Sunumu",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2400&auto=format&fit=crop",
    ],
  },
];

const studioReasons = [
  {
    number: "01",
    title: "Sinematik Sunum",
    kicker: "Projeyi yalnızca göstermeyiz.",
    text: "Işık, kadraj ve atmosferle mimariyi hissedilir bir sahneye dönüştürürüz.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Premium Algı",
    kicker: "Değer algısını yükseltiriz.",
    text: "Güçlü bir görsel sunum, projenin müşteri ve yatırımcı gözündeki prestijini artırır.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Mimari Detay",
    kicker: "Her sahne detayla güçlenir.",
    text: "Malzeme, ışık, ölçek ve kompozisyon dili her karede titizlikle işlenir.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Ayrıcalıklı Vitrin",
    kicker: "Projeler listelenmez, sahnelenir.",
    text: "Her proje, markaya yakışan özel bir sunum deneyimiyle akılda kalıcı hale gelir.",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1200&auto=format&fit=crop",
  },
];

const services = [
  "Dış Cephe Görselleştirme",
  "İç Mekân Tasarımı",
  "Render Animasyonu",
  "Uygulama & Konsept Sunumu",
];
function DayNightReveal() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const nightOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 0.55, 1]);
  const dayOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0.45, 0]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative isolate h-[260vh] bg-[#050403]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src="/images/dmr/exterior-day.jpg"
          alt="DMR gündüz dış cephe render"
          style={{ opacity: dayOpacity }}
          className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
        />

        <motion.img
          src="/images/dmr/exterior-night.jpg"
          alt="DMR gece dış cephe render"
          style={{ opacity: nightOpacity }}
          className="absolute inset-0 z-[2] h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/62 via-black/10 to-black/45" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050403]/88 via-transparent to-black/20" />

        <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-between px-5 py-28 md:px-10">
          <div className="flex items-center justify-between gap-8">
            <p className="text-[10px] uppercase tracking-[0.55em] text-[#D8B16F]">
              Gündüzden Geceye
            </p>

            <div className="h-px flex-1 overflow-hidden bg-white/12">
              <motion.div style={{ width: progressWidth }} className="h-px bg-[#D8B16F]" />
            </div>

            <p className="hidden text-[10px] uppercase tracking-[0.4em] text-white/45 md:block">
              Scroll
            </p>
          </div>

          <div className="max-w-5xl">
            <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-white/45">
              Cinematic Exterior
            </p>

            <h2 className="font-medium text-6xl leading-[0.88] tracking-[-0.045em] text-[#F8F1E6] drop-shadow-[0_30px_90px_rgba(0,0,0,.72)] md:text-7xl lg:text-[104px]">
              Tek cephe. <br /> İki ayrı atmosfer.
            </h2>

            <div className="mt-8 grid max-w-3xl gap-4 border-t border-white/15 pt-6 text-sm text-white/65 md:grid-cols-3">
              <span>İstanbul, Türkiye</span>
              <span>Gündüzden Geceye Dış Cephe Sunumu</span>
              <span>2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DMRSanatOfisi() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showGalleryPage, setShowGalleryPage] = useState(false);
  const [showStudioPage, setShowStudioPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1650);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showGalleryPage || showStudioPage) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [showGalleryPage, showStudioPage]);

  return (
    <main className="dmr-font min-h-screen bg-[#050403] text-[#F4EFE6] selection:bg-[#D8B16F] selection:text-black">
      <style>{fontStyles}</style>
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_12%,rgba(216,177,111,.18),transparent_30%),radial-gradient(circle_at_78%_8%,rgba(255,255,255,.08),transparent_24%),linear-gradient(180deg,#050403_0%,#0B0907_48%,#050403_100%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.075] [background-image:radial-gradient(rgba(255,255,255,.9)_0.7px,transparent_0.7px)] [background-size:24px_24px]" />

      <a
        href="https://wa.me/905323822968?text=Merhaba%2C%20DMR%20Sanat%20Ofisi%E2%80%99nden%20render%20ve%20animasyon%20hizmeti%20i%C3%A7in%20teklif%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[45] flex items-center gap-3 rounded-full border border-[#D8B16F]/45 bg-black/35 px-4 py-3 text-[#F1D091] shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl transition duration-300 hover:scale-[1.03] hover:border-[#D8B16F] hover:bg-[#D8B16F] hover:text-black md:bottom-auto md:right-5 md:top-1/2 md:-translate-y-1/2"
        aria-label="WhatsApp üzerinden teklif al"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-current/20 bg-current/10">
          <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current">
            <path d="M19.11 17.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51-.17 0-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            <path d="M16.01 3C8.83 3 3 8.82 3 16c0 2.57.75 5.07 2.17 7.2L3 29l5.96-2.13A12.93 12.93 0 0 0 16.01 29C23.18 29 29 23.18 29 16S23.18 3 16.01 3zm0 23.64c-2.17 0-4.3-.58-6.17-1.67l-.44-.26-3.53 1.26 1.29-3.44-.29-.46A10.58 10.58 0 0 1 5.43 16c0-5.84 4.74-10.58 10.58-10.58 2.83 0 5.48 1.1 7.47 3.1a10.5 10.5 0 0 1 3.1 7.48c0 5.84-4.74 10.58-10.57 10.58z" />
          </svg>
        </div>
        <div className="hidden flex-col pr-2 sm:flex">
          <span className="text-[9px] uppercase tracking-[0.28em] opacity-65">WhatsApp</span>
          <span className="text-[11px] font-medium uppercase tracking-[0.22em]">Teklif Al</span>
        </div>
      </a>

      {showIntro && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-[#020202]">
          <motion.div initial={{ opacity: 0, y: 18, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="relative text-center">
            <div className="absolute -inset-20 rounded-full bg-[#D8B16F]/10 blur-[90px]" />
            <DMRLogo className="relative mx-auto w-40 text-[#F7F1E8] drop-shadow-[0_0_50px_rgba(216,177,111,0.18)] md:w-64" />
            <div className="relative mx-auto mt-7 h-px w-36 bg-gradient-to-r from-transparent via-[#D8B16F]/80 to-transparent" />
            <p className="relative mt-6 text-[10px] uppercase tracking-[0.62em] text-[#D8B16F]/80">Sanat Ofisi</p>
          </motion.div>
        </motion.div>
      )}

      <header className="fixed left-4 right-4 top-4 z-40 md:left-8 md:right-8">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/25 px-5 shadow-[0_24px_90px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:h-[72px] md:px-8">
          <button
            onClick={() => {
              setShowGalleryPage(false);
              setShowStudioPage(false);
              setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
            }}
            className="group flex items-center gap-4 text-left transition-opacity hover:opacity-90"
            aria-label="DMR Sanat Ofisi ana sayfaya dön"
          >
            <DMRLogo className="w-20 text-[#F4EFE6] transition duration-300 group-hover:text-[#D8B16F] md:w-24" />
            <div className="hidden border-l border-white/15 pl-4 md:block">
              <p className="text-[10px] uppercase tracking-[0.36em] text-white/45 transition duration-300 group-hover:text-[#D8B16F]/80">
                Sanat Ofisi
              </p>
            </div>
          </button>
          <div className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.26em] text-[#F4EFE6]/65 md:flex">
            <button onClick={() => { setShowGalleryPage(true); setShowStudioPage(false); }} className="transition hover:text-[#D8B16F]">Projeler</button>
            <button
              onClick={() => {
                setShowGalleryPage(false);
                setShowStudioPage(false);
                setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 50);
              }}
              className="transition hover:text-[#D8B16F]"
            >
              Hizmetler
            </button>
            <button onClick={() => { setShowStudioPage(true); setShowGalleryPage(false); }} className="transition hover:text-[#D8B16F]">Sanat Ofisi</button>
            <a href="mailto:dmrteklif@gmail.com?subject=DMR%20Sanat%20Ofisi%20-%20Proje%20Talebi" className="rounded-full border border-[#D8B16F]/60 px-5 py-3 text-[#D8B16F] transition hover:bg-[#D8B16F] hover:text-black">İletişim</a>
          </div>
          <button className="md:hidden rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em]">Menü</button>
        </nav>
      </header>

      {showStudioPage && (
        <div className="fixed inset-0 z-[55] overflow-y-auto bg-[#050403]/98 backdrop-blur-2xl">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(216,177,111,.18),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,.08),transparent_26%),linear-gradient(180deg,#050403_0%,#0B0907_55%,#050403_100%)]" />
          <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-10 md:pt-36">
            <button
              onClick={() => setShowStudioPage(false)}
              className="mb-10 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white/70 transition hover:border-[#D8B16F]/60 hover:text-[#D8B16F]"
            >
              ← Ana Sayfa
            </button>

            <div className="mb-20 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
              <div>
                <p className="mb-7 text-[12px] font-semibold uppercase tracking-[0.7em] text-[#F1D091] drop-shadow-[0_0_18px_rgba(216,177,111,0.25)]">Sanat Ofisi</p>
                <h1 className="max-w-5xl text-6xl font-medium leading-[0.9] tracking-[-0.07em] md:text-8xl lg:text-[118px]">
                  Sadece render üretmiyoruz. Mimariyi algıya dönüştürüyoruz.
                </h1>
              </div>
              <p className="max-w-xl text-base leading-8 text-white/55 md:ml-auto">
                DMR Sanat Ofisi; dış cephe render, iç mekân, mimari atmosfer ve sinematik sunum diliyle projeleri daha güçlü, daha prestijli ve daha akılda kalıcı gösterir.
              </p>
            </div>

            <div className="mb-12 flex items-end justify-between gap-8 border-b border-white/10 pb-8">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.5em] text-[#D8B16F]">Neden DMR?</p>
                <h2 className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">Fark yaratan sunum dili.</h2>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-[#D8B16F]/50 to-transparent md:block" />
            </div>

            <div className="space-y-6">
              {studioReasons.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 38 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.26 }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.025] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl transition duration-500 hover:border-[#D8B16F]/35 md:p-8"
                >
                  <div className="pointer-events-none absolute -left-3 -top-10 text-[150px] font-semibold leading-none tracking-[-0.12em] text-white/[0.035] transition duration-500 group-hover:text-[#D8B16F]/10 md:text-[220px]">
                    {item.number}
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(216,177,111,.0),transparent_30%)] transition duration-500 group-hover:bg-[radial-gradient(circle_at_85%_30%,rgba(216,177,111,.16),transparent_32%)]" />

                  <div className="relative grid gap-8 md:grid-cols-[0.85fr_1.25fr_0.75fr] md:items-center">
                    <div>
                      <p className="mb-5 text-[10px] uppercase tracking-[0.55em] text-[#D8B16F]">{item.number}</p>
                      <div className="h-px w-28 bg-gradient-to-r from-[#D8B16F] to-transparent" />
                    </div>

                    <div>
                      <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-white/38">{item.kicker}</p>
                      <h3 className="text-4xl font-medium tracking-[-0.055em] text-[#F8F1E6] md:text-6xl">{item.title}</h3>
                      <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">{item.text}</p>
                    </div>

                    <div className="relative h-48 overflow-hidden rounded-[1.6rem] border border-white/10 bg-black md:h-56">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover opacity-72 saturate-[0.85] contrast-[1.08] transition duration-[900ms] group-hover:scale-110 group-hover:opacity-95" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 h-px overflow-hidden bg-white/12">
                        <div className="h-px w-0 bg-[#D8B16F] transition-all duration-700 group-hover:w-full" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-20 overflow-hidden rounded-[3rem] border border-[#D8B16F]/20 bg-[#D8B16F]/[0.07] p-8 shadow-[0_35px_140px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-12">
              <p className="mb-7 text-[10px] uppercase tracking-[0.55em] text-[#D8B16F]">İmza</p>
              <h2 className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.06em] md:text-7xl">
                Sıradan sunumlar unutulur. Atmosfer iz bırakır.
              </h2>
              <div className="mt-10 flex flex-col gap-4 md:flex-row">
                <a href="https://wa.me/905323822968?text=Merhaba%2C%20DMR%20Sanat%20Ofisi%E2%80%99nden%20render%20ve%20animasyon%20hizmeti%20i%C3%A7in%20teklif%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#D8B16F] px-8 py-4 text-xs uppercase tracking-[0.24em] text-black transition hover:scale-[1.03] hover:bg-[#F1D091]">
                  Projeni Konuşalım
                </a>
                <button onClick={() => { setShowGalleryPage(true); setShowStudioPage(false); }} className="rounded-full border border-white/15 px-8 py-4 text-xs uppercase tracking-[0.24em] text-white/70 transition hover:border-white/40 hover:text-white">
                  Galeriyi İncele
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {showGalleryPage && (
        <div className="fixed inset-0 z-[55] overflow-y-auto bg-[#050403]/98 backdrop-blur-2xl">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(216,177,111,.18),transparent_30%),linear-gradient(180deg,#050403_0%,#0B0907_55%,#050403_100%)]" />
          <section className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-10 md:pt-36">
            <button
              onClick={() => setShowGalleryPage(false)}
              className="mb-10 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white/70 transition hover:border-[#D8B16F]/60 hover:text-[#D8B16F]"
            >
              ← Ana Sayfa
            </button>

            <div className="mb-16 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
              <div>
                <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.7em] text-[#F1D091] drop-shadow-[0_0_18px_rgba(216,177,111,0.25)]">Galeri</p>
                <h1 className="max-w-4xl text-6xl font-medium leading-[0.92] tracking-[-0.065em] md:text-8xl lg:text-[118px]">
                  Seçili render koleksiyonu.
                </h1>
              </div>
              <p className="max-w-xl text-base leading-8 text-white/55 md:ml-auto">
                DMR Sanat Ofisi tarafından hazırlanan dış cephe, villa, iç mekân ve konsept render çalışmalarından seçili bir vitrin.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {galleryProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.04 }}
                  onClick={() => {
                    setActiveGallery(project);
                    setActiveImage(0);
                  }}
                  className="group cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-[0_28px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#D8B16F]/35"
                >
                  <div className="relative h-[440px] overflow-hidden bg-black">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover opacity-86 transition duration-[1000ms] group-hover:scale-[1.045] group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-[#D8B16F]/35 bg-black/35 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-[#D8B16F] backdrop-blur-xl">
                      {project.category}
                    </div>
                    <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-xl transition group-hover:border-[#D8B16F] group-hover:bg-[#D8B16F] group-hover:text-black">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="4" y="5" width="13" height="13" rx="1.5" />
                        <path d="M8 3h10.5A1.5 1.5 0 0 1 20 4.5V15" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6 md:p-7">
                    <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                      <h2 className="text-3xl font-medium tracking-[-0.045em]">{project.title}</h2>
                      <span className="text-xs text-[#D8B16F]">{project.year}</span>
                    </div>
                    <div className="grid gap-2 text-sm text-white/55">
                      <p>{project.city}, {project.country}</p>
                      <p>{project.category}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      )}

      <section id="hero" className="relative min-h-screen overflow-hidden">
        <motion.div initial={{ scale: 1.13, opacity: 0, filter: "blur(10px)" }} animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1.8, ease: "easeOut", delay: 1.15 }} className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2600&auto=format&fit=crop" alt="DMR Sanat Ofisi cinematic hero" className="h-full w-full object-cover opacity-78 saturate-[0.82] contrast-[1.16]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/86 via-black/28 to-black/72" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-black/65" />
        </motion.div>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-12 pt-28 md:px-10 md:pb-20">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.42, duration: 0.8 }} className="mb-8 grid max-w-3xl grid-cols-3 gap-3 border-y border-white/12 py-4 text-[#F4EFE6]/72 md:max-w-2xl">
            <div><p className="text-2xl font-medium tracking-[-0.04em] text-[#D8B16F] md:text-3xl">1000+</p><p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/45">Render</p></div>
            <div><p className="text-2xl font-medium tracking-[-0.04em] text-[#D8B16F] md:text-3xl">50+</p><p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/45">Proje</p></div>
            <div><p className="text-2xl font-medium tracking-[-0.04em] text-[#D8B16F] md:text-3xl">4K</p><p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-white/45">Sunum Kalitesi</p></div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 46 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.58, duration: 0.95 }} className="max-w-6xl font-medium text-[14vw] leading-[0.88] tracking-[-0.075em] text-[#F8F1E6] drop-shadow-[0_32px_95px_rgba(0,0,0,0.72)] md:text-[96px] lg:text-[126px]">
            Sıradanı <span className="text-[#D8B16F]">unutun.</span><br />Biz mükemmeli<br className="hidden md:block" /> sunuyoruz.
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.82, duration: 0.9 }} className="mt-9 grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
            <p className="max-w-2xl text-base leading-8 text-white/64 md:text-lg">DMR Sanat Ofisi; seçkin mimari projeler için dış cephe, iç mekân ve render animasyonlarını sinematik bir sunum deneyimine dönüştürür.</p>
            <div className="flex items-center gap-5 md:justify-end"><button onClick={() => setShowGalleryPage(true)} className="group rounded-full bg-[#D8B16F] px-7 py-4 text-xs uppercase tracking-[0.24em] text-black shadow-[0_24px_90px_rgba(216,177,111,.24)] transition hover:scale-[1.035] hover:bg-[#F1D091]">Keşfet <span className="inline-block transition group-hover:translate-x-1">→</span></button><span className="hidden h-px w-20 bg-[#D8B16F]/50 md:block" /><span className="hidden text-[10px] uppercase tracking-[0.32em] text-white/45 md:block">Aşağı Kaydır</span></div>
          </motion.div>
        </div>
      </section>

      <section id="philosophy" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-44">
        <div className="grid gap-16 md:grid-cols-[0.62fr_1.38fr] md:items-end">
          <div><p className="mb-8 text-[10px] uppercase tracking-[0.55em] text-[#D8B16F]">Manifesto</p><div className="h-36 w-px bg-gradient-to-b from-[#D8B16F]/75 to-transparent" /></div>
          <div><h2 className="font-medium text-6xl leading-[0.96] tracking-[-0.045em] md:text-7xl lg:text-[96px]">Mimariyi yalnızca görünür kılmıyoruz. Ona prestij kazandırıyoruz.</h2><p className="mt-10 max-w-3xl text-lg leading-8 text-white/55">Her sahne; ışık, atmosfer, malzeme ve ölçek duygusu üzerinden projenin algısını yükselten özel bir görsel dil ile tasarlanır.</p></div>
        </div>
      </section>

      <section id="process" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-44">
        <div className="absolute left-10 top-0 hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-transparent via-[#D8B16F]/30 to-transparent md:block" />
        <div className="grid gap-16 md:grid-cols-[0.75fr_1.25fr]">
          <div className="md:sticky md:top-32 md:h-fit">
            <p className="mb-8 text-[13px] font-semibold uppercase tracking-[0.7em] text-[#F1D091] drop-shadow-[0_0_18px_rgba(216,177,111,0.25)]">Süreç</p>
            <h2 className="max-w-xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">Her proje, doğru atmosferi bulmakla başlar.</h2>
            <p className="mt-8 max-w-md text-base leading-7 text-white/50">DMR Sanat Ofisi’nde süreç; yalnızca görsel üretmek değil, projenin değerini doğru bir sunum diliyle yükseltmektir.</p>
          </div>
          <div className="relative"><div className="absolute left-[18px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#D8B16F]/70 via-white/15 to-transparent md:block" /><div className="space-y-10">
            {processSteps.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.75, delay: index * 0.08 }} className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-[0_28px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl md:ml-14 md:p-9">
                <div className="absolute -left-[70px] top-9 hidden h-9 w-9 items-center justify-center rounded-full border border-[#D8B16F]/60 bg-[#050403] text-[10px] text-[#D8B16F] shadow-[0_0_40px_rgba(216,177,111,0.22)] md:flex">{step.number}</div>
                <div className="mb-8 flex items-center justify-between gap-6 border-b border-white/10 pb-6"><p className="text-[10px] uppercase tracking-[0.5em] text-[#D8B16F]">{step.number}</p><div className="h-px flex-1 bg-white/10" /></div>
                <h3 className="text-4xl font-medium tracking-[-0.045em] md:text-5xl">{step.title}</h3><p className="mt-5 max-w-2xl text-base leading-7 text-white/55">{step.text}</p>
              </motion.div>
            ))}
          </div></div>
        </div>
      </section>

      <section id="works" className="relative">
        {scenes.map((scene) => (
          <motion.article key={scene.title} initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.24 }} transition={{ duration: 1, ease: "easeOut" }} className="relative min-h-screen overflow-hidden border-t border-white/10">
            <img src={scene.image} alt={scene.title} className="absolute inset-0 h-full w-full object-cover opacity-82 saturate-[0.84] contrast-[1.12] transition duration-[1400ms] hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/18 to-black/58" /><div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-black/35" />
            <button onClick={() => { setActiveGallery(scene); setActiveImage(0); }} className="absolute right-5 top-28 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-[#D8B16F]/45 bg-black/35 text-[#D8B16F] shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:scale-105 hover:bg-[#D8B16F] hover:text-black md:right-10 md:top-32" aria-label={`${scene.title} galerisini aç`}><svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="5" width="13" height="13" rx="1.5" /><path d="M8 3h10.5A1.5 1.5 0 0 1 20 4.5V15" /><path d="m7 15 3.2-3.2a1 1 0 0 1 1.4 0L14 14.2l1.2-1.2a1 1 0 0 1 1.4 0L20 16.4" /></svg></button>
            <div className="absolute right-24 top-[132px] z-20 hidden text-[10px] uppercase tracking-[0.32em] text-white/45 md:block">Galeri</div>
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-14 md:px-10 md:pb-20"><div className="grid gap-10 md:grid-cols-[0.45fr_1.55fr] md:items-end"><div><p className="mb-6 text-[10px] uppercase tracking-[0.55em] text-[#D8B16F]">Sahne {scene.number}</p><div className="h-24 w-px bg-gradient-to-b from-[#D8B16F] to-transparent" /></div><div><h3 className="font-medium text-6xl leading-[0.92] tracking-[-0.045em] md:text-7xl lg:text-[104px]">{scene.title}</h3><div className="mt-8 grid gap-4 border-t border-white/15 pt-6 text-sm text-white/66 md:grid-cols-3"><span>{scene.location}</span><span>{scene.service}</span><span>2025</span></div></div></div></div>
          </motion.article>
        ))}
      </section>

      {activeGallery && (
        <div className="fixed inset-0 z-[60] bg-[#050403]/96 backdrop-blur-2xl"><button onClick={() => setActiveGallery(null)} className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-white/70 transition hover:border-[#D8B16F]/60 hover:text-[#D8B16F] md:right-10 md:top-10">Kapat</button><div className="mx-auto flex h-full max-w-7xl flex-col px-5 py-20 md:px-10 md:py-12"><div className="mb-6 flex items-end justify-between gap-6 border-b border-white/10 pb-6"><div><p className="mb-3 text-[10px] uppercase tracking-[0.5em] text-[#D8B16F]">Proje Galerisi</p><h3 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">{activeGallery.title}</h3></div><p className="hidden text-sm text-white/45 md:block">{activeImage + 1} / {activeGallery.gallery.length}</p></div><div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_35px_140px_rgba(0,0,0,0.55)]"><img src={activeGallery.gallery[activeImage]} alt={`${activeGallery.title} render ${activeImage + 1}`} className="h-full w-full object-cover" /><button onClick={() => setActiveImage((activeImage - 1 + activeGallery.gallery.length) % activeGallery.gallery.length)} className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-xl transition hover:border-[#D8B16F] hover:text-[#D8B16F]">←</button><button onClick={() => setActiveImage((activeImage + 1) % activeGallery.gallery.length)} className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-xl transition hover:border-[#D8B16F] hover:text-[#D8B16F]">→</button></div><div className="mt-6 flex gap-3 overflow-x-auto pb-1">{activeGallery.gallery.map((image, i) => (<button key={image} onClick={() => setActiveImage(i)} className={`h-20 w-32 shrink-0 overflow-hidden rounded-2xl border transition ${activeImage === i ? "border-[#D8B16F]" : "border-white/10 opacity-55 hover:opacity-100"}`}><img src={image} alt="Galeri küçük görsel" className="h-full w-full object-cover" /></button>))}</div></div></div>
      )}

      <DayNightReveal />

      <section id="services" className="relative mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-44">
        <div className="pointer-events-none absolute left-0 top-8 hidden text-[220px] font-medium tracking-[-0.08em] text-white/[0.025] md:block">DMR</div>
        <p className="relative mb-12 text-[10px] uppercase tracking-[0.55em] text-[#D8B16F]">Hizmetler</p>
        <div className="relative divide-y divide-white/10 border-y border-white/10">{services.map((service) => (<div key={service} className="group flex items-center justify-between py-9 md:py-12"><h3 className="font-medium text-4xl tracking-[-0.045em] text-white/86 transition duration-500 group-hover:translate-x-4 group-hover:text-[#D8B16F] md:text-6xl lg:text-7xl">{service}</h3><span className="text-4xl text-[#D8B16F] transition duration-500 group-hover:translate-x-3">→</span></div>))}</div>
      </section>

      <section className="relative overflow-hidden bg-[#F4EFE6] px-5 py-28 text-[#080706] md:px-10 md:py-44"><div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#D8B16F]/35 blur-[120px]" /><div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1.25fr_0.75fr] md:items-end"><h2 className="relative z-10 font-medium text-6xl leading-[0.96] tracking-[-0.06em] md:text-7xl lg:text-[96px]">Seçkin projeleri, kusursuz görsel sunumlara dönüştüren sanat ofisi.</h2><p className="relative z-10 text-lg leading-8 text-black/62">DMR Sanat Ofisi; mimari fikirleri yalnızca anlatmaz, onları yatırım değeri yüksek bir görsel deneyime dönüştürür.</p></div></section>

      <section id="contact" className="relative mx-auto my-10 max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.035] px-5 py-28 shadow-[0_45px_160px_rgba(0,0,0,0.55)] backdrop-blur-xl md:my-16 md:px-10 md:py-40"><div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#D8B16F]/15 blur-[120px]" /><p className="relative z-10 mb-7 text-[10px] uppercase tracking-[0.55em] text-[#D8B16F]">İletişim</p><h2 className="relative z-10 max-w-5xl font-medium text-6xl leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-[96px]">Projenizi sıradan sunumlardan çıkarıp ayrıcalıklı bir vitrine taşıyalım.</h2><div className="relative z-10 mt-12 flex flex-col gap-5 md:flex-row"><a href="mailto:dmrteklif@gmail.com?subject=DMR%20Sanat%20Ofisi%20-%20Proje%20Talebi" className="rounded-full bg-[#D8B16F] px-8 py-4 text-xs uppercase tracking-[0.24em] text-black shadow-[0_24px_90px_rgba(216,177,111,.22)] transition hover:scale-[1.035] hover:bg-[#F1D091]">İletişime Geç</a><button onClick={() => setShowGalleryPage(true)} className="rounded-full border border-white/15 px-8 py-4 text-xs uppercase tracking-[0.24em] text-white/70 transition hover:border-white/40 hover:text-white">Projeleri İncele</button></div></section>
    </main>
  );
}
