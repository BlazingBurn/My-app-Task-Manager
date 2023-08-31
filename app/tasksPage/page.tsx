"use client"; // This is a client component 👈🏽
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import { Provider } from '@/node_modules/react-redux/es/exports';
import store from '../store';

export default function TasksPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 text-center border border-gray-300 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Gestionnaire de tâches</h1>
        <div className="space-y-4">
          <Provider store={store}>
            <AddTaskForm />
            <TaskList />
          </Provider>
        </div>
      </div>
    </div>
  );
}