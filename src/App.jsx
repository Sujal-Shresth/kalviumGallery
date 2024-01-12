import './App.css';

import data from './components/DataComponent';

function App() {
  function createComp() {
    return data.map((image) => {
      return (
        <img
          key={image.id}
          src={image.img}
        />
      );
    });
  }

  return (
    <div id="functionalComponent">
      <h3>Kalvium Gallery using functionalComponent</h3>

      <div className="grid">{createComp()}</div>
    </div>
  );
}

export default App;
