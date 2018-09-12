import store from './store';
import { createScopeModelName } from './createScopeModels';


function createScopeDispatch(scope) {
  return function scopeDispatch(action, payload) {
    let actionObj;
    if (typeof action === 'string') {
      actionObj = { type: action, payload: payload };
    } else {
      actionObj = action;
    }

    const newAction = {
      type: createScopeModelName(actionObj.type, scope),
      payload: actionObj.payload
    };
    return store.dispatch(newAction);
  };
}

export default createScopeDispatch;
