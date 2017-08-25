<template>
  <div>
    <div class="form-page-content">
      <div class="row-item">
        <div class="photo">
          <img id="photo" :src="getPhoto()" @click="getPicture()"/>
        </div>
      </div>
      <div class="row-item">
        <div class="title">Фамилия</div>
        <div class="input">
          <input class="input" name="firstName" id="firstName" v-model="firstName"/>
        </div>
      </div>
      <div class="row-item">
        <div class="title">Имя</div>
        <div class="input">
          <input class="input" name="name" id="name" v-model="name"/>
        </div>
      </div>
      <div class="row-item">
        <div class="title">Отчество</div>
        <div class="input">
          <input class="input" name="middleName" id="middleName" v-model="middleName"/>
        </div>
      </div>
      <div class="row-item">
        <div class="title">Дата рождения</div>
        <div class="input"><!--v-mask="'##.##.####'"-->
          <input class="input" type="date" name="birthday" id="birthday" v-model="birthday"
                 placeholder="_ _ . _ _ . _ _ _ _"/>
        </div>
      </div>
      <div class="row-item">
        <div class="title">Телефон</div>
        <div class="input"><!--v-mask="'+7(###)###-##-##'"-->
          <input class="input" name="phone" id="phone" type="tel" v-model="phone"
                 placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"/>
        </div>
      </div>
      <div class="row-item">
        <div class="title">E-mail</div>
        <div class="input">
          <input class="input" type="email" name="email" id="email" v-model="email"/>
        </div>
      </div>
      <div class="row-item">
        <div class="title">Откуда вы о нас узнали?</div>
        <div class="input">
          <input class="input" name="from-where" id="from-where" v-model="fromwhere"/>
        </div>
      </div>
      <div class="row-item">
        <div class="title">Какие трансляции вы смотрите чаще?</div>
        <div class="input">
          <input class="input" name="translations" id="translations" v-model="translations"/>
        </div>
      </div>
      <div class="row-item">
        <label class="control control-checkbox title">
          Согласен получать СМС
          <input type="checkbox" checked name="acceptSMS" id="acceptSMS" v-model="acceptSMS"/>
          <div class="control_indicator"></div>
        </label>
      </div>
      <div class="row-item">
        <label class="control control-checkbox title">
          Хочу получать расписание трансляций
          <input type="checkbox" name="acceptTranslations" id="acceptTranslations" checked
                 v-model="acceptTranslations"/>
          <div class="control_indicator"></div>
        </label>
      </div>
      <div class="row-item button">
        <button :class="sendButtonClass" @click="sendData()">Получить карту</button>
      </div>
    </div>
    <modal v-if="showModal" :isLoader=true alertText="test" :showButton=true :showAlert=false />
  </div>
