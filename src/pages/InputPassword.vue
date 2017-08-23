<template>
  <div>
    <div class="password-page-content">
      <div class="row-item title">
          ВВЕДИТЕ ПАРОЛЬ:
      </div>
      <div class="row-item input">
        <input class="password-input" maxlength="10"/>
      </div>
      <div class="row-item button">
        <button>продолжить</button>
      </div>
      <div class="row-item prompt">
        <span v-if="showPrompt">Неправильный пароль</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .password-page-content {
    /*background-color: #42b983;*/
    margin-top: 42%;
    .row-item{
      &.title{
        font-size: 30pt;
        font-weight: 700;
        letter-spacing: 1px;
        font-family: IntroHeader;
      }
      &.input{
        input{
          height: 40pt;
          border: 3px solid #cbcbcb;
          border-radius: 8px;
          width: 230px;
          background-color: black;
          margin-top: 50px;
          text-align: center;
          color: white;
          font-size: 25pt;
          font-weight: 900;
        }
      }
      &.button{
        button{
          height: 40pt;
          border: 3px solid white;
          border-radius: 8px;
          width: 230px;
          background-color: white;
          margin-top: 50px;
          text-align: center;
          color: #0e0f0f;
          font-size: 20pt;
          font-weight: 900;
          font-family: IntroHeader;
        }
      }
      &.prompt{
        span{
          color: #f30000;
          font-size: 18pt;
          font-weight: 900;
          /*display: none;*/
        }
      }
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        name: 'this component',
        showPrompt: false
      }
    },
    mounted() {
    }
  }
</script>
