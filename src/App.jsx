import './App.css';

function App(props) {
  function createComp() {
    return props.data.map((image) => {
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
      <h3>{props.title}</h3>

      <div className="grid">{createComp()}</div>
    </div>
  );
}

export default App;
