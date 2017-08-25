<template>
  <div>
    <div class="password-page-content">
      <div class="row-item title">
        ВВЕДИТЕ ПАРОЛЬ:
      </div>
      <div class="row-item input">
        <input id="password" class="password-input" v-mask="'####'"  placeholder="_ _ _ _" v-model="currentPassword"/>
      </div>
      <div class="row-item button">
        <button :class="continueButtonClass" @click="send()">продолжить</button>
      </div>
      <div class="row-item prompt">
        <span v-if="showPrompt">Неправильный пароль</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
  .password-page-content {
    margin-top: 42%;
    .row-item {
      &.title {
        font-size: 30pt;
        font-weight: 700;
        letter-spacing: 1px;
        font-family: IntroHeader;
      }
      &.input {
        input {
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
      &.button {
        button {
          height: 40pt;
          border: 3px solid white;
          border-radius: 8px;
          width: 230px;
          margin-top: 30px;
          text-align: center;
          font-size: 20pt;
          font-weight: 900;
          font-family: IntroHeader;
          &.ready {
            background-color: #ffffff;
            color: #000000;
          }
          &.not-ready {
            background-color: #000000;
            color: #484848;
          }
        }
      }
      &.prompt {
        span {
          color: #f30000;
          font-size: 18pt;
          font-weight: 900;
        }
      }
    }
  }
</style>
<script>
  import InputMask from 'inputmask';
  import MaskedInput from 'vue-masked-input';
  export default {
    data() {
      return {
        name: 'this component',
        showPrompt: false,
        passwordLength: 4,
        currentPassword: ''
      }
    },
    computed: {
      isReadyButton: function () {
        return this.numADM.length === this.passwordLength || this.numADM.length === this.passwordLength - 1;
      },
      continueButtonClass: function () {
        return this.isReadyButton ? 'ready' : 'not-ready';
      },
      numADM: function () {
        let password = this.currentPassword;
        password = password.replace(/\s+/g, '');
        password = password.replace(/_+/g, '');
        return password;
      }
    },
    mounted() {
      const passwordMask = new InputMask("9 9 9 9", {colorMask: true, inputEventOnly: true});
      InputMask.extendDefaults({androidHack: "rtfm"});
      const password = document.getElementById("password");
      //passwordMask.mask(password);
    },
    components:{
      'masked-input': MaskedInput
    },
    methods: {
      send() {
        if (!(isNaN(this.numADM)) && (
            this.numADM.toString().length === this.passwordLength || this.numADM.toString().length === this.passwordLength - 1)) {
          this.ajaxSend(this.numADM);
        } else {
          console.log('Введено недостаточно символов');
        }
      },

      ajaxSend(numADM) {
        //http://10.100.50.248/planshet_kl/hs/cardreg?numADM=11112&check=1
        const params = {numADM, 'check': 1};

        let url = `http://planshet:planshet@10.100.50.248/planshet_kl/hs/cardreg?`;
        for (let prm in params) {
          url += prm + '=' + params[prm] + '&';
        }
        url += 'image=1';
        console.log(url);
        this.axios.post(url, {data: ''})
          .then(resp => {
            console.log(resp);
            if (resp.status === 200) {
              let pathName = 'InputForm';
              this.$router.replace({name: pathName, params: {lang: 'ru', numADM: numADM}});
            }
          })
          .catch(err => {
            console.log(err);
            // todo удалить
            let pathName = 'InputForm';
            this.$router.replace({name: pathName, params: {lang: 'ru', numADM: numADM}});
          })

      }
    }
  }
</script>
