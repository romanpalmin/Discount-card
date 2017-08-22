<template>
  <div id="app">
    <header>
      <menu>
        <div class="menu ru">
          <nav class="pages-nav">
            <div class="pages-nav__item "><router-link to="/ru/1" class="link-page link">1</router-link></div>
            <div class="pages-nav__item "><router-link to="/ru/2" class="link-page link">2</router-link></div>
            <div class="pages-nav__item "><router-link to="/ru/3" class="link-page link">3</router-link></div>
            <div class="pages-nav__item "><router-link to="/ru/4" class="link-page link">4</router-link></div>
            <div class="pages-nav__item "><router-link to="/ru/5" class="link-page link">5</router-link></div>
          </nav>

        </div>
      </menu>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #dee1ee;
    .menu {
      .pages-nav{
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 5px 5px 5px 5px;
        text-align: center;
        /*background: #0e0f0f;*/
        .pages-nav__item {

          width: 15%;
          padding: 1em 1em 0 1em;
        }
      }
    }
  }
</style>

<script>
  export default {
    name: 'app'
  }
</script>


