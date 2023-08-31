import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import store from './store';
import TasksPage from './tasksPage/page'; // Composant racine

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1> 
      <p>
        <Link href="/tasksPage">Tasks Page</Link>
      </p>
    </div>
      // <TasksPage />
  );
}
