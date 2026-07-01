// ── Restaurant Menu Data ──────────────────────────────────────────────────────

export type MenuItem = { name: string; price: string }
export type MenuSection = {
  heading: string
  tag?: 'veg' | 'non-veg' | null
  items: MenuItem[]
}
export type MenuTab = {
  id: string
  label: string
  sections: MenuSection[]
}

export const menuTabs: MenuTab[] = [
  // ── 1. Breakfast & Beverages ──────────────────────────────────────────────
  {
    id: 'breakfast',
    label: 'Breakfast',
    sections: [
      {
        heading: 'Buffet Breakfast',
        tag: 'veg',
        items: [
          { name: 'Breakfast Buffet', price: '₹150 / pax' }
        ]
      },
      {
        heading: 'Hot & Pot',
        tag: 'veg',
        items: [
          { name: 'Tea', price: '₹20' },
          { name: 'Black Tea', price: '₹10' },
          { name: 'Coffee', price: '₹40' },
          { name: 'Milk', price: '₹40' }
        ]
      },
      {
        heading: 'Morning Bites',
        tag: 'veg',
        items: [
          { name: 'Omlet Single', price: '₹50' },
          { name: 'Omlet Double', price: '₹30' },
          { name: 'Boiled Egg Single', price: '₹40' },
          { name: 'Veg Sandwich (2 Slice)', price: '₹30' },
          { name: 'Toasted Bread (2 Slice)', price: '₹30' }
        ]
      }
    ]
  },

  // ── 2. Soups ──────────────────────────────────────────────────────────────
  {
    id: 'soups',
    label: 'Soups',
    sections: [
      {
        heading: 'Soups — Veg',
        tag: 'veg',
        items: [
          { name: 'Sweet Corn Soup', price: '₹195' },
          { name: 'Cream of Mushroom', price: '₹205' },
          { name: 'Tomato Soup', price: '₹195' },
          { name: 'Special Dal Soup', price: '₹195' },
          { name: 'Coriander Hot Soup', price: '₹195' },
          { name: 'Veg Clear Soup', price: '₹195' },
          { name: 'Hot & Sour Soup', price: '₹215' },
          { name: 'Manchow Soup', price: '₹215' }
        ]
      },
      {
        heading: 'Soups — Non Veg',
        tag: 'non-veg',
        items: [
          { name: 'Chicken Sweet Corn Soup', price: '₹235' },
          { name: 'Chicken Hot & Sour Soup', price: '₹235' },
          { name: 'Chicken Manchow Soup', price: '₹236' },
          { name: 'Chicken Clear Soup', price: '₹260' },
          { name: 'Special Soup', price: '₹265' },
          { name: 'Fish Dumpling Soup', price: '₹245' },
          { name: 'Cream of Chicken', price: '₹225' }
        ]
      }
    ]
  },

  // ── 3. Starters ──────────────────────────────────────────────────────────
  {
    id: 'starters',
    label: 'Starters',
    sections: [
      {
        heading: 'Veg Quick Bites',
        tag: 'veg',
        items: [
          { name: 'French Fries', price: '₹225' },
          { name: 'Veg Spring Roll', price: '₹310' },
          { name: 'Baby Corn Salt & Pepper', price: '₹300' },
          { name: 'Corn Salt & Pepper', price: '₹300' },
          { name: 'Crispy Vegetable', price: '₹300' },
          { name: 'Honey Chilli Potato', price: '₹290' },
          { name: 'Paneer 65', price: '₹280' },
          { name: 'Gobi 65', price: '₹265' },
          { name: 'Chilli Paneer', price: '₹310' },
          { name: 'Paneer Stick', price: '₹315' },
          { name: 'Shanghai Veg', price: '₹30' }
        ]
      },
      {
        heading: 'Non Veg Quick Bites',
        tag: 'non-veg',
        items: [
          { name: 'Spring Roll', price: '₹320' },
          { name: 'Chicken 65', price: '₹340' },
          { name: 'Chicken Lollipop', price: '₹350' },
          { name: 'Chicken Salt & Pepper', price: '₹340' },
          { name: 'Crispy Chicken', price: '₹340' },
          { name: 'Shanghai Chicken', price: '₹340' },
          { name: 'Special Crispy Thread Chicken', price: '₹340' },
          { name: 'Fish 65', price: '₹365' },
          { name: 'Fish Salt & Pepper', price: '₹362' },
          { name: 'Crispy Fish', price: '₹362' },
          { name: 'Shanghai Fish', price: '₹362' },
          { name: 'Prawn 65', price: '₹373' },
          { name: 'Crispy Prawn', price: '₹373' },
          { name: 'Prawn Salt & Pepper', price: '₹373' },
          { name: 'Prawn Koliwada', price: '₹373' },
          { name: 'Shanghai Prawn', price: '₹373' }
        ]
      },
      {
        heading: 'Tandoor — Veg',
        tag: 'veg',
        items: [
          { name: 'Veg Shashik', price: '₹299' },
          { name: 'Paneer Tikka Kabab', price: '₹310' },
          { name: 'Rim Jhim', price: '₹310' }
        ]
      },
      {
        heading: 'Tandoor — Non Veg',
        tag: 'non-veg',
        items: [
          { name: 'Tandoori Chicken (Half)', price: '₹410' },
          { name: 'Tandoori Chicken (Full)', price: '₹665' },
          { name: 'Chicken Tikka', price: '₹360' },
          { name: 'Reshmi Kabab', price: '₹360' },
          { name: 'Achari Tikka', price: '₹360' },
          { name: 'Hariyali Kabab', price: '₹360' },
          { name: 'Murg Malai Kabab', price: '₹395' },
          { name: 'Tangdi Kabab', price: '₹395' },
          { name: 'Afgani Kabab', price: '₹395' },
          { name: 'Fish Tikka', price: '₹395' }
        ]
      }
    ]
  },

  // ── 4. Main Course ────────────────────────────────────────────────────────
  {
    id: 'main',
    label: 'Main Course',
    sections: [
      {
        heading: 'Main Course — Veg',
        tag: 'veg',
        items: [
          { name: 'Dal Tadka', price: '₹225' },
          { name: 'Plain Dal', price: '₹225' },
          { name: 'Bhindy Fry', price: '₹236' },
          { name: 'Dal Butter Fry', price: '₹225' },
          { name: 'Mutter Paneer', price: '₹246' },
          { name: 'Dal Pajranga', price: '₹280' },
          { name: 'Dal Makhani', price: '₹280' },
          { name: 'Veg Korma', price: '₹280' },
          { name: 'Mix Veg', price: '₹270' },
          { name: 'Bhindi Masala', price: '₹280' },
          { name: 'Baby Corn Mushroom Masala', price: '₹280' },
          { name: 'Aloo Gobi', price: '₹280' },
          { name: 'Aloo Baja', price: '₹245' },
          { name: 'Aloo Bhujia', price: '₹280' },
          { name: 'Achari Sabji Masala', price: '₹290' },
          { name: 'Aloo Shimla Mirch Masala', price: '₹290' },
          { name: 'Paneer Butter Masala', price: '₹290' },
          { name: 'Kadai Paneer', price: '₹290' },
          { name: 'Paneer Jalfrezi', price: '₹290' },
          { name: 'Veg Jalfrezi', price: '₹290' },
          { name: 'Palak Paneer', price: '₹299' },
          { name: 'Methi Paneer', price: '₹299' },
          { name: 'Kadai Bhindi', price: '₹280' },
          { name: 'Kaju Mutter Paneer', price: '₹299' },
          { name: 'Paneer Tikka Masala', price: '₹299' },
          { name: 'Paneer Achari Tikka Masala', price: '₹299' }
        ]
      },
      {
        heading: 'Main Course — Chicken',
        tag: 'non-veg',
        items: [
          { name: 'Chicken Curry', price: '₹375' },
          { name: 'Chicken Masala', price: '₹375' },
          { name: 'Chicken Korma', price: '₹375' },
          { name: 'Punjabi Chicken Masala', price: '₹375' },
          { name: 'Butter Chicken', price: '₹375' },
          { name: 'Murgh Makhani', price: '₹375' },
          { name: 'Chicken Tikka Masala', price: '₹375' },
          { name: 'Chicken Barta', price: '₹375' },
          { name: 'Chicken Handi', price: '₹375' },
          { name: 'Chicken Do Pyaza', price: '₹375' },
          { name: 'Chicken Kadai', price: '₹375' },
          { name: 'Chicken Jalfrezi', price: '₹375' },
          { name: 'Chicken Vindaloo', price: '₹375' },
          { name: 'Chicken Balti', price: '₹375' },
          { name: 'Chicken Chettinad', price: '₹375' },
          { name: 'Chicken Rogan Josh', price: '₹375' },
          { name: 'Methi Murgh', price: '₹375' },
          { name: 'Kaju Murgh', price: '₹375' },
          { name: 'Egg Curry', price: '₹180' }
        ]
      },
      {
        heading: 'Main Course — Mutton',
        tag: 'non-veg',
        items: [
          { name: 'Mutton Rogan Josh', price: '₹470' },
          { name: 'Mutton Do Pyaza', price: '₹470' },
          { name: 'Mutton Handi', price: '₹470' },
          { name: 'Mutton Korma', price: '₹470' },
          { name: 'Mutton Shimla Mirch Masala', price: '₹470' },
          { name: 'Mutton Kadai', price: '₹470' },
          { name: 'Mutton Jalfrezi', price: '₹470' }
        ]
      }
    ]
  },

  // ── 5. Chinese ────────────────────────────────────────────────────────────
  {
    id: 'chinese',
    label: 'Chinese',
    sections: [
      {
        heading: 'Chinese — Veg',
        tag: 'veg',
        items: [
          { name: 'Gobi Manchurian', price: '₹290' },
          { name: 'Chilli Gobi', price: '₹290' },
          { name: 'Chilli Mushroom', price: '₹290' },
          { name: 'Garlic Mushroom', price: '₹290' },
          { name: 'Chilli Babycorn Dry', price: '₹290' },
          { name: 'Mix Veg Manchurian', price: '₹290' }
        ]
      },
      {
        heading: 'Chinese — Non Veg',
        tag: 'non-veg',
        items: [
          { name: 'Chilli Chicken', price: '₹375' },
          { name: 'Ginger Chicken', price: '₹375' },
          { name: 'Garlic Chicken', price: '₹375' },
          { name: 'Pan Fry Chicken', price: '₹375' },
          { name: 'Sesame Chicken', price: '₹375' },
          { name: 'Chicken Manchurian', price: '₹375' }
        ]
      },
      {
        heading: 'Chinese — Fish',
        tag: 'non-veg',
        items: [
          { name: 'Chilli Fish', price: '₹370' },
          { name: 'Ginger Fish', price: '₹370' },
          { name: 'Garlic Fish', price: '₹370' },
          { name: 'Pan Fry Fish', price: '₹370' },
          { name: 'Sesame Fish', price: '₹370' },
          { name: 'Fish Manchurian', price: '₹370' },
          { name: 'Fish Hot Garlic Sauce', price: '₹370' },
          { name: 'Sweet & Sour Fish', price: '₹370' }
        ]
      },
      {
        heading: 'Chinese — Prawn',
        tag: 'non-veg',
        items: [
          { name: 'Chilli Prawn', price: '₹385' },
          { name: 'Ginger Prawn', price: '₹385' },
          { name: 'Garlic Prawn', price: '₹385' },
          { name: 'Sesame Prawn', price: '₹385' },
          { name: 'Prawn Manchurian', price: '₹385' },
          { name: 'Prawn Hot Garlic Sauce', price: '₹385' },
          { name: 'Sweet & Sour Prawn', price: '₹385' }
        ]
      }
    ]
  },

  // ── 6. Fish & Seafood ─────────────────────────────────────────────────────
  {
    id: 'seafood',
    label: 'Fish & Seafood',
    sections: [
      {
        heading: 'Fish — Indian',
        tag: 'non-veg',
        items: [
          { name: 'Fish Fry', price: '₹370' },
          { name: 'Tawa Fish Fry', price: '₹370' },
          { name: 'Fish Curry', price: '₹370' },
          { name: 'Goan Fish Curry', price: '₹370' },
          { name: 'Fish Tawa Masala', price: '₹370' },
          { name: 'Fish Kadai', price: '₹370' },
          { name: 'Fish Kolli Wada', price: '₹370' },
          { name: 'Chettinad Kalamari', price: '₹370' }
        ]
      },
      {
        heading: 'Prawn — Indian',
        tag: 'non-veg',
        items: [
          { name: 'Prawn Fry', price: '₹370' },
          { name: 'Prawn Curry', price: '₹385' },
          { name: 'Goan Prawn Curry', price: '₹385' },
          { name: 'Prawn Tawa Masala', price: '₹385' },
          { name: 'Prawn Kadai', price: '₹385' },
          { name: 'Prawn Jalfrezi', price: '₹385' },
          { name: 'Achari Prawn Masala', price: '₹385' }
        ]
      }
    ]
  },

  // ── 7. Rice & Biryani ─────────────────────────────────────────────────────
  {
    id: 'rice',
    label: 'Rice & Biryani',
    sections: [
      {
        heading: 'Rice — Veg',
        tag: 'veg',
        items: [
          { name: 'Steam Rice', price: '₹130' },
          { name: 'Curd Rice', price: '₹165' },
          { name: 'Veg Biryani', price: '₹160' },
          { name: 'Veg Pulao', price: '₹215' },
          { name: 'Green Peas Pulao', price: '₹210' },
          { name: 'Paneer Pulao', price: '₹215' },
          { name: 'Jeera Rice', price: '₹205' },
          { name: 'Ghee Rice', price: '₹205' },
          { name: 'Kashmiri Pulao', price: '₹310' },
          { name: 'Kichdi', price: '₹215' }
        ]
      },
      {
        heading: 'Rice — Non Veg',
        tag: 'non-veg',
        items: [
          { name: 'Egg Biryani', price: '₹160' },
          { name: 'Chicken Biryani', price: '₹170' },
          { name: 'Fish Biryani', price: '₹320' },
          { name: 'Prawn Biryani', price: '₹365' },
          { name: 'Mutton Biryani', price: '₹365' }
        ]
      },
      {
        heading: 'Chinese Rice — Veg',
        tag: 'veg',
        items: [
          { name: 'Veg Fried Rice', price: '₹236' },
          { name: 'Garlic Fried Rice', price: '₹236' },
          { name: 'Veg Sez Fried Rice', price: '₹260' },
          { name: 'Veg Triple Fried Rice', price: '₹290' }
        ]
      },
      {
        heading: 'Chinese Rice — Non Veg',
        tag: 'non-veg',
        items: [
          { name: 'Chicken Fried Rice', price: '₹270' },
          { name: 'Garlic Fried Rice', price: '₹270' },
          { name: 'Chicken Garlic Fried Rice', price: '₹280' },
          { name: 'Chicken Sez Fried Rice', price: '₹280' },
          { name: 'Prawn Fried Rice', price: '₹290' },
          { name: 'Egg Fried Rice', price: '₹250' },
          { name: 'Mix Non Veg Fried Rice', price: '₹320' }
        ]
      }
    ]
  },

  // ── 8. Breads ─────────────────────────────────────────────────────────────
  {
    id: 'breads',
    label: 'Breads',
    sections: [
      {
        heading: 'Indian Breads',
        tag: 'veg',
        items: [
          { name: 'Plain Naan', price: '₹70' },
          { name: 'Folding Butter Naan', price: '₹99' },
          { name: 'Butter Naan', price: '₹80' },
          { name: 'Garlic Naan', price: '₹90' },
          { name: 'Cheese Naan', price: '₹99' },
          { name: 'Cheese Garlic Naan', price: '₹110' },
          { name: 'Stuff Kulcha', price: '₹100' },
          { name: 'Plain Kulcha', price: '₹80' },
          { name: 'Tandoori Lacha Paratha', price: '₹80' },
          { name: 'Tandoori Paratha', price: '₹80' },
          { name: 'Aloo Paratha', price: '₹90' },
          { name: 'Gobi Paratha', price: '₹90' },
          { name: 'Paneer Paratha', price: '₹99' },
          { name: 'Methi Paratha', price: '₹90' },
          { name: 'Mint Paratha', price: '₹99' },
          { name: 'Fulka', price: '₹30' },
          { name: 'Tandoori Roti', price: '₹70' },
          { name: 'Tandoori Butter Roti', price: '₹80' }
        ]
      }
    ]
  },

  // ── 9. Salads & Sides ─────────────────────────────────────────────────────
  {
    id: 'salads',
    label: 'Salads',
    sections: [
      {
        heading: 'Salads & Accompaniments',
        tag: 'veg',
        items: [
          { name: 'Green Salad', price: '₹190' },
          { name: 'Curd', price: '₹50' },
          { name: 'Mix Raita', price: '₹130' },
          { name: 'Masala Papad', price: '₹105' },
          { name: 'Roasted Papad', price: '₹70' },
          { name: 'Russian Salad', price: '₹215' },
          { name: 'King Salad', price: '₹280' }
        ]
      }
    ]
  }
]

// ── Restaurant timings ────────────────────────────────────────────────────────
export const restaurantTimings = [
  { label: 'Breakfast', time: '8:15 AM – 9:30 AM' },
  { label: 'Lunch', time: '12 Noon – 2:30 PM' },
  { label: 'Dinner', time: '8:00 PM – 9:30 PM' }
]
