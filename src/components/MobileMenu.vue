<template>
  <aside class="mobile-menu" :class="{'open': mobActive}">
    <div class="mobile-menu__overlay" @click="disableMobMenu"></div>
    <section class="mobile-menu__main">
      <nav class="mob-nav">
        <ul class="mob-nav__list">
          <li class="mob-nav__item logo">
            <a href="" class="mob-nav__link">
              <img src="../assets/logo-min.png" alt="logo">
            </a>
          </li>
          <li class="mob-nav__item">
            <span class="mob-nav__divider mt0"></span>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              About
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 1
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 2
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 3
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 4
            </a>
          </li>
          <li class="mob-nav__item">
            <span class="mob-nav__divider"></span>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 5
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 6
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 7
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 8
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 9
            </a>
          </li>
          <li class="mob-nav__item">
            <span class="mob-nav__divider"></span>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 10
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 11
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 12
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 13
            </a>
          </li>
          <li class="mob-nav__item">
            <a href="" class="mob-nav__link">
              Page 14
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </aside>
</template>

<script>
  import {EventBus} from '../event-bus';

  export default {
    data(){
      return {
        mobActive: false
      }
    },
    methods: {
      disableMobMenu(){
       this.mobActive = false;
        document.body.classList.remove('fixScroll');
      }
    },
    created(){
      EventBus.$on('openMobMenu', ()=> {
        this.mobActive = true;
        document.body.classList.add('fixScroll');
      });
    }
  }
</script>

<style lang="scss">
  .mobile-menu{
    visibility: hidden;
    &.open{
      visibility: visible;
      .mobile-menu__overlay{
        visibility: visible;
        opacity: 1;
      }
      .mobile-menu__main{
        left: 0;
      }
    }
    &__overlay{
      visibility: hidden;
      opacity: 0;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      -webkit-transition: .6s;
      -moz-transition: .6s;
      -ms-transition: .6s;
      -o-transition: .6s;
      transition: .6s;
      background: rgba(0, 0, 0, .2);
      z-index: 3;
    }
    &__main{
      position: fixed;
      top: 0;
      left: -100%;
      width: 290px;
      height: 100%;
      -webkit-transition: .6s;
      -moz-transition: .6s;
      -ms-transition: .6s;
      -o-transition: .6s;
      transition: .6s;
      overflow: scroll;
      background-color: #fff;
      z-index: 4;
      overflow: -moz-scrollbars-none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        width: 0 !important
      }
    }
  }
</style>