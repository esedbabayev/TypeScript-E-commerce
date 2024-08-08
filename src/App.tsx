import React from "react";

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Components
import Container from "./components/Container.tsx";

const App: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </Container>
  );
};

export default App;
