import MenuList from './menu-list';
import './styles.css';

// eslint-disable-next-line
const TreeViewNavMenu = ({ menus = [] }) => (
  <div className="tree-view-container">
    <MenuList list={menus} />
  </div>
);

export default TreeViewNavMenu;
