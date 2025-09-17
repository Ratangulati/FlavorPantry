const RecipeCard = ({ image, title, description, meal }) => {
  const displayTitle = title || meal?.strMeal;
  const displayImage = image || meal?.strMealThumb;
  const displayDescription = description;

  return (
    <div className='bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 duration-300'>
      <img
        src={displayImage}
        alt={displayTitle}
        className='w-full h-48 object-cover'
      />
      <div className='p-5'>
        <h3 className='text-xl font-semibold mb-2 text-gray-800'>
          {displayTitle}
        </h3>
        {displayDescription && (
          <p className='text-gray-600 text-sm'>{displayDescription}</p>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
