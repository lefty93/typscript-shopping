import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem: React.FunctionComponent<StoreItemProps> = props => {
  const { id, name, price, imgUrl } = props;
  const quantity = 0;
  return (
    <div className='card w-80 sm:w-96 bg-base-100 shadow-xl' key={id}>
      <figure>
        <img src={imgUrl} alt={name} className='w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{formatCurrency(price)}</p>
        <div className='card-actions justify-end'>
          {quantity === 0 ? (
            <button className='btn btn-primary w-full'>+Add To Cart</button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
