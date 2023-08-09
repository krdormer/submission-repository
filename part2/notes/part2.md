# Communicating with server

## Rendering a collection, modules

## Getting Data from the Server
1. JSON Server
  - npm package which creates a simple server API
  - `json-server --port 3001 --watch db.json`
  - Stores data in `db.json` file in project
  - Simulates database storage

## Browser as a runtime environment
1. Can fetch data through `XMLHttpRequest`
  - HTTP request made with XHR object
  - Based on event-driven model
  - No longer recommended
2. Browsers widely support use of `fetch()`
    - Based on promises
    - `Promise` object represents eventual completion or failure of an async operation
    - Returns the success or failure state, as well as the value of the async function
    - `pending` `fulfilled` or `rejected`
3. Asynchronous Model
  - Requires all I/O operations to be non-blocking
  	- `I/O` is the communication between a computing system and the outside world
	- Code execution continues immediately after calling an I/O function without waiting for it to return a value
4. Event Loop
  - Sequence of events during code execution and event handler registration
5. Web Workers
  - Allows parallelized code execution 
  - Worker handles I/O operations and registers to an event handler when value is received 
  - Does not interfere with UI 
6. `axios` is another valid method of making requests
  - `const promise = axios.get('http://localhost:3001/notes')`
  ```
  axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
    ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
  })
  ```

## Effect-hooks
1. `State hooks` 
	1. Hold the state of a component
2. `Effect hooks`
	1. Allows performance of side effects in function components 
	2. _Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects_
	3. `useEffect(func, [depArray])`
		1. Runs provided function on first render of component if no items are added into the dependency array
		2. Items placed in the dependency array will fire the provided function on first render and when the value of the dep. item changes

## Development Runtime Environment
![[development-runtime-environment.png]]

1. JS code compiled from JSX in project is run in the browser
2. Browser gets JS from the react dev server (`npm start`)
	1. Stitches together JS from different files (modules)
	2. Transpiles JSX into JS 
3. React application in the browser fetches the JSON formatted data from `json-server` 
4. json-server gets data from `db.json`
5. 