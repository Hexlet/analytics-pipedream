// @ts-check

import axios from 'axios';
import has from 'lodash/has';

const pipedreamPlugin = (config = {}) => {
  if (config.workflows === undefined) {
    throw new Error('Pipedream workflows config is not set');
  }

  return {
    name: 'pipedream',
    track: ({ payload = {} }) => {
      const { event, properties } = payload;

      if (!has(config.workflows, event)) {
        throw new Error(`Event ${event} has no workflow configured`);
      }

      let url = config.workflows[event];

      try {
        url = new URL(url);
      } catch (_err) {
        throw new Error(`${url} must be valid URL`);
      }

      return axios.post(url.href, properties);
    },
  };
};

export default pipedreamPlugin;
