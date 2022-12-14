import store from '../features/store';
import {show, hide} from '../features/slices/loaderSlice';
import t from './translate';
import showMessage from './showMessage';
import {postTask, updateTask} from './api';

const handleSubmit = async ({
  formState,
  completed,
  validateFields,
  resetFields,
  task,
  goBack,
}) => {
  try {
    store.dispatch(show());
    const {description} = formState;
    const errors = validateFields(formState);

    if (errors.length)
      return showMessage({
        title: t('displayMessages.errorMessageTitle'),
        message: errors.join('\n\n'),
        type: 'warning',
      });

    const request = task
      ? await updateTask({
          taskId: task._id,
          description: task.description,
          completed: task.completed,
        })
      : await postTask({description, completed});

    resetFields();

    showMessage({
      title: t('displayMessages.successMessageTitle'),
      message: task ? t('displayMessages.taskUpdateSuccessMessage') : t('displayMessages.taskCreationSuccessMessage'),
      type: 'success',
    });

    goBack();
  } catch (e) {
    showMessage({
      title: t('displayMessages.errorMessageTitle'),
      message: e.message,
      type: 'warning',
    });
  } finally {
    store.dispatch(hide());
  }
};

export default handleSubmit;
