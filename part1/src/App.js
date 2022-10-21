const App = () => {
  console.log("Hellow from component");

  const now = new Date();
  const a = 10;
  const b = 20;

  return (
    <div>
      <p>Hello world, this is {now.toString}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};

export default App;
