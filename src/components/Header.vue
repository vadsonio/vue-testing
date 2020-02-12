<template>
  <header class="header" :class="{'scrolled': headerScrolled}">
    <div class="container">
      <div class="header__wrap flex justify-between align-center">
        <a href="#" class="logo">
          <picture>
            <source srcset="../assets/logo.png" media="(min-width: 600px)">
            <source srcset="../assets/logo-min.png" media="(max-width: 599px)">
            <img srcset="../assets/logo.png" alt="logo">
          </picture>
        </a>
        <nav class="main-nav">
          <ul class="main-nav__list">
            <li class="main-nav__item">
              <a href="#addUser" class="main-nav__link">
                Page 1
              </a>
            </li>
            <li class="main-nav__item">
              <a href="#addUser" class="main-nav__link">
                Page 2
              </a>
            </li>
            <li class="main-nav__item">
              <a href="#addUser" class="main-nav__link">
                Page 3
              </a>
            </li>
            <li class="main-nav__item">
              <a href="#users" class="main-nav__link">
                Users
              </a>
            </li>
            <li class="main-nav__item">
              <a href="#addUser" class="main-nav__link">Sign Up</a>
            </li>
          </ul>
        </nav>
        <a href="#" class="mobile-menuBtn" @click.prevent="enableMobMenu">
          <img src="../assets/icons/menu icon.svg" alt="menu-open">
        </a>
      </div>
    </div>
  </header>
</template>

<script>
  import {EventBus} from "../event-bus";

  export default {
    data(){
      return {
        headerScrolled: false
      }
    },
    methods:{
      enableMobMenu(){
        EventBus.$emit('openMobMenu');
      }
    },
    created(){
      EventBus.$on('scrollHeader', (flag)=> this.headerScrolled = flag)
    }
  }
</script>

<style lang="scss">
  .header{
    position: fixed;
    top: 0;
    width: 100%;
    background: #fff;
    z-index: 2;
    &.scrolled{
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    }
    &__wrap{
      height: 60px;
      @include md{
        padding-top: 4px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      @include sm{
        height: 40px;
      }
    }
  }
</style>