import { Community, MarketplaceCategory, EventItem, JobItem, ForumPost } from '../types';

export const HERO_BG_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV8LmszFdXe3ON1ifNl6CCed-wRXOWFsbZyMesP0A7M15MIOrqB6JkomwpDHqz7Zm-iTNqbnwBGpXax5EuG6Wj9bws-5YjzuDiniQ5baa0Tfvb39szKgs14cFCd5RCHkVQJfFaWrDGzG876kuO1JQ9KcGb6UA0W-_jOCQKVbQ59v-MFg5p2KzMqvaoQBk2HdYGEmmFxFd9NphBmM4IxKsvzMtDsGRhddYdo5g3xTUym1c16ysoxQoG';

export const CULTURAL_GAP_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaJ4QUX12izv4pC3C8djWEnJZznmR4JMpqqWA1YvinxBqMVBA0QeDuskvNaqy0tL39fJhz-VG7ZKwc0CgtLF0g0RVL2UsDqgVWCAS5_DugT0vdVBnYmi3S52PkH0WqlzMNIcweuzAX1l2KBuhraVUo088mJ8x6WGftdZYMlIIJkL25E-EiHG2--HS-fr5Q1n14xBJ3wdB_bq2WrGM5j88f0UgICZB7xgl2vdRLhMPp1b_qcTbuslKI';

export const PAKISTAN_LEADER_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYpnlEZjPniyBApvZZ4TMZ7yc9ybDljI1daskXj_dujj-z0PsPf8XzvAXth6jM2cSrVWLrKZpG-kWFfcv33XEp7PlVh27MqfYMIrVb-6241WsegGvRvCLvzOo7aOB3zSLkfSPd8DWpSoGfP4pxTMeBTEICnra2KsS2-FaUssVD10150zz0Ag9sRe_sLZHAZEEuunGBTidtH_d3VqYTgVjIgLxoVThTifWvVQxStqI_xdiDZAxwdwH9';

export const EVENT_BANNER_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy9bqejWpzy-uWdcIV5OPJ9r-3aKN9dAPXUtOCvvf4PVynhhhiRQOWd2s4IBANp9t81oluKY4VhInCrmKMzuP5BzmnBWWL-7dedzvjZeYfPPqRPQVemDeYWZyTHoVy-b81HYezj0abb2LOeDwRgQcaObPtY4K_cnxYcQ3Os4NXQBHCbqpe_gIkaTPpaPMT3-xqLqWGxQKJB9zwgHmfBY-wTBNOgzfdO_6fOUAmdF_Vxl_zd-9XWHh-';

