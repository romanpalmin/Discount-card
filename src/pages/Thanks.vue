<template>
    <div class="thanks-page-content">
        <div class="header1">Спасибо</div>
        <div class="header2">Вы можете забрать карту на баре</div>
    </div>
</template>
<style scoped lang="less">
  .thanks-page-content {
    margin-top: 32%;
    font-family: IntroHeader;
    .header1{
      font-size: 38pt;
      padding: 20px;
    }
    .header2{
      font-size: 23pt;
      padding: 20px;
    }
  }
</style>
<script>
    export default {
        data() {
            return {
                name: 'this component'
            }
        },
        mounted() {
          setTimeout(()=>{
            let pathName = 'InputPassword';
            this.$router.replace({name: pathName, params: { lang: 'ru' }});
          }, 10000)
        }
    }
</script>
