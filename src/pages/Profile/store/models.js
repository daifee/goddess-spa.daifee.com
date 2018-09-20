
import {ASYNC_STATE, PENDING, FAILURE, SUCCESS, END} from '../../../utils/status';
import * as serviceBlog from '../../../services/microBlog';


export const blogList = {
  state: {
    ...ASYNC_STATE,
    data: []
  },

  reducers: {
    setPending(state, message = 'loading...') {
      return {...state, message, status: PENDING};
    },

    setFailure(state, message = '失败') {
      return {...state, message, status: FAILURE};
    },

    addData(state, blogList = []) {
      const data = state.data.concat(blogList);
      return {
        ...state,
        data: data,
        status: SUCCESS,
        message: '加载成功'
      };
    },

    addLastData(state, blogList = []) {
      const data = state.data.concat(blogList);
      return {
        ...state,
        data: data,
        status: END,
        message: '加载成功'
      };
    }
  },

  effects: {
    /**
     * 获取用户微博列表
     * @param {object} params 参数项
     * @property {string} params.userId 用户ID
     * @property {number} [params.page] 页码
     * @property {number} [params.perPage] 每页数量
     */
    async get(params = {}) {
      let {userId, page, perPage} = params;
      if (!perPage) {
        perPage = 10;
      }

      this.setPending();
      try {
        const blogList = await serviceBlog
          .getListByUserId(userId, page, perPage);

        if (blogList.length < perPage) {
          this.addLastData(blogList);
        } else {
          this.addData(blogList);
        }

        return blogList;
      } catch (error) {
        this.setFailure(error);
        return error;
      }
    }
  }
};
