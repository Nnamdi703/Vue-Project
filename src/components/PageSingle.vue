<template>
    <div>
      <loading-page v-if="isLoading" />
      <section v-else>
        <div v-if="repositories.length > 0">
          <div class="boxes-2">
            <h2 class="name-2">{{ currentRepo.name }}</h2>
            <p class="date-2">Start date: {{ formatDate(currentRepo.created_at) }}</p>
            <p class="language-2">{{ currentRepo.language === null ? "none" : currentRepo.language }}</p>
            <p class="visibility-2">Visibility: Public</p>
            <a :href="currentRepo.html_url" class="lin-2">View on GitHub</a>
          </div>
  
          <div class="buttons">
            <button @click="handlePrevPage" :disabled="currentPage === 0" class="next-2">Prev</button>
            <button @click="handleNextPage" :disabled="currentPage === repositories.length - 1" class="view-2">Next</button>
          </div>
        </div>
        <div v-else>
          <p>No repositories found.</p>
        </div>
        <div class="las-2">
    <router-link to="/" class="back">Home</router-link>
  </div>
  <router-view/>
      </section>
    </div>
    <Footer />
  </template>
  
  <script>
  import { ref, onMounted, computed } from 'vue';
  import LoadingPage from './LoadingPage.vue';
  import Footer from './FooTer.vue'
  
  export default {
    name: 'PageSingle',
    components: {
      LoadingPage,
      Footer
    },
    setup() {
      const repositories = ref([]);
      const currentPage = ref(0);
      const isLoading = ref(true);
  
      const fetchRepos = async () => {
        try {
          const response = await fetch('https://api.github.com/users/Nnamdi703/repos');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          repositories.value = data;
          console.log('Fetched repositories:', data); // Debugging log
        } catch (error) {
          console.error('Error fetching repositories:', error);
        } finally {
          isLoading.value = false;
        }
      };
  
      const handlePrevPage = () => {
        if (currentPage.value > 0) {
          currentPage.value -= 1;
        }
      };
  
      const handleNextPage = () => {
        if (currentPage.value < repositories.value.length - 1) {
          currentPage.value += 1;
        }
      };
  
      const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };
  
      onMounted(() => {
        fetchRepos();
      });
  
      const currentRepo = computed(() => repositories.value[currentPage.value]);
  
      return {
        repositories,
        currentPage,
        isLoading,
        handlePrevPage,
        handleNextPage,
        formatDate,
        currentRepo
      };
    }
  };
  </script>