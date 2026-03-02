import React from "react";
import logo from "/assets/Logo.png.png";
import img1 from "/assets/img1.png";
import whatsapp from "/assets/whatsapp.svg";
import img2 from "/assets/img2.png";
import img3 from "/assets/img33.png";
import img4 from "/assets/4.png";
import img5 from "/assets/img5.png";
import img6 from "/assets/img6.png";
import carpic from "/assets/BOOKGROUP.png";
import girlpic from "/assets/girl.png";
import beachpic from "/assets/beach.png";
import shippic from "/assets/ship.png";
import artpic from "/assets/art.png";
import resturantpic from "/assets/resturant.png";
import hotelpic from "/assets/hotels.png";
import hotel1 from "/assets/hotel2.png";

import Card from "@/components/card/Card";
import CircleCard from "@/components/card/CircularCard";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Headset,
  Share2,
  MessageCircleMore,
  MessageCircle,
  FileSpreadsheet,
  Plus,
  Music,
  CircleArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import HowToDoCartagena from "@/components/HowToCartagena";
import TopNewsCartagena from "@/components/TopNewsCartagena.tsx";
import ConciergeCTA from "@/components/ConciergeCTA";
import Pizza from "@/components/Pizza";
import CartagenaNews from "@/components/layout/cartagenaNews";

const catColors = {
  green: "bg-[#20bb59]",
  gold: "bg-[#d0a439]",
  yellow: "bg-[#fed358]",
  purple: "bg-[#ca77e7]",
  teal: "bg-[#5bc7c1]",
  red: "bg-[#f52929]",
};

const tagRoutes = {
  Beaches: "/Beaches",
  Accommodations: "/hotels",
  Boating: "/Boating",
  "Real Estate": "/realState",
  Activities: "/Activities",
  Gastronomy: "/Gastronomy",
};

