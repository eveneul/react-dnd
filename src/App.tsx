import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Wrapper = styled.ul`
	width: 400px;
	background-color: #eaeaea;
	list-style: none;
	padding: 0;
	margin: 0;
`;

const Item = styled.li`
	padding: 20px 10px;
	background-color: #007355;
	margin-bottom: 10px;
	color: #fff;
`;

function App() {
	const onDragEnd = () => {};
	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId='one'>
					{(provided) => (
						<Wrapper ref={provided.innerRef} {...provided.droppableProps}>
							<Draggable draggableId='first' index={0}>
								{(provided) => (
									<Item
										ref={provided.innerRef}
										{...provided.dragHandleProps}
										{...provided.draggableProps}>
										<span>보라 안녕</span>
									</Item>
								)}
							</Draggable>
							<Draggable draggableId='second' index={1}>
								{(provided) => (
									<Item
										ref={provided.innerRef}
										{...provided.dragHandleProps}
										{...provided.draggableProps}>
										보라 바보
									</Item>
								)}
							</Draggable>
						</Wrapper>
					)}
				</Droppable>
			</DragDropContext>
		</>
	);
}

export default App;
