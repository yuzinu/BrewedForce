import { connect } from 'react-redux';
import ReviewForm from './review_form';

const mSTP = (state, ownProps) => {
  // user = get current user
  return {
    // user
  };
};

const mDTP = dispatch => {
  return {
    // submit form action
  };
};

export default connect(mSTP, mDTP)(ReviewForm);