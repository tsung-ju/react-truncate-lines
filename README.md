# react-truncate-lines

React component for text truncation.

## Install

```sh
npm install react-truncate-lines
```

## Usage

API is similar to [react-truncate](https://www.npmjs.com/package/react-truncate).

```js
import TruncateLines from "react-truncate-lines";

function MyComponent() {
  return (
    <TruncateLines lines={2} ellipsis={<span>...Read More</span>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </TruncateLines>
  );
}
```

For multiline text use `<TruncateLines style={{ whiteSpace: 'pre-line' }}>`.
