"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  Phone,
  Mail,
  Menu,
  X,
  Bug,
  Mouse,
  Antenna,
  Zap,
  BedDouble,
  Squirrel,
  Award,
  Leaf,
  Clock,
  ThumbsUp,
  Search,
  ClipboardList,
  ShieldCheck,
  Star,
  MapPin,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Bug,
    title: "Termite Control",
    description:
      "Comprehensive termite inspections and treatment plans using advanced baiting systems and liquid barriers to protect your home's structural integrity.",
  },
  {
    icon: Mouse,
    title: "Rodent Removal",
    description:
      "Humane and effective rodent control including mice and rats. We identify entry points, remove existing populations, and seal access to prevent return.",
  },
  {
    icon: Antenna,
    title: "Ant & Roach Treatment",
    description:
      "Targeted treatments for persistent ant colonies and cockroach infestations using professional-grade solutions that are safe for your family and pets.",
  },
  {
    icon: Zap,
    title: "Mosquito Control",
    description:
      "Seasonal mosquito management programs that reduce populations by up to 90%. Protect your outdoor living spaces all season long.",
  },
  {
    icon: BedDouble,
    title: "Bed Bug Elimination",
    description:
      "Heat treatment and chemical solutions for complete bed bug eradication. We guarantee elimination with our thorough multi-step process.",
  },
  {
    icon: Squirrel,
    title: "Wildlife Exclusion",
    description:
      "Safe removal of raccoons, opossums, and other wildlife from your property. We install exclusion barriers to prevent future intrusions.",
  },
];

const FEATURES = [
  {
    icon: Award,
    title: "Licensed & Insured",
    description:
      "Fully licensed by the Washington State Department of Agriculture and carrying comprehensive liability insurance for your peace of mind.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    description:
      "We prioritize low-toxicity, environmentally responsible products that are effective against pests while safe for children, pets, and the ecosystem.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description:
      "Pest emergencies don't wait, and neither do we. Contact us before noon and we'll have a technician at your door the same day.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "If pests return between scheduled treatments, so do we -- at no additional cost. Our service guarantee ensures your home stays protected.",
  },
];

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Inspection",
    description:
      "A certified technician performs a thorough inspection of your property, identifying pest species, entry points, nesting areas, and conducive conditions.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Treatment Plan",
    description:
      "We develop a customized treatment strategy tailored to your specific pest problem, property layout, and any health or environmental concerns.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Ongoing Protection",
    description:
      "Regular follow-up visits and preventive treatments keep your home pest-free year-round. We monitor, adjust, and report at every service.",
  },
];

const TESTIMONIALS = [
  {
    name: "Margaret Chen",
    location: "Bellevue, WA",
    rating: 5,
    text: "BugShield resolved our carpenter ant problem after two other companies failed. Their technician was knowledgeable, thorough, and took time to explain exactly what he was doing and why. Six months later, still ant-free.",
  },
  {
    name: "David Kowalski",
    location: "Everett, WA",
    rating: 5,
    text: "We discovered a rodent issue in our attic and BugShield had someone out the same afternoon. They sealed every entry point and set up a monitoring plan. Professional service from start to finish. Highly recommend.",
  },
  {
    name: "Sarah & James Patel",
    location: "Kirkland, WA",
    rating: 5,
    text: "After finding bed bugs in our guest room, we were panicked. BugShield's heat treatment approach was incredibly effective -- they were gone after one session. The team was respectful of our home and very reassuring throughout the process.",
  },
];

