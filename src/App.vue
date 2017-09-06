<template>
  <div id="app">
    <header class="header">
      <menu>
        <div class="menu ru">
          <nav class="pages-nav">
            <div class="pages-nav__item ">
              <router-link to="/ru/InputPassword" class="link-page link">Password</router-link>
            </div>
            <div class="pages-nav__item ">
              <router-link to="/ru/InputForm" class="link-page link">Form</router-link>
            </div>
            <div class="pages-nav__item ">
              <router-link to="/ru/Thanks" class="link-page link">Thanks</router-link>
            </div>
            <div class="pages-nav__item ">
              <router-link to="/ru/InputSMS" class="link-page link">SMS</router-link>
            </div>
           <!-- <div class="pages-nav__item ">
              <router-link to="/ru/4" class="link-page link">4</router-link>
            </div>
            <div class="pages-nav__item ">
              <router-link to="/ru/5" class="link-page link">5</router-link>
            </div>-->
          </nav>
        </div>
      </menu>
    </header>
    <content class="content">
      <div class="header-title">Карта постоянного гостя — 10%</div>
      <div class="inner-page">
        <div class="bg"></div>
        <router-view></router-view>
      </div>
    </content>
  </div>
</template>

<style lang="less">
  @font-face {
    font-family: IntroHeader; /* Гарнитура шрифта */
    //src: url(http://10.100.50.248/fonts/IntroRust-Base.otf); /* Путь к файлу со шрифтом */
    //src: url(../static/css/fonts/IntroRust-Base.otf); /* Путь к файлу со шрифтом */
    src: url(http://10.10.182.11/fonts/IntroRust-Base.otf); /* Путь к файлу со шрифтом */
  }

  body {
    background: url("http://10.10.182.11/images/background.jpg") #1d1e21 center no-repeat;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #dee1ee;

    .header {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 9999;
      background-color: black;
      .menu {
        /*display: none;*/
        .pages-nav {
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
            .link {
              display: block;
              color: #cecece;
              padding-top: 10px;
              padding-bottom: 10px;
            }
          }
        }
      }
    }
    .content {
      .header-title {
        font-size: xx-large;
        font-family: IntroHeader;
        font-weight: 700;
        position: relative;
        letter-spacing: 1px;
        background-color: #ffffff;
        display: block;
        height: 80px;
        line-height: 80px;
        border-radius: 15px 15px 0 0;
        padding-top: 10px;
        color: #484848;
      }
      width: 80%;
      min-height: 900px;
      display: block;
      margin: 30px auto;
      border-radius: 4px;
      color: black;
      .inner-page {
        display: block;
        min-height: 1100px;
        border-radius: 0 0 15px 15px;
        position: relative;
        border: 5px solid white;
        color: white;
        .bg {
          background: url("http://10.10.182.11/images/bg-dark.png") white;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          /*opacity: 0.4;*/
          background-size: cover;
        }
      }
    }

  }
</style>

<script>
  export default {
    name: 'app',
  }
</script>


