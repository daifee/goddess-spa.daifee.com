
import {ASYNC_STATE, PENDING, FAILURE, SUCCESS, END} from '../../../utils/status';
import * as serviceBlog from '../../../services/microBlog';


export const blog = {
  state: {
    ...ASYNC_STATE,
    data: {
      files: [],
      text: ''
    }
  },

  reducers: {
    setPending(state, message = 'loading...') {
      return {...state, message, status: PENDING};
    },

    setFailure(state, message = '失败') {
      return {...state, message, status: FAILURE};
    },

    setText(state, text = '') {
      text = text.substring(0, 140);
      return {...state, data: {...state.data, text}};
    },

    setFiles(state, files = []) {
      files = files.slice(0, 9);
      return {...state, data: {...state.data, files}};
    }
  },

  effects: {
    async publish() {
      this.setPending();
      try {
        console.log('todo: publish')
        // todo
        // const result = await serviceBlog.post(userId, blog);
      } catch (error) {
        this.setFailure(error);
        return error;
      }
    }
  }
};
