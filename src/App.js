import { GroceryPicker } from './components/GroceryPicker'; //named export
import { ColorPicker } from './components/ColorPicker'
import { TodoEditor } from './components/TodoEditor'; 
import Counter from './components/Counter'; //export/import entire file

function App() {
  const groceryList = ['bread', 'milk', 'eggs', 'apples', 'oranges', 'cereal', 'salad', 'tomatoes']
  return (
    <div className="App">
      <GroceryPicker groceryList={groceryList}/>
      <ColorPicker />
      <TodoEditor />
      <Counter />
    </div>
  );
}

export default App;
