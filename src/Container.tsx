import React, { FC} from "react";
import { Card } from "./Card";

const style = {
		width: 400,
		display:'flex'
};

export interface Item {
		id: number;
		text: string;
}

export interface ContainerState {
		cards: Item[];
}

export const Container: FC = (props:any) => {
		{
				const {cards,moveCard} =props;
				
				const renderCard = (card: { id: number; content: any }, index: number) => {
						return (
											<Card
														key={card.id}
														index={index}
														id={card.id}
														text={card.content}
														moveCard={moveCard}
											/>
									
						);
				};
				
				
				return (
							<>
									<div style={style}>{cards.map((card: { id: number; content: any; }, i: number) => renderCard(card, i))}</div>
							</>
				);
		}
};
