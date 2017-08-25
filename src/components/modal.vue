<template>
  <div>
    <div class="modal-page-wrapper">

    </div>
    <div class="main-modal" v-if="showAlert">
      <div class="modal-page-content">
        <div class="header1" v-if="title && title.length > 0">{{title}}</div>
        <hr/>
        <div class="header2">
        </div>
        <div class="modal-buttons" v-if="showCallbackButton">
          <button>ОК</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .modal-page-wrapper {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 9990;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
  }

  .main-modal {
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 9991;
    .modal-page-content {
      opacity: 1;
      width: 50%;
      border-radius: 16px;
      border: 5px solid #383737;
      margin: 35% auto 0;
      background-color: white;
      color: black;
      font-family: IntroHeader;
      .header1 {
        font-size: 38pt;
        padding: 20px;
      }
      .header2 {
        font-size: 23pt;
        padding: 20px;
      }
      .modal-buttons {
        button {
          width: 100px;
          height: 40px;
          margin: 10px;
          font-size: 20pt;
          font-weight: 600;
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
      }
    },
    computed: {
      showCallbackButton: function () {
        return this.showButton;
      },
      title: function () {
        return this.alertText;
      }
    },
    mounted() {
      console.log(this.isLoader);
      console.log(this.alertText);
      console.log(this.showButton);
    },
    props: ['isLoader', 'alertText', 'showButton', 'showAlert']
  }
</script>
