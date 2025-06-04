import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces. The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'JSX is a syntax extension that allows you to write HTML-like code within JavaScript. It makes it easier to create React elements. Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Props (short for properties) are used to pass data from one component to another. They are read-only and help in making components dynamic. They make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update. State is a built-in object that allows components to create and manage their own data. It can change over time, triggering re-renders of the component.',
  },
];
