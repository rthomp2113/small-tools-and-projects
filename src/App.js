import { GroceryPicker } from './components/GroceryPicker';
import { ColorPicker } from './components/ColorPicker'
import { TodoEditor } from './components/TodoEditor';

function App(props) {
  const groceryList = ['bread', 'milk', 'eggs', 'apples', 'oranges', 'cereal', 'salad', 'tomatoes']
  return (
    <div className="App">
      <GroceryPicker groceryList={groceryList}/>
      <ColorPicker />
      <TodoEditor />
    </div>
  );
}

export default App;
