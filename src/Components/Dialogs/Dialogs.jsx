import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import DialogItems from './DialogItems/DialogItems';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import { maxLengthCreator, required } from './../../Utils/Validators';

let maxLengthPoint = maxLengthCreator(30);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogsElements = state.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id} key={dialog.id} />);
    let messagesElement = state.messages.map(message => <Message message={message.message} key={message.id} />);

    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return  <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
        <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
        </div>
}

const addMessageForm = ({ handleSubmit }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required, maxLengthPoint]}
             name="newMessageBody" placeholder='Enter your message...' />
        </div>
        <div><button className={s.button}>Send</button></div>
    </form>
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm',
})(addMessageForm)

export default Dialogs;