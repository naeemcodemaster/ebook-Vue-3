
<script setup>
import { onMounted, computed   } from 'vue'
import { bookStore } from '../stores/BookStore'
import { useRouter } from 'vue-router'

const router = useRouter()

// Fetch books on component mount
const bookStoreObj = bookStore();
const { error, fetchBooks } = bookStoreObj;

// Wrap books in computed to enforce reactivity
const books = computed(() => bookStoreObj.books);
const loader = computed(()=>bookStoreObj.isLoading)


onMounted(() => {
  fetchBooks();
});

  const goToDetails = (id) => {
    router.push(`/book/${id}`)
  }
</script>
<template>
    <section class="p-6 bg-gray-100 mt-10">
    <div v-if="loader" class="text-center text-gray-500">Loading books...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <p>Total Books: {{ books.length }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="book in books" :key="book._id" class="bg-white shadow-md rounded-lg overflow-hidden">
          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ book.title }}</h2>
            <p class="text-gray-600 mt-2">Author: {{ book.author.name }}</p>
            <a :href="book.file" target="_blank" class="block text-blue-500 mt-4">Read Book</a>
            <button @click="goToDetails(book._id)" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  
 
  
  <style scoped>
 
  </style>
  