export interface Car {
  id: string;
  name: string;
  category: 'Hatchback' | 'Sedan' | 'Compact SUV' | '7-Seater' | 'Premium / 4x4';
  modelYear: string;
  transmission: 'Manual' | 'Automatic';
  fuelType: 'Petrol' | 'Diesel';
  seats: number;
  luggage: string;
  dailyRate: number;
  weeklyRate: number; // Discounted 7-day rate
  securityDeposit: number;
  freeKmPerDay: number;
  extraKmRate: number;
  imageAccent: string;
  features: string[];
  popular?: boolean;
}

export interface TourDay {
  day: number;
  title: string;
  location: string;
  highlights: string[];
  distance: string;
  stay: string;
}

export interface TourPackage {
  id: string;
  name: string;
  tagline: string;
  duration: string; // e.g., "7 Days / 6 Nights"
  category: 'Spiritual & Heritage' | 'Nature & Hill Station' | 'Tribal & Mountains' | 'Wildlife & Coastal';
  basePriceSelfDrive: number; // Car included for 7 days
  basePriceWithDriverAndStays: number; // Includes 3/4-star verified hotels + car + fuel
  pickupDrop: string;
  routeOverview: string[];
  coverGradient: string;
  inclusions: string[];
  exclusions: string[];
  days: TourDay[];
  highlightTags: string[];
}

export interface Destination {
  id: string;
  name: string;
  category: 'Temples' | 'Beaches' | 'Hill Stations' | 'Heritage';
  subtitle: string;
  distanceFromBhubaneswar: string;
  bestTimeToVisit: string;
  highlights: string[];
  recommendedCar: string;
  routeTips: string;
  description: string;
}

export const CAR_FLEET: Car[] = [
  {
    id: 'maruti-swift',
    name: 'Maruti Suzuki Swift / Tiago',
    category: 'Hatchback',
    modelYear: '2024 New Gen',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    luggage: '2 Medium Bags',
    dailyRate: 1299,
    weeklyRate: 7499,
    securityDeposit: 3000,
    freeKmPerDay: 250,
    extraKmRate: 9,
    imageAccent: 'from-amber-600/30 to-slate-900',
    features: ['Touchscreen Apple CarPlay/Android Auto', 'Airbags & ABS', 'High Mileage 22 km/l', 'Bluetooth Audio'],
    popular: false,
  },
  {
    id: 'maruti-dzire',
    name: 'Maruti Suzuki Dzire / Honda Amaze',
    category: 'Sedan',
    modelYear: '2024 Model',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    luggage: '3 Large Bags',
    dailyRate: 1599,
    weeklyRate: 9499,
    securityDeposit: 4000,
    freeKmPerDay: 250,
    extraKmRate: 10,
    imageAccent: 'from-blue-600/30 to-slate-900',
    features: ['Comfortable Rear Legroom', 'Spacious 378L Boot', 'Chilled Climate AC', 'Smooth Highway Cruiser'],
    popular: false,
  },
  {
    id: 'hyundai-creta',
    name: 'Hyundai Creta / Kia Seltos',
    category: 'Compact SUV',
    modelYear: '2024 Facelift',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seats: 5,
    luggage: '4 Bags',
    dailyRate: 2499,
    weeklyRate: 14999,
    securityDeposit: 5000,
    freeKmPerDay: 300,
    extraKmRate: 12,
    imageAccent: 'from-indigo-600/30 to-slate-900',
    features: ['Panoramic Sunroof', 'High Ground Clearance (190mm)', 'Cruise Control', 'Ventilated Seats'],
    popular: true,
  },
  {
    id: 'maruti-brezza',
    name: 'Maruti Suzuki Brezza / Tata Nexon',
    category: 'Compact SUV',
    modelYear: '2024 Model',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 5,
    luggage: '3 Bags',
    dailyRate: 1899,
    weeklyRate: 11499,
    securityDeposit: 4500,
    freeKmPerDay: 280,
    extraKmRate: 11,
    imageAccent: 'from-cyan-600/30 to-slate-900',
    features: ['Robust Hill Station Drive', '5-Star Safety Architecture', 'Wireless Charger', 'Reverse Camera'],
    popular: false,
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga Smart Hybrid',
    category: '7-Seater',
    modelYear: '2024 New Gen',
    transmission: 'Manual',
    fuelType: 'Petrol',
    seats: 7,
    luggage: 'Flexible 7 Seats / 4 Bags',
    dailyRate: 2399,
    weeklyRate: 14499,
    securityDeposit: 5000,
    freeKmPerDay: 300,
    extraKmRate: 12,
    imageAccent: 'from-emerald-600/30 to-slate-900',
    features: ['Reclining 2nd & 3rd Row', 'Dual AC Vents for All Rows', 'Family Friendly', 'Low Running Cost'],
    popular: true,
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova Crysta',
    category: '7-Seater',
    modelYear: '2024 Edition',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seats: 7,
    luggage: '5 Large Bags',
    dailyRate: 3499,
    weeklyRate: 21999,
    securityDeposit: 7000,
    freeKmPerDay: 300,
    extraKmRate: 15,
    imageAccent: 'from-amber-500/30 to-slate-900',
    features: ['King of Long Distance Comfort', '2.4L Powerful Diesel Engine', 'Plush Captain Seats', 'Unmatched Reliability'],
    popular: false,
  },
  {
    id: 'mahindra-thar',
    name: 'Mahindra Thar 4x4 Hardtop',
    category: 'Premium / 4x4',
    modelYear: '2024 4WD',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seats: 4,
    luggage: '2 Medium Bags',
    dailyRate: 3199,
    weeklyRate: 18999,
    securityDeposit: 7000,
    freeKmPerDay: 250,
    extraKmRate: 14,
    imageAccent: 'from-orange-600/30 to-slate-900',
    features: ['True 4WD Low-Range', 'Off-Road Tires & High Clearance', 'Convertible / Hardtop Vibe', 'Best for Deomali Peaks'],
    popular: false,
  },
  {
    id: 'jeep-compass',
    name: 'Jeep Compass Limited Edition',
    category: 'Premium / 4x4',
    modelYear: '2024 Luxury',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seats: 5,
    luggage: '4 Large Bags',
    dailyRate: 3899,
    weeklyRate: 23999,
    securityDeposit: 8000,
    freeKmPerDay: 300,
    extraKmRate: 16,
    imageAccent: 'from-blue-700/30 to-slate-900',
    features: ['Signature 7-Slot Grille', 'Premium Leather Upholstery', 'Dual-Pane Panoramic Roof', 'Alpine Sound System'],
    popular: true,
  },
];

