# 🌿 Verdant Vibes - Premium Plant Shop

A beautiful, modern e-commerce website for plant enthusiasts, built with React, TypeScript, and a focus on premium design and user experience.

![Verdant Vibes Home Page](screenshots/home-page.png)

## 📖 About

**Verdant Vibes** is a premium plant shop website that brings nature into your home. The site features a curated collection of indoor and outdoor plants, complete with detailed care guides and a seamless shopping experience. With its modern organic design aesthetic, the website combines deep forest greens, warm cream backgrounds, and elegant serif typography to create an immersive botanical experience.

## ✨ Features

### 🏠 Beautiful Home Page
- **Hero Section**: Eye-catching hero with compelling call-to-action
- **Featured Products**: Showcase of trending plants
- **Value Propositions**: Highlighting sustainability, secure shipping, and expert support
- **Newsletter Signup**: Build your green community

![Features Section](screenshots/features.png)

### 🛍️ Smart Shop Page
- **Product Catalog**: Clean grid layout with all available plants
- **Advanced Filtering**: Filter by category (Indoor, Outdoor, Succulent) and light requirements (Low, Medium, Bright)
- **Responsive Design**: Mobile-friendly filter drawer
- **Real-time Results**: Instant product filtering

![Shop Page](screenshots/shop-page.png)

### 🌱 Detailed Product Pages
- **High-Quality Images**: Beautiful plant photography
- **Care Guides**: Visual indicators for light, water, and difficulty level
- **Quantity Selection**: Easy-to-use quantity controls
- **Add to Cart**: Seamless shopping experience

### 🛒 Shopping Cart
- **Slide-out Drawer**: Smooth cart animation
- **Quantity Management**: Adjust quantities or remove items
- **Live Totals**: Real-time price calculations
- **Local Storage**: Cart persists across sessions

## 🎨 Design Philosophy

- **Modern Organic**: Blending contemporary web design with natural aesthetics
- **Color Palette**: 
  - Primary: Deep Forest Green (#2D4A3E)
  - Secondary: Sage Green (#8FBC8F)
  - Accent: Terracotta (#E2725B)
  - Background: Warm Cream (#F9F9F7)
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)
- **Micro-interactions**: Smooth hover effects and animations throughout

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Styling**: Vanilla CSS with CSS Variables
- **Icons**: Lucide React
- **Version Control**: Git & GitHub

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Salvero/verdant-vibes-plant-shop.git
cd verdant-vibes-plant-shop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
verdant-vibes-plant-shop/
├── public/              # Static assets (images)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── CartDrawer.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Shop.tsx
│   │   └── ProductDetails.tsx
│   ├── context/        # React Context providers
│   │   └── CartContext.tsx
│   ├── data/           # Mock data
│   │   └── products.ts
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── package.json
└── vite.config.ts
```

## 🌟 Key Features Implementation

### Cart Management
- Context API for global state management
- Local storage persistence
- Add, remove, and update quantities
- Real-time total calculations

### Product Filtering
- useMemo for optimized filtering
- Multiple filter criteria (category, light level)
- Responsive mobile filter drawer

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 992px
- Touch-friendly interactions

## 🎯 Future Enhancements

- [ ] User authentication
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Search functionality
- [ ] Checkout and payment integration
- [ ] Admin dashboard for inventory management
- [ ] More plant varieties and categories

## 👨‍💻 Author

**Salman**
- GitHub: [@Salvero](https://github.com/Salvero)
- Email: salmandev15@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Plant images generated with AI
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Made with 💚 and a love for plants**
