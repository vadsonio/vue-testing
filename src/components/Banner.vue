<template>
  <section class="banner">
    <div class="container">
      <div class="banner__inner">
        <h1>
          TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto consequatur corporis deleniti deserunt eum ex
          explicabo, harum hic magni modi natus nemo nesciunt nihil
          nostrum numquam odio optio praesentium quia repellat reprehenderit
          rerum sed sequi sunt tenetur ut vero, voluptates?
        </p>
        <p class="show-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur
          laborum numquam provident recusandae reprehenderit!
        </p>
        <a href="" class="btn btn--primary">Sign up now</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .banner{
    padding: 107px 0 115px;
    margin-top: 60px;
    color: #fff;
    background-position: center 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("../assets/banner-photo-min.jpg");
    @include retinaBG{
      background-image: url("../assets/banner-photo-min@2x.jpg");
    }
    @include lg{
      padding: 60px 0 65px;
      background-position: 0 0;
      background-size: 134%;
    }
    @include md{
      background-size: cover;
    }
    @include sm{
      margin-top: 40px;
      padding: 70px 0 75px;
      background-size: cover;
      background-position: center;
    }
    &__inner{
      @include sm{
        text-align: center;
      }
    }
    h1{
      width: 55%;
      letter-spacing: -0.5px;
      margin-bottom: 26px;
      @include lg{
        letter-spacing: -0.2px;
        width: 60%;
      }
      @include sm{
        width: 95%;
        margin: 0 auto 20px;
      }
    }
    p{
      width: 55%;
      margin-bottom: 34px;
      @include lg{
        width: 65%;
      }
      @include sm{
        width: 100%;
        display: none;
        margin-bottom: 24px;
      }
    }
  }
</style>