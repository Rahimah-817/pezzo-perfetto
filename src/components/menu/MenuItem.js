export default function MenuItem() {
  return (
    <div className='bg-gray-50 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/30 transition-all'>
      <div className='text-center'>
        <img src='/pizza.png' alt='pizza' className='max-h-24 block mx-auto' />
      </div>
      <h4 className='font-semibold my-3 text-gray-700'>Pepperoni Pizza</h4>
      <p className='text-gray-500 text-xl'>
        Pepperoni pizza is a classic favorite.
      </p>
      <button className='bg-primary mt-4 px-8 py-2 rounded-full text-white'>
        Add to cart $12
      </button>
    </div>
  );
}
