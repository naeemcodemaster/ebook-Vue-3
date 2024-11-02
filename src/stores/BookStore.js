import { ref } from 'vue';
import { defineStore } from 'pinia';



export const bookStore = defineStore('bookStore', () => {
  const books = ref([]); // Ensure books is reactive
  const isLoading = ref(false);
  const error = ref(null);
  const lastFetched = ref(null) // Track the last fetch timestamp

  // Single Book 
  const bookDetailsCache = ref({});


  const fetchBooks = async () => {
    const cacheDuration = 1 * 60 * 1000; // Cache duration set to 5 minutes

     // Skip fetch if books are already loaded
     if (books.value.length > 0 && (Date.now() - lastFetched.value < cacheDuration)) {
      console.log("Using cached books data")
      return
    }

    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('https://node-type-scriptebook.vercel.app/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      books.value = data.books; // Update books.value to trigger reactivity
      lastFetched.value = Date.now() // Update fetch timestamp

      // console.log('Fetched books:', data.books);
    } catch (err) {
      error.value = err.message || 'Something went wrong';
    } finally {
      isLoading.value = false;
    }
  };

  const fetchBookDetails = async (bookId) => {
    if (bookDetailsCache.value[bookId]) {
      // Return cached data if it exists
      return bookDetailsCache.value[bookId];
    }

    isLoading.value = true;
    try {
      const response = await fetch(`https://node-type-scriptebook.vercel.app/api/books/${bookId}`);
      if (!response.ok) throw new Error('Failed to fetch book details');
      const bookData = await response.json();
      bookDetailsCache.value[bookId] = bookData; // Cache the book details
      return bookData;
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  return { books, isLoading, error, fetchBooks,fetchBookDetails };
});
