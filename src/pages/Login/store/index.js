
import createScopeModels from '../../../store/createScopeModels';
import createScopeDispatch from '../../../store/createScopeDispatch';
import createScopeGetState from '../../../store/createScopeGetState';
import * as models from './models';


const SCOPE = 'LOGIN';

export const scopeModels = createScopeModels(models, SCOPE);
export const dispatch = createScopeDispatch(SCOPE);
export const getState = createScopeGetState(SCOPE);


