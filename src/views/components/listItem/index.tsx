import React, { FC } from 'react';
import { Props } from './types';
import ListItemUI from './presenter';
import { useAppDispatch } from '../../../redux/hooks';
import { toggleDeleteModal } from '../../../redux/slices/modal/modalSlice';
import { setFocusTodoId } from '../../../redux/slices/todo/todoSlice';

const ListItem: FC<Props> = ({ id, title, details, isDone }) => {
	const dispatch = useAppDispatch();
	const openModal = (): void => {
		dispatch(setFocusTodoId(id));
		dispatch(toggleDeleteModal(true));
	};

	return (
		<ListItemUI
			id={id}
			title={title}
			details={details}
			isDone={isDone}
			openModal={openModal}
		/>
	);
};

export default ListItem;
