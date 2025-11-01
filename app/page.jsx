"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check, ArrowRight, Globe, Star, PhoneCall, Mail, ChevronDown,
  Target, MailCheck, Layers, BarChart3, FlaskConical, ShieldCheck, FileText, Sparkles, Users
} from "lucide-react";

/** i18n strings */
const STR = {
  en: {
    nav: { home: "Home", offers: "Offers", contact: "Contact" },
    hero: {
      badge: "External Sales Director",
      title: "Build a simple, effective outbound machine",
      subtitle:
        "Optimus Lead helps small teams structure their commercial pipeline, book meetings, and grow revenue with a pragmatic CRM-lite and repeatable playbooks.",
      ctaPrimary: "Get a demo",
      ctaSecondary: "See offers"
    },
    testimonials: {
      title: "What clients say",
      quotes: [
        {
          text: "We finally have a predictable flow of qualified meetings. Simple stack, strong discipline.",
          author: "Claire", role: "Co-founder", company: "SaaS Startup", metric: "+10 meetings/month"
        },
        {
          text: "Clean process from day one. The outbound machine actually runs and we see the numbers.",
          author: "Marc", role: "Agency Owner", company: "Digital Studio", metric: "3x pipeline in 90 days"
        },
        {
          text: "The scripts and sequences gave our team clarity and speed. Weekly reporting keeps momentum.",
          author: "Sophie", role: "Head of Growth", company: "Fintech", metric: "+18% reply rate"
        }
      ]
    },
    offers: {
      title: "Service offers",
      intro: "Clear formats, results-oriented. Concrete deliverables, weekly cadence, one point of contact.",
      cards: [
        {
          name: "Setup Sprint",
          desc: "2–3 weeks to install an outbound machine ready to run — no overkill.",
          tags: ["ICP", "Messaging", "Email infra"],
          bullets: [
            "Actionable ICP (segmentation + personas)",
            "Tested messaging & scripts (email / LinkedIn / call)",
            "Clean email infra (SPF/DKIM/DMARC, tracking, domains)",
            "Ready-to-launch sequences (templates + cadences)",
            "Minimal dashboard (replies, meetings, pipeline)",
            "Operations runbook for repeatability"
          ],
          href: "#offer-setup"
        },
        {
          name: "Development",
          desc: "We take over execution: continuous prospecting, meeting booking, and weekly improvements.",
          tags: ["Sourcing", "Multichannel", "A/B tests"],
          bullets: [
            "Lead sourcing & enrichment (based on ICP)",
            "Launching & managing multichannel campaigns",
            "Qualification & meeting booking for your team",
            "A/B testing on copies, subjects & timing",
            "Weekly reporting (opens, replies, meetings)",
            "Improvement loops from market feedback"
          ],
          href: "#offer-development"
        },
        {
          name: "Fractional Sales Director",
          desc: "Strategic + operational leadership: targets, rituals, pipeline reviews, and closing support.",
          tags: ["Strategy", "Rituals", "Closing"],
          bullets: [
            "Segment targets + 90-day plan",
            "Team rituals (weekly) & playbooks",
            "Deal reviews & forecasts",
            "Partnerships / channel setup",
            "Coaching & advanced negotiation",
            "End-to-end tools & process orchestration"
          ],
          href: "#offer-fsd"
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "What tools do you use?", a: "Light stack only (email, LinkedIn, calling). We adapt to your tools if needed and document everything." },
        { q: "How soon can we launch?", a: "Usually within 2–3 weeks after kickoff, once ICP, messaging and infra are set." },
        { q: "Can you join calls to help close?", a: "Yes—under the Development plan we can join key calls; full support is part of the Fractional Sales Director offer." },
        { q: "What about compliance (SPF/DKIM/DMARC)?", a: "We configure domains properly and monitor deliverability from day one." },
        { q: "Is there a long-term commitment?", a: "No lock-in—monthly for Development. Setup Sprint is one-off." }
      ]
    },
    process: {
      title: "How we work",
      steps: [
        { title: "Kickoff", text: "Define ICP, targets, and objectives for the next 90 days." },
        { title: "Install", text: "Set up tools, domains, tracking, and clean data sources." },
        { title: "Run", text: "Launch multi-channel sequences, qualify leads, book meetings." },
        { title: "Improve", text: "Weekly reviews, A/B tests, and pipeline acceleration." }
      ]
    },
    cta: {
      title: "Ready to make outbound simple?",
      subtitle: "Book a 20-minute intro. If it’s not a fit, we’ll point you to the right path.",
      primary: "Book a call",
      secondary: "Write an email"
    },
    footer: { text: "© 2025 Optimus Lead. All rights reserved." }
  },
  fr: {
    nav: { home: "Accueil", offers: "Offres", contact: "Contact" },
    hero: {
      badge: "Direction Commerciale Externalisée",
      title: "Construire une machine d’outbound simple et efficace",
      subtitle:
        "Optimus Lead aide les petites équipes à structurer leur pipeline, prendre des RDV et générer du revenu avec un CRM léger et des playbooks réplicables.",
      ctaPrimary: "Demander une démo",
      ctaSecondary: "Voir les offres"
    },
    testimonials: {
      title: "Ils en parlent",
      quotes: [
        {
          text: "Enfin un flux prévisible de RDV qualifiés. Stack simple, discipline forte.",
          author: "Claire", role: "Co-fondatrice", company: "SaaS B2B", metric: "+10 RDV/mois"
        },
        {
          text: "Process propre dès le départ. La machine outbound tourne et on le voit dans les chiffres.",
          author: "Marc", role: "Dirigeant", company: "Studio digital", metric: "x3 pipeline en 90 jours"
        },
        {
          text: "Scripts et séquences = clarté + vitesse. Le reporting hebdo maintient l’élan.",
          author: "Sophie", role: "Head of Growth", company: "Fintech", metric: "+18% taux de réponse"
        }
      ]
    },
    offers: {
      title: "Offres de service",
      intro: "Des formats clairs, orientés résultats. Délivrables concrets, pilotage hebdomadaire, et un interlocuteur unique.",
      cards: [
        {
          name: "Mise en place (Setup Sprint)",
          desc: "2–3 semaines pour installer une machine outbound prête à tourner, sans usine à gaz.",
          tags: ["ICP", "Messaging", "Infra email"],
          bullets: [
            "Positionnement & ICP actionnables (segmentation + personas)",
            "Messages & scripts testés (email / LinkedIn / call)",
            "Infra email propre (SPF/DKIM/DMARC, tracking, domaines)",
            "Séquences prêtes à lancer (templates + cadences)",
            "Dashboard minimaliste (suivi réponses, RDV, pipeline)",
            "Runbook d’opérations pour répéter sans friction"
          ],
          href: "#offer-setup"
        },
        {
          name: "Développement (Run & Optimisation)",
          desc: "On prend le relais sur l’exécution : prospection continue, prise de RDV et amélioration hebdomadaire.",
          tags: ["Sourcing", "Multicanal", "A/B tests"],
          bullets: [
            "Sourcing & enrichissement des leads (ICP validé)",
            "Lancement & gestion des campagnes multicanales",
            "Qualification & booking de RDV pour votre équipe",
            "A/B tests sur messages, objets & timing",
            "Reporting hebdo (taux d’ouverture, réponses, RDV)",
            "Boucles d’amélioration basées sur les retours marché"
          ],
          href: "#offer-development"
        },
        {
          name: "Direction Commerciale Externalisée",
          desc: "Pilotage stratégique + opérationnel : objectifs, rituels, revue de pipe et support au closing.",
          tags: ["Stratégie", "Rituels", "Closing"],
          bullets: [
            "Objectifs par segment + plan 90 jours",
            "Rituels d’équipe (hebdo) & playbooks",
            "Revues d’opportunités et forecasts",
            "Structuration partenariats / channel",
            "Coaching call & négociation avancée",
            "Orchestration outils & process de bout en bout"
          ],
          href: "#offer-fsd"
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Quels outils utilisez-vous ?", a: "Stack légère (email, LinkedIn, call). On s’adapte à vos outils si besoin et on documente tout." },
        { q: "En combien de temps peut-on lancer ?", a: "En général sous 2–3 semaines après le kickoff, une fois l’ICP, le messaging et l’infra en place." },
        { q: "Pouvez-vous participer aux RDV pour aider à closer ?", a: "Oui — en Développement on peut rejoindre les RDV clés ; l’accompagnement complet est inclus en Direction Commerciale." },
        { q: "Et côté conformité (SPF/DKIM/DMARC) ?", a: "On configure proprement les domaines et on suit la délivrabilité dès le jour 1." },
        { q: "Y a‑t‑il un engagement long ?", a: "Non — mensuel pour Développement. La Mise en place est au forfait (one‑off)." }
      ]
    },
    process: {
      title: "Notre méthode",
      steps: [
        { title: "Kickoff", text: "ICP, cibles et objectifs pour 90 jours." },
        { title: "Installation", text: "Outils, domaines, tracking et bases propres." },
        { title: "Run", text: "Séquences multicanales, qualification, prise de RDV." },
        { title: "Amélioration", text: "Revues hebdo, A/B tests, accélération du pipeline." }
      ]
    },
    cta: {
      title: "On simplifie l’outbound ?",
      subtitle: "Planifions 20 minutes. Si ce n’est pas un fit, on vous oriente.",
      primary: "Réserver un call",
      secondary: "Écrire un email"
    },
    footer: { text: "© 2025 Optimus Lead. Tous droits réservés." }
  }
};

const palette = {
  primaryFrom: "from-emerald-600",
  primaryTo: "to-lime-600",
  accentFrom: "from-amber-500",
  accentTo: "to-orange-600",
};

function UIPreview() {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-5xl rounded-2xl border bg-white/90 shadow-md">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500"/>
            <span className="h-3 w-3 rounded-full bg-amber-500"/>
            <span className="h-3 w-3 rounded-full bg-orange-500"/>
          </div>
          <div className="text-sm text-gray-500">dashboard.optimus</div>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-12">
          {["Meetings", "Reply rate", "Open rate"].map((label, i) => (
            <div key={i} className="md:col-span-4 rounded-xl border p-4">
              <p className="text-xs text-gray-500">{label}</p>
              <p className="mt-2 text-2xl font-semibold">{[12, "18%", "62%"][i]}</p>
              <div className={`mt-3 h-2 rounded-full bg-gradient-to-r ${palette.primaryFrom} ${palette.primaryTo}`}/>
            </div>
          ))}
          <div className="md:col-span-8 rounded-xl border p-4">
            <p className="text-sm font-medium">Pipeline</p>
            <div className="mt-3 grid grid-cols-4 gap-2 text-xs text-gray-600">
              {["Leads", "Qualified", "Proposal", "Won"].map((c, i) => (
                <div key={i} className="rounded-lg border p-3">
                  <p className="text-[11px] text-gray-500">{c}</p>
                  <p className="mt-1 text-lg font-semibold">{[48, 17, 6, 3][i]}</p>
                  <div className={`mt-2 h-1.5 rounded-full bg-gradient-to-r ${palette.accentFrom} ${palette.accentTo}`}/>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-4 rounded-xl border p-4">
            <p className="text-sm font-medium">Weekly bookings</p>
            <svg viewBox="0 0 120 60" className="mt-2 w-full">
              <polyline fill="none" stroke="currentColor" className="text-emerald-600" strokeWidth="3"
                points="0,50 20,48 40,46 60,35 80,28 100,22 120,18" />
              <polyline fill="none" stroke="currentColor" className="text-amber-500" strokeWidth="3"
                points="0,55 20,50 40,44 60,40 80,36 100,30 120,26" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ q }) {
  return (
    <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease:"easeOut"}}
      className="rounded-2xl border p-5 bg-white/90 hover:-translate-y-1 hover:shadow-md transition">
      <div className="flex items-center gap-2 text-amber-500" aria-label="rating">
        {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="w-4 h-4 fill-current" />))}
      </div>
      <p className="mt-3 italic">“{q.text}”</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold">
          {q.author?.[0] || "A"}
        </div>
        <div className="text-sm">
          <p className="font-medium">{q.author}</p>
          <p className="text-gray-600">{q.role} • {q.company}</p>
        </div>
      </div>
      {q.metric && (<div className="mt-4 inline-flex items-center rounded-full border px-3 py-1 text-xs text-gray-700">{q.metric}</div>)}
    </motion.div>
  );
}

