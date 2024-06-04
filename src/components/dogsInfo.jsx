const DogsInfo = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <img
            src="https://cdn.pixabay.com/photo/2019/07/23/13/51/shepherd-dog-4357790_1280.jpg"
            alt="Corgi walking on leash"
            className="w-full rounded-lg shadow-md md:w-1/2"
          />
          <div className="text-white px-4 py-8 md:w-1/2 md:pl-8">
            <h1 className="text-7xl font-bold mb-4">Woof!</h1>
            <p className="text-5xl leading-loose">Corgi Is!</p>
            <p className="text-gray-300 mb-4">
              Originally bred to herd cattle, sheep, and horses, the Pembroke
              Welsh Corgi is an active and intelligent dog breed. Easy to train
              and eager to learn, Pembrokes are great with children and other
              pets, and you can find then in four different coat colors
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="text-white px-4 py-8 md:w-1/2 md:pl-8">
            <h1 className="text-7xl font-bold mb-4">History &</h1>
            <p className="text-5xl leading-loose">Family !</p>
            <p className="text-gray-300 mb-4">
              Pembroke Welsh Corgis have been around since 1107 AD in some way,
              shape, or form. They certainly didn’t look how they look today,
              but there are historical records describing a short-legged dog
              used for driving cattle in Wales.
            </p>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_640.jpg"
            alt="Corgi walking on leash"
            className="w-full rounded-lg shadow-md md:w-1/2"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <img
            src="https://cdn.pixabay.com/photo/2018/04/23/14/38/dog-3344414_640.jpg"
            alt="Corgi walking on leash"
            className="w-full rounded-lg shadow-md md:w-1/2"
          />
          <div className="text-white px-4 py-8 md:w-1/2 md:pl-8">
            <h1 className="text-7xl font-bold mb-4">Puppies!</h1>
            <p className="text-5xl leading-loose">For Sale!</p>
            <p className="text-gray-300 mb-4">
              The puppies are 3 months old. Those who share their homes with our
              puppies often describe them as intelligent and loyal, and, above
              all, possessing the desire to please their owners. Corgis are
              generally good with children and well-mannered in the home. Corgi
              is usually an exceptionally obedient dog.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogsInfo;
