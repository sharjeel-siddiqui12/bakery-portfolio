import type { Product, Testimonial, GalleryImage, NavLink, ContactInfo, CakeType, SizeOption, Occasion, TeamMember, TimelineItem } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Custom Orders', href: '/custom-orders' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export const CONTACT_INFO: ContactInfo = {
  address: 'North Karachi',
  phone: '+92 300 0000000',
  whatsapp: '+92 300 0000000',
  email: 'hello@hinabakers.com',
  hours: {
    weekday: 'Mon–Sat 9am–9pm',
    weekend: 'Sun 10am–6pm',
  },
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4!2d67.09!3d24.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzEyLjAiTiA2N8KwMDUnMjQuMCJF!5e0!3m2!1sen!2spk!4v1234567890',
  social: {
    instagram: 'https://instagram.com/hinabakers',
    facebook: 'https://facebook.com/hinabakers',
  },
}

export const WHATSAPP_URL = 'https://wa.me/923000000000'
export const WHATSAPP_ORDER_URL = 'https://wa.me/923000000000?text=Hi!%20I%27d%20like%20to%20order%20a%20custom%20cake.'

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600',
    headline: 'Where Every Cake Tells a Story',
    sub: 'Handcrafted with love in the heart of Karachi',
    cta: 'Explore Our Menu',
    ctaHref: '/menu',
  },
  {
    image: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=1600',
    headline: 'Baked Fresh. Every Single Day.',
    sub: 'Premium ingredients, timeless recipes, extraordinary results',
    cta: 'Order Custom Cake',
    ctaHref: '/custom-orders',
  },
  {
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1600',
    headline: 'Make Every Celebration Unforgettable',
    sub: 'Custom cakes for weddings, birthdays & every special moment',
    cta: 'Get in Touch',
    ctaHref: '/contact',
  },
  {
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1600',
    headline: 'The Art of Fine Baking',
    sub: 'Over a decade of crafting Karachi\'s most beloved confections',
    cta: 'Our Story',
    ctaHref: '/about',
  },
]

export const MARQUEE_ITEMS = [
  'CUSTOM CAKES',
  'WEDDING CAKES',
  'BIRTHDAY CAKES',
  'PASTRIES',
  'FRESH DAILY',
  "KARACHI'S FINEST",
  'ORDER ON WHATSAPP',
]

export const FEATURED_CATEGORIES = [
  {
    name: 'Wedding Cakes',
    image: 'https://images.unsplash.com/photo-1623428454614-abaf00244e52?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/menu?category=cakes',
  },
  {
    name: 'Birthday Cakes',
    image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/menu?category=cakes',
  },
  {
    name: 'Cupcakes & Pastries',
    image: 'https://images.unsplash.com/photo-1426869884541-df7117556757?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    href: '/menu?category=cupcakes',
  },
  {
    name: 'Custom Creations',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800',
    href: '/custom-orders',
  },
]

