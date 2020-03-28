<template>
<div>

  <v-app>
        <Layout>
            <vue-page-transition name="fade-in-up">
                <router-view />
            </vue-page-transition>
            <!-- <vue-progress-bar></vue-progress-bar> -->
        </Layout>        
  </v-app>    



</div>
</template>

<script>

require('@/assets/css/my_style.css')
import Layout from '@/components/layout/Layout';

export default {
    names: 'Index',
    components: {
        // Login
        Layout
    },
    data: () => ({
      bars: [
        { class: '' },
        { class: '', dark: true },
        { class: 'primary', dark: true },
        { class: 'elevation-0' },
      ],
    }),
    computed: {
        // ...mapState('auth', {
        //     getStatus : 'getStatus'
        //     }),        
    },
    methods: {
        // start() {
        //     this.$Progress.start()
        // },
        // set(num) {
        //     this.$Progress.set(num)
        // },
        // increase(num) {
        //     this.$Progress.increase(num)
        // },
        // decrease(num) {
        //     this.$Progress.decrease(num)
        // },
        // finish() {
        //     this.$Progress.finish()
        // },
        // fail() {
        //     this.$Progress.fail()
        // },
    },
    beforeUpdate() {
        // this.start()
    },
    updated() {
        // this.finish()
    }    
}
</script>
<style>
.toasted-container{
    font-family : 'Roboto'
}
.container .v-image .v-responsive__content{
        border-bottom: 1px solid #d3c5c5;
        border-top: 1px solid #d3c5c5;
}
.noradius{
    border-radius: 0 !important;
}
.toolbar-fixed{
    height: 56px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}
.my-search-box{
    position: absolute;
    right: 0;
    border: 1px solid;
    border-right: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    color: #fff;
    background-color: #c62828;    
    transform: translateX(109%);    
    top: 14px;
    padding: 2px 9px; 
    transition: all ease .5s;
    padding-right: 24px;
}
.my-search-box.active{
    transform: translateX(0%);    
}
.my-search-box:focus{
    outline: none;
}
.my-search-box::-webkit-input-placeholder {
  color: #fff;
}
.theme--dark.v-icon:focus::after {
    opacity: 0;
}
</style>