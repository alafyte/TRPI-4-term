<template>
  <div :class="$style.modal_mask">
    <div :class="$style.modal_wrapper">
      <div :class="$style.modal_container">
        <form id="form" :class="$style.form" @submit="checkForm" novalidate>
          <a :class="$style.close" @click="$emit('close')"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#008A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <g opacity="0.4">
              <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg></a>
          <div class="inner_form_wrap">
            <div :class="$style.frm_text">
              <p :class="$style.frm_text">Заполните все поля заявки и дождитесь ответа нашего администратора для согласования времени приема</p>
            </div>
            <div class="frm_row">
              <div :class="$style.frm_field">
                <input type="text" name="name" ref="name" :placeholder="yourName">
                <input type="text" name="surname" ref="surname" :placeholder="yourSurname">
              </div>
            </div>
            <div class="frm_row">
              <div :class="$style.frm_field">
                <input type="tel" name="phone" ref="phone" :placeholder="yourPhone">
                <input type="email" name="email" ref="email" :placeholder="yourEmail">
              </div>
            </div>
            <div :class="$style.comment">
              <textarea name="comment" placeholder="Комментарии"></textarea>
            </div>
            <div class="frm_row">
              <div :class="$style.personal_data">
                <input type="checkbox" ref="chkbox" name="chkbox" id="ckbox" :class="$style.ckbox" @click="accept = !accept">
                <label for="ckbox">Согласен на обработку <a href="">персональных данных</a>
                </label>
              </div>
              <span :class="$style.acceptData" v-if="!accept">Примите условия обработки данных</span>
            </div>
            <div :class="$style.frm_submit">
              <input type="submit" value="ОТПРАВИТЬ">
            </div>
          </div>
          <div v-if="success" :class="$style.successful">
            <p>Заявка успешно отправлена!</p>
              <p>Наш администратор свяжется с Вами в ближайшее время.</p>
              <em>Окно закроется автоматически</em>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Appointment",
  data() {
    return {
      success: false,
      accept: false,
      regs: {
        emailRegEx: new RegExp(/^[a-zA-Z0-9_.]+@[a-z]+\.[a-z]+$/),
        nameRegEx: new RegExp(/^[a-zA-Z]|[а-яА-Я]{2,}$/),
        passwordRegEx: new RegExp(/^[a-zA-Z0-9_.]{8,64}$/),
        phoneRegEx: new RegExp(/^((\+375)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7,10}$/),
      },
      yourName: "Ваше имя",
      yourSurname: "Ваша фамилия",
      yourPhone: "Номер телефона",
      yourEmail: "E-Mail",
    }
  },
  methods: {
    checkForm(e) {
      let flag = true;
      e.preventDefault();
      if (!this.checkName(this.$refs.name.value)) {
        flag = false;
        this.$refs.name.value = "";
        this.yourName = "Некорректное имя!";
      }
      if (!this.checkName(this.$refs.surname.value)) {
        flag = false;
        this.$refs.surname.value = "";
        this.yourSurname = "Некорректная фамилия!";
      }
      if (!this.checkPhone(this.$refs.phone.value)) {
        flag = false;
        this.$refs.phone.value = "";
        this.yourPhone = "Некорретный номер телефона";
      }
      if (!this.checkEmail(this.$refs.email.value)) {
        flag = false;
        this.$refs.email.value = "";
        this.yourEmail = "Некорректный E-Mail";
      }
      if (flag && this.accept) {
        this.success = true;
        setInterval(() => this.$emit('close'), 2000);
      }
      else {
        this.success = false;
      }
    },
    checkEmail: function(email) {
      return this.regs.emailRegEx.test(email);
    },
    checkName: function(name) {
      return this.regs.nameRegEx.test(name);
    },
    checkPhone: function(phone) {
      return this.regs.phoneRegEx.test(phone);
    }
  }
}
</script>
<style lang="scss" module>
.modal_mask {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
  color: black;
}

.modal_wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal_container {
  width: 595px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 17px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Gilroy-Medium, Helvetica, sans-serif;
}
.successful {
  margin-top: 10px;
  padding-bottom: 20px;
  font-size: 16px;
}
.close {
  display: block;
  float: right;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 2px;
  img {
    width: 30px;
    height: 30px;
  }
}

.form {
  .frm_text {
    font-size: 100%;
    width: 555px;
    height: 38px;
    margin: 0 auto 35px auto;
    padding-top: 10px;
    text-align: center;
    font-weight: 400;
  }
  .frm_field {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    width: 520px;
    margin: 0 auto;
    input {
      width: 225px;
      height: 30px;
      font-family: Gilroy-Medium, Helvetica, Arial, sans-serif;
      margin-bottom: 20px;
      border: 1px solid #4FBFA5;
      border-radius: 4px;
      &:focus {
        outline: none;
      }
      &:hover {
        outline: none;
      }
      &::placeholder {
        padding-left: 10px;
      }

    }
  }
  .comment {
    textarea {
      width: 520px;
      height: 50px;
      font-family: Gilroy-Medium, Helvetica, Arial, sans-serif;
      margin-bottom: 20px;
      resize: none;
      border: 1px solid #4FBFA5;
      border-radius: 4px;
      &:focus {
        outline: none;
      }
      &::placeholder {
        padding-left: 10px;
      }
      &:hover {
        outline: none;
      }
    }
  }
  .frm_submit {
    input {
      cursor: pointer;
      font-family: Gilroy-Medium, Helvetica, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 15px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      background-color: #00868A;
      color: white;
      width: 100px;
      height: 30px;
      border: none;
      border-radius: 4px;
      margin: 20px auto 10px auto;
    }
  }
  .acceptData {
    font-size: 14px;
    color: red;
  }
  .personal_data {
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
    label[for='ckbox'] {
      cursor: pointer;
      padding-left: 35px;
      padding-top: 2.3px;
      display: block;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        border: 2px solid #c4c9c9;
        width: 18px;
        height: 18px;
        top: 0;
        left: 0;
        border-radius: 3px;
        transition: .2s;
      }
    }

    .ckbox:checked+label::before {
      border-top: 2px solid transparent;
      border-left: 2px solid transparent;
      border-right: 2px solid #4FBFA5;
      border-bottom: 2px solid #4FBFA5;
      transform: rotate(40deg);
      width: 12px;
      height: 22px;
      transform-origin: 100% 100%;
      top: -4px;
      left: -5px;
    }

    .ckbox:not(:checked),
    .ckbox:checked {
      display: none;
    }
  }
}
</style>