export const WEEKLY_TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'golden-triangle-chilika',
    name: 'Odisha Golden Triangle & Chilika Lagoon',
    tagline: 'The Definitive Spiritual, Heritage & Coastal Circuit of Kalinga',
    duration: '7 Days / 6 Nights',
    category: 'Spiritual & Heritage',
    basePriceSelfDrive: 18499,
    basePriceWithDriverAndStays: 34999,
    pickupDrop: 'Bhubaneswar Airport (BBI) / Railway Station',
    routeOverview: ['Bhubaneswar', 'Dhauli', 'Konark', 'Chandrabhaga', 'Puri', 'Chilika (Satapada)', 'Raghurajpur'],
    coverGradient: 'from-amber-600/20 via-orange-900/30 to-slate-950',
    highlightTags: ['Puri Jagannath Darshan', 'Konark Sun Temple UNESCO', 'Irrawaddy Dolphins', 'Blue Flag Beach'],
    inclusions: [
      'Choice of Self-Drive Car (or Chauffeured AC Car with Fuel & Tolls)',
      '6 Nights Deluxe Heritage & Beachfront Hotel Stays (Optional add-on)',
      'Daily Buffet Breakfast (with Stays package)',
      'Chilika Lake private dolphin boat cruise voucher',
      'VIP Temple Darshan Assistance at Puri & Lingaraj',
      '24/7 Roadside Assistance & GPS Navigator',
      'Unlimited kilometer allowance on weekly rentals',
    ],
    exclusions: [
      'Personal temple puja offerings / priests personal dakshina',
      'Monument entry tickets & camera fees',
      'Meals not specified in the package',
    ],
    days: [
      {
        day: 1,
        title: 'Arrival in Bhubaneswar – The Temple City',
        location: 'Bhubaneswar',
        highlights: [
          'Vehicle handover at BBI Airport or Sundarapada hub',
          'Explore 11th-century Lingaraj Temple and Mukteshwar Temple (Gem of Odishan Architecture)',
          'Visit Rajarani Temple and Dhauli Peace Pagoda (where Emperor Ashoka renounced war)',
          'Evening Odia Thali dinner experience at traditional local dining',
        ],
        distance: '45 km local driving',
        stay: 'Deluxe Hotel, Bhubaneswar',
      },
      {
        day: 2,
        title: 'Konark Sun Temple & Chandrabhaga Golden Beach',
        location: 'Konark & Marine Drive',
        highlights: [
          'Drive along scenic NH-316 to Konark (65 km)',
          'Guided exploration of UNESCO World Heritage Konark Sun Temple (Chariot of the Sun God)',
          'Relax at Chandrabhaga Beach, known for peaceful coastline and waters',
          'Drive on the picturesque Puri-Konark Marine Drive highway flanked by casuarina trees',
        ],
        distance: '85 km driving',
        stay: 'Marine Drive Eco Resort / Puri Beachside',
      },
      {
        day: 3,
        title: 'Sacred Puri Jagannath Darshan & Blue Flag Beach',
        location: 'Puri',
        highlights: [
          'Morning sacred darshan at Jagannath Temple with Anandabazar Mahaprasad experience',
          'Visit Gundicha Temple and Narendra Pokhari',
          'Afternoon leisure at Golden Beach (Certified Blue Flag Beach with promenade)',
          'Evening shopping for Puri Khaja sweets and silver filigree at Swargadwar craft stalls',
        ],
        distance: '30 km local driving',
        stay: 'Beachfront Hotel, Puri',
      },
      {
        day: 4,
        title: 'Chilika Lake (Satapada) – Dolphin Lagoon & Sea Mouth',
        location: 'Satapada, Chilika',
        highlights: [
          'Morning coastal drive to Satapada on the banks of Chilika Lake (50 km)',
          'Motorboat cruise to spot rare, endangered Irrawaddy Dolphins leaping in the lagoon',
          'Visit Rajhans Island and the scenic Sea Mouth where Chilika lagoon meets the Bay of Bengal',
          'Fresh Chilika crab & jumbo prawn culinary stops',
        ],
        distance: '110 km round trip',
        stay: 'Beachfront Hotel, Puri',
      },
      {
        day: 5,
        title: 'Raghurajpur Crafts Village & Pipli Applique Hub',
        location: 'Raghurajpur & Pipli',
        highlights: [
          'Visit Raghurajpur UNESCO Heritage Crafts Village – meet master Pattachitra painters & palm leaf engravers',
          'Witness live Gotipua classical Odissi dance performance',
          'Stop at Pipli village, world-renowned for vibrant applique handicrafts and royal umbrellas',
          'Drive to Gopalpur-on-Sea or chill at Tampara Lake watersports (optional extension)',
        ],
        distance: '75 km driving',
        stay: 'Bhubaneswar / Puri',
      },
      {
        day: 6,
        title: 'Ancient Rock-Cut Caves & Nandankanan Wildlife',
        location: 'Bhubaneswar Outskirts',
        highlights: [
          'Explore Khandagiri and Udayagiri twin hill caves built for Jain monks in 2nd century BCE (Hathigumpha inscription)',
          'Drive to Nandankanan Zoological Park (famous for white tigers and safari)',
          'Evening stroll along Ekamra Haat for handloom Sambalpuri sarees and stone carvings',
        ],
        distance: '60 km driving',
        stay: 'Deluxe Hotel, Bhubaneswar',
      },
      {
        day: 7,
        title: 'Kalinga Souvenirs & Smooth Departure',
        location: 'Bhubaneswar',
        highlights: [
          'Morning visit to Tribal Art Museum Bhubaneswar (State Museum)',
          'Relish warm Odia Chhena Poda and Rasagola sweet delicacies',
          'Seamless car handover at Airport / Railway station or our Sundarapada office',
          'Safe flight/train return with unforgettable memories',
        ],
        distance: '20 km local driving',
        stay: 'Departure',
      },
    ],
  },
  {
    id: 'kashmir-of-odisha-daringbadi',
    name: 'Kashmir of Odisha: Daringbadi & Hill Stations',
    tagline: 'Misty Pine Forests, Coffee Plantations, Cascading Waterfalls & Pine Breezes',
    duration: '7 Days / 6 Nights',
    category: 'Nature & Hill Station',
    basePriceSelfDrive: 19999,
    basePriceWithDriverAndStays: 36999,
    pickupDrop: 'Bhubaneswar Airport (BBI)',
    routeOverview: ['Bhubaneswar', 'Gopalpur-on-Sea', 'Kalinga Ghat', 'Daringbadi', 'Mandasaru Valley', 'Barkul Chilika'],
    coverGradient: 'from-emerald-700/20 via-teal-900/30 to-slate-950',
    highlightTags: ['Daringbadi Pine Forest', 'Coffee Plantations', 'Gopalpur Beach', 'Mandasaru Valley'],
    inclusions: [
      'Self-Drive SUV (Creta/Brezza/Thar) with Hill Station Driving Clearance',
      'All Hill Permits & 24/7 Roadside Emergency Assist across Kandhamal',
      'Deluxe Hilltop Cottage Stays with Mountain Views',
      'Bonfire & Barbecue experience in Daringbadi Eco-Retreat',
      'Chilika Barkul speed boat cruise voucher',
      'Unlimited kilometers on weekly booking',
    ],
    exclusions: ['Entry fees for private eco-parks', 'Personal snacks & driver tip (if chauffeured)'],
    days: [
      {
        day: 1,
        title: 'Bhubaneswar to Gopalpur-on-Sea Beach Town',
        location: 'Gopalpur',
        highlights: [
          'Pick up your SUV in Bhubaneswar and head down NH-16 towards Southern Odisha',
          'Stop at Tampara Lake for thrilling Jet Skiing and speedboat boating',
          'Arrive at Gopalpur-on-Sea, a tranquil heritage colonial port beach',
          'Climb the Gopalpur Lighthouse for breathtaking 360-degree sunset over the Bay of Bengal',
        ],
        distance: '170 km driving',
        stay: 'Sea Pearl Beach Resort, Gopalpur',
      },
      {
        day: 2,
        title: 'Ascent to the Clouds – Scenic Kalinga Ghat to Daringbadi',
        location: 'Daringbadi Hill Station (915m MSL)',
        highlights: [
          'Drive through the winding hairpin bends of Kalinga Ghat with panoramic mountain vistas',
          'Notice the dramatic drop in temperature as you enter Kandhamal pine belt',
          'Check into cozy wooden hillside cottages surrounded by emerald flora',
          'Evening walk through aromatic organic black pepper & cardamom plantations',
        ],
        distance: '145 km mountain driving',
        stay: 'Hilltop Pine Cottages, Daringbadi',
      },
      {
        day: 3,
        title: 'Pine Forests, Midubanda Falls & Coffee Estates',
        location: 'Daringbadi',
        highlights: [
          'Morning walk inside the tall Pine Forest, soaking in pure resin aroma and cool breezes',
          'Visit Midubanda Waterfall hidden inside dense forest trails',
          'Explore extensive state Coffee Plantations and taste freshly roasted organic coffee',
          'Sunset view from Hill View Park and Lovers Point panoramic watchtower',
        ],
        distance: '50 km local trails',
        stay: 'Hilltop Pine Cottages, Daringbadi',
      },
      {
        day: 4,
        title: 'Mandasaru Gorge – The "Silent Valley" of Odisha',
        location: 'Mandasaru Eco Valley',
        highlights: [
          'Scenic morning drive to Mandasaru Gorge, a dramatic canyon cliff formation rich in biodiversity',
          'Trek along wooden cliffside walkways overlooking 2000-foot sheer drop gorge',
          'Spot vibrant native mountain birds and rare herbal medicinal plants',
          'Evening campfire under starlit sky with local folk music',
        ],
        distance: '65 km scenic mountain route',
        stay: 'Mandasaru Eco Camp / Daringbadi',
      },
      {
        day: 5,
        title: 'Descent to Chilika Lake (Barkul) Lagoon',
        location: 'Barkul, Chilika',
        highlights: [
          'Scenic morning descent from the hills down to Barkul waterfront on Chilika Lake',
          'Speedboat ride to Kalijai Island Temple located in the heart of the blue lagoon',
          'Witness thousands of migratory birds (Flamingos, Pelicans, Brahmini ducks)',
          'Enjoy fresh Chilika fish fry at the lakeside government OTDC restaurant',
        ],
        distance: '160 km driving',
        stay: 'OTDC Panthanivas Barkul / Lake View Resort',
      },
      {
        day: 6,
        title: 'Barkul to Bhubaneswar via Heritage Craft Trails',
        location: 'Bhubaneswar',
        highlights: [
          'Relaxed morning sunrise boat ride on the tranquil waters of Chilika',
          'Drive back towards capital city Bhubaneswar (105 km via NH-16)',
          'Stop at tribal artifacts outlets and handwoven Sambalpuri textile centers',
          'Evening leisure at city shopping boulevard and heritage temple cafes',
        ],
        distance: '110 km driving',
        stay: 'Premium Hotel, Bhubaneswar',
      },
      {
        day: 7,
        title: 'City Exploration & Departure',
        location: 'Bhubaneswar',
        highlights: [
          'Morning leisure, explore local breakfast spots with hot Puri Upma & Chenna Gaja',
          'Vehicle return inspection in Sundarapada or direct airport departure drop',
          'Conclusion of an invigorating hill & coastal expedition',
        ],
        distance: '25 km driving',
        stay: 'Departure',
      },
    ],
  },
  {
    id: 'koraput-deomali-tribal-peaks',
    name: 'Koraput Mystique & Deomali Peak Expedition',
    tagline: "Climb Odisha's Highest Summit (1672m) & Journey Through Ancient Tribal Valleys",
    duration: '7 Days / 6 Nights',
    category: 'Tribal & Mountains',
    basePriceSelfDrive: 22499,
    basePriceWithDriverAndStays: 39999,
    pickupDrop: 'Bhubaneswar or Berhampur Hub',
    routeOverview: ['Bhubaneswar', 'Rayagada', 'Koraput', 'Deomali Peak', 'Duduma Falls', 'Gupteswar', 'Jeypore'],
    coverGradient: 'from-blue-700/20 via-slate-900 to-slate-950',
    highlightTags: ['Deomali Summit 1672m', 'Duduma 175m Waterfall', 'Gupteswar Cave', 'Tribal Haats'],
    inclusions: [
      'Self-Drive Rugged 4x4 / High Clearance SUV (Thar / Scorpio-N / Creta)',
      'Eastern Ghats Mountain Driving Assistance Kit',
      'All Luxury Valley & Heritage Stays',
      'Guided Deomali Peak Trekking & Sunset Excursion',
      'Tribal Museum & Eco-tourism Entry Clearances',
    ],
    exclusions: ['Personal camera permits', 'Interstate toll (if taking Vizag detour)'],
    days: [
      {
        day: 1,
        title: 'Bhubaneswar to Rayagada via Eastern Ghats Footpaths',
        location: 'Rayagada',
        highlights: [
          'Start early from Bhubaneswar on the scenic South Odisha highway',
          'Traverse lush green paddy landscapes and rolling hills of Ganjam and Gajapati',
          'Arrive in Rayagada, check in, and enjoy evening dinner overlooking Nagavali river valley',
        ],
        distance: '340 km expressway driving',
        stay: 'Hotel Sai International, Rayagada',
      },
      {
        day: 2,
        title: 'Rayagada to Koraput (Sabara Srikhetra) High Country',
        location: 'Koraput (870m)',
        highlights: [
          'Drive up the scenic Koraput hills known for cool climate and coffee plantations',
          'Visit the unique Jagannath Temple (Sabara Srikhetra), open to all without caste or creed restrictions',
          'Explore the Koraput Tribal Museum preserving customs of Bonda, Gadaba, and Kondh tribes',
          'Scenic Kolab Reservoir sunset walk',
        ],
        distance: '110 km driving',
        stay: 'Valley View Resort, Koraput',
      },
      {
        day: 3,
        title: 'Conquering Deomali Peak – The Roof of Odisha (1672m)',
        location: 'Deomali Hills, Pottangi',
        highlights: [
          'Exciting mountain drive up winding roads to Deomali Peak, the highest mountain summit in Odisha',
          'Walk through cloud cover with sheer 360-degree views of undulating Eastern Ghats valleys',
          'Picnic lunch atop the mountain plateau with paragliding launch pads',
          'Golden hour photography among rolling grass slopes and wildflowers',
        ],
        distance: '90 km mountain route',
        stay: 'Deomali Eco Cottages / Koraput',
      },
      {
        day: 4,
        title: 'Mighty Duduma Waterfall & Machkund Hydro Gorge',
        location: 'Duduma',
        highlights: [
          'Drive through forested border valleys to majestic Duduma Waterfall (175 meters cascade)',
          'Experience the roaring thunder of Machkund river plunging into deep granite gorge',
          'Witness the lifestyle and traditional attire of indigenous Bonda tribes at local weekly haat',
          'Drive down to historic royal township of Jeypore',
        ],
        distance: '130 km scenic route',
        stay: 'Heritage Hotel, Jeypore',
      },
      {
        day: 5,
        title: 'Sacred Gupteswar Shiva Cave & Kolab Botanical Oasis',
        location: 'Gupteswar & Kolab',
        highlights: [
          'Journey through dense Sal forests to sacred Gupteswar Cave Temple inside a limestone hill',
          'Marvel at the natural stalagmite Shiva Lingam worshipped since epic Ramayana times',
          'Relax near the crystal clear Sabari river flowing past the temple rocks',
          'Visit Kolab Botanical Garden & Hydroelectric Dam in the evening',
        ],
        distance: '120 km driving',
        stay: 'Jeypore / Koraput',
      },
      {
        day: 6,
        title: 'Jeypore to Berhampur / Chilika Coast',
        location: 'Berhampur / Chilika',
        highlights: [
          'Start morning return journey through the magnificent rolling passes of Eastern Ghats',
          'Stop at scenic roadside dhabas for authentic Odia Desi Chicken curry & Roti',
          'Arrive at Southern Odisha coastal plains by late afternoon',
          'Sunset evening by the calm waters of Tampara or Gopalpur',
        ],
        distance: '290 km scenic highway',
        stay: 'Sea View Resort, Gopalpur',
      },
      {
        day: 7,
        title: 'Coast to Capital – Bhubaneswar Return',
        location: 'Bhubaneswar',
        highlights: [
          'Smooth 3-hour drive on 6-lane NH-16 back to Bhubaneswar',
          'Visit local Odisha sweet makers for fresh hot Chhenapoda souvenirs',
          'Inspection and smooth car drop at airport/hub; return with summit memories',
        ],
        distance: '160 km driving',
        stay: 'Departure',
      },
    ],
  },
  {
    id: 'wild-odisha-similipal-bhitarkanika',
    name: 'Wild Odisha: Similipal Tiger Reserve & Bhitarkanika Mangroves',
    tagline: 'Saltwater Crocodiles, Giant Waterfalls & Royal Bengal Tiger Habitats',
    duration: '7 Days / 6 Nights',
    category: 'Wildlife & Coastal',
    basePriceSelfDrive: 20999,
    basePriceWithDriverAndStays: 37999,
    pickupDrop: 'Bhubaneswar Airport / Hub',
    routeOverview: ['Bhubaneswar', 'Bhitarkanika', 'Chandipur (Vanishing Sea)', 'Similipal Biosphere', 'Baripada'],
    coverGradient: 'from-amber-700/20 via-emerald-950 to-slate-950',
    highlightTags: ['Saltwater Crocodiles', 'Barehipani 399m Waterfall', 'Vanishing Sea Chandipur', 'Forest Safaris'],
    inclusions: [
      'Self-Drive Rugged SUV with Forest Safari Clearance',
      'Bhitarkanika Private Boat Safari Permit & Forest Guide',
      'Similipal Core Zone Safari Entry Pass',
      'Eco-Cottage Stays inside Government Forest Reserves',
      '24/7 Breakdown Assistance across North Odisha',
    ],
    exclusions: ['Camera/Video fees inside National Parks', 'Personal meals outside safari'],
    days: [
      {
        day: 1,
        title: 'Bhubaneswar to Bhitarkanika National Park (Dangmal)',
        location: 'Dangmal, Bhitarkanika',
        highlights: [
          'Drive North from Bhubaneswar towards Kendrapara mangrove delta (150 km)',
          'Check into riverside eco-cottages on the edge of the sanctuary',
          'Evening guided nature trail to spot deer, monitor lizards, and wild boars',
        ],
        distance: '150 km driving',
        stay: 'Bhitarkanika Eco Resort, Dangmal',
      },
      {
        day: 2,
        title: 'Creek Boat Safari & Giant Saltwater Crocodiles',
        location: 'Bhitarkanika Mangrove Delta',
        highlights: [
          'Full-day boat safari through tidal mangrove creeks of second largest mangrove ecosystem in India',
          'Spot massive estuarine saltwater crocodiles basking in mudbanks (up to 20+ feet)',
          'Visit Dangmal Crocodile Breeding Centre and Crocodile Museum',
          'Birdwatching at Bagagahana heronry (thousands of nesting kingfishers, egrets & storks)',
        ],
        distance: 'Boat safari + 20 km local driving',
        stay: 'Bhitarkanika Eco Resort',
      },
      {
        day: 3,
        title: 'Bhitarkanika to Chandipur – The Vanishing Sea',
        location: 'Chandipur-on-Sea, Balasore',
        highlights: [
          'Drive to Chandipur-on-Sea, world-famous for its rare tide phenomenon',
          'Walk up to 5 kilometers into the dry sea bed during low tide as water disappears',
          'Search for red horseshoe crabs and sea shells on the exposed seabed',
          'Evening seafood dinner featuring fresh Bay of Bengal pomfret and prawns',
        ],
        distance: '135 km driving',
        stay: 'OTDC Panthanivas / Sea Resort, Chandipur',
      },
      {
        day: 4,
        title: 'Ascent to Similipal Biosphere Reserve (Chahala Zone)',
        location: 'Similipal Tiger Reserve',
        highlights: [
          'Drive through Baripada gates into Similipal, Asia’s UNESCO Biosphere Reserve',
          'Drive through dense Sal forests canopy with rich tribal history',
          'Visit Chahala animal watchtower to spot wild elephants, spotted deer, barking deer & peacocks',
          'Overnight stay inside the deep forest eco-cottages with pure natural tranquility',
        ],
        distance: '120 km forest trails',
        stay: 'Similipal Forest Eco Cottages',
      },
      {
        day: 5,
        title: 'Magnificent Barehipani (399m) & Joranda Waterfalls',
        location: 'Similipal Central Plateau',
        highlights: [
          'Visit Barehipani Falls – India’s second highest waterfall cascading 399 meters in two dramatic tiers',
          'Visit Joranda Falls dropping 150 meters in a single sheer plunge over rock cliffs',
          'Orchidarium tour showcasing over 90 species of exotic wild orchids',
          'Evening jungle sounds and bonfire inside sanctuary bounds',
        ],
        distance: '80 km rugged terrain drive',
        stay: 'Similipal Forest Eco Cottages',
      },
      {
        day: 6,
        title: 'Similipal to Baripada (Heritage Town) & Cuttack',
        location: 'Baripada & Cuttack',
        highlights: [
          'Morning wildlife safari exit towards Mayurbhanj royal town of Baripada',
          'Visit Haribaldev Temple (replica of Puri Jagannath Temple) and Mayurbhanj Palace',
          'Drive along NH-16 towards historic millennium city Cuttack (Barabati Fort & Silver Filigree)',
        ],
        distance: '210 km driving',
        stay: 'Deluxe Hotel, Cuttack / Bhubaneswar',
      },
      {
        day: 7,
        title: 'Silver Filigree Hub to Bhubaneswar Departure',
        location: 'Bhubaneswar',
        highlights: [
          'Morning tour of traditional Cuttack Chandi temple & Dahibara Aloo Dum street food trail',
          'Final quick drive to Bhubaneswar airport/railway station for vehicle checkout',
          'Fly back home with unforgettable tales of wild Odisha',
        ],
        distance: '35 km driving',
        stay: 'Departure',
      },
    ],
  },
];

