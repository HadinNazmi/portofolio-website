export const translations = {
  en: {
    navbar: {
      brand: "Hadin",
      subBrand: "Portfolio",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      switchLangAria: "Toggle Language",
    },
    hero: {
      tracker: "PEKANBARU — INDONESIA",
      headline: "Hi, I’m Hadin Nazmi.",
      subtitle: "Full-Stack Web & Mobile Developer blending architectural brutalism with high-throughput native software performance.",
      ctaProjects: "My Projects",
      ctaResume: "Download Resume",
      yearsBuilding: "04+",
      yearsLabel: "Years Building",
      productsShipped: "18+",
      productsLabel: "Products Shipped",
      kmipnWinner: "01st",
      kmipnLabel: "KMIPN VII Winner",
      devIdentity: "DEV IDENTITY // 001",
      sysStable: "SYS.STABLE",
      openToWork: "OPEN TO WORK — Fulltime / Freelance",
      utc: "UTC+7",
    },
    about: {
      tag: "01 / ARCHITECTURAL PHILOSOPHY",
      headlinePrefix: "Dedicated to ",
      headlineHighlight1: "Architecting High-Throughput Digital Products",
      headlineMid: " and engineered experiences as a ",
      headlineHighlight2: "Senior Full-Stack & Native Mobile Specialist",
      headlineSuffix: ".",
      manifesto: "True software craftsmanship exists at the intersection of mathematical rigidity and fluid user intuition. I prioritize clean domain separation, declarative native UI systems, low-latency microservices, and uncompromising typographical elegance. Every millisecond shaved from frame renders and database queries is respect paid to the human at the terminal.",
      badgePcr: "Politeknik Caltex Riau",
      badgeWinner: "1st Winner KMIPN 7",
      badgeArch: "Web & Mobile Architecture",
      badgeLocation: "Pekanbaru, Indonesia",
    },
    skills: {
      tag: "02 / EXPERTISE",
      title: "Skills & Capabilities",
      subtitle: "A disciplined synthesis of modern web standards, native mobile runtimes, and resilient distributed data backends.",
      arsenalLabel: "CORE ARSENAL",
      card1: {
        title: "Frontend Web",
        desc: "Responsive, accessible, pixel-accurate web applications with modern rendering architectures, SSR/SSG workflows, and strict state machines.",
        skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vue.js", "Vite"]
      },
      card2: {
        title: "Mobile & Backend",
        desc: "High-performance native and cross-platform apps backed by robust microservices, real-time message brokers, and transactional APIs.",
        skills: ["Kotlin", "Flutter", "Laravel", "Node.js", "Express", "Jetpack"]
      },
      card3: {
        title: "Database & Cloud",
        desc: "Scalable database design, distributed caching, automated CI/CD deployment pipelines, and zero-downtime infrastructure provisioning.",
        skills: ["Supabase", "PostgreSQL", "Docker", "Redis", "Firebase", "AWS"]
      }
    },
    projects: {
      tag: "03 / SELECTED WORKS",
      title: "Featured Projects",
      filters: {
        all: "All (4)",
        web: "Web",
        mobile: "Mobile",
        ml: "ML",
      },
      liveDemo: "Live Demo",
      githubSource: "GitHub Source",
      items: [
        {
          id: "bank-jatah",
          index: "INDEX // 001",
          category: "mobile",
          tags: ["Mobile", "Kotlin", "Supabase"],
          icon: "account_balance_wallet",
          runtimeBadge: "FINTECH RUNTIME",
          title: "Bank Jatah Indonesia",
          desc: "Micro-banking and automated savings application built for local SMBs featuring biometric security, ledger synchronization, and automated daily balances.",
          liveUrl: "https://www.bjindonesia.online/aplikasi",
          githubUrl: "https://github.com/HadinNazmi"
        },
        {
          id: "sigap-ai",
          index: "INDEX // 002",
          category: "ml",
          tags: ["ML", "Next.js", "Python"],
          icon: "warning_amber",
          runtimeBadge: "TELEMETRY PREDICTOR",
          title: "Sigap AI",
          desc: "Intelligent disaster prediction and community alert platform with real-time geospatial telemetry, sensor clustering, and dynamic evacuation pathfinding.",
          liveUrl: "#",
          githubUrl: "https://github.com/HadinNazmi"
        },
        {
          id: "karyariau",
          index: "INDEX // 003",
          category: "web",
          tags: ["Web", "Laravel", "Tailwind"],
          icon: "storefront",
          runtimeBadge: "CREATIVE MARKETPLACE",
          title: "KaryaRiau Portal",
          desc: "Creative industry marketplace and cultural archive connecting artisans across Riau province with decentralized escrow and automated delivery tracking.",
          liveUrl: "#",
          githubUrl: "https://github.com/HadinNazmi"
        },
        {
          id: "pulsefit",
          index: "INDEX // 004",
          category: "mobile",
          tags: ["Mobile", "Flutter", "Node.js"],
          icon: "fitness_center",
          runtimeBadge: "BIOMETRIC RUNTIME",
          title: "PulseFit Tracker",
          desc: "Cross-platform workout telemetry and health metric companion featuring offline-first data queuing, SQLite synchronization, and granular SVG analytics.",
          liveUrl: "#",
          githubUrl: "https://github.com/HadinNazmi"
        }
      ]
    },
    experience: {
      tag: "04 / CAREER & LEADERSHIP",
      title: "Experiences",
      subtitle: "Demonstrated leadership across research consortiums, student developer initiatives, and production portals.",
      entry1: {
        roleTag: "ROLE // RESEARCH & ARCHITECTURE",
        period: "2023 — PRESENT",
        role: "ITSA Research Division Lead",
        org: "Informatics Technology Student Association",
        bullets: [
          "Spearheaded student research cohorts into reactive system architectures, mobile offline caches, and automated test runners.",
          "Organized and lectured in 15+ specialized technical workshops covering Kotlin Android internals and modern Next.js patterns.",
          "Conducted code reviews for 30+ departmental software deliverables, driving uniform coding standards and strict CI checks."
        ],
        tags: ["Peer Mentorship", "Architecture Reviews"],
        telemetryTitle: "TELEMETRY STATS",
        stat1Val: "99.8%",
        stat1Label: "Department Service Uptime",
        stat2Val: "15+",
        stat2Label: "Workshops Delivered",
        hash: "HASH // 8e91f09c • CERTIFIED ARCHITECTURE LEAD"
      },
      entry2: {
        roleTag: "ROLE // SYSTEM COORDINATOR",
        period: "2022 — 2023",
        role: "UKMI Coordinator & Lead Developer",
        org: "Unit Kegiatan Mahasiswa Islam PCR",
        bullets: [
          "Architected centralized internal administrative portal for organizational record management and digital inventory tracking.",
          "Automated attendee check-in and ticketing workflow using QR verification and realtime PostgreSQL database synchronization."
        ],
        tags: ["Operations Portal", "Database Design"],
        principleTitle: "DESIGN PRINCIPLE",
        quote: "“Reliability in code is not an afterthought of testing, but the natural consequence of rigorous architectural intent.”",
        hash: "SYSTEM DISCIPLINE • INFRASTRUCTURE FIRST"
      }
    },
    contact: {
      tag: "05 / GET IN TOUCH",
      title: "Let’s Work Together.",
      directInquiries: "DIRECT INQUIRIES",
      email: "hadinnazmi21@gmail.com",
      locationZone: "LOCATION & ZONE",
      locationValue: "Pekanbaru, Riau, Indonesia — Remote / Hybrid (UTC+7)",
      availability: "AVAILABILITY STATUS",
      availabilityValue: "Available for select freelance contracts, technical consultations, and full-time senior engineering appointments.",
      networkDirectory: "NETWORK DIRECTORY",
      networks: [
        { name: "GitHub ↗", href: "https://github.com/HadinNazmi" },
        { name: "LinkedIn ↗", href: "https://linkedin.com/in/hadinnazmi" },
        { name: "Twitter/X ↗", href: "https://twitter.com" },
        { name: "Resume PDF ↗", href: "#" },
      ],
      formName: "YOUR NAME *",
      formEmail: "YOUR EMAIL *",
      formSubject: "SUBJECT / PROJECT SCOPE",
      formMessage: "MESSAGE *",
      namePlaceholder: "e.g. Alex Mercer",
      emailPlaceholder: "e.g. alex@studio.io",
      subjectPlaceholder: "e.g. Mobile Architecture / Web Application Development",
      messagePlaceholder: "Describe project requirements, milestones, and timeline...",
      submitBtn: "Send Message",
      sla: "24H RESPONSE SLA",
      inSectionCopyright: "© 2025 Hadin Nazmi. Engineered with precision.",
      backToTop: "Back to Top",
      alertSuccess: "Message dispatched with precision."
    },
    footer: {
      brand: "Hadin Nazmi",
      tagline: "Full-Stack Web & Mobile Developer — Severe Elegance & Architectural Precision",
      copyright: "© 2025 Hadin Nazmi. All Rights Reserved."
    }
  },
  id: {
    navbar: {
      brand: "Hadin",
      subBrand: "Portfolio",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
      switchLangAria: "Ganti Bahasa",
    },
    hero: {
      tracker: "PEKANBARU — INDONESIA",
      headline: "Hi, Saya Hadin Nazmi.",
      subtitle: "Full-Stack Web & Mobile Developer yang memadukan ketegasan arsitektural dengan performa perangkat lunak native ber-throughput tinggi.",
      ctaProjects: "Proyek Saya",
      ctaResume: "Unduh Resume",
      yearsBuilding: "04+",
      yearsLabel: "Tahun Pengalaman",
      productsShipped: "18+",
      productsLabel: "Produk Diluncurkan",
      kmipnWinner: "01st",
      kmipnLabel: "Juara 1 KMIPN VII",
      devIdentity: "IDENTITAS DEV // 001",
      sysStable: "SYS.STABLE",
      openToWork: "TERBUKA UNTUK BEKERJA — Fulltime / Freelance",
      utc: "UTC+7",
    },
    about: {
      tag: "01 / FILOSOFI ARSITEKTUR",
      headlinePrefix: "Berdedikasi ",
      headlineHighlight1: "Merancang Produk Digital Ber-Throughput Tinggi",
      headlineMid: " dan pengalaman terekayasa sebagai ",
      headlineHighlight2: "Spesialis Senior Full-Stack & Native Mobile",
      headlineSuffix: ".",
      manifesto: "Keahlian perangkat lunak sejati hadir di persimpangan antara kekakuan matematis dan intuisi pengguna yang mulus. Saya mengutamakan pemisahan domain yang bersih, sistem UI native deklaratif, microservices berlatensi rendah, dan keanggunan tipografi tanpa kompromi. Setiap milidetik yang dihemat dari render frame dan kueri basis data adalah bentuk penghargaan terhadap manusia di depan terminal.",
      badgePcr: "Politeknik Caltex Riau",
      badgeWinner: "Juara 1 KMIPN 7",
      badgeArch: "Arsitektur Web & Mobile",
      badgeLocation: "Pekanbaru, Indonesia",
    },
    skills: {
      tag: "02 / KEAHLIAN",
      title: "Keahlian & Kapabilitas",
      subtitle: "Sintesis disiplin standar web modern, runtime mobile native, dan backend data terdistribusi yang tangguh.",
      arsenalLabel: "ARSENAL UTAMA",
      card1: {
        title: "Frontend Web",
        desc: "Aplikasi web responsif, aksesibel, dan presisi piksel dengan arsitektur rendering modern, alur kerja SSR/SSG, dan state machine yang ketat.",
        skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vue.js", "Vite"]
      },
      card2: {
        title: "Mobile & Backend",
        desc: "Aplikasi native dan cross-platform berkinerja tinggi yang didukung microservices tangguh, message broker real-time, dan API transaksional.",
        skills: ["Kotlin", "Flutter", "Laravel", "Node.js", "Express", "Jetpack"]
      },
      card3: {
        title: "Database & Cloud",
        desc: "Desain database berskala besar, caching terdistribusi, pipeline deployment CI/CD otomatis, dan provisi infrastruktur zero-downtime.",
        skills: ["Supabase", "PostgreSQL", "Docker", "Redis", "Firebase", "AWS"]
      }
    },
    projects: {
      tag: "03 / KARYA PILIHAN",
      title: "Proyek Unggulan",
      filters: {
        all: "Semua (4)",
        web: "Web",
        mobile: "Mobile",
        ml: "ML",
      },
      liveDemo: "Lihat Demo",
      githubSource: "Sumber GitHub",
      items: [
        {
          id: "bank-jatah",
          index: "INDEX // 001",
          category: "mobile",
          tags: ["Mobile", "Kotlin", "Supabase"],
          icon: "account_balance_wallet",
          runtimeBadge: "FINTECH RUNTIME",
          title: "Bank Jatah Indonesia",
          desc: "Aplikasi perbankan mikro dan tabungan otomatis untuk UMKM lokal dengan keamanan biometrik, sinkronisasi ledger, dan saldo harian otomatis.",
          liveUrl: "https://www.bjindonesia.online/aplikasi",
          githubUrl: "https://github.com/HadinNazmi"
        },
        {
          id: "sigap-ai",
          index: "INDEX // 002",
          category: "ml",
          tags: ["ML", "Next.js", "Python"],
          icon: "warning_amber",
          runtimeBadge: "TELEMETRY PREDICTOR",
          title: "Sigap AI",
          desc: "Platform prediksi bencana cerdas dan peringatan komunitas dengan telemetri geospasial real-time, pengelompokan sensor, dan penentuan rute evakuasi dinamis.",
          liveUrl: "#",
          githubUrl: "https://github.com/HadinNazmi"
        },
        {
          id: "karyariau",
          index: "INDEX // 003",
          category: "web",
          tags: ["Web", "Laravel", "Tailwind"],
          icon: "storefront",
          runtimeBadge: "CREATIVE MARKETPLACE",
          title: "KaryaRiau Portal",
          desc: "Marketplace industri kreatif dan arsip budaya yang menghubungkan pengrajin di seluruh provinsi Riau dengan escrow terdesentralisasi dan pelacakan pengiriman otomatis.",
          liveUrl: "#",
          githubUrl: "https://github.com/HadinNazmi"
        },
        {
          id: "pulsefit",
          index: "INDEX // 004",
          category: "mobile",
          tags: ["Mobile", "Flutter", "Node.js"],
          icon: "fitness_center",
          runtimeBadge: "BIOMETRIC RUNTIME",
          title: "PulseFit Tracker",
          desc: "Aplikasi telemetri latihan cross-platform dan pemantau metrik kesehatan dengan antrean data offline-first, sinkronisasi SQLite, dan analitik SVG terperinci.",
          liveUrl: "#",
          githubUrl: "https://github.com/HadinNazmi"
        }
      ]
    },
    experience: {
      tag: "04 / KARIER & KEPEMIMPINAN",
      title: "Pengalaman",
      subtitle: "Rekam jejak kepemimpinan di berbagai konsorsium riset, inisiatif mahasiswa pengembang, dan portal produksi.",
      entry1: {
        roleTag: "ROLE // RESEARCH & ARCHITECTURE",
        period: "2023 — SEKARANG",
        role: "Ketua Divisi Riset ITSA",
        org: "Informatics Technology Student Association",
        bullets: [
          "Memimpin kelompok riset mahasiswa dalam arsitektur sistem reaktif, cache offline mobile, dan automated test runner.",
          "Mengorganisir dan menjadi pembicara dalam 15+ workshop teknis mendalam tentang Kotlin Android internals dan arsitektur Next.js modern.",
          "Melakukan code review untuk 30+ produk software departemen, memastikan standar kode yang seragam dan pemeriksaan CI yang ketat."
        ],
        tags: ["Bimbingan Rekan", "Review Arsitektur"],
        telemetryTitle: "STATISTIK TELEMETRI",
        stat1Val: "99.8%",
        stat1Label: "Uptime Layanan Departemen",
        stat2Val: "15+",
        stat2Label: "Workshop Diselenggarakan",
        hash: "HASH // 8e91f09c • CERTIFIED ARCHITECTURE LEAD"
      },
      entry2: {
        roleTag: "ROLE // SYSTEM COORDINATOR",
        period: "2022 — 2023",
        role: "Koordinator & Lead Developer UKMI",
        org: "Unit Kegiatan Mahasiswa Islam PCR",
        bullets: [
          "Merancang portal administrasi internal terpusat untuk manajemen arsip organisasi dan pelacakan inventaris digital.",
          "Mengotomasikan check-in peserta dan alur ticketing menggunakan verifikasi QR dan sinkronisasi database PostgreSQL secara realtime."
        ],
        tags: ["Portal Operasional", "Desain Database"],
        principleTitle: "PRINSIP DESAIN",
        quote: "“Keandalan dalam kode bukanlah pemikiran sampingan dari pengujian, melainkan konsekuensi alami dari niat arsitektur yang cermat.”",
        hash: "DISIPLIN SISTEM • INFRASTRUKTUR UTAMA"
      }
    },
    contact: {
      tag: "05 / HUBUNGI SAYA",
      title: "Mari Bekerja Sama.",
      directInquiries: "KONTAK LANGSUNG",
      email: "hadinnazmi21@gmail.com",
      locationZone: "LOKASI & ZONA WAKTU",
      locationValue: "Pekanbaru, Riau, Indonesia — Remote / Hybrid (UTC+7)",
      availability: "STATUS KETERSEDIAAN",
      availabilityValue: "Tersedia untuk kontrak freelance terpilih, konsultasi teknis, dan posisi rekayasa perangkat lunak full-time.",
      networkDirectory: "DIREKTORI JARINGAN",
      networks: [
        { name: "GitHub ↗", href: "https://github.com/HadinNazmi" },
        { name: "LinkedIn ↗", href: "https://linkedin.com/in/hadinnazmi" },
        { name: "Twitter/X ↗", href: "https://twitter.com" },
        { name: "Resume PDF ↗", href: "#" },
      ],
      formName: "NAMA ANDA *",
      formEmail: "EMAIL ANDA *",
      formSubject: "SUBJEK / RUANG LINGKUP PROYEK",
      formMessage: "PESAN *",
      namePlaceholder: "cth. Alex Mercer",
      emailPlaceholder: "cth. alex@studio.io",
      subjectPlaceholder: "cth. Arsitektur Mobile / Pengembangan Aplikasi Web",
      messagePlaceholder: "Jelaskan kebutuhan proyek, target, dan linimasa waktu...",
      submitBtn: "Kirim Pesan",
      sla: "SLA RESPON 24 JAM",
      inSectionCopyright: "© 2025 Hadin Nazmi. Direkayasa dengan presisi.",
      backToTop: "Kembali ke Atas",
      alertSuccess: "Pesan terkirim dengan presisi."
    },
    footer: {
      brand: "Hadin Nazmi",
      tagline: "Full-Stack Web & Mobile Developer — Keanggunan Presisi & Ketegasan Arsitektural",
      copyright: "© 2025 Hadin Nazmi. Seluruh Hak Cipta Dilindungi."
    }
  }
};
