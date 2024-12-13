# Learn_React

- Components
- JSX:Rule:: Must have one parent element.Becouse in one component return only one parent element.

- Expressions in JSX:{ expression and variables }

- Lists:
  In React. you will render lists with some type of loop. Te JavaSeript map() array method is generally the preferred method.

- Props:
  Props / Properties are arguments passed into React components. Props allows us to pass data from parent component to a chile component. EX. <img scr="likes props" alt="">.
  use::(props.name)-> destructor ({name, age, etc})

- PropsChildren:use (props) -> props.children, Ues: ({children}).

- Conditional Rendering:
  Conditional rendering allows us to dynamically display different UI components or content based on specific conditions. This enables us to create more interactive and responsive user experiences.

- Style:
  inline style: style={{color:"red", backgroundColor:"black"}}
  variable style: style={variable}
  extarnal style: import style.css file in jsx.

- React Icon library component: install by using npm react-icon.

- Events:

- State:
  State is a way to store and manage data that can change over time and affects how the component renders. We define state using the useStat hook, which allows you to set an initial value and provides a way to update that state.

- Hooks:
  Hooks are anew additon in React 16.8 They let you state and other React features without writing a class.

- useState:
  useState Hook allows us to track state in a functional component. State generally refers to data or preoperties that need to be tracking in an application.

- useEffect:
  useEffect Hook allows you to preform side effects in your components. Some examples of side effects are: fetchig data, directly updating the DOM etc.

- PropDrilling:



















****************************************************

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
