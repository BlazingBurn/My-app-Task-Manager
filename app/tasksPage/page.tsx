"use client"; // This is a client component 👈🏽
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import { Provider } from '@/node_modules/react-redux/es/exports';
import store from '../store';

export default function TasksPage() {
  return (
      <div>
        <h1>Task Manager</h1>
        <Provider store={store}>
          <AddTaskForm />
          <TaskList />
        </Provider>
      </div>
    );
}