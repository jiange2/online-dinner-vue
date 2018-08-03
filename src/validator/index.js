import VeeValidate, { Validator } from 'vee-validate';
import Vue from "vue";
import messages from 'vee-validate/dist/locale/zh_CN';

Validator.localize({
  zh_CN: {
    messages
  }
});

let config = {

};

let loginName = {
  en: {
    messages: {
      required: field => field + " is required"
    }
  }
};


Vue.use(VeeValidate);