export const COMMUNITIES: Community[] = [
  {
    id: 'pakistan',
    name: 'Pakistan',
    activeMembers: '4.2k active members',
    flagUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2M6tfmy9Ky7WIrteJUibFFWXuVcjZH81Lmuyn3rJew_qzNQ1PrjLlCadHAjde60pPJg8U1qWOC9jXR1Uuc3JmwaZKmj4vhNilAzgP3r4BDGL79YNeW7G55l_BUby1XJulblhVe84ucrOMJmeI1uBXP8KXhrDgfyVQOpJ1jV-SbNbSNJg1u8N-0WHS24eLzoIeY8BfXmGAoW8MHurGR_ghKBik4NYAlvmlK_JzNl9aY5ftx2xHwK6P',
    greeting: 'Assalam-u-Alaikum, Ahmed',
    leaderName: 'Ahmed Malik',
    leaderAvatar: PAKISTAN_LEADER_AVATAR,
    description: 'Discover the essence of home. Your one-stop destination for authentic Pakistani services, from traditional Nihari to heritage craftsmanship and community festivals.'
  },
  {
    id: 'india',
    name: 'India',
    activeMembers: '5.8k active members',
    flagUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyB_-094qLqZOm_OmNwgMwrmvGR8Vhh0u3LH-PwOQSMAmYKMBMJt0H9dScZmGiQY0d2QKRJO1zcwqLnVSGKA7OjggGS_faToiAHADpqTBg7eSvwbgxLGeFH4HChGZ8rxG9hPQKUuo1zyoX6pmcwlfVYN6q3XX0A9fSx3QWbszValsHY0DOEI9Lr-a_uLPhCBZUSGEUfF2SOdTDPeWEX5R2ZRsTNJj_4AiuZd6OzFMgvf5EtLlM22cF',
    greeting: 'Namaste, Priya',
    leaderName: 'Priya Sharma',
    leaderAvatar: PAKISTAN_LEADER_AVATAR,
    description: 'Explore handloom silk sarees, brass handicrafts, authentic curry spices, and classical cultural performances directly from Indian artisans.'
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    activeMembers: '3.1k active members',
    flagUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArhyL1DojcMRR5s-vnjf69YH8RJeIlHv_NPKr1Xq0cmWBzVSwY0CvFWvwaudt9IT2klZweDrTX6N2CZqIOwKtS-JExvtXpOTK_DgxMAVIufR6ddXOTEMdXsmCSoZ2_3K2YrYFhbKpoPjHrPQx29ciA9HJ22UMgD94__ALLUjBKZnxsfkiCaGHrHLqOfwL8mpJxoX0v--5i6jAPncYECcEhmKdPvNhGK8dy25r_o5jXxH4xMtQjE5SF',
    greeting: 'Sannu, Tayo',
    leaderName: 'Tayo Adebayo',
    leaderAvatar: PAKISTAN_LEADER_AVATAR,
    description: 'Vibrant Ankara fabrics, traditional Jollof spices, handcrafted beadwork, and Afrobeats community gatherings.'
  },
  {
    id: 'turkey',
    name: 'Turkey',
    activeMembers: '2.9k active members',
    flagUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe5WPhNM2ZRMocj7wP8YkoFgFc861CDYcsvX093NRfpqlfePvqZrMm903Rs_ZiHi-O9yXbOcIK1DYjhgB79eFaEoThY3ncYFEZgT0A8oBWo32seB1_-lWmsDOOvXz1E8dCJfAWAGDJVNuoDI862zU48oK1d6p6xzC0w6ZB40Rx76l-SgPueMtV6SkkCZy7RpOqHxUo8RbSOQQ81CHli2Oy_-c25j9dAF_u8AYJAgCYMlFaljTMdy47',
    greeting: 'Merhaba, Selin',
    leaderName: 'Selin Yilmaz',
    leaderAvatar: PAKISTAN_LEADER_AVATAR,
    description: 'Grand Bazaar ceramics, Ottoman mosaic lanterns, Turkish tea sets, and artisanal baklava delivered directly.'
  },
  {
    id: 'egypt',
    name: 'Egypt',
    activeMembers: '1.7k active members',
    flagUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmU_ihRzNHzxYinHNMSWeggMgfkwzxSeuszEQ_rHaYexh1qOvcf9Gb8RlLJpoOuDidxss4n0Xpddq782e4L8xgWKP1W9ziwL5e0Zkm4CG-bp2_JfZDBx6hynb4kgyARaGBujL6x1Uc3Xt5ttAVZGPRCbzZrSMTqvc11xLsuXih1h04nId_BnAHeNB9umhNj5BrW1R-TwuW5xi2x4qhPE0o50ICWDJ7zYbQuLccOc0SA2M4RJwBSNno',
    greeting: 'Ahlan, Omar',
    leaderName: 'Omar Hassan',
    leaderAvatar: PAKISTAN_LEADER_AVATAR,
    description: 'Authentic Egyptian cotton linens, Khan el-Khalili brass work, natural papyrus art, and traditional spices.'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    activeMembers: '4.4k active members',
    flagUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBadtecLOA7-I9ywRZXWpR-iRzZDtr-fkkxuhIA6US1dcLjrAtQuuYqBRLfy9rbFnsGM47Q7TrFP4iYU6Z8WI2pnvJbU32SZEwZ50OqsjaZboPaQTZMMwKGcPmZwmhHb7PXGE43QfoWn8XVMtCGSXsM0-0TBywN1eRg7JaSCkNBq8aTr7ngKwS5Rk2GK0if7QoGN6hhrfoRMCtf_1tn4dN4VqKS6OBs1BkyQS-51yRtt4SW-APTOR_d',
    greeting: 'Hola, Mateo',
    leaderName: 'Mateo Hernandez',
    leaderAvatar: PAKISTAN_LEADER_AVATAR,
    description: 'Hand-embroidered Huipils, Talavera ceramics, artisanal mezcal accessories, and authentic Mexican pantry staples.'
  },
  {
    id: 'philippines',
    name: 'Philippines',
    activeMembers: '3.6k active members',
    flagUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCMRX_5TSRSjc1HEXXiisU23g0irefmvJvjpVQAK-QfHt2vfY7HDkJ7ZlEpHArCd0MAKoJmh_5O79vwHdcD5WAV39dweXr9yRRjFSaTva_qk5yB-LJLVf1Gi5TzvZe3Bfkv3ZmYqR9jqD9bV68Z5GpELiGQz9pAOgIqYV3evmUOYIbDAus-92uqrQNpPHGkOUqUn7XJJuytxfCWfN_YERLyji4KcYYoZ6P19e330_IHW_s1uAlfcMT',
    greeting: 'Mabuhay, Maria',
    leaderName: 'Maria Santos',
    leaderAvatar: PAKISTAN_LEADER_AVATAR,
    description: 'Handwoven Inabel textiles, Capiz shell home decor, artisanal coconut sweets, and traditional Filipino heritage products.'
  },
  {
    id: 'global',
    name: 'Global Hub',
    activeMembers: 'All communities',
    flagUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV8LmszFdXe3ON1ifNl6CCed-wRXOWFsbZyMesP0A7M15MIOrqB6JkomwpDHqz7Zm-iTNqbnwBGpXax5EuG6Wj9bws-5YjzuDiniQ5baa0Tfvb39szKgs14cFCd5RCHkVQJfFaWrDGzG876kuO1JQ9KcGb6UA0W-_jOCQKVbQ59v-MFg5p2KzMqvaoQBk2HdYGEmmFxFd9NphBmM4IxKsvzMtDsGRhddYdo5g3xTUym1c16ysoxQoG',
    greeting: 'Welcome, World Citizen',
    leaderName: 'Ethno Mart Global',
    leaderAvatar: PAKISTAN_LEADER_AVATAR,
    description: 'Explore unique heritage artifacts, fair-trade textiles, rare spices, and cultural masterclasses from artisans worldwide.'
  }
];

