type AddTodo = (newTodo: string) => void;

type Todo = {
    id: number;
    text: string;
    complete: boolean;
}

type ToggleComplete = (selectedComplete: Todo) => void;
type DeleteTodo = (deleteTodo: Todo) => void;
type UpdateTodo = (updateTodo: Todo) => void;
