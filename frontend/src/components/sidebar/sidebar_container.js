import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import Sidebar from './sidebar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  user: state.session.user
});

export default connect(
  mapStateToProps,
  { logout }
)(Sidebar);