export const PRODUCTS: Product[] = [
  {
    id: 'black-forest-cake',
    name: 'Black Forest Cake',
    category: 'cakes',
    price: 1800,
    description: 'Layers of rich chocolate sponge, whipped cream, and cherries in a classic German-inspired masterpiece.',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600',
    badge: 'Bestseller',
  },
  {
    id: 'red-velvet-cake',
    name: 'Red Velvet Cake',
    category: 'cakes',
    price: 1600,
    description: 'Velvety crimson layers with luscious cream cheese frosting — an all-time favourite.',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600',
    badge: 'Bestseller',
  },
  {
    id: 'chocolate-truffle',
    name: 'Chocolate Truffle',
    category: 'cakes',
    price: 2200,
    description: 'Intense Belgian chocolate ganache layered over a moist chocolate sponge — pure indulgence.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600',
    badge: 'Premium',
  },
  {
    id: 'mango-cake',
    name: 'Mango Cake',
    category: 'cakes',
    price: 1800,
    description: 'Fresh seasonal mangoes folded into light cream with soft vanilla sponge layers.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600',
    badge: 'Seasonal',
  },
  {
    id: 'lemon-drizzle',
    name: 'Lemon Drizzle',
    category: 'cakes',
    price: 1400,
    description: 'Tangy lemon glaze over a buttery sponge — bright, zesty, and irresistible.',
    image: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=600',
  },
  {
    id: 'caramel-crunch',
    name: 'Caramel Crunch',
    category: 'cakes',
    price: 2000,
    description: 'Salted caramel drip, caramelised popcorn, and a butterscotch sponge — a decadent treat.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=600',
  },
  {
    id: 'classic-vanilla-cupcake',
    name: 'Classic Vanilla Cupcakes',
    category: 'cupcakes',
    price: 950,
    description: 'Light and fluffy vanilla cupcakes topped with dreamy buttercream swirls. Pack of 6.',
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=600',
    badge: 'Bestseller',
  },
  {
    id: 'chocolate-fudge-cupcake',
    name: 'Chocolate Fudge Cupcakes',
    category: 'cupcakes',
    price: 1050,
    description: 'Rich chocolate cupcakes with a molten fudge centre and chocolate ganache topping. Pack of 6.',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600',
  },
  {
    id: 'strawberry-cupcake',
    name: 'Strawberry Cupcakes',
    category: 'cupcakes',
    price: 1000,
    description: 'Fresh strawberry batter with strawberry cream frosting and real berry pieces. Pack of 6.',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600',
  },
  {
    id: 'redvelvet-cupcake',
    name: 'Red Velvet Cupcakes',
    category: 'cupcakes',
    price: 1050,
    description: 'Miniature red velvet delights with swirled cream cheese frosting. Pack of 6.',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600',
  },
  {
    id: 'fruit-tart',
    name: 'Fruit Tart',
    category: 'pastries',
    price: 850,
    description: 'Buttery shortcrust pastry filled with vanilla custard and crowned with fresh seasonal fruits.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600',
    badge: 'Bestseller',
  },
  {
    id: 'cheesecake-slice',
    name: 'Cheesecake Slice',
    category: 'pastries',
    price: 650,
    description: 'Creamy New York-style cheesecake on a biscuit crust with berry compote drizzle.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600',
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    category: 'pastries',
    price: 750,
    description: 'Espresso-soaked ladyfingers layered with mascarpone cream — the Italian classic.',
    image: 'https://images.unsplash.com/photo-1487869012925-e04a8c44e7f4?w=600',
  },
  {
    id: 'eclair',
    name: 'Chocolate Eclair',
    category: 'pastries',
    price: 600,
    description: 'Choux pastry filled with vanilla cream and glazed with rich dark chocolate.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600',
  },
]

export const BESTSELLER_IDS = [
  'black-forest-cake',
  'red-velvet-cake',
  'chocolate-truffle',
  'fruit-tart',
  'classic-vanilla-cupcake',
  'cheesecake-slice',
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sana Malik',
    location: 'Gulshan-e-Iqbal, Karachi',
    occasion: 'Wedding Cake',
    text: 'Hina Bakers created the most stunning 4-tiered cake for our wedding. Every guest was asking where we ordered from. The taste was absolutely divine!',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    id: '2',
    name: 'Ahmed Raza',
    location: 'DHA, Karachi',
    occasion: 'Birthday Cake',
    text: "Ordered a custom 3D car cake for my son's birthday. The detail was incredible — looked exactly like the photo I sent. Will definitely order again!",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    id: '3',
    name: 'Fatima Khan',
    location: 'Clifton, Karachi',
    occasion: 'Anniversary',
    text: 'The red velvet cake was moist, rich, and absolutely perfect. Hina Bakers has become our go-to for every family celebration.',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
  {
    id: '4',
    name: 'Bilal Sheikh',
    location: 'North Nazimabad, Karachi',
    occasion: 'Engagement',
    text: "We ordered a 3-tier gold and white engagement cake and it was absolutely breathtaking. Hina Bakers exceeded every expectation we had.",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  },
  {
    id: '5',
    name: 'Ayesha Siddiqui',
    location: 'PECHS, Karachi',
    occasion: 'Baby Shower',
    text: "The cutest baby shower cake I've ever seen! Hina Bakers made a teddy-bear themed fondant cake that everyone adored. Tasted even better than it looked.",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
  },
  {
    id: '6',
    name: 'Hasan Ali',
    location: 'Gulistan-e-Johar, Karachi',
    occasion: 'Birthday Cake',
    text: "Best chocolate truffle cake in all of Karachi — my family has ordered from Hina Bakers at least 10 times. Consistency is their superpower.",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    id: '7',
    name: 'Mariam Hussain',
    location: 'Bahadurabad, Karachi',
    occasion: 'Corporate Event',
    text: "We ordered 200 cupcakes for our company's annual dinner. Perfect presentation, individually boxed, and the flavour variety was outstanding. True professionals!",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
  },
  {
    id: '8',
    name: 'Usman Tariq',
    location: 'Shahrah-e-Faisal, Karachi',
    occasion: 'Wedding Cake',
    text: "The 5-tier floral wedding cake from Hina Bakers was the highlight of our reception. Fresh flowers, perfect fondant work, and an unforgettable taste.",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
  },
  {
    id: '9',
    name: 'Nadia Perveen',
    location: 'FB Area, Karachi',
    occasion: 'Birthday Cake',
    text: "Ordered a rainbow drip cake for my daughter's 5th birthday. She was SO happy! The colours were vibrant and the cake was incredibly moist. Thank you Hina Bakers!",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
  },
  {
    id: '10',
    name: 'Kamran Javed',
    location: 'Defence Phase 6, Karachi',
    occasion: 'Anniversary',
    text: "My wife loved the surprise personalised cake — they even recreated our wedding photo in edible print! Amazing attention to detail and swift delivery.",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100',
  },
  {
    id: '11',
    name: 'Zara Ahmed',
    location: 'Tariq Road, Karachi',
    occasion: 'Graduation',
    text: "The graduation cap cake Hina Bakers made was perfect down to the last detail. My son was thrilled! Great flavour and excellent presentation.",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100',
  },
  {
    id: '12',
    name: 'Rizwan Qureshi',
    location: 'Malir, Karachi',
    occasion: 'Wedding Cake',
    text: "As a wedding planner, I recommend Hina Bakers to all my clients. Professional, punctual, and their cakes are always show-stopping centrepieces.",
    stars: 5,
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100',
  },
]

