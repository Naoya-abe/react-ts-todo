import { Todo } from '../../../types/todo';

export interface TodoState {
	todoList: Todo[] | undefined;
	todoDetail: Todo | undefined;
	focusTodoId: number;
}

export interface DeleteTodoArgs {
	todoId: number;
}
