import Vue from 'vue';
import Vuex from 'vuex';

import {
  ADD_CONTACTS
} from './mutations';

Vue.use(Vuex);

const state = {
  contacts: [{
    id: 1472373700050,
    name: 'John',
    address: '北京市朝阳区'
  }, {
    id: 1472373900600,
    name: 'Paul',
    address: '上海市普陀区'
  }]
};

const mutations = {
  [ADD_CONTACTS] (state, contact) {
    state.contacts.push(contact);
  }
};

export default new Vuex.Store({
  state,
  mutations
});
