
import * as servicesMicroBlog from '../../../services/microBlog';
import * as status from '../../../utils/status';

const INIT_STATE = {
  data: [],
  status: status.INIT,
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
          status: status.SUCCESS,
          message: '成功'
        };
      },
      setPending(state, message = 'loading...') {
        return {
          ...state,
          message,
          status: status.PENDING
        };
      },
      setFailure(state, error) {
        return {
          ...state,
          message: error,
          status: status.FAILURE
        };
      }
    },
    effects: {
      async get() {
        this.setPending();
        try {
          const blogList = await servicesMicroBlog.getRecommended(type);
          this.set(blogList);

          return blogList;
        } catch (error) {
          this.setFailure(error);

          return error;
        }
      }
    }
  };
}

export const goddess = createModel('goddess');

export const landscape = createModel('landscape');

export const animal = createModel('animal');
