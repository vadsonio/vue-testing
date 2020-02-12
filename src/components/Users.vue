<template>
  <section class="users scroll-item" id="users">
    <h2 class="section-heading">Users from API call</h2>
    <p class="section-subtext">
      Users from API array will be here
    </p>
    <div class="container">
      <ul class="users__list">

        <li class="users__card" v-for="user in getUsers" :key="user.id">
          <div class="users__card-img" :style="{backgroundImage: 'url('+user.photo+')'}"></div>
          <div class="users__card-body">
            <h3  v-tooltip class="users__card-name">{{user.name}}</h3>
            <p class="users__card-position">
              {{user.position}}
            </p>
            <p v-tooltip class="users__card-email">
              {{user.email}}
            </p>
            <p class="users__card-phone">
              {{user.phone}}
            </p>
          </div>
        </li>

      </ul>
      <div class="text-center">
        <button class="btn btn--primary" @click="loadUsers" v-if="getNextLink">Show more</button>
      </div>
    </div>

  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data(){
      return{
        page: 1,
        count: 0,
        deviceWidth: 0
      }
    },
    methods:{
      ...mapActions(['initUsers']),
      loadUsers(){
        this.page += 1;

        this.initUsers({
          page: this.page,
          count: this.count,
          clear: false
        });
      }
    },
    mounted(){
      // в зависимости от ширины экрана отображается количество пользователей
      this.deviceWidth = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
      this.deviceWidth > 600 ? this.count = 5 : this.count = 3;

      this.initUsers({page: this.page, count: this.count, clear: true});
    },
    computed:{
      ...mapGetters(['getUsers','getNextLink'])
    }
  }

</script>

<style lang="scss">
  .users{
    padding: 149px 0 160px;
    background: $backgroundColor2;
    @include lg{
      padding: 105px 0 122px;
    }
    @include sm{
      padding: 77px 0 122px;
    }
    .section-heading{
      margin-bottom: 16px;
      line-height: 60px;
      letter-spacing: .1px;
      @include lg{
        margin-bottom: 12px;
      }
      @include sm{
        font-size: 30px;
        line-height: 30px;
      }
    }
    .section-subtext{
      @include sm{
        margin-bottom: 2px;
      }
    }
    &__wrap{
      display: flex;
      flex-wrap: wrap;
      margin: 0 -15px;
    }
    &__list{
      margin: 0 -15px;
      padding: 0;
      list-style: none;
    }
    &__card{
      padding: 36px 15px 20px;
      display: inline-block;
      vertical-align: top;
      width: 33.3333%;
      box-sizing: border-box;
      text-align: center;
      @include rwd(767){
        width: 50%;
      }
      @include sm{
        width: 100%;
      }
      img{
        height: 100%;
      }
      &-body{
        margin: 0 auto;
        width: 200px;
        word-wrap: break-word;
        overflow-wrap: break-word;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        hyphens: auto;
      }
      &-img{
        margin-bottom: 13px;
        display: inline-block;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        overflow: hidden;
        background-position: center;
        background-size: cover;
      }
      &-name{
        margin-bottom: 10px;
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
        /*max-height: 116px;*/
        font-size: 24px;
        font-weight: 400;
        line-height: 29px;
        display: -webkit-box;
        /*-webkit-line-clamp: 4;*/
        -webkit-box-orient: vertical;
        color: #4C4B4B;
      }
      &-position{
        margin: 0;
        color: #4C4B4B;
      }
      &-email{
        margin: 0;
        display: block;
        cursor: pointer;
        white-space: nowrap;
        color: #4C4B4B;
      }
      &-phone{
        margin: 0;
        color: #4C4B4B;
      }
    }
    .text-center{
      button{
        padding: 10px 62px;
      }
    }
  }
</style>