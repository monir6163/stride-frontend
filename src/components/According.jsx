/* eslint-disable react/no-unescaped-entities */
const According = () => {
  return (
    <div className="join join-vertical w-full py-4 px-4">
      <div className="text-center py-5">
        <div className="join-title text-7xl font-bold">Join us</div>
        <div className="join-subtitle text-xl font-medium">
          We are always looking for new members to join our community
        </div>
      </div>

      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What kind of food should I feed my dog?
        </div>
        <div className="collapse-content">
          <p>
            The best food for your dog depends on their age, breed, size, and
            activity level. It's always a good idea to consult your veterinarian
            to determine the right diet for your furry friend. Generally, dogs
            need a balanced diet that includes protein, carbohydrates, healthy
            fats, vitamins, and minerals.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Why does my dog lick me?
        </div>
        <div className="collapse-content">
          <p>
            There are a few reasons why your dog might lick you. It could be a
            sign of affection, a way to show submission, or a calming mechanism.
            Dogs might also lick you to get your attention, taste something
            you've eaten, or because they like the salty taste of your skin.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          How much exercise does my dog need?
        </div>
        <div className="collapse-content">
          <p>
            The amount of exercise your dog needs will vary depending on their
            breed, age, and overall health. However, most dogs need at least one
            good walk or playtime session per day. High-energy breeds may
            require more exercise, while older dogs or those with health
            conditions may need less.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Why does my dog bark?
        </div>
        <div className="collapse-content">
          <p>
            Barking is a natural form of communication for dogs. They may bark
            to alert you to something they perceive as a threat, such as a
            stranger at the door. They might also bark out of boredom,
            frustration, fear, or excitement. Understanding the context of your
            dog's barking will help you determine the cause and address it
            accordingly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default According;
