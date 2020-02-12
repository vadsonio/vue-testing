<template>
  <section class="registration" id="addUser">
    <h2 class="section-heading">Set new user please</h2>
    <p class="section-subtext">
      New user will be upload in "Users from API call"
    </p>
    <div class="container">
      <div class="registration__form-wrap">

        <div class="form-field" :class="{'error': $v.name.$error}">
          <label for="name-input">
            Enter your name
          </label>
          <input
                  id="name-input"
                  type="text"
                  placeholder="Your name"
                  v-model.trim="name"
                  @input="setName($event.target.value)">
          <div class="assistive-text">
            <p class="neutral" v-if="!$v.name.$error">

            </p>
            <p class="error" v-if="$v.name.$dirty" :class="{'error--active': !$v.name.required}">
              Please enter you name
            </p>
            <p class="error" v-if="$v.name.$dirty" :class="{'error--active': !$v.name.minLength}">
              Name must be at least 2 symbols
            </p>
            <p class="error" v-if="$v.name.$dirty" :class="{'error--active': !$v.name.maxLength}">
              Name must be less than 60 symbols
            </p>
          </div>
        </div>

        <div class="form-field" :class="{'error': $v.email.$error}">
          <label for="email-input">
            Enter your email
          </label>
          <input
                  id="email-input"
                  type="text"
                  placeholder="Your email"
                  v-model.trim="email"
                  @input="setEmail($event.target.value)"
          >
          <div class="assistive-text">
            <p class="neutral" v-if="!$v.email.$error">

            </p>
            <p class="error" v-if="$v.email.$dirty" :class="{'error--active': !$v.email.required}">
              Please enter you email
            </p>
            <p class="error" v-if="$v.email.$dirty" :class="{'error--active': !$v.email.email}">
              Email is not a properly formatted email address
            </p>
          </div>
        </div>

        <div class="form-field" :class="{'error': $v.phone.$error}">
          <label for="phone-input">
            Enter your phone number
          </label>
          <input
                  id="phone-input"
                  type="text"
                  v-model.trim="phone"
                  placeholder="+380 XX XXX XX XX"
                  v-mask="'+380 ## ### ## ##'"
                  @input="setPhone($event.target.value)"
          >
          <div class="assistive-text">
            <p class="neutral" v-if="!$v.phone.$error">
              Еnter phone number in open format
            </p>
            <p class="error" v-if="$v.phone.$dirty" :class="{'error--active': !$v.phone.required}">
              Please enter you phone number
            </p>
            <p class="error" v-if="$v.phone.$dirty" :class="{'error--active': !$v.phone.minLength}">
              Please enter full-length phone number
            </p>
          </div>
        </div>

        <div class="form-field checkbox">
          <label>
            Select your position
          </label>
          <div class="radio-field">
            <label for="first-radio" class="radio-field__label" tabindex="0">
              First position
              <input
                type="radio"
                id="first-radio"
                value="1"
                v-model="position"
                name="position">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="radio-field">
            <label for="second-radio" class="radio-field__label" tabindex="0">
              Second position
              <input
                  type="radio"
                  id="second-radio"
                  value="2"
                  v-model="position"
                  name="position">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="radio-field">
            <label for="third-radio" class="radio-field__label" tabindex="0">
              Third position
              <input
                  type="radio"
                  id="third-radio"
                  value="3"
                  v-model="position"
                  name="position">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="radio-field">
            <label for="fourth-radio" class="radio-field__label" tabindex="0">
              Fourth position
              <input
                  type="radio"
                  id="fourth-radio"
                  value="4"
                  v-model="position"
                  name="position">
              <span class="checkmark"></span>
            </label>
          </div>

          <!-- API вызов позиций -->
          <!--<div class="radio-field" v-for="(getPosition, index) in getPositions" :key="getPosition.id">-->
            <!--<label class="radio-field__label" :for="`${getPosition.id}-radio`" tabindex="0">-->
              <!--{{getPosition.name}}-->
              <!--<input-->
                      <!--type="radio"-->
                      <!--:id="`${getPosition.id}-radio`"-->
                      <!--:value="getPosition.id"-->
                      <!--v-model="position"-->
                      <!--name="position">-->
              <!--<span class="checkmark"></span>-->
            <!--</label>-->
          <!--</div>-->
        </div>


        <div class="form-field input-file" :class="{'error': photo.sizeError || photo.widthHeightError}">
          <label for="input-file">
            Photo
          </label>
          <div class="form-field__wrap" tabindex="0">
            <input type="file" id="input-file" ref="enableInputFile" @change="uploadFile" accept="image/jpeg,image/jpg">
            <div class="input-file__text-area" :class="{'active': photo.image}" @click="emitUploadFile">
              {{photo.placeholder}}
            </div>
            <button class="input-file__submit" @click="emitUploadFile">
              Browse
            </button>
          </div>
          <div class="assistive-text">
            <p class="neutral" v-if="(!photo.sizeError && !photo.widthHeightError)">

            </p>
            <p class="error" v-if="photo.sizeError" :class="{'error--active': photo.sizeError}">
              Your image size should be less than 5Mb
            </p>
            <p class="error" v-if="photo.widthHeightError" :class="{'error--active': photo.widthHeightError}">
              Your image width or height is less than 70px
            </p>
          </div>
        </div>

      </div>
      <div class="text-center">
        <button
                class="btn"
                :class="{'btn--primary': activateSubmitBtn, 'btn--disabled': !activateSubmitBtn}"
                @click="submitForm">Sign up now</button>
      </div>
    </div>
  </section>
