import store from '../features/store';
import { show, hide } from '../features/slices/loaderSlice';
import { getTasks } from './api';

const fetchTasks = async ({ setTasks }) => {
  try {
    store.dispatch(show());
    const request = await getTasks();
    setTasks(request.data?.data || []);
  } catch (e) {
    console.log(e);
    setTasks([]);
  } finally {
    store.dispatch(hide());
  }
};

export default fetchTasks;
