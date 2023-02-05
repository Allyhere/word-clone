const GameState = ({ gameAlert: { state, message }, setGameAlert }) => {
  setTimeout(() => {
    setGameAlert(null);
  }, 3000);
  return (
    <div className={`${state} banner`} role="alert">
      <p>{message}</p>
    </div>
  );
};

export { GameState };
