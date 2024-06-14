const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const products = [
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'IGNITE V50',
    price: 25999,
    image: 'https://hqdbrasil.com.br/cdn/shop/files/ignitev50grapeuvaice_cf13fbf9-2d17-41c9-a056-16b5c9d0f8e7.webp?v=1697668107',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...',
    category: 'office',
    shipping: true,
    featured: true,
  },
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'IGNITE V80',
    price: 25999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvAemijmzwfKGyJAUUk1wHUlqcsYDvnkYYQ&s',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...',
    category: 'office',
    shipping: true,
    featured: true,
  },
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'IGNITE V150',
    price: 25999,
    image: 'https://podzvape.com/wp-content/uploads/2024/05/pod-descartavel-ignite-v150-15000-puffs-podzvape-1.jpg',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
    company: 'marcos',
    description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf...',
    category: 'office',
    shipping: true,
    featured: true,
  },
  // Add the rest of the products here
];

app.get('/api/products', (req, res) => {
  console.log('Received a request for products');
  res.json(products);
});

app.listen(port, (err) => {
  if (err) {
    console.error('Failed to start server:', err);
  } else {
    console.log(`Server is running on http://localhost:${port}`);
  }
});
