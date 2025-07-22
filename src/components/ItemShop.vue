<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="item-card">
    <img :src="product.image" :alt="product.title" class="item-image w-100" />
    <h2 class="item-title">{{ product.title }}</h2>
    <p class="item-description">{{ product.description }}</p>
    <div>
      <div class="item-price mb-2">${{ product.price }}</div>
      <button class="item-button">Add to cart</button>
    </div>
  </div>
</template>

<style scoped>
.item-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.item-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.item-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

.item-title {
  font-size: 1.2em;
  margin-top: 10px;
}

.item-description {
  font-size: 0.9em;
  margin-top: 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.item-price {
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 10px;
}

.item-button {
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-top: auto;
  cursor: pointer;
  border: none;
}
</style>
