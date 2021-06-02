# analytics-pipedream

This library exports the Pipedream plugin for the [analytics](https://www.npmjs.com/package/analytics) package.

## Installation

```
npm install analytics analytics-plugin-pipedream
```

## How to use

```javascript
import Analytics from 'analytics';
import pipedreamPlugin from 'analytics-plugin-pipedream';

const pipedreamConfig = {
  event_one: 'https://triggerUniquePathOne.m.pipedream.net', // this must be pipedream workflow trigger url
  event_two: 'https://triggerUniquePathTwo.m.pipedream.net',
};

const analytics = Analytics({
  app: 'my-app',
  plugins: [
    pipedreamPlugin(pipedreamConfig),
  ],
});

// track an event
analytics.track('registration', { email: user@example.com });
```