export const MARKETPLACE_CATEGORIES: MarketplaceCategory[] = [
  {
    id: 'fashion',
    title: 'Global Fashion',
    subtitle: 'Artisanal kimonos, Ankara prints & embroidered huipils',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwz35BpKMTjNUZDUcuONy5qPHcU3e-tnmG0Sv-pDRlPLtiejjuRIlvf6_DEA2eO42UVRLLb7zUBwxHp9Ue0PDGUMwsJ9Kee2oGtWFsKEQ2SCCU1fusluSaz0QKC8aXHu3ScPzzgDmJVJnD2p-wdLC6IXToYIu2UGY_h7araxx9fEH_rpyd8akqLxCNCJQIh6s2FToIXovQm-HR2g9c7QNzOQEmpqaBdgGef-VhMq5dN9IIyiwBtp-G',
    productsCount: 12,
    items: [
      {
        id: 'f1',
        name: 'Hand-Embroidered Pashmina Shawl',
        category: 'Fashion',
        price: 85,
        origin: 'Kashmir, Pakistan',
        rating: 4.9,
        imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=600&q=80',
        description: 'Authentic 100% fine Kashmiri wool hand-embroidered with traditional Sozni needlework by master artisans.',
        artisanName: 'Gulzar Kashmir Weavers'
      },
      {
        id: 'f2',
        name: 'Royal Zardozi Velvet Kurta Set',
        category: 'Fashion',
        price: 120,
        origin: 'Lahore, Pakistan',
        rating: 4.8,
        imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
        description: 'Exquisite maroon velvet ensemble embellished with metallic gold zardozi threadwork and floral motifs.',
        artisanName: 'Anarkali Heritage Atelier'
      },
      {
        id: 'f3',
        name: 'Traditional Ajrak Block-Printed Scarf',
        category: 'Fashion',
        price: 38,
        origin: 'Sindh, Pakistan',
        rating: 4.9,
        imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=600&q=80',
        description: 'Naturally dyed organic cotton scarf printed using hand-carved wooden block stamps with ancient geometric designs.',
        artisanName: 'Bhit Shah Artisan Co-op'
      }
    ]
  },
  {
    id: 'kitchen',
    title: 'World Kitchen',
    subtitle: 'Handmade pasta, fresh sushi & authentic street tacos',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAeBdAlmrJzBPXNY4MYsiozYcPzXNwMvTT1aUl0fmWJnYVbt9G5aalIot6hehJHLzNwZQH71qzb0prYqUhUJ0mcHu8QNQg2RzkOB61JvCb-Nzm-awoEY0wZF7GpM0JWQm1SbaGpbq4deFbouDtf9hELxskJHBM5Q7wyffGTOutNbx2Eri_GAVQOu76R_zLcJakpmQeW00IGhk3GClhicDstBsNA64bgKwuNN2TebF85Ku1fBfgZnqY',
    productsCount: 18,
    items: [
      {
        id: 'k1',
        name: 'Specialty Lahori Nihari & Spice Kit',
        category: 'Kitchen',
        price: 24,
        origin: 'Lahore, Pakistan',
        rating: 5.0,
        imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80',
        description: 'Slow-cooked aromatic stew blend with stone-ground mace, nutmeg, star anise, and toasted gram flour.',
        artisanName: 'Gawalmandi Spice Guild'
      },
      {
        id: 'k2',
        name: 'Handcrafted Copper Hammered Karahi',
        category: 'Kitchen',
        price: 65,
        origin: 'Peshawar, Pakistan',
        rating: 4.9,
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
        description: 'Pure solid copper cooking vessel lined with food-safe tin, individually hammered by Peshawar metal coppersmiths.',
        artisanName: 'Qissa Khwani Metals'
      }
    ]
  },
  {
    id: 'pantry',
    title: 'Epicurean Pantry',
    subtitle: 'Mediterranean oils, Japanese matcha & French cheeses',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk4NLSpxRDrhIJUh-sADyIzuD8A7y5OVDpVZ-ZUOyox0n5xhrUIHw5g0o3LyqPXokkjjGDcFPHTlDFD3E3IBo_KiwkFcFzrEUQInF2FMDk36XTTgcoqPCBs5dw9YQrhK7I2l89s-NyiiCLqoSHyWttiNmKAGkTZOwmdCVzyaRT-PB3w7Jgb181jazC1H7k0YQbGZtHIwR8Cu9JZ3-H2DivCaVYr3ekZC_onlKlD7nqCHStmgOQSr87',
    productsCount: 24,
    items: [
      {
        id: 'p1',
        name: 'Aged Super Kernel Basmati Rice (5kg)',
        category: 'Pantry',
        price: 28,
        origin: 'Punjab, Pakistan',
        rating: 4.9,
        imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
        description: 'Extra-long grain aromatic rice aged 2 years for optimal fluffiness and nutty fragrance.',
        artisanName: 'Chenab Valley Farms'
      },
      {
        id: 'p2',
        name: 'Himalayan Pink Rock Salt Grinder & Mortar',
        category: 'Pantry',
        price: 32,
        origin: 'Khewra, Pakistan',
        rating: 4.8,
        imageUrl: 'https://images.unsplash.com/photo-1518110165400-1483dd590361?auto=format&fit=crop&w=600&q=80',
        description: 'Hand-carved solid pink salt mortar pestle set along with 100% natural mineral salt crystals.',
        artisanName: 'Khewra Salt Artisans'
      }
    ]
  }
];

