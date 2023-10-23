
import './card.css'

type CardProps = {
    item: {
        img: string;
        name: string;
        Description: string;
    };
};

const Card = ({ item }: CardProps) => {
    return (
        <div>
            <div className="card max-md:m-5 xlg: m-12">
                <img src={item.img} alt="" />
                <div className="card__content">
                    <p className="card__title">{item.name}</p>
                    <p className="card__description">{item.Description}</p>
                </div>
            </div>
        </div>
    );
};

export default Card