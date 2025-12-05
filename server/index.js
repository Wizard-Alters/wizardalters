import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

// Get product by Stripe product ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await stripe.products.retrieve(req.params.id);
    
    // Fetch the price for this product
    const prices = await stripe.prices.list({
      product: req.params.id,
      limit: 1,
      active: true,
    });

    res.json({
      id: product.id,
      name: product.name,
      description: product.description,
      images: product.images,
      price: prices.data.length > 0 ? prices.data[0].unit_amount / 100 : null,
      currency: prices.data.length > 0 ? prices.data[0].currency : 'usd',
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Stripe product API listening on http://localhost:${PORT}`);
});
