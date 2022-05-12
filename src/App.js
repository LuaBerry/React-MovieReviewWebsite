import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://health.chosun.com/site/data/img_dir/2021/09/01/2021090100998_0.jpg',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Chicken',
    image: 'https://img.hankyung.com/photo/202111/02.28075433.1.jpg',
    rating: 5.0
  },
  {
    id: 4,
    name: 'Bossam',
    image: 'https://img.siksinhot.com/article/1605170892582417.jpg',
    rating: 4.3
  }
];

function Food({ name, image, rating })
{
  return(
    <div>
    <h3>I love {name} </h3>
    { <img src = {image} width="500px" alt={name}></img> }
    <h4>{rating}/5.0</h4>
    </div>
  );
}

function App() {
  return(
  <div>
    <h1>Hello, React</h1>
    {foodILike.map(food=> (
      <Food key={food.id} name={food.name} image={food.image} rating={food.rating}/>
    ))}
  </div> 
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
