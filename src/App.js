import Accordion from './components/accordion'
import TabsUse from './components/custom-tabs/tabs-use';
import TreeViewNavMenu from './components/tree-view-nav-menu/index';
import menus from './components/tree-view-nav-menu/data';
import RandomColor from './components/random-color';
import TicTactToe from './components/tic-tact-toe';
import LightDarkMode from './components/light-dark-mode';
import './App.css';

function App() {
  return (
    <div className="App">
      <LightDarkMode />
      <TicTactToe />
      <RandomColor />
      <Accordion />
      <TreeViewNavMenu menus={menus} />
      <TabsUse />
    </div>
  );
}

export default App;
