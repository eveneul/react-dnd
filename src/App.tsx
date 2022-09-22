import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	max-width: 470px;
	height: 100vh;
`;

const Boards = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 10px;
	width: 100%;
`;

const Board = styled.div`
	background-color: ${(props) => props.theme.wrapperColor};
	padding: 20px;
`;

const Card = styled.div`
	background-color: ${(props) => props.theme.cardColor};
	padding: 10px;
	& + div {
		margin-top: 10px;
	}
`;

const toDos = ['a', 'b', 'c'];

function App() {
	const onDragEnd = () => {};
	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId='one'>
					{(provided) => (
						<Wrapper>
							<Boards>
								<Board ref={provided.innerRef} {...provided.droppableProps}>
									{toDos.map((todo, index) => (
										<Draggable draggableId={todo} key={index} index={index}>
											{(provided) => (
												<Card
													ref={provided.innerRef}
													{...provided.dragHandleProps}
													{...provided.draggableProps}>
													<span>{todo}</span>
												</Card>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</Board>
							</Boards>
						</Wrapper>
					)}
				</Droppable>
			</DragDropContext>
		</>
	);
}

export default App;
