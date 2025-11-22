import type { Product } from '../types';

export const products: Product[] = [
    {
        id: '1',
        name: 'Monstera Deliciosa',
        scientificName: 'Monstera deliciosa',
        price: 45.00,
        image: '/monstera.png',
        description: 'The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its natural leaf holes. It loves bright, indirect light and needs watering every 1-2 weeks.',
        light: 'bright',
        water: 'weekly',
        difficulty: 'easy',
        category: 'indoor'
    },
    {
        id: '2',
        name: 'Snake Plant',
        scientificName: 'Sansevieria trifasciata',
        price: 30.00,
        image: '/snake-plant.png',
        description: 'A hardy succulent that can survive low light and drought. Perfect for beginners.',
        light: 'low',
        water: 'bi-weekly',
        difficulty: 'easy',
        category: 'indoor'
    },
    {
        id: '3',
        name: 'Fiddle Leaf Fig',
        scientificName: 'Ficus lyrata',
        price: 55.00,
        image: '/fiddle-leaf.png',
        description: 'Popular for its large, violin-shaped leaves. Needs bright, filtered light.',
        light: 'bright',
        water: 'weekly',
        difficulty: 'medium',
        category: 'indoor'
    },
    {
        id: '4',
        name: 'Peace Lily',
        scientificName: 'Spathiphyllum',
        price: 35.00,
        image: '/peace-lily.png',
        description: 'An elegant plant with white blooms that thrives in low light. It droops when it needs water, making it easy to care for.',
        light: 'low',
        water: 'weekly',
        difficulty: 'easy',
        category: 'indoor'
    },
    {
        id: '5',
        name: 'Aloe Vera',
        scientificName: 'Aloe barbadensis miller',
        price: 25.00,
        image: '/aloe-vera.png',
        description: 'A medicinal succulent known for its soothing gel. Loves bright sunlight and dry soil.',
        light: 'bright',
        water: 'bi-weekly',
        difficulty: 'easy',
        category: 'succulent'
    },
    {
        id: '6',
        name: 'Spider Plant',
        scientificName: 'Chlorophytum comosum',
        price: 20.00,
        image: '/spider-plant.png',
        description: 'A fast-growing plant that produces "babies". Great for hanging baskets and purifying air.',
        light: 'medium',
        water: 'weekly',
        difficulty: 'easy',
        category: 'indoor'
    },
    {
        id: '7',
        name: 'Rubber Plant',
        scientificName: 'Ficus elastica',
        price: 40.00,
        image: '/rubber-plant.png',
        description: 'Features striking dark green leaves. A bold statement plant that prefers bright, indirect light.',
        light: 'bright',
        water: 'weekly',
        difficulty: 'medium',
        category: 'indoor'
    },
    {
        id: '8',
        name: 'ZZ Plant',
        scientificName: 'Zamioculcas zamiifolia',
        price: 32.00,
        image: '/zz-plant.png',
        description: 'Virtually indestructible. Tolerates low light and neglect better than almost any other plant.',
        light: 'low',
        water: 'bi-weekly',
        difficulty: 'easy',
        category: 'indoor'
    },
    {
        id: '9',
        name: 'Golden Pothos',
        scientificName: 'Epipremnum aureum',
        price: 18.00,
        image: '/pothos.png',
        description: 'A trailing vine that is incredibly easy to grow. Can thrive in a variety of light conditions.',
        light: 'medium',
        water: 'weekly',
        difficulty: 'easy',
        category: 'indoor'
    },
    {
        id: '10',
        name: 'Bird of Paradise',
        scientificName: 'Strelitzia reginae',
        price: 65.00,
        image: '/bird-of-paradise.png',
        description: 'Bring the tropics home with its large, banana-like leaves. Needs plenty of bright light to flourish.',
        light: 'bright',
        water: 'weekly',
        difficulty: 'medium',
        category: 'indoor'
    }
];
