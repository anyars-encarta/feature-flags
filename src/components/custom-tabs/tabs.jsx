import { useState } from 'react';
import PropTypes from 'prop-types';

const CustomTabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        {
                tabsContent.map((tabItem, index) => (
                  // eslint-disable-next-line
                  <div className={`tab-item ${currentTabIndex === index ? 'active' : ''}`} onClick={() => handleOnClick(index)} key={tabItem.label}>
                    <span className="label">{tabItem.label}</span>
                  </div>
                ))
              }
      </div>

      <div className="content" style={{ color: 'red' }}>
        {
                tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
              }
      </div>
    </div>
  );
};

CustomTabs.propTypes = {
  tabsContent: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default CustomTabs;
