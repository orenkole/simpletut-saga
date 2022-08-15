import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/" element={(
            <MainLayout >
              <Homepage />
            </MainLayout>
          )} />
          <Route path="/registration" element={(
            <MainLayout >
              <Registration />
            </MainLayout>
          )} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
