# Restaurant Images Organization

This directory contains images for all restaurants in the system. Each restaurant has its own dedicated folder.

## Folder Structure

```
📁 public/images/
├── 📁 drinking-shop/          # Current drink shop
│   ├── 🍹 thai-tea.jpg
│   ├── 🍹 cocoa.jpg
│   ├── 🥤 banana-smoothie.jpg
│   └── ... (other drink images)
├── 📁 restaurant-template/    # Template/example folder
└── 📁 {restaurant-id}/        # Future restaurants
    ├── 🍕 pizza-margherita.jpg
    ├── 🍝 spaghetti-bolognese.jpg
    └── ... (restaurant-specific images)
```

## Naming Convention

### Folder Names
- Use the exact `restaurant.id` from menuData.js
- Lowercase with hyphens (e.g., `thai-kitchen`, `pizza-palace`)

### Image Names  
- Use the exact `item.id` from menuData.js
- Format: `{item-id}.{extension}`
- Lowercase with hyphens (e.g., `thai-tea.jpg`, `chicken-pad-thai.png`)

## Example Restaurant Setup

### 1. Drinking Shop (Current - 36 items)
```
📁 drinking-shop/
# Milk & Tea (18 items) - PNG format
├── fresh-milk-blended.png     ├── fresh-milk-kitkat.png
├── cocoa.png                  ├── mocha-milk.png  
├── chocolate.png              ├── red-lime-soda.png
├── thai-tea.png               ├── lemon-tea.png
├── green-tea.png              ├── milo.png
├── nescafe.png                
├── pink-milk.png              # Smoothies (18 items) - PNG format
├── cocoa-oreo.png             ├── orange-smoothie.png
├── fresh-milk-oreo.png        ├── banana-smoothie.png
├── fresh-milk-pipo-jelly.png  ├── watermelon-smoothie.png
├── yogurt-pipo-jelly.png      ├── lime-honey.png
├── fresh-milk-stawberry.png   ├── lime-smoothie.png
└── ovaltine-volcano.png       ├── apple-smoothie.png
                               ├── strawberry-smoothie.png
                               ├── strawberry-milk-smoothie.png
                               ├── banana-cocoa-milk.png
                               ├── banana-oreo-smoothie.png
                               ├── grape-smoothie.png
                               ├── kiwi-smoothie.png
                               ├── passionfruit-smoothie.png
                               ├── blueberry-smoothie.png
                               ├── coconut-smoothie.png
                               ├── strawberry-yogurt-smoothie.png
                               ├── butterfly-pea-milk.png
                               └── banana-caramel-smoothie.png
```

### 2. Italian Restaurant (Example)
```
📁 italian-kitchen/
├── margherita-pizza.jpg
├── carbonara-pasta.jpg
├── tiramisu.jpg
└── cappuccino.jpg
```

### 3. Thai Restaurant (Example)
```
📁 thai-garden/
├── pad-thai.jpg
├── green-curry.jpg
├── mango-sticky-rice.jpg
└── thai-iced-tea.jpg
```

### 4. Fast Food (Example)
```
📁 burger-joint/
├── classic-burger.jpg
├── chicken-sandwich.jpg
├── french-fries.jpg
└── milkshake.jpg
```

## Menu Data Integration

In `src/data/menuData.js`, use restaurant-specific paths:

```javascript
export const restaurantData = {
  "drinking-shop": {
    // ... restaurant info
    categories: [
      {
        items: [
          {
            id: "thai-tea",
            image: "/images/drinking-shop/thai-tea.jpg",  // ← Restaurant-specific path
            // ... other item data
          }
        ]
      }
    ]
  },
  
  "italian-kitchen": {
    // ... restaurant info  
    categories: [
      {
        items: [
          {
            id: "margherita-pizza",
            image: "/images/italian-kitchen/margherita-pizza.jpg",  // ← Different restaurant path
            // ... other item data
          }
        ]
      }
    ]
  }
};
```

## Image Specifications

- **Dimensions**: 400x400px (square)
- **File Size**: Under 100KB
- **Formats**: .jpg, .png, .webp
- **Quality**: 80-90% JPEG
- **Background**: Clean, preferably white

## Adding a New Restaurant

1. **Create folder**: `public/images/{restaurant-id}/`
2. **Add images**: Following the naming convention above
3. **Update menu data**: Use correct image paths
4. **Test**: Verify images load in the browser
