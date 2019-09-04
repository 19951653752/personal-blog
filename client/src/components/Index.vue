<template>
  <div id="index">
    <NavBar />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer />
    <Loading v-show="loading" />
  </div>
</template>

<script>
import NavBar from './NavBar';
import Landing from './Landing';
import Footer from './Footer';
import Loading from './common/Loading';
export default {
  name: 'App',
  components: {
    NavBar,
    Landing,
    Footer,
    Loading
  },
   computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
