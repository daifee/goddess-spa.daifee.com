
import {INIT, PENDING, SUCCESS, FAILURE} from '../../utils/status';
import * as serviceUser from '../../services/user';
import * as utilAsyncStorage from '../../utils/asyncStorage';

const PERSISTENCE_KEY = 'persistence_me';

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
    },

    reset() {
      return {...INIT_STATE};
    }
  },

  effects: {
    async authorize(user) {
      this.setPending();
      try {
        user = await serviceUser.authorize(user);
        await utilAsyncStorage.setItem(PERSISTENCE_KEY, user);

        this.setData(user);

        return user;
      } catch (error) {
        this.setFailure(error);

        return error;
      }
    },

    async reauthorize() {
      this.setPending('reauthorize');
      const user = await utilAsyncStorage.getItem(PERSISTENCE_KEY);

      if (user) {
        this.setData(user);
      } else {
        this.setFailure(new Error('未登录'));
      }
      return user;
    },

    async deauthorize() {
      await utilAsyncStorage.remoteItem(PERSISTENCE_KEY);
      this.reset();
    },

    async register(user) {
      this.setPending();
      try {
        user = await serviceUser.register(user);
        await utilAsyncStorage.setItem(PERSISTENCE_KEY, user);

        this.setData(user);

        return user;
      } catch (error) {
        this.setFailure(error);

        return error;
      }
    }
  }
};