export const ODISHA_DESTINATIONS: Destination[] = [
  {
    id: 'temples',
    name: 'Temples & Spiritual Heritage',
    category: 'Temples',
    subtitle: 'From Puri Jagannath to Konark Sun Temple & Bhubaneswar',
    distanceFromBhubaneswar: '0 - 65 km',
    bestTimeToVisit: 'October to March (Rath Yatra in July)',
    highlights: [
      'Puri Jagannath Temple – Sacred Dham with eternal kitchen & Mahaprasad',
      'Konark Sun Temple – UNESCO World Heritage 13th-century architectural marvel',
      'Lingaraj & Mukteshwar – Pristine 10th-century Kalinga stone architecture in Ekamra Khetra',
      'Biraja Shakti Peeth (Jajpur) & Chausath Yogini Temple (Hirapur)',
    ],
    recommendedCar: 'Swift / Dzire / Creta (Smooth 4-lane highways)',
    routeTips: 'Take the smooth Puri-Bhubaneswar NH-316 and the scenic Puri-Konark Marine Drive highway for sunset.',
    description: 'Odisha boasts over 1,000 ancient temples spanning 1,500 years of unbroken spiritual devotion and stone craftsmanship.',
  },
  {
    id: 'beaches',
    name: 'Golden Beaches & Marine Coastlines',
    category: 'Beaches',
    subtitle: 'Blue Flag Certified Golden Sands along the Bay of Bengal',
    distanceFromBhubaneswar: '60 - 170 km',
    bestTimeToVisit: 'September to April',
    highlights: [
      'Puri Golden Beach – International Blue Flag eco-label with pristine clean sands',
      'Chandrabhaga Beach – Majestic sunrise point near Konark temple',
      'Gopalpur-on-Sea – Historic colonial sea beach with quiet retro vibes & lighthouse',
      'Astaranga Beach – Famous for panoramic multi-colored golden sunset horizon',
    ],
    recommendedCar: 'Creta / Brezza / Dzire (Paved scenic coastal roads)',
    routeTips: 'Puri-Konark Marine Drive is one of India’s most scenic coastal drives. Perfect for self-drive photography.',
    description: 'Nearly 500 km of untouched golden coastline, rolling breakers, seafood shacks, and tranquil eco-retreats.',
  },
  {
    id: 'hill-stations',
    name: 'Hill Stations & Misty Mountain Passes',
    category: 'Hill Stations',
    subtitle: 'Daringbadi (Kashmir of Odisha) & Deomali Summit in Koraput',
    distanceFromBhubaneswar: '240 - 450 km',
    bestTimeToVisit: 'November to February (Cool & Misty, frost in Dec/Jan)',
    highlights: [
      'Daringbadi – Pine forests, lush coffee plantations, cascading Midubanda waterfall',
      'Mandasaru Valley – Dramatic 2,000-ft gorge nicknamed the Silent Valley of Odisha',
      'Deomali Peak – Highest point in Odisha at 1,672m with clouds kissing mountain slopes',
      'Kalinga Ghat – Thrilling mountain hairpin curves through dense sal and bamboo canopies',
    ],
    recommendedCar: 'Mahindra Thar 4x4 / Creta Diesel / Innova Crysta',
    routeTips: 'Ensure good ground clearance and reliable brakes for the hairpin ghat sections in Kandhamal & Koraput.',
    description: 'Untouched hill stations where winter temperatures dip to 0°C, blessed with pine groves, coffee estates, and waterfalls.',
  },
  {
    id: 'heritage',
    name: 'Heritage, Eco-Lagoon & Wildlife',
    category: 'Heritage',
    subtitle: 'Chilika Lake, Similipal Tiger Reserve & Raghurajpur Craft Village',
    distanceFromBhubaneswar: '50 - 220 km',
    bestTimeToVisit: 'November to March (Peak migratory bird season)',
    highlights: [
      'Chilika Lake – Asia’s largest brackish lagoon hosting millions of migratory birds & Irrawaddy dolphins',
      'Raghurajpur – UNESCO Heritage crafts village where every home is an open art gallery',
      'Similipal Biosphere – Towering waterfalls (Barehipani 399m) and pristine tiger sanctuary',
      'Bhitarkanika – Giant saltwater crocodiles and dense virgin mangrove boat safaris',
    ],
    recommendedCar: 'Ertiga (Family) or Thar / Compass (Wilderness)',
    routeTips: 'Chilika Satapada is easily reached from Puri (50 km). Barkul is on the main NH-16 highway from Bhubaneswar.',
    description: 'A biodiverse playground with ancient rock-cut caves, UNESCO craft colonies, and immense natural wetlands.',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Rohan & Sonal Mukherjee',
    location: 'Kolkata, West Bengal',
    trip: '7-Day Odisha Golden Triangle with Creta Automatic',
    rating: 5,
    date: 'February 2026',
    comment:
      'We booked the self-drive Creta for a week from Beyond Drive+. Car was delivered right at Bhubaneswar Airport terminal sparkling clean with a full tank! Driving along Puri-Konark Marine drive at sunset with our own freedom was the highlight of our vacation.',
  },
  {
    id: '2',
    name: 'Aniket Sharma & Friends',
    location: 'Bangalore, Karnataka',
    trip: 'Daringbadi & Eastern Ghats Hill Expedition in Mahindra Thar',
    rating: 5,
    date: 'January 2026',
    comment:
      'Beyond Drive+ team is top notch. The Thar 4x4 handled the Kalinga Ghat hairpin bends and Daringbadi misty roads effortlessly. Security deposit was refunded back to my UPI within 3 hours of vehicle return. 100% recommended for anyone visiting Odisha!',
  },
  {
    id: '3',
    name: 'Dr. Debabrata Nayak',
    location: 'Mumbai (Family originally from Balasore)',
    trip: 'Weekly Family Package with Innova Crysta & Hotel Stays',
    rating: 5,
    date: 'December 2025',
    comment:
      'Took my elderly parents for Jagannath Temple Darshan and Chilika dolphin tour. The weekly package rate was very reasonable compared to local agencies. 24/7 support was genuine—they even arranged special wheelchairs for Puri temple!',
  },
];

