# analytics-pipedream

This library exports the Pipedream plugin for the [analytics](https://www.npmjs.com/package/analytics) package.

## Installation

```
npm install analytics @hexlet/analytics-plugin-pipedream
```

## How to use

```javascript
import Analytics from 'analytics';
import pipedreamPlugin from '@hexlet/analytics-plugin-pipedream';

const pipedreamConfig = {
  event_one: 'https://triggerUniquePathOne.m.pipedream.net', // this must be pipedream trigger url
  event_two: 'https://triggerUniquePathTwo.m.pipedream.net',
};

const analytics = Analytics({
  app: 'my-app',
  plugins: [
    pipedreamPlugin({
      workflows: pipedreamConfig,
    }),
  ],
});

// track an event
analytics.track('signed_up', { email: 'user@example.com' });
```

In browser

```html
<script src="https://unpkg.com/analytics/dist/analytics.min.js"></script>
<script src="https://unpkg.com/@hexlet/analytics-plugin-pipedream/dist/main.js"></script>
<script>
  var Analytics = _analytics.init({
    app: 'my-app',
    plugins: [
      PipedreamPlugin({
        workflows: pipedreamConfig,
      }),
    ],
  });

  Analytics.track('signed_up', { email: 'user@example.com' }); // track an event
</script>
```
