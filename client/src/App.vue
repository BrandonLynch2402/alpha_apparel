<template>
  <div class="container mx-auto">
    <nav class="flex justify-around mt-20 mb-1 text-teal-900 py-2 px-1">
      <a href="#">Home</a>
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Contact</a>
    </nav>
    <Card />
  </div>
</template>

<script>
// import Home from './components/Home.vue'
import Card from './components/Card.vue'
import './assets/css/main.css'

export default {
  name: 'app',
  components: {
    // Home,
    Card
  }
}
</script>

<style>

</style>
