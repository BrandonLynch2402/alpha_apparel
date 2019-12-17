<template>
<div>
  <div class="border-2 border-black mb-10" v-for="(item, index) in items" v-bind:key="index" v-on:click="shout">
    <img :src="item.img" alt="item" class="mb-5">
    <div class="px-3 mb-5">
      <p class="font-bold">{{ item.name }}</p>
      <p class="text-gray-700">{{ item.price }}</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Card',
  data() {
    return {
      items: []
    }
  },
  async created() {
    const res = await axios.get('/get_items');
    this.items = res.data;
  },
  methods: {
    shout: () => {
      console.log('working');
    }
  }
}
</script>

<style>

</style>