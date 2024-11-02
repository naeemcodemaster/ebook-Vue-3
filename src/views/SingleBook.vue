<template>
    <div class="flex p-6 bg-gray-100">
      <div class="w-1/3">
        <img :src="book.coverImage" alt="Book Cover" class="rounded shadow-lg" />
      </div>
      <div class="w-2/3 pl-4">
        <h2 class="text-2xl font-bold">{{ book.title }}</h2>
        <p class="text-lg mt-2">Author: {{ book?.author?.name }}</p>
        <p class="mt-4">{{ book.description }}</p>
        <p class="mt-4"><strong>Genre:</strong> {{ book.genre }}</p>
        <p class="mt-4"><strong>Created At:</strong> {{ new Date(book.createdAt).toLocaleDateString() }}</p>
        <p class="mt-4"><strong>Updated At:</strong> {{ new Date(book.updatedAt).toLocaleDateString() }}</p>
        <a :href="book.file" target="_blank" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Read Book
        </a>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { bookStore } from '../stores/BookStore';
  
  export default {
    setup() {
      const route = useRoute();
      const bookId = route.params.id; // Get the book ID from the route
      const bookStoreObj = bookStore();
      const book = ref({}); // Initialize a reactive book object
  
      const fetchBook = async () => {
        book.value = await bookStoreObj.fetchBookDetails(bookId); // Fetch book details using the store method
      };
  
      onMounted(() => {
        fetchBook(); // Fetch the book details when the component is mounted
      });
  
      return { book };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here if needed */
  </style>
  