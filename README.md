
# React Simple Timeline

A modern and responsive React timeline component using basic CSS.
Checkout the [examples here](https://github.com/salmanul/react-simple-timeline)!

# Contents

- [Getting Started](#getting-started)
- [Usage](#usage)

# Getting started

```bash
# via yarn
yarn add @salmanul/react-simple-timeline

# via npm
npm install --save @salmanul/react-simple-timeline
```

# Usage

At the very minimum:

```jsx
import Timeline from '@salmanul/react-simple-timeline'

const data: [
      {
        title: "Initialized",
        checked: true
      },
      {
        title: "Acknowledged",
        checked: false
      },
      {
        title: "Processed",
        checked: false
      }
    ];

ReactDOM.render(
  <div>
    <Timeline
      data={data}
    />
  </div>,
  document.getElementById('root')
)
```
