import { PropTypes } from 'prop-types';
// eslint-disable-next-line
import MenuItem from './menu-item';

const MenuList = ({ list = [] }) => (
  <ul className="menu-list-container">
    {
        list && list.length
        // eslint-disable-next-line
          ? list.map((listItem) => <MenuItem item={listItem} />)
          : null
       }
  </ul>
);

MenuList.propTypes = {
  // eslint-disable-next-line
  list: PropTypes.string,
};
export default MenuList;
