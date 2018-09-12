import * as globalStore from '../index';


const INIT_STATE = {
  data: null,
  status: '', // pending, failure, success
  message: ''
};

export default {
  state: INIT_STATE,

  reducers: {
    setPending(state, message = 'pending') {
      return {...state, message, status: 'pending'};
    },

    setFailure(state, message = 'failure') {
      return {...state, message, status: 'failure'};
    },

    setData(state, user) {
      return {
        ...state,
        data: user,
        status: 'success',
        message: 'success'
      };
    },

    logout(state) {
      return {...INIT_STATE};
    }
  },

  effects: {
    authorize(payload, rootState) {
      // todo
      this.setPending();
      // request
      // setData
      // setFailure
    }
  }
};
