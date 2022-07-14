import { useState, useEffect } from 'react';

const DrinkList = () => {

  const [ drinkList, setDrinkList ] = useState([]);
  const [ cardSide, setCardSide ] = useState(true);
  const [ selectIndex, setSelectIndex ] = useState(0)

  const handleDisplay = (index) => {
    setCardSide(!cardSide)
    setSelectIndex(index)
  }

  const getDrinks = () => {
    fetch('http://localhost:3000/drinks')
    .then(response => response.json())
    .then(data => setDrinkList(data));
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const map = drinkList.map((drink, index) => {
    return ( ( cardSide && selectIndex === index ?
        <div key={drink._id} className='bg-rose-300 m-20 rounded-md'>
          <h1 className='m-20' onClick={handleDisplay}>{drink.name}</h1>
        </div>
     : 
        <div key={drink._id} className='bg-rose-300 m-20 rounded-md'>
        <h1 className='m-10' onClick={handleDisplay}>ingredients:</h1>
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
