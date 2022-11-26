import {deleteTask} from './api';
import fetchTasks from './fetchTasks';
import showMessage from './showMessage';
import t from './translate';

const handleDelete = async ({task, setVisibleModal}) => {
  try {
    setVisibleModal(false);
    await deleteTask(task?._id);
    await fetchTasks();
    showMessage({
      title: 'Éxito!',
      message: t('displayMessages.taskDeletionSuccessMessage'),
      type: 'success',
    });
  } catch (e) {
    showMessage({
      title: 'Error!',
      message: e.message,
      type: 'error',
    });
  }
};

export default handleDelete;
