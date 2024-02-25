import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { FaMinus, FaPlus } from 'react-icons/fa';
// eslint-disable-next-line
import MenuList from './menu-list';

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentlabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {
        item && item.children && item.children.length
        // eslint-disable-next-line
          ? (
            // eslint-disable-next-line
            <span onClick={() => handleToggleChildren(item.label)}>
              {
                displayCurrentChildren[item.label] ? <FaMinus className="toggle-icons" /> : <FaPlus className="toggle-icons" />
            }
            </span>
          )
          : null
      }
      </div>

      {
        item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null
    }
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default MenuItem;
