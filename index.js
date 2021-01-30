const App = () => {
  return (
    <h1>Hello World without CRA</h1>
  )
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);