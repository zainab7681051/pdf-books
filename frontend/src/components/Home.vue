<template>
  <!--========== HOME ==========-->
  <section class="home" id="home">
      <div class="home__container bd-container bd-grid">
          <div class="home__data">
              <h1 class="home__title">Tasty Pizza</h1>
              <h2 class="home__subtitle">Try the best Pizza of <br> the week.</h2>
              <a @click="this.$router.push('/menu')" class="button" style="cursor: pointer;">View Menu</a>
          </div>

          <img src="../../public/assets/img/home.png" alt="" class="home__img">
      </div>
  </section>
</template>

<script>
  
export default {
  name: 'home',
  data:()=>({
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
