
import { init } from '@rematch/core';
// 全局models
import { scopeModels as globalModels } from './scope';
// 页面models
// import { scopeModels as homepageModels } from '../screens/HomePage/store';
// import { scopeModels as selectCityModels } from '../screens/SelectCity/store';
// import { scopeModels as searchCarModels } from '../screens/SearchCar/store';

const store = init({
  name: 'store',
  models: {
    ...globalModels,
  }
});

export default store;
