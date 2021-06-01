// @ts-check

import axios from 'axios';

const pipedreamPlugin = (config = {}) => {
  if (config.triggerUrl === undefined) {
    throw new Error('Pipedream trigger URL is not defined');
  }

  return {
    name: 'pipedream',
    track: ({ payload }) => axios.post(config.triggerUrl, payload),
  };
};

export default pipedreamPlugin;
