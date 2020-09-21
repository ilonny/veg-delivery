//@ts-nocheck
import { SET_ONBOARDING_VISIBLE } from './actions';
const initialState = {
  onboardingIsVisible: false,
};

export const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONBOARDING_VISIBLE:
      return {
        ...state,
        onboardingIsVisible: action.onboardingIsVisible,
      };
      break;
    default:
      return { ...state };
  }
};
