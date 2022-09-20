import { sendMessageCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) =>  {
    return {
        dialogsPage: state.dialogsPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody)=>{
            dispatch(sendMessageCreator(newMessageBody))
    }
    };
};



export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    //withAuthRedirect
)(Dialogs);