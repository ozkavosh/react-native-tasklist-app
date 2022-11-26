import {updateTask, getTasks} from './api';
import store from '../features/store';
import { setTasks } from '../features/slices/taskSlice';

const checkTask = async task => {
  try {
    await updateTask({
      taskId: task._id,
      description: task.description,
      completed: !task.completed,
    });
    const requestTasks = await getTasks();
    store.dispatch(setTasks(requestTasks.data?.data || []));
  } catch (e) {
    console.log(e.message);
  }
};

export default checkTask;
