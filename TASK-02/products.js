
// --- Master Data Source ---

window.admins = [
    {
        id: 'admin_1',
        name: 'Karthika Nadar',
        email: 'karthika@knmotors.com',
        businessName: 'KN Motors',
        type: 'seller',
        address: '12, G.G Road, Thane',
        password: 'admin123',
        showrooms: ['sr_1', 'sr_2', 'sr_3']
    },
    {
        id: 'admin_2',
        name: 'Swayam Rao',
        email: 'swayam@urbanwheels.com',
        businessName: 'Urban Wheels',
        type: 'seller',
        address: '45/B, Indiranagar 100ft Road, Bangalore',
        password: 'admin123',
        showrooms: ['sr_4', 'sr_5']
    },
    {
        id: 'admin_3',
        name: 'Ratan Patil',
        email: 'ratan@ratanmotors.com',
        businessName: 'Ratan Motors ',
        type: 'seller',
        address: '45/B, Taj Nagar, Delhi',
        password: 'admin123',
        showrooms: ['sr_6']
    }

];

window.showrooms = [
    {
        id: 'sr_1',
        adminId: 'admin_1',
        name: 'KN Motors Thane',
        location: 'Thane, Maharashtra',
        salesCount: 145,
        licenseId: 'GSTIN27AABCP5678'
    },
    {
        id: 'sr_2',
        adminId: 'admin_1',
        name: 'KN Motors Thane',
        location: 'Thane, Maharashtra',
        salesCount: 89,
        licenseId: 'GSTIN27AABCP5678'
    },
    {
        id: 'sr_3',
        adminId: 'admin_1',
        name: 'KN Motors Thane',
        location: 'Thane, Maharashtra',
        salesCount: 59,
        licenseId: 'GSTIN27AABCP5678'
    },
    {
        id: 'sr_4',
        adminId: 'admin_2',
        name: 'Urban Rides Bangalore',
        location: 'Indiranagar, Bangalore',
        salesCount: 257,
        licenseId: 'GSTIN29AABCU9012'
    },
    {
        id: 'sr_5',
        adminId: 'admin_2',
        name: 'Urban Rides Bangalore',
        location: 'Indiranagar, Bangalore',
        salesCount: 79,
        licenseId: 'GSTIN29AABCU9012'
    },
    {
        id: 'sr_6',
        adminId: 'admin_3',
        name: 'Ratan Motors Delhi',
        location: 'South Delhi, Delhi',
        salesCount: 132,
        licenseId: 'GSTIN29AABCU9912'
    }
];

window.products = [
    // --- Cars ---
    {
        id: 'c_lux_1',
        name: 'Lamborghini Huracan Evo',
        brand: 'Lamborghini',
        category: 'cars',
        price: 40000000,
        image: 'https://cdn.motor1.com/images/mgl/JYbWM/s3/lamborghini-huracan-evo-feature.jpg',
        description: 'The evolution of the V10. Pure emotion, aerodynamic efficiency.',
        fuel: 'Petrol',
        transmission: 'Automatic/7-speed DCT',
        specs: { engine: '5.2L(5204cc) V10', power: '630 BHP', braking: 'ABS, high-performance discs' },
        showroomId: 'sr_2',
        features: { autopilot: false, sunroof: false }
    },
    {
        id: 'c_lux_2',
        name: 'BMW M4 Competition',
        brand: 'BMW',
        category: 'cars',
        price: 15000000,
        image: 'https://vehicle-images.dealerinspire.com/ba35-110006811/WBS33HK03SCT89369/1c6fa8e4cb2531732183f3d29a5f8b39.jpg',
        description: 'High-performance sports coupe combining aggressive styling, chassis tuning, and everyday usability.',
        fuel: 'Petrol',
        transmission: 'Automatic/8-speed',
        showroomId: 'sr_1',
        specs: { engine: '3.0L(2993cc) inline-6 turbo', power: '493 HP', braking: 'Sports brakes + ABS + DSC' },
        features: { autopilot: true, sunroof: true }
    },
    {
        id: 'c_aff_1',
        name: 'TATA Harrier EV',
        brand: 'TATA Motors',
        category: 'cars',
        price: 3000000,
        image: 'https://www.indiacarnews.com/wp-content/uploads/2025/04/Tata-Harrier-EV-Details.webp',
        description: 'Full-size electric SUV with family-friendly space and features.',
        fuel: 'Electric',
        transmission: 'EV single speed',
        showroomId: 'sr_4',
        specs: { battery: '75 kWh', power: '390 bhp(290kW) AWD', braking: 'AEBS' },
        features: { autopilot: true, sunroof: true }
    },


    // --- Bikes ---
    {
        id: 'p6',
        name: 'Ducati Panigale V4 R',
        brand: 'Ducati',
        category: 'bikes',
        price: 8500000,
        image: 'https://www.blessthisstuff.com/imagens/listagem/2025/grande/grande_2026-ducati-panigale-v4-r.jpg',
        description: 'Track-focused superbike with cutting-edge aerodynamics, electronics and blistering performance',
        fuel: 'Petrol',
        transmission: '6-speedManual',
        showroomId: 'sr_6',
        specs: { engine: '998 cc V4', power: '221 BHP', braking: 'Brembo Stylema(Dual ABS)' },

    },
    {
        id: 'p7',
        name: 'Kawasaki Ninja H2',
        brand: 'Kawasaki',
        category: 'bikes',
        price: 3500000,
        image: 'https://s1.cdn.autoevolution.com/images/news/gallery/163-mile-2019-kawasaki-ninja-h2-carbon-hits-the-auction-block-looking-divine_2.jpg',
        description: 'Supercharged superbike with insane acceleration, track-ready tech and aggressive styling.',
        fuel: 'Petrol',
        transmission: '6-speedManual',
        showroomId: 'sr_5',
        specs: { engine: '998 cc Supercharged Inline-4', power: '207 BHP', braking: 'Brembo calipers(Dual ABS)' },

    },
    {
        id: 'b_ind_1',
        name: 'Royal Enfield Classic',
        brand: 'Royal Enfield',
        category: 'bikes',
        price: 220000,
        image: 'https://soymotero.net/wp-content/uploads/2024/09/Royal-Enfield-Bullet-350-Battalion-Black-2025-1.jpg',
        description: 'Iconic cruiser with vintage looks, torquey engine, comfy ride and strong street presence.',
        fuel: 'Petrol',
        transmission: '5-speed Manual',
        specs: { engine: '349cc', power: '20 BHP', braking: 'Dual-ABS' },
        showroomId: 'sr_3',

    }
];

// Initial Order History (Mock)
window.orders = [];
