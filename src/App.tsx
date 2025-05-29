import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
