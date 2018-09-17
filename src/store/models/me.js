
import {INIT, PENDING, SUCCESS, FAILURE} from '../../utils/status';
import * as serviceUser from '../../services/user';

const INIT_STATE = {
  data: null,
  status: INIT,
  message: ''
};

export default {
  state: INIT_STATE,

  reducers: {
    setPending(state, message = 'loading...') {
      return {...state, message, status: PENDING};
    },

    setFailure(state, message = '失败') {
      return {...state, message, status: FAILURE};
    },

    setData(state, user) {
      return {
        ...state,
        data: user,
        status: SUCCESS,
        message: '成功登录'
      };
    },

    logout(state) {
      return {...INIT_STATE};
    }
  },

  effects: {
    async authorize(user, rootState) {
      this.setPending();
      try {
        user = await serviceUser.authorize(user);
        this.setData(user);

        return user;
      } catch (error) {
        this.setFailure(error);

        return error;
      }
    }
  }
};
