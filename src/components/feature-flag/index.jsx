import { useContext } from 'react';
import LightDarkMode from '../light-dark-mode';
import TicTactToe from '../tic-tact-toe';
import RandomColor from '../random-color';
import Accordion from '../accordion';
import TreeViewNavMenu from '../tree-view-nav-menu';
import menus from '../tree-view-nav-menu/data';
import { FeatureFlagsContext } from './context';
import TabsUse from '../custom-tabs/tabs-use';

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <LightDarkMode />,
    },
    {
      key: 'showTicTacToeBoard',
      component: <TicTactToe />,
    },
    {
      key: 'showRandomColorGenerator',
      component: <RandomColor />,
    },
    {
      key: 'showAccordion',
      component: <Accordion />,
    },
    {
      key: 'showTreeView',
      component: <TreeViewNavMenu menus={menus} />,
    },
    {
      key: 'showCustomTabs',
      component: <TabsUse />,
    },
  ];

  const checkEnabledFlags = (getCurrentKey) => enabledFlags[getCurrentKey];

  if (loading) {
    return (
      <h3>Loading data! Please wait...</h3>
    );
  }

  return (
    <div>
      <h1>Feature Flags</h1>
      {
                componentsToRender.map((componentItem) => (checkEnabledFlags(componentItem.key)
                  ? componentItem.component
                  : null))
            }
    </div>
  );
};

export default FeatureFlags;
