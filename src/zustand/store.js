import { create } from 'zustand';

import { COMPANY, CUISINE_TYPE, MEAL_TIME } from '../api/supabaseApi/food.api';

const useStore = create((set) => ({
  foodSurveyObj: { [MEAL_TIME]: null, [CUISINE_TYPE]: null, [COMPANY]: null },
  updateFoodSurveyObj: (obj) =>
    set((state) => ({
      foodSurveyObj: {
        ...state.foodSurveyObj,
        [MEAL_TIME]: obj[MEAL_TIME],
        [CUISINE_TYPE]: obj[CUISINE_TYPE],
        [COMPANY]: obj[COMPANY]
      }
    }))
}));

export default useStore;
