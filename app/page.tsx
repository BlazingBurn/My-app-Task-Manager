import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import store from './store';
import TasksPage from './tasksPage/page'; // Composant racine

export default function Home() {
  return (
    <div class="flex justify-center items-center h-screen">
    <div class="p-4 text-center">
      <h1 class="text-2xl font-bold mb-4">Page d'accueil</h1>
      <p class="text-lg">
        <Link href="/tasksPage" class="text-blue-500 hover:underline">Page des tâches</Link>
      </p>
    </div>
  </div>
  
      // <TasksPage />
  );
}
