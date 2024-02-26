import './App.css';
import FeatureFlags from './components/feature-flag';
import FeatureFlagsGlobalState from './components/feature-flag/context';

const App = () => {
  return (
    <div className="App">
      <FeatureFlagsGlobalState>
        <FeatureFlags />
      </FeatureFlagsGlobalState>
    </div>
  );
}

export default App;
