# use-flipper
`useFlipper` React hook for css-only dropdowns, toggles, or custom checkboxes

## What
Most modern sites require js to be loaded, parsed and executed before use. Server-side rendering performs the first render without js, but it's still required for interactivity. `useFlipper` enables interactivity without js.

## API
* **Provider** - Adds the necessary global context
* **useFlipper** - Returns **Flipper**, **FlippedOn**, **FlippedOff**
  * **Flipper** - Component defines a clickable area
  * **FlippedOn** - Component renders when the flipper is clicked on
  * **FlippedOff** - Component renders when the flipper is clicked off

## Next.js example
[Live preview here](https://kevlened.github.io/use-flipper)

1. Add the `Provider` to the root of the app.

    ```js
    // pages/_app.js

    import React from 'react';
    import App from 'next/app';
    import {Provider} from 'use-flipper';

    class MyApp extends App {
      render() {
        const {Component, pageProps} = this.props;
        return (
          {/* count is 1 by default */}
          <Provider count={3}>
            <Component {...pageProps} />
          </Provider>
        );
      }
    }

    export default MyApp;
    ```

2. Add `useFlipper` where you want interactivity.

    ```js
    // pages/home.js

    import {useFlipper} from 'use-flipper';

    const Home = () => {
      const {Flipper, FlippedOn, FlippedOff} = useFlipper();
      return (
        <div>
          <Flipper>Flip</Flipper>
          <FlippedOn>On</FlippedOn>
          <FlippedOff>Off</FlippedOff>
        </div>
      )
    }

    export default Home;
    ```

## Compatibility
IE11+

## Limitations
1. `Flipper` components cannot contain `input` or `button` tags
2. For more than one `Flipper` to work without js, you must provide `count` to `Provider`
3. Accessibility is untested


## How it works
The state of checkboxes can be queried in css. When a `label` for a checkbox is clicked, it toggles the checkbox. Hide the checkbox, then style the `label`, and you have a css-only button that can toggle the display of other dom elements.

## License
MIT