</template>

<script>
  import { required, minLength, maxLength, email } from 'vuelidate/lib/validators';
  import { mapGetters, mapActions } from 'vuex';

  export default{
    data(){
      return{
        name: "",
        email: "",
        phone: "",
        position: 1,
        photo: {
          placeholder: "Upload your photo",
          image: "",
          size: "",
          width: "",
          height: "",
          imageLoaded: false,
          sizeError: '',
          widthHeightError: ''
        },
        activateSubmitBtn: false
    }
    },
    validations:{
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(60)
      },
      email:{
        required,
        email
      },
      phone:{
        required,
        minLength: minLength(17)
      }
    },
    methods:{
      ...mapActions(['setPositions', 'postUser']),
      setName(value){
        this.name = value;
        this.$v.name.$touch();
      },
      setEmail(value){
        this.email = value;
        this.$v.email.$touch();
      },
      setPhone(value){
        this.phone = value;
        this.$v.phone.$touch();
      },
      emitUploadFile(){
        this.$refs.enableInputFile.click();
      },
      uploadFile(event){
        event.target.files[0] ? this.photo.imageLoaded = true : false;

        if(this.photo.imageLoaded){

          this.photo.sizeError = this.photo.widthHeightError = false;

          let file = event.target.files[0];

          this.photo.image = file;
          this.photo.size = file.size/1024/1024;

          if(this.photo.size > 5){

            this.$refs.enableInputFile.value = null;
            this.photo.size="";
            this.photo.image=null

            this.photo.sizeError = true;
            this.photo.placeholder = "Upload your photo";
            return;
          } else {
            this.photo.sizeError = false;
          }

          let reader = new FileReader();

          reader.readAsDataURL(file);

          reader.onload = event => {
            let img = new Image();
            img.onload = () => {
              this.photo.width = img.width;
              this.photo.height = img.height;

              if(this.photo.width<70 || this.photo.height<70){
                this.$refs.enableInputFile.value = null;
                this.photo.image=null;
                this.photo.width = "";
                this.photo.height = "";

                this.photo.widthHeightError = true;
                this.photo.placeholder = "Upload your photo";
              } else {
                this.photo.widthHeightError = false;
                this.photo.placeholder = this.photo.image.name;
              }
            }
            img.src = event.target.result;
          }
          this.photo.imageLoaded = false;
        }
      },
      submitForm(){
        let formData  = new FormData();
        // let file = this.photo.image;
        // var fileField = document.querySelector('input[type="file"]');
        // let obj = {
        //   'name': this.name,
        //   'email': this.email,
        //   'position_id': this.position,
        //   'phone': this.phone.replace(/[^+\d]/g, ''),
        //   'photo': fileField.files[0]
        // }
        formData.append('position_id', this.position);
        formData.append('name', this.name);
        formData.append('email', this.email);
        formData.append('phone', this.phone.replace(/[^+\d]/g, ''));
        formData.append('photo', this.photo.image);

        console.log('formdata in REG', formData);

        this.postUser(formData);
      }
    },
    async mounted(){
      await this.setPositions();
    },
    computed:{
      ...mapGetters(['getPositions']),
      changeData() {
        const { name, email, phone, position, photo } = this
        return {
          name,
          email,
          phone,
          position,
          photo
        }
      }
    },
    watch:{
      changeData: {
        handler: function(val) {
          if(
            (val.name.length>0 && !this.$v.name.$error) &&
            (val.email.length>0 && !this.$v.email.$error) &&
            (val.phone.length>0 && !this.$v.phone.$error) &&
            (val.photo.image !== "" && !val.photo.sizeError && !val.photo.widthHeightError)){
            this.activateSubmitBtn = true;
          } else {
            this.activateSubmitBtn = false;
          }
        },
        deep: true
      }
    }
  }