// Pinterest-style heights: 'sm' ~220px, 'md' ~280px, 'lg' ~360px, 'xl' ~420px
export type PinHeight = 'sm' | 'md' | 'lg' | 'xl'

export const GALLERY_IMAGES: (GalleryImage & { pinHeight: PinHeight })[] = [
  { id: 'g1', src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800', alt: 'Chocolate cake with berries', category: 'birthday', width: 800, height: 600, pinHeight: 'md' },
  { id: 'g2', src: 'https://plus.unsplash.com/premium_photo-1663839331134-0e77119839ab?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Elegant white wedding cake', category: 'wedding', width: 800, height: 1200, pinHeight: 'xl' },
  { id: 'g3', src: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=800', alt: 'Red velvet cake', category: 'birthday', width: 800, height: 530, pinHeight: 'sm' },
  { id: 'g4', src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800', alt: 'Birthday celebration cake', category: 'birthday', width: 800, height: 900, pinHeight: 'lg' },
  { id: 'g5', src: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=800', alt: 'Creative custom cake', category: 'events', width: 800, height: 600, pinHeight: 'md' },
  { id: 'g6', src: 'https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=800', alt: 'Assorted pastries', category: 'pastries', width: 800, height: 1100, pinHeight: 'xl' },
  { id: 'g7', src: 'https://images.unsplash.com/photo-1698688334089-c68105801d02?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Tiramisu dessert', category: 'pastries', width: 800, height: 530, pinHeight: 'sm' },
  { id: 'g8', src: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=800', alt: 'Decorated cupcakes', category: 'cupcakes', width: 800, height: 800, pinHeight: 'lg' },
  { id: 'g9', src: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800', alt: 'Caramel drip cake', category: 'birthday', width: 800, height: 600, pinHeight: 'md' },
  { id: 'g10', src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800', alt: 'Fruit tart', category: 'pastries', width: 800, height: 1200, pinHeight: 'xl' },
  { id: 'g11', src: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800', alt: 'Cheesecake', category: 'pastries', width: 800, height: 530, pinHeight: 'sm' },
  { id: 'g12', src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800', alt: 'Baker decorating cake', category: 'events', width: 800, height: 900, pinHeight: 'lg' },
  { id: 'g13', src: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800', alt: 'Black forest cake', category: 'birthday', width: 800, height: 600, pinHeight: 'md' },
  { id: 'g14', src: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=800', alt: 'Lemon cake', category: 'events', width: 800, height: 1100, pinHeight: 'xl' },
  { id: 'g15', src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800', alt: 'Mango cake', category: 'birthday', width: 800, height: 800, pinHeight: 'lg' },
  { id: 'g16', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Colourful birthday cake', category: 'birthday', width: 800, height: 530, pinHeight: 'sm' },
  { id: 'g17', src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80', alt: 'Chocolate ganache cake', category: 'wedding', width: 800, height: 900, pinHeight: 'lg' },
  { id: 'g18', src: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800', alt: 'Chocolate cupcakes', category: 'cupcakes', width: 800, height: 600, pinHeight: 'md' },
  { id: 'g19', src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800', alt: 'Baking process', category: 'events', width: 800, height: 1200, pinHeight: 'xl' },
  { id: 'g20', src: 'https://plus.unsplash.com/premium_photo-1667098217445-f7f9f913c615?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Tiered wedding cake', category: 'wedding', width: 800, height: 530, pinHeight: 'sm' },
]

export const CAKE_TYPES: CakeType[] = [
  { value: 'tiered', label: 'Tiered Cake (2, 3, 4 tier options)' },
  { value: 'sheet', label: 'Sheet Cake' },
  { value: 'cupcake-tower', label: 'Cupcake Tower' },
  { value: 'drip', label: 'Drip Cake' },
  { value: 'fondant', label: 'Fondant Cake' },
  { value: 'semi-naked', label: 'Semi-Naked / Rustic Cake' },
  { value: 'cheesecake', label: 'Cheesecake' },
  { value: 'custom-shape', label: 'Custom Shape' },
]

export const SIZE_OPTIONS: SizeOption[] = [
  { value: 'small', label: 'Small', serves: '6–8', basePrice: 'PKR 1,200+' },
  { value: 'medium', label: 'Medium', serves: '10–15', basePrice: 'PKR 1,800+' },
  { value: 'large', label: 'Large', serves: '20–30', basePrice: 'PKR 2,800+' },
  { value: 'xl', label: 'Extra Large', serves: '30+', basePrice: 'PKR 4,000+' },
]

export const OCCASIONS: Occasion[] = [
  { value: 'birthday', label: 'Birthday' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'engagement', label: 'Engagement' },
  { value: 'baby-shower', label: 'Baby Shower' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'graduation', label: 'Graduation' },
  { value: 'other', label: 'Other' },
]

export const FLAVOURS = [
  'Chocolate',
  'Vanilla',
  'Red Velvet',
  'Mango',
  'Lemon',
  'Carrot',
  'Marble',
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'lorem ipsum',
    role: 'Founder & Head Baker',
    bio: 'With over 14 years of baking experience, she founded the bakery with a vision to bring world-class confections to Karachi.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
  },
  {
    name: 'lorem ipsum',
    role: 'Lead Cake Artist',
    bio: 'Sara specializes in fondant artistry and custom cake design, turning every client\'s vision into edible art.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
  {
    name: 'lorem ipsum',
    role: 'Delivery & Operations Manager',
    bio: 'He ensures every cake reaches its destination in perfect condition with our specialized delivery system.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
]

export const TIMELINE: TimelineItem[] = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Hina Bakers started as a small home-based bakery with a single oven and a dream to bake the perfect cake.',
  },
  {
    year: '2013',
    title: 'First Shop',
    description: 'We opened our first retail shop in North Karachi, bringing our cakes closer to our growing customer base.',
  },
  {
    year: '2016',
    title: 'Wedding Specialist',
    description: 'Became one of Karachi\'s most sought-after wedding cake specialists, creating over 100 wedding cakes per year.',
  },
  {
    year: '2019',
    title: 'Kitchen Expansion',
    description: 'Expanded our kitchen facility to include a dedicated pastry wing and state-of-the-art equipment.',
  },
  {
    year: '2022',
    title: 'Digital Presence',
    description: 'Launched our online ordering system and WhatsApp ordering, making our cakes accessible to all of Karachi.',
  },
  {
    year: '2024',
    title: '10,000 Happy Customers',
    description: 'Reached the milestone of 10,000 satisfied customers and a 4.9-star rating across all platforms.',
  },
]

export const ABOUT_STATS = [
  { value: '500+', label: 'Custom Cakes' },
  { value: '10,000+', label: 'Happy Customers' },
  { value: '14+', label: 'Years of Excellence' },
]

export const WHY_CHOOSE_US = [
  {
    icon: 'Cake',
    title: 'Premium Ingredients',
    description: 'We source only the finest Belgian chocolate, fresh dairy, and real fruit for every creation.',
  },
  {
    icon: 'Hand',
    title: 'Handcrafted Daily',
    description: 'Every cake is made to order. No freezer shortcuts. Freshness is our promise.',
  },
  {
    icon: 'Palette',
    title: 'Custom Designs',
    description: 'Bring any vision to life. Our artists craft cakes as unique as your celebration.',
  },
  {
    icon: 'Package',
    title: 'Safe Delivery',
    description: 'Specialized packaging and trained delivery ensure your cake arrives picture-perfect.',
  },
]

export const MENU_CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'cakes', label: 'Cakes' },
  { value: 'cupcakes', label: 'Cupcakes' },
  { value: 'pastries', label: 'Pastries' },
]

export const GALLERY_CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'cupcakes', label: 'Cupcakes' },
  { value: 'pastries', label: 'Pastries' },
  { value: 'events', label: 'Events' },
]
