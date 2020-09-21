//@ts-nocheck
import { connect } from 'react-redux';
import { Onboarding as OnboardingTemplate } from './Onboarding';
import { onboardingReducer } from './reducer';
import { SET_ONBOARDING_VISIBLE } from './actions';
export const Onboarding = connect(
  (state) => ({
    onboardingIsVisible: state.onboardingReducer.onboardingIsVisible,
  }),
  (dispatch) => ({
    setOnboardingIsVisible: (onboardingIsVisible) =>
      dispatch({ type: SET_ONBOARDING_VISIBLE, onboardingIsVisible }),
  }),
)(OnboardingTemplate);
