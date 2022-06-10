<template>
  <el-button @click="loginHandle">登录</el-button>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    loginHandle() {
      this.$dispatch('login/LOGIN')
        .then(() => {
          this.$router.push(this.$route.query.redirect || '/');
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style></style>