export const FAQS = [
  {
    question: 'What documents are required to rent a self-drive car in Odisha?',
    answer:
      'You only need three documents: (1) A valid Original Indian Driving License (minimum 1 year old), (2) Government Photo ID (Aadhaar Card or Passport), and (3) Refundable Security Deposit via UPI/Card. For foreign nationals, an International Driving Permit (IDP) and passport are required.',
  },
  {
    question: 'How does airport or railway station delivery work in Bhubaneswar?',
    answer:
      'We provide 24/7 doorstep delivery directly at Biju Patnaik International Airport (BBI), Bhubaneswar Railway Station, or your hotel. Our executive meets you with the car keys, verifies your KYC in 2 minutes, conducts a quick walkaround video inspection, and hands over the vehicle.',
  },
  {
    question: 'How fast is the security deposit refunded?',
    answer:
      'Your security deposit (₹3,000 to ₹8,000 depending on vehicle class) is 100% refundable and credited back to your bank account or UPI within 2 to 24 hours after return inspection, once FASTag toll balance is reconciled.',
  },
  {
    question: 'What is included in the Weekly Tour Packages?',
    answer:
      'Our 7-Day / 6-Night Weekly Packages can be customized either as: (A) Self-Drive Bundle (Car + unlimited KMs + 24/7 roadside assist + detailed day-by-day GPS itinerary), or (B) All-Inclusive Bundle (Car with professional driver + verified 3-Star/4-Star hotel stays + daily breakfast + boat cruise vouchers).',
  },
  {
    question: 'Are there any hidden charges or speed limits?',
    answer:
      'Zero hidden charges. Transparent pricing includes GST. Odisha state government speed governor limit is 80 km/h across commercial rental vehicles for maximum passenger safety. We provide 250 - 300 free KM per day, and unlimited KM options are available for weekly bookings.',
  },
  {
    question: 'Can I take the car to Daringbadi, Koraput, or other hill stations?',
    answer:
      'Absolutely! All our cars are road-tested and permitted to travel across all districts of Odisha, including hill stations like Daringbadi, Mandasaru, Deomali, and Similipal. We recommend our SUVs (Creta, Brezza, Thar) for the hill ghats.',
  },
];
