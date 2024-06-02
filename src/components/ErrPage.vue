<template>
    <div>
        <section class="error-page">
        <h1 class="oops">Oops!</h1>
        <p class="Not-found">Not Found,The page you are looking for does<br/> <span class="span"> not exist</span>.</p>
        <p class="err">404-Error</p>
        <router-link to="/" class="error-bac">Home</router-link>
        </section>
    </div>
</template>

<script>
export default {
  name: 'ErrorP'
};
</script>