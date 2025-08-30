# SoiMenu - Online Ordering Platform

A modern, scalable online ordering platform built with React.js, Vite, and Tailwind CSS. SoiMenu serves multiple restaurants with multi-language support, cart functionality, and restaurant management features.

## Platform Overview

This is a **multi-restaurant online ordering platform** that provides:
- **Customer Interface**: Browse menus, customize orders, manage cart, place orders
- **Restaurant Management**: Order processing interface with language selection
- **Platform Features**: Multi-language support, responsive design, scalable architecture

### Current Restaurant: My Smoothies (มาย สมูทตี้)
SoiMenu currently features "My Smoothies" as a demonstration restaurant, but is designed to support unlimited restaurants.

## Key Features

### 🛒 **Complete Ordering System**
- **Shopping Cart**: Add items, adjust quantities, view totals
- **Order Customization**: Ice level, sweetness preferences
- **Multi-language Cart**: Supports Thai, English, Chinese
- **Order Finalization**: Restaurant owner interface with language selection

### 🌐 **Multi-Language Platform**
- **Default Language**: Thai (th)
- **Supported Languages**: Thai, English, Chinese
- **Dynamic Translation**: All content translates in real-time
- **Restaurant Interface**: Language selection for order display

### 🏪 **Multi-Restaurant Architecture**
- **Scalable Design**: Easy to add new restaurants
- **Restaurant-Specific**: Individual menus, branding, settings
- **Centralized Platform**: Unified ordering system for all restaurants
- **Flexible Menu Structure**: Categories, items, customizations

### 📱 **Mobile-First Design**
- **Responsive Layout**: Optimized for all screen sizes
- **Touch-Friendly**: Large buttons, easy navigation
- **Fast Performance**: Powered by Vite for instant loading

### 🎨 **Professional Branding**
- **Platform Logo**: Represents the ordering system
- **Consistent Design**: Orange theme throughout
- **Restaurant Branding**: Individual restaurant names and details

## System Architecture

```
SoiMenu Platform
├── Customer Interface
│   ├── Restaurant Menu Browsing
│   ├── Item Customization
│   ├── Shopping Cart Management
│   └── Order Placement
├── Restaurant Management
│   ├── Order Processing Interface
│   ├── Multi-language Order Display
│   └── Order Status Management
└── Platform Administration
    ├── Restaurant Management
    ├── Menu Configuration
    └── System Settings
```

## Current Implementation

### Restaurant: My Smoothies
- **Categories**: Milk & Tea, Smoothies
- **Pricing**: ฿35 for all items (Thai Baht)
- **Customizations**: Ice level, sweetness (no size options, no add-ons)
- **Languages**: Thai (default), English, Chinese

### Platform Features Implemented
- ✅ Multi-restaurant data structure
- ✅ Complete cart functionality
- ✅ Order finalization interface
- ✅ Language switching
- ✅ Responsive design
- ✅ Restaurant owner interface

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add SoiMenu Logo**:
   - Save your logo as `logo.png` in the `public/` directory
   - The logo represents the SoiMenu platform

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open browser** to `http://localhost:3000`

## Available Scripts

- **`npm run dev`** - Start development server with HMR
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm test`** - Run tests with Vitest

## Project Structure

```
src/
├── components/              # React components
│   ├── CategorySidebar.jsx  # Menu category navigation
│   ├── CustomizationModal.jsx # Order customization
│   ├── MenuItem.jsx         # Individual menu items
│   ├── Cart.jsx            # Shopping cart interface
│   ├── FinalizeOrder.jsx   # Restaurant owner interface
│   └── LanguageSwitcher.jsx # Language selection
├── contexts/               # React contexts
│   ├── LanguageContext.jsx # Multi-language support
│   └── CartContext.jsx     # Cart state management
├── data/                   # Platform data
│   └── menuData.js        # Restaurant and menu data
├── App.jsx                # Main application
├── index.css              # Global styles
└── main.jsx               # Application entry point
```

## Adding New Restaurants

To add a new restaurant to SoiMenu:

1. **Add restaurant data** in `src/data/menuData.js`:

```javascript
"restaurant-id": {
  id: "restaurant-id",
  name: {
    en: "Restaurant Name",
    th: "ชื่อร้านภาษาไทย",
    zh: "餐厅中文名"
  },
  categories: [
    {
      id: "category-id",
      name: {
        en: "Category Name",
        th: "หมวดหมู่",
        zh: "类别"
      },
      items: [
        // Menu items
      ]
    }
  ]
}
```

2. **Update restaurant selection** in `App.jsx` (future enhancement)
3. **Configure restaurant-specific settings** (pricing, customizations)

## Menu Item Structure

Each menu item includes:

```javascript
{
  id: "item-id",
  name: { en: "Name", th: "ชื่อ", zh: "名称" },
  price: 35, // Thai Baht
  image: "/images/restaurant/item.png",
  description: { en: "Description", th: "คำอธิบาย", zh: "描述" },
  customization: {
    iceLevel: ["no-ice", "less-ice", "normal-ice", "extra-ice"],
    sweetness: ["no-sugar", "25%", "50%", "75%", "100%"],
    size: ["regular"] // Currently only regular size
  },
  tags: ["tag1", "tag2"]
}
```

## Platform Configuration

### Language Settings
- **Default Language**: Thai (`th`)
- **Supported Languages**: `['en', 'th', 'zh']`
- **Font Support**: Sarabun (Thai), Noto Sans SC (Chinese)

### Currency Settings
- **Primary Currency**: Thai Baht (฿)
- **All Pricing**: Displayed in ฿ regardless of language

### Order System
- **Cart Management**: Add, remove, adjust quantities
- **Order Processing**: Restaurant interface with language selection
- **Order Display**: Customizable language for restaurant staff

## Future Platform Enhancements

### Phase 1: Multi-Restaurant Support
- [ ] Restaurant selection interface
- [ ] Restaurant-specific branding
- [ ] Individual restaurant dashboards

### Phase 2: Advanced Features
- [ ] User accounts and authentication
- [ ] Order history and tracking
- [ ] Payment integration
- [ ] Delivery management

### Phase 3: Platform Administration
- [ ] Restaurant onboarding system
- [ ] Menu management interface
- [ ] Analytics and reporting
- [ ] Commission and billing system

## Technologies Used

- **React.js 18** - Frontend framework
- **Vite 5** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Context API** - State management
- **Vitest** - Testing framework
- **Google Fonts** - Multi-language typography

## SoiMenu Logo

The SoiMenu logo (saved as `public/logo.png`) represents the ordering platform and appears in:
- Header navigation
- Footer branding
- Browser favicon
- System identification

## Contributing

1. Fork the repository
2. Create a feature branch
3. Implement new restaurants or features
4. Test across all languages and devices
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**SoiMenu Status**: Currently serving 1 restaurant (My Smoothies)  
**Target**: Multi-restaurant online ordering platform  
**Languages**: Thai (default), English, Chinese  
**Currency**: Thai Baht (฿)