import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import featureFlagsDataServiceCall from '../data';

export const FeatureFlagsContext = createContext(null);

const FeatureFlagsGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  if (loading) {
    return (
      <h3>Loading data! Please wait...</h3>
    );
  }

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

FeatureFlagsGlobalState.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FeatureFlagsGlobalState;
