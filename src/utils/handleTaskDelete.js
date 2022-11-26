import {deleteTask} from './api';
import fetchTasks from './fetchTasks';
import {showMessage} from 'react-native-flash-message';
import t from './translate';

const handleDelete = async ({task, setVisibleModal}) => {
  try {
    setVisibleModal(false);
    await deleteTask(task?._id);
    await fetchTasks();
    showMessage({
      message: t('displayMessages.taskDeletionSuccessMessage'),
      type: 'success',
    });
  } catch (e) {
    showMessage({
      message: e.message,
      type: 'error',
    });
  }
};

export default handleDelete;
