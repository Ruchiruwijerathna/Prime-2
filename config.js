/* ================================================================
   ╔══════════════════════════════════════════════════════════════╗
   ║        ✏️  config.js  —  YOUR CUSTOMIZATION FILE            ║
   ║                                                              ║
   ║   Edit ONLY this file on GitHub to change the dashboard.    ║
   ║   After saving, the live site updates in ~60 seconds.       ║
   ╚══════════════════════════════════════════════════════════════╝
================================================================ */

const CONFIG = {

  /* ════════════════════════════════════════════════════════
     🔗  GOOGLE SHEETS CONNECTION
  ════════════════════════════════════════════════════════ */
  GOOGLE_SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTG_z9yrnCzjeMgqlZBt7BNaGRPXf5MxnaE5_SL_HYk9wz6lGU3Fs3tJWK3vTUlWMLTyZK2U228OuI/pub?gid=2019630569&single=true&output=csv",

  /* ════════════════════════════════════════════════════════
     🏢  YOUR COMPANY (if present in data, highlights gold)
  ════════════════════════════════════════════════════════ */
  YOUR_COMPANY: "Prime Lands",

  /* ════════════════════════════════════════════════════════
     📊  DASHBOARD TITLES
  ════════════════════════════════════════════════════════ */
  DASHBOARD_TITLE:    "Land Market — Competitor Analysis",
  DASHBOARD_SUBTITLE: "Real Estate Land Data Dashboard · 2026",
  DATA_DATE:          "📅 Updated: 2026 April",

  /* ════════════════════════════════════════════════════════
     🔄  AUTO REFRESH (minutes)
  ════════════════════════════════════════════════════════ */
  AUTO_REFRESH_MINUTES: 1,

  /* ════════════════════════════════════════════════════════
     📊  CHART SIZES
  ════════════════════════════════════════════════════════ */
  TOP_COMPANIES_COUNT:       20,
  TOP_LOCATIONS_COUNT:       20,
  TOP_PRICE_LOCATIONS_COUNT: 20,
  CURRENT_YEAR:              2026,

  /* ════════════════════════════════════════════════════════
     💰  PRICE FILTERING (Rs.)
  ════════════════════════════════════════════════════════ */
  MIN_VALID_PRICE:  50000,
  MAX_VALID_PRICE:  15000000,

  /* ════════════════════════════════════════════════════════
     📐  PLOT SIZE BUCKETS
  ════════════════════════════════════════════════════════ */
  PLOT_BUCKETS: [
    { label: "6–8 perches",   max: 8    },
    { label: "9–11 perches",  max: 11   },
    { label: "12–15 perches", max: 15   },
    { label: "16–20 perches", max: 20   },
    { label: "20+ perches",   max: 9999 },
  ],

  /* ════════════════════════════════════════════════════════
     🗺️  REGION CLASSIFICATION (kept for reference, not shown)
  ════════════════════════════════════════════════════════ */
  REGION_LABELS: ["Urban", "Suburban", "Rural"],
  URBAN_AREAS: [
    "Colombo","Malabe","Rajagiriya","Battaramulla","Nugegoda","Kotte",
    "Dehiwala","Mount Lavinia","Borella","Kiribathgoda","Kaduwela","Athurugiriya",
    "Maharagama","Piliyandala","Homagama","Kottawa","Pannipitiya","Thalawathugoda",
    "Hokandara","Malwana","Kesbewa","Kadawatha","Gampaha","Negombo","Ja-Ela","Wattala"
  ],
  SUBURBAN_AREAS: [
    "Bandaragama","Panadura","Kalutara","Moratuwa","Wadduwa","Beruwala","Kahathuduwa",
    "Meegoda","Horana","Avissawella","Hanwella","Kurunegala","Kandy"
  ],

  /* ════════════════════════════════════════════════════════
     📝  EXECUTIVE SUMMARY TEXT BOXES
  ════════════════════════════════════════════════════════ */
  INSIGHTS: [
    { icon: "🔴", title: "Market Saturation Zones", text: "Homagama, Athurugiriya, and Piliyandala show the highest project density. Differentiating through premium amenities or unique plot sizes is key to standing out." },
    { icon: "🟡", title: "Growth Opportunities", text: "Emerging corridors — Kurunegala, Tangalle, and Matara — show less competition with growing demand. First-mover advantage is available in these areas." },
    { icon: "🟢", title: "Pricing Strategy", text: "The Rs. 200,000–500,000/perch band shows the highest absorption rate. Premium Colombo-adjacent locations command Rs. 1M+ successfully." },
    { icon: "📊", title: "Project Scale Sweet Spot", text: "Projects with 20–60 blocks show the fastest sell-through. Mega projects (100+ blocks) succeed best in emerging areas with lower per-perch pricing." },
    { icon: "🏗️", title: "Plot Size Preference", text: "10-perch plots dominate the market. 6-perch plots are trending in urban areas. 12–15 perch is preferred in suburban and rural markets." },
    { icon: "⚡", title: "Top Competitive Threats", text: "{AUTO}" }
  ],
};
