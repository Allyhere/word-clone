import Game from '../Game';
import Header from '../Header';

function App() {
  return (
    <main className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </main>
  );
}

export default App;
