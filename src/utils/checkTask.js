import {updateTask, getTasks} from './api';
import store from '../features/store';
import { setTasks, setTasksInProgress } from '../features/slices/taskSlice';

const checkTask = async task => {
  try {
    await updateTask({
      taskId: task._id,
      description: task.description,
      completed: !task.completed,
    });
    const tasksRequest = await getTasks();
    store.dispatch(setTasks(tasksRequest.data.data || []));
    store.dispatch(setTasksInProgress(tasksRequest.data.inProgress));
  } catch (e) {
    console.log(e.message);
  }
};

export default checkTask;
