import Login from "./components/Login";
import Pic from "./components/pic";

function App() {
  return (
    <div className="flex flex-row-reverse ">
      <div className="bg-[#0f172a] h-screen overflow-hidden ">
        <div class="h-16 mt-2 ml-48  mr-20 over ">
          <img src="bios.png" alt="bios" style={{ height: 200 }}></img>
        </div>

        <Login />
      </div>
      <div>
        <Pic />
      </div>
    </div>
  );
}

export default App;
