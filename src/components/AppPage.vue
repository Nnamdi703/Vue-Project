<template>
    <div>
      <loading v-if="isLoading" />
      <ul v-else>
        <li v-for="repo in repositories" :key="repo.id" class="boxes">
          <a :href="repo.html_url" class="name">{{ repo.name }}</a>
          <p class="date">{{ repo.created_at }}</p>
          <p class="language">{{ repo.language === null ? "none" : repo.language }}</p>
          <p class="visibility">Visibility: Public</p>
        </li>
      </ul>
    </div>
    <div id="navo">
    <!-- <router-link to="/">Home</router-link> -->
    <router-link to='/PageSingle' class="next">Next</router-link>
  </div>
  <router-view/>
  <Footer/>
  </template>

<script>
import { ref, onMounted } from 'vue';
import Loading from './LoadingPage.vue';
import Footer from './FooTer.vue'

export default {
  name: 'Begin',
  components: {
    Loading,
    Footer
  },
  setup() {
    const repositories = ref([]);
    const isLoading = ref(true);

    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Nnamdi703/repos');
        const data = await response.json();
        repositories.value = data;
        isLoading.value = false;
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    onMounted(() => {
      fetchRepos();
    });

    return {
      repositories,
      isLoading
    };
  }
};
</script>