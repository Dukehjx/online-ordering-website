# Restaurant Online Menu Website

A modern, responsive online menu website built with React.js, Vite, and Tailwind CSS. Features multi-language support and mobile-first design.

## Features

- **Lightning-fast development** - Powered by Vite for instant HMR
- **Mobile-first responsive design** - Optimized for all screen sizes
- **Multi-language support** - Thai, English, and Chinese
- **Category-based menu browsing** - Easy navigation with sidebar categories
- **Dish customization** - Ice level, sweetness, size, and add-ons
- **Expandable architecture** - Easy to add more restaurants
- **Accessible design** - Large photos, clear text, intuitive navigation
- **No backend required** - Menu content managed via structured data files
- **Modern build tooling** - Vite for fast builds and development

## Demo

The website displays a drinking shop menu with categories:
- Milk & Tea (นมและชา / 奶茶系列)
- Smoothies (น้ำผลไม้ปั่น / 鲜榨果昔)

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:3000` (will auto-open)

## Available Scripts

- **`npm run dev`** - Start development server (with HMR)
- **`npm run build`** - Build for production  
- **`npm run preview`** - Preview production build locally
- **`npm test`** - Run tests with Vitest

## Project Structure

```
src/
├── components/           # React components
│   ├── CategorySidebar.jsx
│   ├── CustomizationModal.jsx
│   ├── LanguageSwitcher.jsx
│   └── MenuItem.jsx
├── contexts/            # React contexts
│   └── LanguageContext.jsx
├── data/               # Menu data
│   └── menuData.js     # Restaurant and menu structure
├── test/               # Test setup
│   └── setup.js        # Testing configuration  
├── App.jsx             # Main application component
├── index.css           # Global styles with Tailwind
└── main.jsx            # Application entry point (Vite)
```

## Adding Menu Content

### Edit Menu Items

Menu content is managed in `src/data/menuData.js`. Each menu item includes:

- **Multi-language names and descriptions**
- **Pricing**
- **Customization options** (size, ice level, sweetness, extras)
- **Tags** (for filtering and badges)
- **Images** (placeholder paths for now)

### Add New Restaurant

To add a new restaurant, add an entry to the `restaurantData` object:

```javascript
"new-restaurant-id": {
  id: "new-restaurant-id",
  name: {
    en: "New Restaurant",
    th: "ร้านใหม่",
    zh: "新餐厅"
  },
  categories: [
    // Add categories and items
  ]
}
```

### Customization Options

Each menu item can include these customization options:

- **iceLevel**: `["no-ice", "less-ice", "normal-ice", "extra-ice"]`
- **sweetness**: `["no-sugar", "25%", "50%", "75%", "100%"]`
- **size**: `["regular", "large"]`
- **extras**: `["extra-oreo", "extra-jelly", "whipped-cream"]`

## Language Support

The website supports three languages:
- **English** (en) - Default
- **Thai** (th) - With Sarabun font
- **Chinese** (zh) - With Noto Sans SC font

### Adding Translations

All text content uses multi-language objects:

```javascript
name: {
  en: "English Name",
  th: "ชื่อภาษาไทย",
  zh: "中文名称"
}
```

## Styling

The project uses Tailwind CSS with custom configurations:

- **Primary color**: Orange theme matching food delivery apps
- **Typography**: Font families for Thai and Chinese languages
- **Components**: Pre-built classes for menu items, buttons, and badges
- **Responsive**: Mobile-first breakpoints

## Future Enhancements

This website is designed to be easily expandable:

1. **Multi-restaurant support** - Add restaurant selection
2. **Cart functionality** - Add items to cart and checkout
3. **Image upload system** - Replace placeholder images
4. **Admin panel** - Web interface for menu management
5. **Order placement** - Integration with ordering system
6. **User accounts** - Customer profiles and order history

## Technologies Used

- **React.js 18** - Frontend framework
- **Vite 5** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Fast unit testing framework
- **Google Fonts** - Sarabun (Thai) and Noto Sans SC (Chinese)
- **React Context API** - State management for language switching

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Android Chrome)
- Responsive design from 320px to desktop

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple devices and languages
5. Submit a pull request

## License

This project is licensed under the MIT License.
