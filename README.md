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

const analytics = Analytics({
  app: 'my-app',
  plugins: [
    pipedreamPlugin({
      triggerUrl: 'https://triggerUniquePath.m.pipedream.net', // this must be pipedream workflow trigger url
    }),
  ],
});

// track an event
analytics.track('registration', { email: user@example.com });
```
