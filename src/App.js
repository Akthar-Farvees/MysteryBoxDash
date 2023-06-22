import DetailedOrder from "./modules/DetailedOrder";
import Orders from "./modules/Orders";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <Routes>
    <Route path="" element={ <Orders/> } />
    <Route path="order/:id" element={ <DetailedOrder/> } />
   </Routes>
  );
}



export default App;
