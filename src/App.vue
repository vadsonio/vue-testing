<template>
  <div id="app">
    <MobileMenu/>
    <Header/>
    <Banner/>
    <Users/>
    <AddUser/>
    test
  </div>
</template>

<script>
  import MobileMenu from "./components/MobileMenu";
  import Header from "./components/Header";
  import Banner from "./components/Banner";
  import Users from "./components/Users";
  import AddUser from "./components/AddUser"

  import { mapActions } from 'vuex';
  import {EventBus} from "./event-bus";


export default {
  name: 'app',
  data(){
    return{
      scrolled: "",
      scrollPoints: []
    }
  },
  components: {
    Header,
    MobileMenu,
    Banner,
    Users,
    AddUser
  },
  methods:{
    ...mapActions(['setToken']),
    handleScroll(){
      this.scrolled = window.scrollY;

      if(this.scrolled > 50){
        EventBus.$emit('scrollHeader', true)
      } else{
        EventBus.$emit('scrollHeader', false)
      }
    },
    scrollPointsCalculate(){
      let sections = document.querySelectorAll('.scroll-item');

      sections.forEach(section=>{
        let newScrollPoint = section.getBoundingClientRect().top + pageYOffset - 64;
        this.scrollPoints = [...this.scrollPoints, newScrollPoint];
      });
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted(){
    this.scrollPointsCalculate();

    this.setToken();
  }
}
</script>

<style lang="scss">

</style>