</template>
<style scoped lang="less">
  .form-page-content {
    margin-top: 0px;
    .row-item {
      width: 80%;
      margin: 25px auto;
      text-align: left;
      .title {
        font-family: IntroHeader;
        letter-spacing: 1px;
        font-size: 15pt;
        padding-bottom: 5px;
      }
      input.input {
        width: 99%;
        height: 30pt;
        border: 3px solid #cbcbcb;
        border-radius: 8px;
        background-color: black;
        text-align: left;
        font-size: 20pt;
        font-weight: 900;
        color: white;
        padding-left: 10px;
      }
      .checkbox {
        background-color: black;
      }
      &.button {
        button {
          height: 40pt;
          border: 3px solid white;
          border-radius: 8px;
          width: 300px;
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
      .photo {
        img {
          border-radius: 18%;
          width: 40%;
        }
      }
    }
    /* CHECKBOX */
    .control {
      display: block;
      position: relative;
      padding-left: 50px;
      margin-bottom: 1px;
      padding-top: 10px;
      cursor: pointer;
      font-size: 17px;
    }
    .control input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    .control_indicator {
      position: absolute;
      top: 2px;
      left: 5px;
      height: 24px;
      width: 23px;
      background: #000000;
      border: 5px solid #868686;
      border-radius: 15%;
    }
    .control-radio .control_indicator {
      border-radius: 8%;
    }

    .control:hover input ~ .control_indicator,
    .control input:focus ~ .control_indicator {
      background: #000000;
    }

    .control input:checked ~ .control_indicator {
      background: #000000;
    }
    .control:hover input:not([disabled]):checked ~ .control_indicator,
    .control input:checked:focus ~ .control_indicator {
      background-xco: #0e6647d;
    }
    .control input:disabled ~ .control_indicator {
      background: #e6e6e6;
      opacity: 0.6;
      pointer-events: none;
    }
    .control_indicator:after {
      box-sizing: unset;
      content: '';
      position: absolute;
      display: none;
    }
    .control input:checked ~ .control_indicator:after {
      display: block;
    }
    .control-checkbox .control_indicator:after {
      left: 12px;
      top: -5px;
      width: 4px;
      height: 20px;
      border: solid #F60000;
      border-width: 0 4px 4px 0;
      transform: rotate(45deg);
    }
    .control-checkbox input:disabled ~ .control_indicator:after {
      border-color: #7b7b7b;
    }
    /* END CHECKBOX */
  }
</style>
<script>
  import InputMask from 'inputmask';
  import modal from '../components/modal.vue';

  export default {
    data() {
      return {
        firstName: 'Петров',
        name: 'Петр',
        middleName: 'Петрович',
        birthday: '12.01.1995',
        phone: '89117606036',
        email: 'petrov@mail.ru',
        fromwhere: 'Оттуда',
        translations: 'Eurosport',
        acceptSMS: true,
        acceptTranslations: true,
        imgBase64: 1,
        showModal: false
      }
    },
    computed: {
      isShowSendButton: function () {
        const src = this.getReqFields();
        if (src.length === 0) return false;
        let dest = src.filter((item) => {
          return item.toString() !== '';
        });
        return dest.length === src.length;
      },
      sendButtonClass: function () {
        return this.isShowSendButton ? 'ready' : 'not-ready';
      }
    },
    methods: {
      formatDate(date){
        let month = String(date.getMonth() + 1);
        let day = String(date.getDate());
        const year = String(date.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${day}.${month}.${year}`;
      },
      getPhoto() {
        let src = 'http://10.10.182.11/images/camera.png';
        return src;
      },
      getPicture() {
        const self = this;
        navigator.camera.getPicture(onSuccess, onFail, {
          quality: 50,
          //destinationType: Camera.DestinationType.FILE_URI,
          destinationType: Camera.DestinationType.DATA_URL,
          cameraDirection: 0,
          correctOrientation: true,
          targetHeight: 400,
          targetWidth: 400
        });

        function onSuccess(resp) {
          //alert(resp);
          let src = "data:image/jpeg;base64,";
          src += resp;
          const image = document.getElementById('photo');
          image.src = src;
          self.imgBase64 = src;
        }

        function onFail(message) {
          alert('Failed because: ' + message);
        }
      },
      getReqFields() {
        return [this.name, this.firstName, this.birthday];
      },
      collectData() {
        let tel = this.phone;
        if (tel.substr(0, 2) === '+7') {
          tel = ('8' + tel.substr(2, tel.length));
        }
        const name = this.name;
        const firstName = this.firstName;
        const middleName = this.middleName;
        const email = this.email;
        const birthday = this.formatDate(new Date(this.birthday));
        const phone = tel.replace(/[^0-9]/g, "");
        const fromwhere = this.fromwhere;
        const acceptSMS = this.acceptSMS;
        const acceptTranslations = this.acceptTranslations;
        const image = this.imgBase64;
        return {
          name,
          surname: firstName,
          patronymic: middleName,
          email,
          birthdate: birthday,
          phone,
          fromwhere,
          acceptSMS,
          acceptTranslations,
          image
        }
      },

      sendData() {
        if (this.isShowSendButton) {
          this.ajaxSendData(this.collectData());
          this.showModal = true;
        } else {
          console.log('Не заполнены обязательные поля');
        }
      },

      ajaxSendData(obj) {
        const numADM = this.$router.currentRoute.params.numADM;
        obj.numADM = numADM;
        const params = obj;
        console.log(params);
        let url = `http://planshet:planshet@10.100.50.248/planshet_kl/hs/cardreg111?`;
        for (let prm in params) {
          url += prm + '=' + params[prm] + '&';
        }
        //url += 'image=1';
        this.axios.post(url, {data: ''})
          .then(resp => {
            this.showModal = false;
            console.log(resp);
            if (resp.status === 200) {
              let pathName = 'InputSMS';
              //todo раскомментировать
              this.$router.replace({name: pathName, params: {lang: 'ru'}});
            }
          })
          .catch(err => {
            console.log(err);
            //todo закомментировать
            let pathName = 'InputSMS';
            this.$router.replace({name: pathName, params: {lang: 'ru'}});
          })
      }

    },
    mounted() {
      const phoneMask = new InputMask("+7 (999) 999-99-99");
      const birthdayMask = new InputMask("99.99.9999");
      const textOnlyMask = new InputMask({regex: "[a-zA-ZА-Яа-яЁё+]*"});
      const phone = document.getElementById("phone");
      const birthday = document.getElementById("birthday");
      const email = document.getElementById("email");
      const firstName = document.getElementById("firstName");
      const name = document.getElementById("name");
      const middleName = document.getElementById("middleName");
      /*phoneMask.mask(phone);
      birthdayMask.mask(birthday);
      textOnlyMask.mask(firstName);
      textOnlyMask.mask(middleName);
      textOnlyMask.mask(name);
      InputMask({alias: "email"}).mask(email);*/
    }
  }
</script>
