import React from "react";
import ButtonIcon from "../Componentes/button-icon";
import Card from "../Componentes/card";
import InputCheckbox from "../Componentes/input-checkbox";
import Text from "../Componentes/text";
import TrashIcon from "../icons/trash.svg?react";
import PencilIcon from "../icons/Pencil.svg?react";
import xIcon from "../icons/x.svg?react";
import CheckIcon from "../icons/check.svg?react";
import InputText from "../Componentes/input-text";
import { TaskState, type Task } from "../../models/task";
import { cx } from "class-variance-authority";
import { Form } from "react-router";
import useTask from "../../hooks/use-task";
import Skeleton from "../Componentes/skeleton";

interface TaskItemProps {
    task: Task;
    loading?: boolean;
}


export default function TaskItem({ task, loading }: TaskItemProps) {
    const [isEditing, setIsEditing] = React.useState(task?.state === TaskState.Creating
    );
    const [taskTitle, setTaskTitle] = React.useState(task.title || "");
    const { updateTask, updateTaskStatus, deleteTask, isDeletingTask, isUpdatingTask } = useTask();

    function handleEditTask() {
        setIsEditing(true);
    }

    function handleExitEditTask() {
        if (task.state === TaskState.Creating) {
            deleteTask(task.id);
        }

        setIsEditing(false);
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTaskTitle(e.target.value || "")
    }

    async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        await updateTask(task.id, { title: taskTitle });

        setIsEditing(false)
    }

    function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;

        updateTaskStatus(task.id, checked);
    }

    async function handeleDeleteTask() {
        await deleteTask(task.id)
    }

    return (
        <Card size="md" >
            {!isEditing ? (
                <div className="flex items-center gap-4">
                    <InputCheckbox
                        value={task?.concluded?.toString()}
                        checked={!!task?.concluded}
                        onChange={handleChangeTaskStatus}
                        loading={loading} />
                    {!loading ? (
                        <Text className={cx("flex-1", {
                            'line-through': task?.concluded,
                        })}
                        >
                            {task?.title}
                        </Text>) : (
                        <Skeleton className="flex-1 h-6" />
                    )}
                    <div className="flex gap-1">
                        <ButtonIcon type="button"
                            icon={TrashIcon}
                            variant="tertiary"
                            onClick={handeleDeleteTask}
                            loading={loading}
                            handling={isDeletingTask}
                        />

                        <ButtonIcon type="button" icon={PencilIcon} variant="tertiary"
                            onClick={handleEditTask}
                            loading={loading}
                        />
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                    <InputText
                        value={taskTitle}
                        className="flex-1" onChange={handleChangeTaskTitle} required autoFocus />
                    <div
                        className="flex gap-1" >
                        <ButtonIcon type="button"
                            icon={xIcon} variant="secondary" onClick={handleExitEditTask} />
                        <ButtonIcon type="submit"
                            icon={CheckIcon} variant="primary" handling={isUpdatingTask} />
                    </div>
                </form>

            )
            }
        </Card >
    );
}