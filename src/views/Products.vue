<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ItemShop from '../components/ItemShop.vue';

interface Product {
  id: number;
  [key: string]: any;
}

const products = ref<Product[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products.value = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
</script>

<template>
  <div class="products-page">
    <h1 class="text-center">Productos</h1>
    <div class="products-grid text-center d-flex justify-content-center flex-wrap">
      <ItemShop v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style>
.products-page {
  padding: 20px;
  background-color: #f8f9fa;
}

.products-page h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
