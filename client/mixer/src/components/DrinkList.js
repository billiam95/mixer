import { useState, useEffect } from 'react';

const DrinkList = () => {

<<<<<<< HEAD
  const [ drinkList, setDrinkList ] = useState([])
=======
  const [ drinkList, setDrinkList ] = useState([]);
  const [ cardSide, setCardSide ] = useState(true);
>>>>>>> cea6af002bd63068dc8d67ed64050fd606bca2e3

  const getDrinks = () => {
    fetch('http://localhost:3000/drinks')
    .then(response => response.json())
    .then(data => setDrinkList(data));
<<<<<<< HEAD
  }

  const map = drinkList.map((drink) => {
    return (
      <div>
        <h1 className='m-20' key={drink._id}>{drink.name}</h1>
      </div>
    )
  })

  useEffect(() => {
    getDrinks()
  }, [])

  return (
    <main>
      <button className="border-2 p-3">Add Drink</button>
      {map}
    </main>
  )
}

export default DrinkList;
=======
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const map = drinkList.map((drink) => {
    return ( (cardSide ?
        <div key={drink._id} className='bg-rose-300 m-20 rounded-md'>
          <h1 className='m-20'>{drink.name}</h1>
        </div>
     :
        <div key={drink._id} className='bg-rose-300 m-20 rounded-md'>
        <h1 className='m-10'>ingredients:</h1>
          <ul>
            <li>{drink.ingredients[0]}</li>
            <li>{drink.ingredients[1]}</li>
            <li>{drink.ingredients[2]}</li>
            <li>{drink.ingredients[3]}</li>
            <li>{drink.ingredients[4]}</li>
            <li>{drink.ingredients[5]}</li>
            <li>{drink.ingredients[6]}</li>
          </ul>
        </div> )
   )
  });

  return (
    <>
      <button className='border-2 p-2'>Add New</button>
      <div className="flex">
        {map}
      </div>
    </>
  )
}

export default DrinkList;
>>>>>>> cea6af002bd63068dc8d67ed64050fd606bca2e3
