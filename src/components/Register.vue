<template>
  <div class="main-content" :style="{height: contentHeight + 'px'}">
    <div class="side" style="height:100%">
      <div class="item" style="height:100%">
        <img src="/static/bg1.jpg" style="height:100%;max-width: none;">
        <div class="carousel-caption">
        </div>
      </div>
    </div>
    <!--<div class="side-bg-wrap" style="height:100%;line-height:0px;">
        <img src="assets/img/bg1.jpg" style="height:100%;">
    </div>-->
    <div style="box-sizing: border-box" class="form-content">
      <div class="form-wrap">
        <div style="display: flex;justify-content: flex-start">
          <h1>欢迎注册</h1>
        </div>
        <div>
          <input type="text" id="loginName" name="loginName" placeholder="登录名" v-model="user.account"
                 v-validate="'required'">
          <span class="error">{{ errors.first('account') }}</span>
        </div>
        <div>
          <input type="password" name="password" v-model="user.password" placeholder="密码"
                 v-validate="'required'">
          <span class="error">{{ errors.first('password') }}</span>
        </div>
        <div>
          <div>已有账号?<router-link to="/login">登录</router-link></div>
        </div>
        <div>
          <button class="submit-btn" @click="login">注册</button>
        </div>
      </div>
    </div>
    <notifications position="top center" group="tips"/>
  </div>
</template>

<script>

  export default {
    name: "Register",
    data() {
      return {
        contentHeight: 920,
        user: {
          account: '',
          password: ''
        }
      }
    },
    created() {
      this.contentHeight = document.documentElement.clientHeight || document.body.clientHeight;
    },
    methods: {
      async login() {
        if (await this.$validator.validate()) {
          try {
            let res = await this.$http.post(this.$servers.registerLogin(),this.user);
            let params = res.data;
            if (params.status === "success") {
              let client = params['client'];
              //await this.$store.dispatch("clientLogin", client);
              this.$router.push({ path: '/login' })
            } else {
              let errors = params.reason;
              let error = errors[0];
              this.errorTip("注册失败", error["defaultMessage"])
            }
          } catch (e) {
            console.log(e);
            this.errorTip("注册失败", "网络连接错误")
          }
        }
      },
      errorTip(title, msg) {
        this.$notify({
          group: 'tips',
          title: title,
          text: msg,
          type: 'error'
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-content {
    display: flex;
    justify-content: space-between;
    background-color: #FFF;

    .side {
      height: 100%;
    }
  }

  .error {
    color: red;
  }

  * {
    vertical-align: bottom;
  }

  body {
    overflow: hidden;
  }

  /*.main-content{
      display:flex;
      justify-content: space-between;
  }*/
  .form-wrap {
    margin: 0 auto;
    width: 500px;
    margin-top: 200px;
  }

  input {
  }

  button {
    display: block;
    width: 100%;
    background-color: #00a997;
    height: 42px;
    border: 1px solid #008476;
    color: #FFF;
    font-size: 18px;
    border-radius: 3px;
    cursor: pointer;
    margin: 25px 0;
  }

  body {
    padding: 0;
    margin: 0;
  }

  input {
    border: 1px solid #AAA;
    border-radius: 3px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-sizing: border-box;

    font-size: 20px;
    padding: 12px;
    width: 100%;
    margin: 25px 0;
  }

  .form-content {
    display: flex;
    justify-content: center;
    width: 70%;
  }
</style>
