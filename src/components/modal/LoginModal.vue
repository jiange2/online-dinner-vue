<template>
  <div>
    <vue-modal name="login" height="auto">
      <div class="close-btn">
        <a @click="$modal.hide('login')">
          ❌
        </a>
      </div>
      <div class="form-body">
        <VueFormGenerator :schema="schema" :model="model" :options="formOptions"></VueFormGenerator>
      </div>
    </vue-modal>
  </div>
</template>

<script>
  import VueFormGenerator from "vue-form-generator";

  export default {
    name: "LoginModal",
    data(){
      return {
        model: {
          id: 1,
          name: "",
          password: "",
          status: true
        },
        schema: {
          fields: [{
            type: "input",
            inputType: "text",
            label: "Name",
            model: "name",
            placeholder: "login name",
            min: 6,
            featured: true
          },{
            type: "input",
            inputType: "login password",
            label: "Password",
            model: "password",
            min: 6,
            validator: VueFormGenerator.validators.string
          }]
        },
        formOptions: {
          validateAfterLoad: true,
          validateAfterChanged: true
        }
      }
    },
    components: {
      'VueFormGenerator':VueFormGenerator.component
    }
  }
</script>

<style lang="scss" scoped>
  .close-btn{
    display: flex;
    padding: 8px;
    justify-content: flex-end;
    background-color: #ddd;

  }



  .form-body{
    padding: 25px;
  }
</style>