function iconFor(s) {
  const t = (s || "").toLowerCase();
  if (t.includes("icp") || t.includes("persona")) return <Target className="h-3.5 w-3.5"/>;
  if (t.includes("email") || t.includes("spf") || t.includes("dkim") || t.includes("dmarc") || t.includes("deliverab")) return <MailCheck className="h-3.5 w-3.5"/>;
  if (t.includes("sequence") || t.includes("template") || t.includes("script")) return <Layers className="h-3.5 w-3.5"/>;
  if (t.includes("dashboard") || t.includes("report")) return <BarChart3 className="h-3.5 w-3.5"/>;
  if (t.includes("a/b") || t.includes("test")) return <FlaskConical className="h-3.5 w-3.5"/>;
  if (t.includes("security") || t.includes("compliance") || t.includes("checklist")) return <ShieldCheck className="h-3.5 w-3.5"/>;
  if (t.includes("playbook") || t.includes("runbook") || t.includes("doc")) return <FileText className="h-3.5 w-3.5"/>;
  if (t.includes("coach") || t.includes("team") || t.includes("rituel") || t.includes("ritual")) return <Users className="h-3.5 w-3.5"/>;
  if (t.includes("launch") || t.includes("ready") || t.includes("prêt")) return <Sparkles className="h-3.5 w-3.5"/>;
  return <Check className="h-3.5 w-3.5"/>;
}

