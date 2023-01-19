import {GroceryPicker} from './GroceryPicker';

function App(props) {
  const groceryList = ['bread', 'milk', 'eggs', 'apples', 'oranges', 'cereal', 'salad', 'tomatoes']
  return (
    <div className="App">
      <GroceryPicker groceryList={groceryList}/>
    </div>
  );
}

export default App;
