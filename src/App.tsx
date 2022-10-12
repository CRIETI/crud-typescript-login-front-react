import { Button } from "./Button/Button";

export function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <>
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="success" />
        <Button color="danger" />
        <Button />
      </>
    </div>
  );
}
