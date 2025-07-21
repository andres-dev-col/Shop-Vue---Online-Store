<template>
  <div class="home">
    <section class="hero">
      <h1>Bienvenido a Shop Vue</h1>
      <p>
        Descubre las últimas tendencias en moda y accesorios. Ofrecemos productos
        de alta calidad con un servicio excepcional.
      </p>
      <router-link to="/products" class="button">
        Ver productos
      </router-link>
    </section>

    <section class="featured-categories">
      <h2>Categorías Destacadas</h2>
      <div class="categories">
        <div class="category">
          <img src="https://picsum.photos/150?random=1" alt="Ropa de Hombre" />
          <h3>Ropa de Hombre</h3>
        </div>
        <div class="category">
          <img src="https://picsum.photos/150?random=2" alt="Ropa de Mujer" />
          <h3>Ropa de Mujer</h3>
        </div>
        <div class="category">
          <img src="https://picsum.photos/150?random=3" alt="Accesorios" />
          <h3>Accesorios</h3>
        </div>
      </div>
    </section>
  </div>
</template>
