import React, { useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  Clock,
  Mail,
  Globe,
  Phone,
  ShieldCheck,
  Umbrella,
  WavesIcon,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sun,
  Wind,
  Camera,
  Users,
  Anchor,
  LifeBuoy,
  MessageCircle,
  Droplets,
  Navigation,
  Compass,
  Ship,
  Waves,
  Fuel,
  Radio,
} from "lucide-react";

const thumbnails = [
  "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800",
  "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800",
  "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800",
  "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800",
];

const sliderPlaces = [
  { image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500", category: "Foodie", title: "LA GRANDE – MONT ROYAL", location: "On La Nappe", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500", category: "Food", title: "THE BULL", location: "Downtown", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500", category: "Food", title: "KARAMI FUSION ASIATE...", location: "Lounge", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500", category: "Foodie", title: "L'ETOILE DE TUNIS", location: "City Center", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500", category: "Beach", title: "PLAYA BLANCA", location: "Isla Barú", rating: 5, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500", category: "Foodie", title: "L'ETOILE DE TUNIS", location: "City Center", rating: 4, badge: "NEW" },
  { image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500", category: "Beach", title: "PLAYA BLANCA", location: "Isla Barú", rating: 5, badge: "NEW" },
];

const dealsSlides = [
  { title: "Private Yacht Charter", desc: "Full-day private yacht with captain, fuel & snorkeling stops. Valid till March 2025.", highlight: "BOOK NOW" },
  { title: "Sunset Cruise Deal", desc: "3-hour sunset cruise with cocktails & live music. Transport included.", highlight: "LIMITED" },
  { title: "Island Hopping Package", desc: "Visit 3 islands in one day — Barú, Rosario & Tierra Bomba. Lunch included.", highlight: "POPULAR" },
];

const reviews = [
  { name: "James T.", date: "USA - 6 months", rating: 5, text: "Absolutely incredible experience! The yacht was pristine and the captain was knowledgeable about the best spots around Cartagena. We visited Rosario Islands and the snorkeling was world-class. The crew was attentive and made us feel like royalty. 100% would book again! ⚓🌊", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60", btnLabel: "James T." },
  { name: "Laura M.", date: "Spain - 1 year", rating: 4, text: "We rented a speedboat for the day and it was the highlight of our entire Colombia trip. The waters around Cartagena are stunning and having the freedom to explore at our own pace was priceless. The rental company was professional and the boat was in excellent condition. 🛥️", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60", btnLabel: "Laura M." },
  { name: "Miguel R.", date: "Colombia - 2 years", rating: 5, text: "The sunset cruise was magical! Watching the sun dip below the horizon from the deck of a beautiful yacht with cocktails in hand — there is nothing better in Cartagena. The crew was wonderful and the route past the old city walls at dusk was breathtaking. 🌅", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60", btnLabel: "Miguel R." },
];

const faqData = [
  { question: "How do I get there?", answer: "All boating experiences depart from the Club Náutico de Cartagena marina. Transfer from your hotel can be arranged upon request." },
  { question: "Is it family-friendly?", answer: "Yes! Most boat tours are suitable for families. Life vests are provided for all ages including children. Some high-speed experiences have minimum age restrictions." },
  { question: "What is included in the package?", answer: "Most packages include fuel, captain/crew, life vests, snorkeling equipment, and refreshments. Lunch can be added as an optional extra." },
  { question: "What is the cancellation policy?", answer: "Free cancellation up to 48 hours before departure. Cancellations within 48 hours may incur a 50% fee due to fuel and crew costs." },
  { question: "What should I bring?", answer: "Bring sunscreen (reef-safe), a towel, swimwear, light clothing, sunglasses, and a hat. Cash for tips is appreciated." },
];

const tagRoutes = {
  Beaches: "/Beaches",
  Accommodations: "/hotels",
  Boating: "/Boating",
  "Real Estate": "/realState",
  Activities: "/Activities",
  Gastronomy: "/Gastronomy",
};

function StarRow({ count, total = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array(total).fill(0).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < count ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  );
}

function HorizontalSlider({ items }) {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -230 : 230, behavior: "smooth" });
  };
  return (
    <div className="relative px-1">
      <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-amber-400 text-white flex items-center justify-center shadow">
        <ChevronLeft size={14} />
      </button>
      <div ref={scrollRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-2" style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {items.map((item, i) => (
          <div key={i} className="min-w-[170px] sm:min-w-[190px] md:min-w-[210px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow flex-shrink-0" style={{ scrollSnapAlign: "start" }}>
            <div className="relative h-[120px] sm:h-[130px] md:h-[145px] overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-2 left-2 bg-white/90 rounded px-1.5 py-0.5 text-[10px] md:text-xs font-bold text-gray-700 flex items-center gap-0.5">
                <MapPin size={8} className="text-amber-500" />{item.category}
              </div>
              <button className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7 bg-yellow-400 rounded-full flex items-center justify-center">
                <Heart size={11} className="text-black" />
              </button>
            </div>
            <div className="p-2.5 md:p-3">
              <p className="font-bold text-black text-xs md:text-sm leading-tight font-antigua">{item.title}</p>
              <p className="text-[10px] md:text-xs text-gray-500 mt-0.5">{item.location}</p>
              <div className="flex items-center gap-1.5 md:gap-2 mt-1.5 md:mt-2">
                <StarRow count={item.rating} />
                <span className="text-[10px] md:text-xs font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded">{item.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 z-10 w-7 h-7 md:w-8 md:h-8 rounded-full bg-green text-white flex items-center justify-center shadow">
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

export default function BoatingDetails() {
  const [activeImg, setActiveImg] = useState(0);
  const [dealIdx, setDealIdx] = useState(0);

  return (
    <div className="bg-white font-sans w-full overflow-x-hidden">

      <a href="https://wa.me/573151234567" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110">
        <MessageCircle size={24} className="text-white" />
      </a>

      {/* HERO */}
      <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-12 pt-5 md:pt-6 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[10px] md:text-xs text-gray-400 mb-3 md:mb-4 leading-none">
            La Carta &ndash; Cartagena Culture &amp; Tourism &rsaquo; Boating &rsaquo; Yacht Charter &rsaquo;{" "}
            <span className="text-gray-700 font-semibold">Jetski</span>
          </p>
          <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-6">
            <div className="flex items-start gap-3 flex-1 min-w-0 w-full lg:p-9 md:p-9 sm:p-9">
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-none font-antigua">Jetski</h1>
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-red text-white text-[10px] md:text-xs font-extrabold flex items-center justify-center shrink-0 shadow">J</span>
                </div>
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <p className="text-xs md:text-sm text-gray-500">Boating / Water Sports / Yacht</p>
                  <p className="text-[10px] md:text-xs font-extrabold tracking-[0.2em] text-gray-700 uppercase">CARTAGENA BAY</p>
                </div>
                <p className="mt-2 md:mt-6 text-sm md:text-base lg:text-[20px] text-gray-600 leading-snug font-bold">Eco-Luxury Glamping Experience in Isla Barú</p>
                <div className="mt-3 md:mt-6">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-0.5">Starting From</p>
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight font-antigua">$177 &ndash; $515 <span className="text-sm md:text-base font-normal text-gray-500">/ night</span></p>
                </div>
                <div className="flex items-center gap-2 mt-3 md:mt-6 flex-wrap">
                  {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-sm font-semibold cursor-pointer ml-1 text-black font-antigua">Leave Review</span>
                  <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-black text-white text-[9px] md:text-xs flex items-center justify-center font-bold leading-none">?</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 mt-4 md:mt-10 flex-wrap">
                  <button className="bg-green hover:bg-green transition text-white font-bold text-xs md:text-sm px-5 md:px-7 py-2.5 md:py-3 rounded-full shadow">Reserve Now</button>
                  <button className="bg-gold hover:bg-gold transition text-white font-bold text-xs md:text-sm px-4 md:px-6 py-2.5 md:py-3 rounded-full shadow flex items-center gap-1.5 md:gap-2"><span>🎁</span> Nos Promo</button>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-2.5 w-full lg:w-auto lg:shrink-0 mt-4 lg:mt-0">
              <div className="rounded-2xl overflow-hidden shadow-lg flex-1 lg:flex-none">
                <div className="lg:hidden w-full"><img src={thumbnails[activeImg]} alt="Jetski" className="w-full h-full object-cover transition-all duration-700" /></div>
                <div className="hidden lg:block" style={{ width: "440px", height: "390px" }}><img src={thumbnails[activeImg]} alt="Jetski" className="w-full h-full object-cover transition-all duration-700" /></div>
              </div>
              <div className="flex flex-col gap-1.5 md:gap-2 shrink-0">
                {thumbnails.map((src, i) => (
                  <div key={i} onClick={() => setActiveImg(i)} className={`w-14 h-16 sm:w-16 sm:h-[72px] md:w-[70px] md:h-[90px] rounded-xl overflow-hidden cursor-pointer transition-all flex-shrink-0 ${i === activeImg ? "ring-2 ring-blue-500 ring-offset-1" : "opacity-70 hover:opacity-100"}`}>
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT + SIDEBAR */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-5 md:gap-6 grid-cols-1 lg:grid-cols-[1.45fr_1fr]">
            <div className="space-y-4 md:space-y-5">

              <div className="bg-white rounded-2xl p-4 md:p-6">
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">About</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-black font-antigua mb-3 md:mb-4">About Jetski</h2>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Nestled on the pristine shores of <strong className="text-black">Isla Barú</strong>, just a scenic boat ride from Cartagena's historic walls, Playa Scondida offers an unparalleled eco-luxury glamping experience. Here, the Caribbean Sea whispers secrets of ancient mariners, while the jungle canopy shelters you in its emerald embrace.
                  <br /><br />
                  Our philosophy: simple, authentic luxury that honors the land. Each bungalow is crafted from locally-sourced materials, designed to blend seamlessly with the surrounding nature while providing every modern comfort you desire. Wake to the calls of tropical birds, dine on freshly-caught seafood by candlelight, and fall asleep to the rhythm of gentle waves. With private docks offering direct ocean access, secluded beach coves, and immersive nature trails, Playa Scondida is more than accommodation — it is a transformation.
                </p>
              </div>

              <div className="bg-[#f8f5e9] rounded-2xl p-5 md:p-10 border border-amber-100 shadow-sm relative">
                <span className="absolute -top-3 left-5 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">Road Map</span>
                <div className="flex items-center gap-2 mt-2 mb-4 font-antigua">
                  <span className="text-base">📅</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-black">DAY 01</h3>
                </div>
                <div className="relative ml-2 md:ml-4">
                  <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-amber-300" />
                  {[
                    { time: "8am - 9am", desc: "Check-in at Club Náutico marina" },
                    { time: "9am - 10am", desc: "Safety briefing & equipment check" },
                    { time: "10am - 12pm", desc: "Sail to Rosario Islands coral reef" },
                    { time: "12pm - 2pm", desc: "Anchor for snorkeling & swimming" },
                    { time: "2pm - 4pm", desc: "Cruise along Cartagena's coast" },
                    { time: "4pm - 6pm", desc: "Sunset return — cocktails on deck" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 mb-3 md:mb-3.5 relative pl-6 md:pl-8">
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-amber-400 border-2 border-white shadow" />
                      <div>
                        <p className="font-bold text-black text-xs md:text-sm font-antigua">{item.time}</p>
                        <p className="text-[10px] md:text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f8f5e9] rounded-2xl p-4 md:p-5 border border-amber-100 shadow-sm relative">
                <span className="absolute -top-3 left-5 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">Highlights</span>
                <div className="mt-4 grid grid-cols-2 gap-2 md:gap-3">
                  {[
                    { icon: Ship, label: "Private Yacht", desc: "Fully crewed charter" },
                    { icon: Compass, label: "Island Hopping", desc: "3 islands in one day" },
                    { icon: Camera, label: "Photo Stops", desc: "Iconic coastal shots" },
                    { icon: Sun, label: "Sunset Cruise", desc: "Evening sailing option" },
                    { icon: Users, label: "Groups Welcome", desc: "Up to 20 passengers" },
                    { icon: LifeBuoy, label: "Safety First", desc: "Certified captains" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl p-2.5 md:p-3 bg-white shadow-sm border border-amber-200 flex items-start gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                        <item.icon size={13} className="text-amber-500" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-[10px] md:text-xs font-antigua">{item.label}</p>
                        <p className="text-[9px] md:text-[10px] text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-3 md:space-y-4">
              <div className="bg-[#f8f5e9] rounded-2xl p-4 md:p-5 border border-amber-200 shadow-sm relative">
                <span className="absolute -top-3 left-5 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">Information</span>
                <div className="mt-3">
                  <p className="text-xs text-black uppercase font-bold">Address</p>
                  <p className="text-xs md:text-sm font-bold text-black mt-1 leading-snug font-antigua">Isla Baru, Provincia de Cartagena, Bolívar, Colombia</p>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3 mt-3 md:mt-4 border-t border-amber-100 pt-3 md:pt-4">
                  <div>
                    <div className="flex items-center gap-1 text-[10px] md:text-xs text-black font-bold mb-0.5"><Clock size={10} /> Start Time</div>
                    <p className="font-bold text-black text-xs md:text-sm font-antigua">9:00 am</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-[10px] md:text-xs text-black font-bold mb-0.5"><Clock size={10} /> End Time</div>
                    <p className="font-bold text-black text-xs md:text-sm font-antigua">6:00 pm</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 md:mt-4 border-t border-amber-100 pt-3 md:pt-4">
                  {[
                    { icon: Wind, label: "Wind", val: "12 km/h" },
                    { icon: Waves, label: "Waves", val: "0.5m" },
                    { icon: Droplets, label: "Visibility", val: "15m" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="flex justify-center mb-0.5"><item.icon size={12} className="text-amber-500" /></div>
                      <p className="text-[9px] md:text-[10px] text-gray-400 font-bold">{item.label}</p>
                      <p className="font-bold text-black text-[10px] md:text-xs font-antigua">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 md:gap-2.5">
                {[
                  { icon: Mail, label: "Email", sub: "info@cartagenaboating.co" },
                  { icon: Globe, label: "Website", sub: "cartagenaboating.co" },
                  { icon: Phone, label: "Phone", sub: "+57 315 123 4567" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#f8f5e9] rounded-xl border border-amber-100 shadow-sm p-2 md:p-3 flex flex-col items-center text-center gap-1 cursor-pointer hover:border-amber-400 transition">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-amber-50 flex items-center justify-center"><item.icon size={14} className="text-amber-500" /></div>
                    <p className="font-bold text-[10px] md:text-xs text-black">{item.label}</p>
                    <p className="text-[9px] md:text-[10px] text-black leading-tight font-bold">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#f8f5e9] rounded-2xl border border-amber-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between px-4 md:px-5 pt-3 md:pt-4 pb-1.5">
                  <p className="font-bold text-black text-xs md:text-sm font-antigua">Deals &amp; Promotions</p>
                  <span className="text-xs text-amber-600 font-semibold font-antigua">{dealIdx + 1}/{dealsSlides.length}</span>
                </div>
                <div className="px-4 md:px-5 pb-3 md:pb-4 relative min-h-[100px] md:min-h-[110px]">
                  <div className="bg-white rounded-xl p-3 md:p-4 border border-amber-100 shadow-sm">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="font-bold text-black text-xs md:text-sm font-antigua">{dealsSlides[dealIdx].title}</p>
                        <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-relaxed">{dealsSlides[dealIdx].desc}</p>
                      </div>
                      <span className="bg-gold text-white text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded shrink-0">{dealsSlides[dealIdx].highlight}</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-2.5 text-[9px] md:text-[10px] text-gray-400 flex-wrap">
                      <span>✓ Valid till March 15, 2025</span>
                      <span>✓ T&C apply</span>
                    </div>
                  </div>
                  <button onClick={() => setDealIdx((p) => (p - 1 + dealsSlides.length) % dealsSlides.length)} className="absolute left-1.5 md:left-2 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-amber-400 text-white flex items-center justify-center"><ChevronLeft size={11} /></button>
                  <button onClick={() => setDealIdx((p) => (p + 1) % dealsSlides.length)} className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-amber-400 text-white flex items-center justify-center"><ChevronRight size={11} /></button>
                </div>
                <div className="flex justify-center gap-1.5 pb-2.5 md:pb-3">
                  {dealsSlides.map((_, i) => <button key={i} onClick={() => setDealIdx(i)} className={`h-1.5 rounded-full transition-all ${i === dealIdx ? "bg-gold w-4" : "bg-amber-200 w-1.5"}`} />)}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 md:p-4 text-center">
                <p className="font-bold text-black text-xs md:text-sm mb-2 md:mb-3 font-antigua">Also Available On</p>
                <div className="flex justify-center gap-2 md:gap-7 flex-wrap">
                  <button className="bg-green text-white text-[10px] md:text-xs font-bold rounded-xl px-3 md:px-7 py-2 md:py-3">Booking.com ↗</button>
                  <button className="bg-teal-700 text-white text-[10px] md:text-xs font-bold rounded-xl px-3 md:px-7 py-2 md:py-3">Airbnb ↗</button>
                  <button className="bg-blue-900 text-white text-[10px] md:text-xs font-bold rounded-xl px-3 md:px-7 py-2 md:py-3">Expedia ↗</button>
                </div>
              </div>

              <button className="w-full rounded-full bg-gold hover:bg-gold transition py-3 md:py-3.5 text-xs md:text-sm font-bold text-white shadow">Book with La Carta</button>
              <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-gray-400 flex-wrap">
                <ShieldCheck size={12} className="text-green-500" />
                <span>Secure payments · Verified listings · 24/7 support</span>
              </div>

              <div className="rounded-2xl p-3 md:p-5 relative">
                <span className="absolute -top-3 left-5 text-black font-bold text-xs md:text-sm px-3 py-1 rounded-full font-antigua">Booking Info</span>
                <div className="mt-3 space-y-2 md:space-y-3">
                  {[
                    { icon: Navigation, label: "Getting There", sub: "Depart from Club Náutico marina, Cartagena" },
                    { icon: Fuel, label: "Fuel & Equipment", sub: "All included — life vests, snorkel gear & more" },
                    { icon: Radio, label: "What to Bring", sub: "Swimwear, sunscreen, towel & camera" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 md:gap-3 bg-[#f8f5e9] rounded-xl p-2.5 md:p-3 border border-amber-50">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0"><item.icon size={12} className="text-amber-600" /></div>
                      <div>
                        <p className="font-bold text-black text-xs md:text-sm font-antigua">{item.label}</p>
                        <p className="text-[10px] md:text-xs text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 py-6 md:py-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-4 md:mb-5">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Find Us</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-antigua text-black">Location &amp; Getting There</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 h-[220px] sm:h-[280px] md:h-[320px]">
            <iframe title="Location Map" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Club+Nautico+Cartagena+Colombia&output=embed" />
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px] bg-white rounded-2xl p-5 md:p-8">
          <div className="text-center mb-5 md:mb-7">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">What's Included</p>
            <h2 className="text-xl md:text-2xl font-extrabold text-black font-antigua">Services &amp; Amenities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { title: "Key Features", items: [{ icon: Ship, label: "Private Yacht", sub: "Up to 20 passengers" }, { icon: Anchor, label: "Island Hopping", sub: "Rosario & Barú Islands" }, { icon: Compass, label: "Navigation", sub: "Certified captain included" }], hasSub: true },
              { title: "Services", items: [{ icon: LifeBuoy, label: "Safety equipment" }, { icon: Sun, label: "Snorkeling gear" }, { icon: Camera, label: "Underwater camera rental" }], hasSub: false },
              { title: "Amenities", items: [{ icon: Droplets, label: "Freshwater shower" }, { icon: Wind, label: "Sun deck" }, { icon: Fuel, label: "Full fuel included" }, { icon: Radio, label: "Sound system" }], hasSub: false },
            ].map((col, ci) => (
              <div key={ci}>
                <h3 className="font-bold text-black text-sm md:text-base mb-3 md:mb-4 pb-2 border-b-2 border-gray-300">{col.title}</h3>
                <div className="space-y-3 md:space-y-3.5">
                  {col.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 md:gap-3">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-xl bg-amber-50 flex items-center justify-center shrink-0"><item.icon size={13} className="text-amber-500" /></div>
                      <div>
                        <p className="font-semibold text-gray-900 text-xs md:text-sm">{item.label}</p>
                        {col.hasSub && item.sub && <p className="text-[10px] md:text-xs text-gray-400">{item.sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AROUND THIS PLACE */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between mb-4 md:mb-5">
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-0.5">Explore</p>
              <h2 className="text-xl md:text-2xl font-extrabold font-antigua text-black">Around This Place</h2>
            </div>
            <div className="flex gap-1.5 md:gap-2">
              <button className="bg-red text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">Clear Filters</button>
              <button className="bg-green text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">+ Filters</button>
            </div>
          </div>
          <HorizontalSlider items={sliderPlaces} />
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-[#fbf7ef] py-8 md:py-12 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[950px]">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400 mb-1 md:mb-1.5">Questions?</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black">Frequently Asked</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {faqData.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-5">
                <AccordionTrigger className="text-left text-xs md:text-sm font-semibold text-black hover:no-underline py-3 md:py-4">{item.question}</AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-gray-500 leading-relaxed pb-3 md:pb-4">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-5 md:mt-6 space-y-2 md:space-y-3">
            <nav className="hidden sm:grid grid-cols-3 md:grid-cols-6 gap-1.5 md:gap-2">
              {Object.keys(tagRoutes).map((tag) => (
                <Link key={tag} to={tagRoutes[tag]}><button className="w-full bg-white text-black font-bold shadow text-[10px] md:text-xs py-1.5 md:py-2 rounded hover:bg-gray-50 transition border border-gray-100">{tag}</button></Link>
              ))}
            </nav>
            <div className="flex bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <input className="flex-grow px-3 md:px-4 py-2.5 md:py-3 bg-white text-black outline-none text-xs md:text-sm" type="text" placeholder="Search for Anything" />
              <button className="bg-gold hover:bg-gold transition text-white font-bold px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="bg-[#fbf7ef] py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-5 md:mb-7">
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100">
              <p className="font-bold text-black text-xs md:text-sm mb-2 md:mb-3">La Carta Team Reviews</p>
              <div className="space-y-1.5 md:space-y-2">
                {[{ label: "Price", rating: 4 }, { label: "Location", rating: 5 }, { label: "Ambiance", rating: 4 }, { label: "Services", rating: 5 }].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-[10px] md:text-xs text-gray-500 w-14 md:w-16 shrink-0">{item.label}</span>
                    <StarRow count={item.rating} />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-4 pt-2.5 md:pt-3 border-t border-gray-100">
                <div className="font-extrabold text-lg md:text-xl font-antigua">LA C<span className="text-amber-500">Ā</span>RTA</div>
                <div>
                  <p className="text-[10px] md:text-xs text-gray-400">⭐ Star Resper</p>
                  <p className="text-[10px] md:text-xs text-gray-400">Last visit</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 text-center flex flex-col items-center justify-center min-h-[140px]">
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-black font-bold mb-1">Reviews</p>
              <h3 className="text-2xl md:text-3xl font-extrabold font-antigua text-black">Client Say's</h3>
              <div className="flex items-center gap-1.5 mt-2 justify-center">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <p className="text-xs md:text-sm font-bold text-gray-700">4.8 out of 5 — Based on 124 reviews</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 flex flex-col justify-between sm:col-span-2 md:col-span-1">
              <div className="flex items-start gap-3">
                <p className="text-4xl md:text-5xl font-extrabold text-black leading-none">5.3</p>
                <div className="flex-1 space-y-1 md:space-y-1.5 mt-1">
                  {[90, 75, 50, 30, 15].map((w, i) => (
                    <div key={i} className="h-1.5 md:h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div className="h-full rounded-full bg-amber-400" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] md:text-xs text-gray-400 mt-2">out of rating</p>
              <button className="mt-2.5 md:mt-3 w-full bg-green text-white text-[10px] md:text-xs font-bold rounded-full py-2 md:py-2.5">+ Give Your Review</button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <button className="bg-gold text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">Filter</button>
            <p className="text-[10px] md:text-xs text-gray-400">Showing 1-10 reviews</p>
          </div>
          <div className="space-y-3 md:space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between gap-3 md:gap-4 mb-2 md:mb-3">
                  <div>
                    <h4 className="font-extrabold text-black text-sm md:text-base">{r.name}</h4>
                    <p className="text-[10px] md:text-xs text-gray-400">{r.date}</p>
                  </div>
                  <StarRow count={r.rating} />
                </div>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{r.text}</p>
                <div className="flex items-center justify-between mt-3 md:mt-4 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <img src={r.avatar} alt="" className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover" />
                    <span className="text-[10px] md:text-xs text-gray-500">{r.date}</span>
                  </div>
                  <button className="border border-red-300 text-red-500 text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1 md:py-1.5 hover:bg-red-50 transition">{r.btnLabel}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PREMIUM LISTING */}
      <div className="bg-[#fbf7ef] py-6 md:py-8 px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between mb-4 md:mb-5">
            <h2 className="text-xl md:text-2xl font-extrabold font-antigua text-black">Premium Listing</h2>
            <div className="flex gap-1.5 md:gap-2">
              <button className="bg-red text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">Clear Filters</button>
              <button className="bg-green text-white text-[10px] md:text-xs font-bold rounded-full px-3 md:px-4 py-1.5 md:py-2">+ Filters</button>
            </div>
          </div>
          <HorizontalSlider items={sliderPlaces} />
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="relative py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-12 overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1400')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto max-w-[700px] text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">Stay Updated</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-antigua mb-3 md:mb-4">Cartagena Newsletter</h2>
          <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8 leading-relaxed">Subscribe to get exclusive boating deals, hidden sailing routes, and insider tips from our local Cartagena experts — straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 max-w-[500px] mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/30 text-white placeholder-white/60 text-xs md:text-sm outline-none focus:border-amber-400 transition backdrop-blur-sm" />
            <button className="bg-gold text-white font-bold text-xs md:text-sm px-6 py-3 rounded-full shadow whitespace-nowrap">Subscribe Now</button>
          </div>
          <p className="text-[10px] text-white/40 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </div>

    </div>
  );
}