const HomePage = () => {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">

      <div
        className="relative bg-cover bg-center py-16 sm:py-24 md:py-40 px-4"
        style={{ backgroundImage: `url('/assets/Hero.png')` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto text-center text-white">
          <h1 className="font-moonscape text-white uppercase font-medium tracking-[0.08em] leading-[0.92] text-[40px] sm:text-[64px] md:text-[88px] lg:text-[100px] mb-10 sm:mb-16 md:mb-[100px] drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]">
            EVERYTHING <br /> CARTAGENA
          </h1>
          <div className="max-w-3xl mx-auto px-2 sm:px-4">
            <nav className="hidden lg:grid grid-cols-6 gap-1 mb-2">
              {["Activities", "Accommodations", "Beaches", "Boating", "Real Estate", "Gastronomy"].map((tag) => (
                <Button key={tag} className="bg-white text-black font-bold shadow-xl rounded hover:bg-gray-200 text-xs px-2">
                  <Link to={tagRoutes[tag]}>{tag}</Link>
                </Button>
              ))}
            </nav>
            <div className="grid grid-cols-3 gap-1 mb-3 lg:hidden">
              {["Activities", "Beaches", "Boating", "Hotels", "Real Estate", "Gastronomy"].map((tag) => (
                <Button key={tag} className="bg-white text-black font-bold shadow-xl rounded hover:bg-gray-200 text-[10px] sm:text-xs px-1 py-1.5">
                  <Link to={tagRoutes[tag] || "#"}>{tag}</Link>
                </Button>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex bg-white rounded overflow-hidden p-1">
                <input
                  className="flex-grow p-2 bg-white text-black placeholder:px-2 text-sm outline-none"
                  type="text"
                  placeholder="Search for Anything"
                />
                <Button className="text-white hidden sm:block w-[180px] md:w-[250px] my-auto rounded px-4 py-2 font-bold bg-[#d0a439] hover:bg-[#b88f30] transition-colors text-sm">
                  Search
                </Button>
              </div>
              <Button className="text-white sm:hidden w-full my-auto rounded px-6 py-2 font-bold bg-[#d0a439] hover:bg-[#b88f30] transition-colors">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 sm:pt-16 md:pt-20 px-4 sm:px-8 md:px-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-antigua text-black text-center uppercase mb-8 sm:mb-12 md:mb-16">
          What to do in Cartagena, Colombia
        </h2>
      </div>

      <div className="container mx-auto pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { label: "Hotels", img: img1, color: "bg-gradient-to-r from-gold to-gold-light", href: "/hotels" },
            { label: "Beaches", img: img2, color: "bg-gradient-to-l from-green-light to-green", href: "/Beaches" },
            { label: "Activities", img: img3, color: "bg-gradient-to-b from-red to-red-light", href: "/Activities" },
            { label: "Tours & Sightseeing", img: img4, color: "bg-gradient-to-r from-gold to-gold-light", href: "/realState" },
            { label: "Boat Rentals", img: img5, color: "bg-gradient-to-l from-green-light to-green", href: "/Boating" },
            { label: "Gastronomy", img: img6, color: "bg-gradient-to-b from-red to-red-light", href: "/Gastronomy" },
          ].map((item, idx) => (
            <Link key={idx} to={item.href} className="relative group overflow-hidden cursor-pointer rounded-lg">
              <div className={`absolute top-0 left-0 w-full p-2 text-white font-bold text-sm sm:text-base text-center z-10 ${item.color}`}>
                {item.label}
              </div>
              <img
                src={item.img}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                alt={item.label}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center px-4 mb-4 mt-6 sm:mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-antigua text-black text-center uppercase mb-8 sm:mb-12 md:mb-16">
          The best of Cartagena, Colombia
        </h2>
      </div>

     <section className="container mb-8 mx-auto pb-10 px-4 sm:px-8 md:px-10 lg:px-16">
  <div className="flex flex-col gap-4 md:hidden">
    <Card image={beachpic} category="BEACHES" title="Best Beaches of Cartagena" author="Miguel" time="17 min" className="w-full" />
    <Card image={resturantpic} category="Gastronomy" title="The Best Restaurants of Cartagena." author="May" time="10 min" className="w-full" />
    <Card image={shippic} category="ACTIVITIES" title="What to do in Cartagena" author="Maria" time="10 min" className="w-full" />
    <Card image={girlpic} category="Fashion" title="The Best Shopping in Cartagena" author="Alejandra" time="7 min" className="w-full" />
    <Card image={hotel1} category="HOTELS" title="Top Hotels of Cartagena" author="Natalia" time="21 min" className="w-full" />
    <Card image={artpic} category="Art" title="The Best Street Art of Cartagena" author="Juan Pablo" time="5 min" className="w-full" />
  </div>

  <div className="grid grid-cols-3 gap-6 max-md:hidden" style={{ gridAutoRows: "260px" }}>
    <Card image={beachpic} category="BEACHES" title="Best Beaches of Cartagena" author="Miguel" time="17 min" style={{ gridRow: "span 2" }} />
    <Card image={resturantpic} category="Gastronomy" title="The Best Restaurants of Cartagena." author="May" time="10 min" />
    <Card image={shippic} category="ACTIVITIES" title="What to do in Cartagena" author="Maria" time="10 min" style={{ gridRow: "span 2" }} />
    <Card image={girlpic} category="Fashion" title="The Best Shopping in Cartagena" author="Alejandra" time="7 min" style={{ gridRow: "span 2", zIndex: 10 }} />
    <CircleCard image={hotelpic} category="HOTELS" title="Top Hotels of Cartagena" author="Natalia" time="21 min" className="rounded-full" />
    <Card image={artpic} category="Art" title="The Best Street Art of Cartagena" author="Juan Pablo" time="5 min" style={{ marginTop: "20px", zIndex: 10 }} />
  </div>
</section>

      <div className="py-12 sm:py-16 md:py-24 relative bg-[url('Rectangle.png')] sm:-mt-8 md:-mt-24">
        <div className="container mx-auto relative z-10 px-4 sm:px-8 md:px-16">
          <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-6 md:gap-16">
            <div className="w-full md:max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-antigua leading-tight font-semibold uppercase mb-4 md:mb-6 text-black">
                How to thrive in Cartagena, Colombia like a local.
              </h2>
              <p className="text-sm md:text-lg text-black mb-6 md:mb-8 leading-relaxed">
                Hidden Gems, Staying Safe, Maneuvering Around The City, Watching Out For Scams, Negotiating, What To Pack. The Ultimate Guide For Gringos.
              </p>
              <Button className="px-6 py-3 hidden md:block text-white w-full font-bold rounded bg-gradient-to-r from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A] hover:brightness-110 transition">
                <a href="https://lacarta.co/cartagena/resources/">resources</a>
              </Button>
            </div>
            <div className="relative flex flex-col items-center justify-center w-full">
              <img
                src={carpic}
                alt="Cartagena Travel Guide"
                className="w-[180px] sm:w-[260px] md:w-[350px] lg:w-[400px] h-auto relative z-20"
              />
              <Button className="px-6 py-3 md:hidden block text-white w-full font-bold rounded mt-4 bg-gradient-to-r from-[#3BCF8E] via-[#2EB872] to-[#1E9E5A] hover:brightness-110 transition">
                <a href="https://lacarta.co/cartagena/resources/">resources</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-16 md:mb-24 mx-auto px-4 sm:px-8 md:px-16 mt-10 md:mt-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black font-antigua text-center capitalize mb-12 md:mb-16">
          Free tools for your Cartagena journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {[
            {
              icon: (<span className="w-10 h-10 p-2 rounded-full bg-gradient-to-r from-gold to-gold-light"><Headset className="w-6 h-6" /></span>),
              label: "Tourist Service Center",
              color: "bg-gradient-to-r from-gold to-gold-light",
              paragraph: "If you ever need any help during your time in Cartagena!",
              buttonTxt: "GO",
            },
            {
              icon: (<span className="w-10 h-10 p-2 rounded-full bg-gradient-to-r from-green to-green-light"><MessageCircleMore className="w-6 h-6" /></span>),
              label: "Catagena FAQs",
              color: "bg-gradient-to-r from-green to-green-light",
              paragraph: "Cartagena's Most Frequently Asked Questions",
              buttonTxt: "Download",
            },
            {
              icon: (<span className="w-10 h-10 p-2 rounded-full bg-gradient-to-r from-red to-red-light"><FileSpreadsheet className="w-6 h-6" /></span>),
              label: "Cartagena Travel Checklists",
              color: "bg-gradient-to-r from-red to-red-light",
              paragraph: "Everything you must do before boarding your flight to Cartagena, Colombia!",
              buttonTxt: "Checkoff",
            },
            {
              icon: (<span className="w-10 h-10 p-2 rounded-full bg-gradient-to-r from-gold to-gold-light"><Plus className="w-6 h-6" /></span>),
              label: "Cartagena Emergency Guides",
              color: "bg-gradient-to-r from-gold to-gold-light",
              paragraph: "Save our Emergency Guide with you at all times for all the police stations, hospitals, and medical services!",
              buttonTxt: "Download",
            },
            {
              icon: (<span className="w-10 h-10 p-2 rounded-full bg-gradient-to-r from-green to-green-light"><Music className="w-6 h-6" /></span>),
              label: "Cartagena Spotify Playlists",
              color: "bg-gradient-to-r from-green to-green-light",
              paragraph: "Enhance your Cartagena trip by immersing yourself to the Cartagena Carribean beats!",
              buttonTxt: "Download",
            },
          ].map((tool, i) => (
            <div key={i} className="mt-10 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.15)] pt-10 pb-4 px-4 relative flex flex-col h-auto space-y-2">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center p-2 justify-center rounded-full text-white bg-white shadow-[0_-8px_10px_0_rgba(0,0,0,0.15)]">
                {tool.icon}
              </div>
              <div className="inline text-black font-bold absolute top-3 right-2">
                <Heart size={22} />
              </div>
              <h5 className="font-extrabold text-black text-sm">{tool.label}</h5>
              <p className="text-xs font-normal pt-1 leading-relaxed text-gray-500 flex-grow pb-4">{tool.paragraph}</p>
              <Button variant="default" className={`w-full rounded text-white bg-gradient-to-r hover:brightness-110 ${tool.color}`}>
                {tool.buttonTxt}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <ConciergeCTA />
      <HowToDoCartagena />
      <Pizza />
      <TopNewsCartagena />
      <CartagenaNews />
    </div>
  );
};

export default HomePage;
