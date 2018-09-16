
import * as servicesMicroBlog from '../../../services/microBlog';

const INIT_STATE = {
  data: [],
  status: '', // pending, success, failure
  message: '', // string | Error
};



function createModel(type) {
  return {
    state: INIT_STATE,

    reducers: {
      set(state, blogList) {
        return {
          ...state,
          data: blogList,
          status: 'success',
          message: '成功'
        };
      },
      setPending(state, message = 'loading...') {
        return {
          ...state,
          message,
          status: 'pending'
        };
      },
      setFailure(state, error) {
        return {
          ...state,
          message: error,
          status: 'failure'
        };
      }
    },
    effects: {
      async get() {
        this.setPending();
        try {
          const blogList = await servicesMicroBlog.getRecommended(type);
          this.set(blogList);
        } catch (error) {
          this.setFailure(error);
        }
      }
    }
  };
}

export const goddess = createModel('goddess');

export const landscape = createModel('landscape');

export const animal = createModel('animal');
