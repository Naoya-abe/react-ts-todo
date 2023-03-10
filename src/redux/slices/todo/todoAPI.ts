import axios from 'axios';
import { Todo } from '../../../types/todo';
import { CreateInputs } from '../../../views/pages/createTodo/types';
import { EditInputs } from '../../../views/pages/editTodo/types';
import { DeleteTodoArgs } from './types';

export const todoApi = axios.create({
	baseURL: 'http://localhost:8080/todo'
});

export const createTodoAPI = async (
	args: CreateInputs
): Promise<Todo | undefined> => {
	try {
		const { title, details } = args;
		const response = await todoApi.post(`/`, {
			title,
			details
		});
		const todo: Todo = response.data;
		return todo;
	} catch (error) {
		console.error(error);
		alert('Todoの作成に失敗しました。');
	}
};

export const getTodoListAPI = async (): Promise<Todo[] | undefined> => {
	try {
		const response = await todoApi.get('/list');
		const todoList: Todo[] = response.data;
		return todoList;
	} catch (error) {
		console.error(error);
		alert('Todo一覧の取得に失敗しました。');
	}
};

export const getTodoAPI = async (todoId: number): Promise<Todo | undefined> => {
	try {
		const response = await todoApi.get(`/${todoId}`);
		const todo: Todo = response.data;
		return todo;
	} catch (error) {
		console.error(error);
		alert('Todoの取得に失敗しました。');
	}
};

export const editTodoAPI = async (
	args: EditInputs
): Promise<Todo | undefined> => {
	try {
		const { todoId, title, details, isDone } = args;
		const convertedIsDone: boolean = isDone === '完了';
		const response = await todoApi.patch(`/`, {
			todoId,
			title,
			details,
			isDone: convertedIsDone
		});
		const todo: Todo = response.data;
		return todo;
	} catch (error) {
		console.error(error);
		alert('Todoの編集に失敗しました。');
	}
};

export const deleteTodoAPI = async (
	args: DeleteTodoArgs
): Promise<Todo | undefined> => {
	try {
		const { todoId } = args;
		const response = await todoApi.delete(`/`, {
			data: { todoId }
		});
		const todo: Todo = response.data;
		return todo;
	} catch (error) {
		console.error(error);
		alert('Todoの削除に失敗しました。');
	}
};
