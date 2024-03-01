<template>
    <div>
      <img :src="imageUrl" alt="Displayed Image" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    data() {
      return {
        imageUrl: '../', // Replace with the actual path to your image
      };
    },
  });
  </script>