import useTasks from "../../hooks/use-tasks";
import Badge from "../Componentes/badge"
import Text from "../Componentes/text"

export default function TasksSummary() {
    const { createdtasksCount, concludedTasksCount, isLoadingTasks } = useTasks();
    return (
        <>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="text-gray-300">Tarefas criadas</Text>
                <Badge variant="secondary" loading={isLoadingTasks}>{createdtasksCount}</Badge>
            </div>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Concluidas</Text>
                <Badge variant="primary" loading={isLoadingTasks}>{concludedTasksCount} de {createdtasksCount}</Badge>
            </div>
        </>
    );
}