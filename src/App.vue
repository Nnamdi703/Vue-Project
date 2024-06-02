<template>
  <navbar />
  <!-- <div id="navo">
    <router-link to="/">Home</router-link>
    <router-link to='/PageSingle'>Back</router-link>
  </div> -->
  <router-view/>
  
  <!-- <AppPage />
  <PageSingle  /> -->
</template>

<script>
  import navbar from './components/NavBar.vue';
  // import AppPage from './components/AppPage.vue';
  // import PageSingle from './components/PageSingle.vue';
  // import ErrorP from './components/ErrPage.vue'

  export default {
    components:{
      navbar,
      // AppPage,
      // PageSingle
      // ErrorP
    }
  }
</script>

