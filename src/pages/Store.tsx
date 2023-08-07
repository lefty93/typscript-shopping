import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <h1 className="font-bold text-xl">Store</h1>
      <div className='grid xl:grid-cols-3 grid-flow-row gap-10 place-content-center'>
        {storeItems.map(item => (
          <StoreItem {...item} />
        ))}
      </div>
    </>
  );
};

export default Store;
