<!-- src/components/Navbar.vue -->
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'


const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-gray-800 text-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      

      <div class="text-xl font-bold">
        <RouterLink to="/">eBook Vue3</RouterLink>
      </div>

   
      <nav class="hidden md:flex space-x-6">
        <RouterLink to="/" class="hover:text-gray-300">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-gray-300">About</RouterLink>
        <RouterLink to="/contact" class="hover:text-gray-300">Contact</RouterLink>
      </nav>

 
      <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden focus:outline-none">
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
       
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

  
    <transition name="slide-fade">
      <nav v-if="isMobileMenuOpen" class="md:hidden bg-gray-600">
        <ul class="flex flex-col items-center space-y-4 py-4">
          <li>
            <RouterLink to="/" class="hover:text-gray-300" @click="isMobileMenuOpen = false">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-gray-300" @click="isMobileMenuOpen = false">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-gray-300" @click="isMobileMenuOpen = false">Contact</RouterLink>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style scoped>

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
