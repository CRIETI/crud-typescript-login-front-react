import { Button } from "./Button/Button";

export function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <>
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="success" />
        <Button variant="danger" />
        <Button />
      </>
    </div>
  );
}
