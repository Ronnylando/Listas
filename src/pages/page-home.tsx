import Container from "../assets/Componentes/container";
import TaskList from "../assets/core-components/task-list";
import TasksSummary from "../assets/core-components/task-sumary";



export default function pageHome() {
    return <Container as="article" className="space-y-3">
        <header className="flex items-center justify-between">
            <TasksSummary />
        </header>

        <TaskList />


    </Container>;
}