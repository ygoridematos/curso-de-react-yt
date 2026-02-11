import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  /**
   * Estado 'tasks': Armazena a lista de tarefas.
   * Inicialização: Tenta buscar tarefas salvas no localStorage.
   * Se não houver nada, inicia com um array vazio [].
   */
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  /**
   * useEffect: Monitora mudanças no estado 'tasks'.
   * Sempre que uma tarefa for adicionada, removida ou alterada,
   * salvamos a nova lista no localStorage do navegador para persistência.
   */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Função para marcar/desmarcar uma tarefa como concluída.
   * Percorre o array e inverte o valor de 'isCompleted' da tarefa clicada.
   */
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Verifica se é a tarefa que recebeu o clique
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // Se não for, retorna a tarefa sem alterações
      return task;
    });
    setTasks(newTasks);
  }

  /**
   * Função para deletar uma tarefa.
   * Filtra o array mantendo apenas as tarefas cujo ID é diferente do recebido.
   */
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  /**
   * Função para adicionar uma nova tarefa.
   * Recebe título e descrição do componente AddTask,
   * gera um ID único com uuid e adiciona ao estado.
   */
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), // Gera ID único
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); // Adiciona a nova tarefa ao final da lista
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de tarefas</Title>

        {/* Componente de formulário para adicionar tarefa */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />

        {/* Componente de listagem de tarefas */}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
