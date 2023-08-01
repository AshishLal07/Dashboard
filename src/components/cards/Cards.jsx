import {cardsData} from '../../assets/Data/data';
import Card from '../card/Card';

import './cards.css';

const Cards = () => {
	return (
		<div className="cards">
			{cardsData.map((card, index) => (
				<div className="cards_container" key={index}>
					<Card
						title={card.title}
						color={card.color}
						barValue={card.barValue}
						value={card.value}
						png={card.png}
						series={card.series}
					/>
				</div>
			))}
		</div>
	);
};

export default Cards;
