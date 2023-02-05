import { Game } from "../Game/Game";
import { Header } from "../Header/Header";

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

export { App };