const SERVICE_AREAS = [
  "Seattle",
  "Everett",
  "Bellevue",
  "Kirkland",
  "Redmond",
  "Bothell",
  "Lynnwood",
  "Edmonds",
  "Shoreline",
  "Lake Forest Park",
  "Kenmore",
  "Woodinville",
  "Mill Creek",
  "Mukilteo",
  "Mountlake Terrace",
  "Marysville",
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ==================== HEADER ==================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-green-900/95 backdrop-blur-sm header-scrolled"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-bold text-white">
              Bug<span className="text-amber-400">Shield</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:4255550192"
              className="flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-green-900 transition-all hover:bg-amber-400 hover:shadow-lg"
            >
              <Phone className="h-4 w-4" />
              (425) 555-0192
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-green-900/95 backdrop-blur-sm md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-white/10 py-3 text-sm font-medium text-white/80 transition-colors hover:text-amber-400"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:4255550192"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-sm font-semibold text-green-900"
              >
                <Phone className="h-4 w-4" />
                (425) 555-0192
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ==================== HERO ==================== */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #14532d 0%, #166534 40%, #15803d 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-400">
              <Shield className="h-4 w-4" />
              Serving the Greater Seattle &amp; Everett Area
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Protect Your Home
              <br />
              From{" "}
              <span className="text-gradient">Unwanted Pests</span>
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              BugShield delivers professional, eco-friendly pest control backed
              by over 15 years of experience. From termites to wildlife, we
              provide thorough inspections, targeted treatments, and ongoing
              protection plans that keep your home safe and pest-free.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-green-900 transition-all hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/20"
              >
                Get Free Inspection
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:4255550192"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
              What We Do
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Comprehensive Pest Control Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Whether you&apos;re dealing with a current infestation or looking
              to prevent one, our certified technicians have the expertise and
              tools to handle any pest challenge.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="card-hover group rounded-xl border border-gray-100 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 inline-flex rounded-lg bg-green-50 p-3 text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section
        id="why-us"
        className="py-20 sm:py-28"
        style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
              The BugShield Difference
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Homeowners Trust BugShield
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We hold ourselves to the highest standards in the industry. Every
              treatment is backed by our commitment to quality, safety, and your
              complete satisfaction.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="card-hover rounded-xl bg-white p-8 text-center shadow-md"
              >
                <div className="mx-auto mb-5 inline-flex rounded-full bg-green-700 p-4 text-white">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section id="process" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
              How It Works
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Proven Three-Step Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We&apos;ve refined our approach over 15 years to deliver
              consistent, reliable results. Every engagement follows the same
              rigorous process.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="step-connector text-center">
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-700 text-white shadow-lg shadow-green-700/30">
                  <step.icon className="h-8 w-8" />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-green-900">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section
        id="testimonials"
        className="py-20 sm:py-28"
        style={{
          background:
            "linear-gradient(135deg, #14532d 0%, #166534 40%, #15803d 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-400">
              Client Testimonials
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Don&apos;t take our word for it. Here&apos;s what homeowners
              across the Puget Sound region have to say about working with
              BugShield.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="card-hover rounded-xl bg-white/10 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-white/80">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-white/50">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICE AREAS ==================== */}
      <section id="areas" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-700">
              Coverage Area
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Serving the Greater Seattle &amp; Everett Area
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our technicians provide residential and commercial pest control
              services throughout King and Snohomish counties. If you don&apos;t
              see your city listed, give us a call -- we may still be able to
              help.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 transition-colors hover:border-green-200 hover:bg-green-50"
              >
                <MapPin className="h-4 w-4 shrink-0 text-green-700" />
                <span className="text-sm font-medium text-gray-700">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section
        id="contact"
        className="py-20 sm:py-28"
        style={{
          background:
            "linear-gradient(135deg, #14532d 0%, #166534 50%, #14532d 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto mb-6 h-16 w-16 text-amber-400" />
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Live Pest-Free?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
            Take the first step toward a pest-free home. Contact us today to
            schedule your free, no-obligation inspection. Our team is standing
            by to help.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="tel:4255550192"
              className="group flex w-full items-center justify-center gap-3 rounded-lg bg-amber-500 px-8 py-4 text-lg font-semibold text-green-900 transition-all hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/20 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              (425) 555-0192
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:contact@bugshieldpest.com"
              className="group flex w-full items-center justify-center gap-3 rounded-lg border-2 border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5 sm:w-auto"
            >
              <Mail className="h-5 w-5" />
              contact@bugshieldpest.com
            </a>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-1">
              <a href="#" className="mb-4 flex items-center gap-2">
                <Shield className="h-7 w-7 text-amber-400" />
                <span className="text-lg font-bold text-white">
                  Bug<span className="text-amber-400">Shield</span>
                </span>
              </a>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                Professional pest control services protecting homes and
                businesses across the greater Seattle and Everett, WA area since
                2009.
              </p>
              <p className="text-sm text-gray-500">
                WA Pest Control License #PC-84721
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-amber-400"
                    >
                      <ChevronRight className="h-3 w-3" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Business Hours
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">7:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">8:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">Closed</span>
                </li>
                <li className="mt-4 rounded-lg bg-green-900/50 p-3 text-center text-amber-400">
                  <Clock className="mx-auto mb-1 h-4 w-4" />
                  24/7 Emergency Line Available
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:4255550192"
                    className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-amber-400"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                    (425) 555-0192
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@bugshieldpest.com"
                    className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-amber-400"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-amber-400" />
                    contact@bugshieldpest.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span>
                    14208 Smokey Point Blvd
                    <br />
                    Suite 102
                    <br />
                    Marysville, WA 98271
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} BugShield Pest Control. All
              rights reserved. Serving King &amp; Snohomish Counties, WA.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
