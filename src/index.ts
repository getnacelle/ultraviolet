import dotenv from 'dotenv';
import express from 'express';
import {
  productsRouter,
  productContentRouter,
  productMediaRouter,
  productMetafieldsRouter,
  variantsRouter,
  variantContentRouter,
  variantMediaRouter,
  variantMetafieldsRouter,
  webhookConfigRouter,
} from './api/v1/index';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/product-content', productContentRouter);
app.use('/api/v1/product-metafields', productMetafieldsRouter);
app.use('/api/v1/product-media', productMediaRouter);
app.use('/api/v1/variants', variantsRouter);
app.use('/api/v1/variant-content', variantContentRouter);
app.use('/api/v1/variant-media', variantMediaRouter);
app.use('/api/v1/variant-metafields', variantMetafieldsRouter);
app.use('/api/v1/webhook-configs', webhookConfigRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`REST API server ready at: http://localhost:${PORT}`));
