import store from '../features/store';
import { setTasks, setTasksInProgress } from '../features/slices/taskSlice';
import { show, hide } from '../features/slices/loaderSlice';
import { getTasks } from './api';

const fetchTasks = async () => {
  try {
    store.dispatch(show());
    const tasksRequest = await getTasks();
    store.dispatch(setTasks(tasksRequest.data.data || []));
    store.dispatch(setTasksInProgress(tasksRequest.data.inProgress));
  } catch (e) {
    console.log(e);
    store.dispatch(setTasks([]));
  } finally {
    store.dispatch(hide());
  }
};

export default fetchTasks;