export const PAKISTAN_EVENTS: EventItem[] = [
  {
    id: 'e1',
    title: 'Grand Basant Mela 2026',
    month: 'Oct',
    day: '24',
    location: 'Central Community Park',
    price: 15,
    category: 'Festival',
    description: 'Celebrate the spring kite festival with live dhol beats, traditional yellow attire, street food stalls, and kite flying competitions.',
    imageUrl: EVENT_BANNER_IMAGE
  },
  {
    id: 'e2',
    title: 'Mystic Qawwali Night',
    month: 'Nov',
    day: '05',
    location: 'Heritage Hall',
    price: 35,
    category: 'Music & Culture',
    description: 'An enchanting evening of classical Sufi poetry and soul-stirring vocal harmonies by world-renowned Qawwals.',
    imageUrl: EVENT_BANNER_IMAGE
  },
  {
    id: 'e3',
    title: 'Truck Art Workshop & Exhibition',
    month: 'Dec',
    day: '12',
    location: 'Artisan Cultural Center',
    price: 20,
    category: 'Workshop',
    description: 'Learn the vibrant calligraphy and floral enamel art of Pakistani truck painters with custom canvas keepsakes.',
    imageUrl: EVENT_BANNER_IMAGE
  }
];

export const SDG_GOALS = [
  {
    number: 8,
    title: 'Goal 8: Decent Work',
    color: '#A21942',
    icon: 'trending_up',
    tooltip: 'Promoting sustainable economic growth & fair artisan wages'
  },
  {
    number: 9,
    title: 'Goal 9: Innovation',
    color: '#FD6925',
    icon: 'factory',
    tooltip: 'Resilient digital infrastructure for heritage craftspeople'
  },
  {
    number: 10,
    title: 'Goal 10: Reduced Inequalities',
    color: '#DD1367',
    icon: 'equalizer',
    tooltip: 'Empowering marginalized rural producers & women artisans'
  },
  {
    number: 11,
    title: 'Goal 11: Sustainable Cities',
    color: '#FD9D24',
    icon: 'location_city',
    tooltip: 'Protecting and safeguarding the world cultural heritage'
  },
  {
    number: 12,
    title: 'Goal 12: Responsible Consumption',
    color: '#BF8B2E',
    icon: '4k',
    tooltip: 'Encouraging sustainable, ethical, and eco-friendly trade'
  }
];

