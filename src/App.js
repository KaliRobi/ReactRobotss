import logo from './logo.svg';
import './App.css';
import { Component } from 'react/cjs/react.production.min';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-bar'


class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters:[],
      searchField: ''
        };
        
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }

  render(){
    //destrcturing =  pull properties of an object and set them as constats
    const {monsters, searchField} = this.state
    // same like :
    // const monsters = this.state.monsters;
    // const searchField =  this.state.searchField;

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

  return (
    <div className = 'APP'>
      <h1> Robot Rolodex </h1>
      <container className='search-container'>
      <SearchBox
    placeholder = 'search robots'
    handleChange={this.handleChange}/>
    </container>
   
    
    
      <CardList monsters={filteredMonsters}>
  
      </CardList>
    </div>
  );}
}
// e.target.value is the value of the given target where the change is happening
// setState is async so we are not waitng for it, we can add a callback function
// after the curly braces, () =>
export default App;
