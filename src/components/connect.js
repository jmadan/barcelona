import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './main';


function mapStateToProps(state) {
    return {
        Feed: state.Feed,
        User: state.User,
        InterestedIn: state.InterestedIn,
        LikeableStories: state.LikeableStories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
