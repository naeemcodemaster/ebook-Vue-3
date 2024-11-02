<!-- src/components/Hero.vue -->
<template>
    <section class="relative bg-gray-700 text-white">
      <!-- Background Image -->
      <img 
        src="../assets/banner.webp" 
        alt="Hero Background" 
        class="w-full h-[350px] object-cover opacity-70"
      />
      
      <!-- Text Overlay -->
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Ebook Library</h1>
        <p class="text-lg md:text-2xl mb-6">Discover the world of knowledge at your fingertips</p>
        <button class="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition-all">
          Explore Now
        </button>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Custom styles can be added here if needed */
  </style>
  