import type { Dictionary } from "./id";

const en: Dictionary = {
  meta: {
    title: "jasapost.com — Social Media Management & Video Clipping Services",
    description:
      "Professional social media management for your business — daily content, scheduled posts, monthly reports, and Video Clipper: long videos turned into short, viral-ready clips.",
  },
  nav: {
    clipper: "Clipper",
    services: "Services",
    pricing: "Pricing",
    process: "Process",
    team: "Team",
    faq: "FAQ",
    contact: "Contact",
    cta: "Get Started",
  },
  hero: {
    eyebrow: "Social Media Management",
    headline: "Focus on your business.\nLet us handle your socials.",
    subheadline:
      "Quality content, consistent scheduling, and transparent reporting — without hiring an in-house team.",
    cta: "Free Consultation",
    ctaSub: "We reply within 24 hours",
  },
  services: {
    eyebrow: "What We Do",
    headline: "One team for all your social media needs",
    items: [
      {
        icon: "✏️",
        title: "Content Creation",
        description:
          "Graphic design, captions, and copywriting aligned with your brand voice.",
      },
      {
        icon: "📅",
        title: "Scheduled Posting",
        description:
          "Content published at the best times, consistently — without you having to remember.",
      },
      {
        icon: "💬",
        title: "Community Management",
        description:
          "Timely replies to comments and DMs to keep your audience engaged.",
      },
      {
        icon: "📊",
        title: "Monthly Reports",
        description:
          "Detailed performance reports every month so you always know what's working.",
      },
      {
        icon: "🎯",
        title: "Content Strategy",
        description:
          "Monthly content planning based on trend research and competitor analysis in your industry.",
      },
      {
        icon: "📸",
        title: "Visual Production",
        description:
          "Reels, product photos, and stories that capture attention and drive interaction.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    headline: "Transparent, no hidden fees",
    subheadline:
      "Choose a plan that fits your business. All plans include a monthly report.",
    plans: [
      {
        name: "Starter",
        price: "IDR 1,500,000",
        period: "/ month",
        description: "Perfect for businesses just starting their online presence.",
        features: [
          "12 posts / month",
          "2 platforms (Instagram + Facebook)",
          "Graphic design & captions",
          "Scheduled posting",
          "Summary monthly report",
        ],
        cta: "Choose Starter",
        highlighted: false,
      },
      {
        name: "Growth",
        price: "IDR 3,000,000",
        period: "/ month",
        description: "For businesses ready to grow faster on social media.",
        features: [
          "24 posts / month",
          "3 platforms (IG + FB + TikTok)",
          "Graphics, captions & Reels",
          "Community management",
          "Full monthly report",
          "Monthly strategy consultation",
        ],
        cta: "Choose Growth",
        highlighted: true,
      },
      {
        name: "Pro",
        price: "IDR 5,500,000",
        period: "/ month",
        description: "Complete solution for brands serious about all platforms.",
        features: [
          "40 posts / month",
          "4 platforms (IG + FB + TikTok + LinkedIn)",
          "Premium video & photo content",
          "Full community management",
          "In-depth reports & analytics",
          "Dedicated account manager",
          "Priority revisions",
        ],
        cta: "Choose Pro",
        highlighted: false,
      },
    ],
    popularBadge: "Most Popular",
    note: "Need a custom plan? ",
    noteLink: "Contact us for a custom quote.",
  },
  process: {
    eyebrow: "How It Works",
    headline: "Get started in 3 easy steps",
    steps: [
      {
        number: "01",
        title: "Consultation & Onboarding",
        description:
          "We discuss your business goals, target audience, and brand identity. Free and no strings attached.",
      },
      {
        number: "02",
        title: "Planning & Production",
        description:
          "Our team prepares a monthly content calendar and starts producing visuals and copy.",
      },
      {
        number: "03",
        title: "Posting & Reporting",
        description:
          "Content goes live on schedule. At month's end, you receive a clear, actionable performance report.",
      },
    ],
  },
  team: {
    eyebrow: "Our Team",
    headline: "The people behind jasapost.com",
    subheadline:
      "A dedicated team of professionals committed to growing your business on social media.",
    members: [
      {
        name: "Lili Linawati",
        role: "Manager",
        description: "Leads operations and ensures every client receives the best possible service.",
        initial: "LL",
        image: "/team/lili.png",
      },
      {
        name: "Devandro Abisatya",
        role: "Graphic Designer",
        description: "The creative mind behind our clients' aesthetic, on-brand visual content.",
        initial: "DA",
        image: "/team/devandro.png",
        
      },
      {
        name: "Bima Sakti",
        role: "Backend Developer",
        description: "Manages the technical infrastructure and system integrations that power our services.",
        initial: "BS",
        image: "/team/bima.png",
      },
      {
        name: "Chandani",
        role: "Customer Support",
        description: "The first point of contact for our clients — responsive, friendly, and always ready to help.",
        initial: "CH",
        image: "/team/chandani.png",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    headline: "Frequently asked questions",
    items: [
      {
        q: "Do I need to give you access to my social media accounts?",
        a: "Yes, we need access to post content. We use limited access and never change your account password.",
      },
      {
        q: "How long does the onboarding process take?",
        a: "Onboarding typically takes 3–5 business days. Your first content goes live in the first week after onboarding.",
      },
      {
        q: "Can I request revisions on content?",
        a: "Absolutely. Revisions are included in every plan. The Pro plan gets unlimited priority revisions.",
      },
      {
        q: "Which platforms do you support?",
        a: "Instagram, Facebook, TikTok, and LinkedIn. Other platforms can be discussed for custom plans.",
      },
      {
        q: "How does payment work?",
        a: "Payment is made at the beginning of each month via bank transfer. We'll send an invoice before the due date.",
      },
      {
        q: "Is there a long-term contract?",
        a: "No binding long-term contracts. You can cancel anytime with 14 days' notice.",
      },
    ],
  },
  contact: {
    eyebrow: "Get Started",
    headline: "Ready to hand off your social media?",
    subheadline:
      "Contact us now for a free consultation. Our team will reply within 24 hours.",
    cta: "Chat on WhatsApp",
    phone: "0852-0855-5552",
    email: "Or send an email to",
    emailAddress: "halo@jasapost.com",
    addressLabel: "Our Office",
    address: {
      street: "Kel. Way Hui, Kec. Jatiagung",
      city: "South Lampung Regency",
      province: "Lampung",
      country: "Indonesia",
    },
  },
  clipper: {
    badge: "Featured Service",
    eyebrow: "Video Clipper — Long to Short",
    headline: "Turn your long content into viral clips.",
    subheadline:
      "Podcast, webinar, interview, live stream, YouTube video — we cut them into short clips ready to upload to TikTok, Reels, and YouTube Shorts. No editing required on your end.",
    howTitle: "How Clipper works",
    steps: [
      { icon: "📤", label: "Send your video", desc: "Upload or share a link to your long-form video (YouTube, Google Drive, etc.)" },
      { icon: "✂️", label: "We clip it", desc: "Our team picks the best moments and cuts them into 30–90 second clips" },
      { icon: "🎨", label: "Branded & captioned", desc: "Auto-captions, logo, and brand overlay added to each clip" },
      { icon: "📦", label: "Receive your clips", desc: "9:16 vertical clips ready to upload, delivered within 1–2 business days" },
    ],
    features: [
      "Manual clipping based on best highlights",
      "Auto-captions / subtitles",
      "Branded overlay (logo + brand colors)",
      "Vertical 9:16 format ready for TikTok / Reels / Shorts",
      "Viral hook in the first second",
      "Works with podcasts, webinars, interviews, live streams",
    ],
    proposal: {
      title: "PODCAST CLIPPER PROPOSAL: CONTENT AMPLIFICATION STRATEGY",
      objective: {
        title: "Main Objective",
        desc: "To help podcasters expand their audience reach, increase social proof, and dominate social media algorithms (TikTok, Instagram Reels, YouTube Shorts) without wasting the content owner's time on editing."
      },
      why: {
        title: "Why Do Podcasters Need a Clipper Service?",
        points: [
          {
            title: "Omnipresence Effect (Being Everywhere)",
            desc: "By cutting 1 long podcast episode into 10-15 short videos (Shorts/Reels/TikTok), the podcaster's face and voice will massively flood the audience's feeds."
          },
          {
            title: "Multi-Net Algorithm",
            desc: "Every short video has its own chance of going viral. This method multiplies the opportunities to catch millions of new viewers unreached by long-form videos (main account)."
          },
          {
            title: "Elevating Brand Position & Authority",
            desc: "Podcasters whose videos are frequently clipped and reshared will automatically be considered top of mind (important/viral figures) in their industry, which is highly favored by sponsors/brands."
          },
          {
            title: "Funneling to Main Account",
            desc: "Short videos serve as \"bait\". Viewers curious about the exciting clips will immediately search for and subscribe to your main podcast account."
          }
        ]
      },
      scope: {
        title: "What I Do for You (Scope of Work):",
        points: [
          {
            title: "Golden Moment Research",
            desc: "Watching your entire podcast episode and selecting the most mind-blowing, funny, controversial, or emotional parts (best hooks)."
          },
          {
            title: "Modern Editing",
            desc: "Cutting videos into vertical format (9:16), adding dynamic subtitles (colorful running text), sound effects, and B-roll so viewers don't get bored in the first 3 seconds."
          },
          {
            title: "Upload-Ready Optimization",
            desc: "Videos are delivered fully polished, complete with recommended captions and hashtags that trigger interactions/comments."
          }
        ]
      },
      tip: {
        title: "💡 Pro Tip",
        desc: "\"Instead of a 1-hour podcast video being watched only once, let's break it down into 15 short contents. I do the work, your content goes viral everywhere.\""
      }
    },
    pricingTitle: "Clipper Plans",
    pricingNote: "Prices exclude ad spend. ",
    pricingNoteLink: "Ask about custom plans →",
    plans: [
      {
        name: "Clipper Single",
        price: "IDR 299,000",
        unit: "/ episode",
        description: "For creators with 1–2 videos per month.",
        features: ["1 long-form video", "Up to 5 short clips", "Auto-captions", "9:16 format", "1 revision"],
        cta: "Order Now",
        highlighted: false,
      },
      {
        name: "Clipper Monthly",
        price: "IDR 999,000",
        unit: "/ month",
        description: "For regular content creators and podcasters.",
        features: ["4 episodes / month", "Up to 5 clips per episode", "Captions + branded overlay", "9:16 format", "Unlimited revisions", "Priority turnaround"],
        cta: "Choose This Plan",
        highlighted: true,
      },
      {
        name: "Clipper Pro",
        price: "IDR 2,499,000",
        unit: "/ month",
        description: "For brands with daily or high-volume content.",
        features: ["12 episodes / month", "Up to 8 clips per episode", "Captions + branded overlay", "Custom thumbnails", "9:16 & 16:9 formats", "Unlimited revisions", "Dedicated editor"],
        cta: "Choose Pro",
        highlighted: false,
      },
    ],
    cta: "Start Clipping Now",
    ctaSub: "Send your first video today",
  },
  footer: {
    tagline: "Professional social media management & video clipper services.",
    links: [
      { label: "Clipper", href: "#clipper" },
      { label: "Services", href: "#services" },
      { label: "Pricing", href: "#pricing" },
      { label: "Team", href: "#team" },
      { label: "FAQ", href: "#faq" },
    ],
    copyright: "© 2025 jasapost.com. All rights reserved.",
    langSwitch: "Bahasa Indonesia",
    langHref: "/id",
  },
};

export default en;
