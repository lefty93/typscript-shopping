import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className='grid sm:grid-rows-3 sm:grid-cols-3 grid-cols-1'>
        {storeItems.map(item => (
          <div key={item.id}>
            <img
              src={item.imgUrl}
              alt={item.name}
              className='w-full h-auto rounded-lg'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