function FAQItem({ item, idx }) {
  const [open, setOpen] = useState(idx < 2);
  return (
    <div className="rounded-2xl border bg-white/90">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-4">
        <span className="text-left font-medium">{item.q}</span>
        <ChevronDown className={`h-5 w-5 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="px-4 pb-4 pt-0 text-sm text-gray-700">{item.a}</div>}
    </div>
  );
}

export default function Landing() {
  const [lang, setLang] = useState("fr");
  const t = STR[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto grid grid-cols-3 items-center px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-600" />
            <span className="font-semibold tracking-tight">Optimus Lead</span>
          </div>
          <nav className="hidden md:flex items-center justify-center gap-6 text-sm">
            <a href="#home" className="hover:opacity-70">{t.nav.home}</a>
            <a href="#offers" className="hover:opacity-70">{t.nav.offers}</a>
            <a href="#contact" className="hover:opacity-70">{t.nav.contact}</a>
          </nav>
          <div className="flex justify-end">
            <button onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="inline-flex items-center gap-2 border rounded-xl px-3 py-1 text-sm hover:shadow-sm hover:-translate-y-[1px] transition">
              <Globe className="w-4 h-4" /> {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="max-w-6xl mx-auto grid items-center gap-10 px-4 pt-16 pb-12 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full px-3 py-1 border border-emerald-100">
            <Star className="w-3.5 h-3.5" /> {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight tracking-tight">{t.hero.title}</h1>
          <p className="mt-4 text-gray-600 max-w-xl">{t.hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className={`inline-flex items-center gap-2 bg-gradient-to-r ${palette.primaryFrom} ${palette.primaryTo} text-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-[2px] transition`}>
              {t.hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#offers" className="inline-flex items-center gap-2 border px-5 py-3 rounded-2xl hover:bg-white/70 hover:shadow-sm transition">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="relative">
          <UIPreview />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold">{t.testimonials.title}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {t.testimonials.quotes.map((q, i) => (<TestimonialCard q={q} key={i} />))}
        </div>
      </section>

      <section id="offers" className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-semibold">{t.offers.title}</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">{t.offers.intro}</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {t.offers.cards.map((c, idx) => (
            <div key={idx} className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-emerald-200 via-amber-200 to-lime-200">
              <div className="rounded-2xl bg-white/90 p-5 shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-md">
                <div className="pointer-events-none absolute -right-2 -top-2 h-10 w-10 rotate-45 rounded-md bg-gradient-to-br from-emerald-500 to-lime-500 opacity-10" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-emerald-700">
                    {idx === 0 ? ( "Sprint 2–3 semaines" ) : idx === 1 ? ( "Opérations continues" ) : ( "Leadership commercial" )}
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-lime-600 text-white text-xs font-semibold shadow-sm">
                    {String(idx+1).padStart(2,'0')}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{c.name}</h3>
                <p className="mt-2 text-gray-600">{c.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  {c.tags?.map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 bg-white/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {tag}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 grid grid-cols-1 gap-2 text-sm md:grid-cols-1">
                  {c.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100"><Check className="h-3.5 w-3.5"/></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between">
                  <a href={c.href} className="inline-flex items-center gap-2 border px-4 py-2 rounded-xl hover:bg-emerald-50 hover:border-emerald-200 transition">
                    {"Voir le détail"} <ArrowRight className="w-4 h-4" />
                  </a>
                  <div className="hidden md:flex items-center gap-2 text-[11px] text-gray-500">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Prêt à activer</span>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition group-hover:opacity-40 bg-gradient-to-br from-emerald-300 via-amber-300 to-lime-300" />
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold">{t.faq.title}</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {t.faq.items.map((it, i) => (<FAQItem key={i} item={it} idx={i} />))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-3xl border p-8 md:p-10 text-center bg-white/80">
          <h3 className="text-3xl font-semibold tracking-tight">{t.cta.title}</h3>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:guillaume@optimuslead.com"
              className={`inline-flex items-center gap-2 bg-gradient-to-r ${palette.primaryFrom} ${palette.primaryTo} text-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-[2px] transition`}>
              <PhoneCall className="w-4 h-4"/> {t.cta.primary}
            </a>
            <a href="mailto:guillaume@optimuslead.com"
              className="inline-flex items-center gap-2 border px-5 py-3 rounded-2xl hover:bg-white/70 hover:shadow-sm transition">
              <Mail className="w-4 h-4"/> {t.cta.secondary}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 text-sm text-gray-600 grid grid-cols-1 md:grid-cols-2 items-center">
          <p className="order-2 md:order-1 mt-3 md:mt-0">{t.footer.text}</p>
          <div className="order-1 md:order-2 flex items-center justify-start md:justify-end gap-3">
            <a className="underline hover:text-emerald-700" href="#offers">{t.nav.offers}</a>
            <a className="underline hover:text-emerald-700" href="#contact">{t.nav.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