export const FORUM_POSTS: ForumPost[] = [
  {
    id: 'fp1',
    title: 'Preserving Sindh Ajrak Dyeing: Traditional Indigo techniques vs modern synthetic shortcuts',
    author: 'Zainab Bibi',
    community: 'Pakistan',
    timeAgo: '2 hours ago',
    replies: 28,
    likes: 142,
    tag: 'Crafts & Heritage'
  },
  {
    id: 'fp2',
    title: 'Recipe Exchange: Secret ingredients for authentic slow-cooked Nihari gravy',
    author: 'Chef Farhan',
    community: 'Pakistan',
    timeAgo: '5 hours ago',
    replies: 45,
    likes: 210,
    tag: 'Culinary Traditions'
  },
  {
    id: 'fp3',
    title: 'How diaspora families pass native languages to the next generation',
    author: 'Dr. Tariq Ahmad',
    community: 'Global',
    timeAgo: '1 day ago',
    replies: 89,
    likes: 350,
    tag: 'Community Life'
  }
];

export const JOBS_LIST: JobItem[] = [
  {
    id: 'j1',
    title: 'Master Embroidery Crafts Specialist',
    community: 'Pakistan Hub',
    location: 'Remote / Lahore Studio',
    type: 'Full-time',
    stipend: '$3,500 - $4,800 / mo',
    description: 'Crate and curate hand-stitched zardozi and gota work patterns for international fashion distribution.'
  },
  {
    id: 'j2',
    title: 'Cultural Heritage Logistics Manager',
    community: 'Ethno Mart Global',
    location: 'Central Distribution Center',
    type: 'Full-time',
    stipend: '$4,200 - $5,500 / mo',
    description: 'Oversee authentic artisan verification and temperature-controlled spice & food shipments.'
  },
  {
    id: 'j3',
    title: 'Community Storyteller & Content Lead',
    community: 'Global Hub',
    location: 'Hybrid',
    type: 'Part-time',
    stipend: '$2,200 / mo',
    description: 'Document and publish video spotlights highlighting rural village artisans and their generational crafts.'
  }
];