</script>

<style lang="scss">
.registration{
  padding: 154px 0;
  .section-heading{
    margin-bottom: 20px;
    letter-spacing: 0;
  }
  .section-subtext{
    width: 45%;
    margin: 0 auto 29px;
    @include md{
      width: 100%;
    }
  }
  &__form-wrap{
    margin: 0 auto 20px;
    width: 50%;
    @include md{
      width: 100%;
    }
  }
}
.form-field{
  padding: 0 8px;
  font-family: 'PT Sans', sans-serif;
  &.error{
    input[type="text"]{
      border: 1px solid #E04A58;
      &:focus{
        border: 1px solid #E04A58;
        box-shadow: 0 0 0 3px rgba(224, 74, 88, .2);
      }
    }
  }
  &.checkbox{
    margin-top: 20px;
    &>label{
      margin-bottom: 8px;
    }
  }
  label{
    display: inline-block;
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 28px;
    font-family: inherit;
  }
  input[type="text"]{
    padding: 4px 0 4px 13px;
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 28px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #CED4DA;
    outline: none;
    transition: .2s;
    &:focus{
      border: 1px solid #29B0D9;
      box-shadow: 0 0 0 3px rgba(41, 176, 217, .2);
    }
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #B2B9C0;
    }
    &::-moz-placeholder { /* Firefox 19+ */
      color: #B2B9C0;
    }
    &:-ms-input-placeholder { /* IE 10+ */
      color: #B2B9C0;
    }
    &:-moz-placeholder { /* Firefox 18- */
      color: #B2B9C0;
    }
  }
  .assistive-text{
    min-height: 20px;
    p{
      margin: 0;
      padding-top: 5px;
      font-size: 12px;
      line-height: 14px;
    }
    .error{
      display: none;
      color: #E04A58;
      &--active{
        display: block;
      }
    }
  }
  .radio-field{
    label{
      margin: 0;
      padding: 1px 0 1px 24px;
      position: relative;
      cursor: pointer;
      outline: none;
    }
    input{
      position: absolute;
      opacity: 0;
      visibility: hidden;
      &:checked ~ .checkmark{
        border: none;
        background: #007BFF;
      }
      &:checked ~ .checkmark:after{
        display: block;
      }
    }
    .checkmark {
      position: absolute;
      left: 0px;
      top: 7px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid #ADB5BD;
      box-sizing: border-box;
      background: #fff;
      transition: .2s;
      &:after{
        content: '';
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
  &__wrap{
    display: flex;
    justify-content: space-between;
    outline: none;
    border-radius: 4px;
    border: 1px solid #CED4DA;
    overflow: hidden;
    &:focus{
      border: 1px solid #29B0D9;
      box-shadow: 0 0 0 3px rgba(41, 176, 217, .2);
      .input-file__text-area{
        border-right: 1px solid #29B0D9!important;
      }
    }
  }
  &.input-file{
    margin-top: 11px;
    &.error{
      .form-field__wrap{
        border: 1px solid #E04A58;
        box-shadow: none;
      }
      .input-file__text-area{
        border-right: 1px solid #E04A58!important;
      }
    }
    input[type="file"]{
      position: absolute;
      opacity: 0;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;
      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }
    .input-file__text-area{
      width: 100%;
      padding: 4px 0 4px 13px;
      font-size: 16px;
      line-height: 28px;
      font-family: 'PT Sans', sans-serif;
      box-sizing: border-box;
      border-right: 1px solid #CED4DA;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      color: #B2B9C0;
      &.active{
        color: #000;
      }
    }
    .input-file__submit{
      padding: 0 15px;
      font-family: 'PT Sans', sans-serif;
      border: none;
      cursor: pointer;
      background: #F8F7F5;
      &:active{
        background: darken(#F8F7F5, 10%);
      }
    }
  }


}
</style>