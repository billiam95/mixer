import { useState, useEffect } from 'react';

const DrinkList = () => {

  const [ drinkList, setDrinkList ] = useState([])

  const getDrinks = () => {
    fetch('http://localhost:3000/drinks')
    .then(response => response.json())
    .then(data => setDrinkList(data));
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