import { connect } from 'react-redux';
import User from './user';

const mSTP = (state, ownProps) => {
  const user = ownProps.match.params.userId
  return {
    user
  }
}

const mDTP = dispatch => {
  return {

  }
}

export default connect(mSTP, mDTP)(User);