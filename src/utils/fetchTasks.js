import store from '../features/store';
import { setTasks } from '../features/slices/taskSlice';
import { show, hide } from '../features/slices/loaderSlice';
import { getTasks } from './api';

const fetchTasks = async () => {
  try {
    store.dispatch(show());
    const request = await getTasks();
    store.dispatch(setTasks(request.data?.data || []));
  } catch (e) {
    console.log(e);
    store.dispatch(setTasks([]));
  } finally {
    store.dispatch(hide());
  }
};

export default fetchTasks;
