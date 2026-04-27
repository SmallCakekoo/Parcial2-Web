import  { AllRoomsPage } from "./pages/AllRoomsPage"
import  { SummaryPage } from "./pages/SummaryPage"
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
// Aca el provider luego

const App = () => {
	return (
	<>
	<NavBar/>
	<Routes>
		<Route path="/" element={<AllRoomsPage/>}/>
		<Route path="/summary" element={<SummaryPage/>}/>
	</Routes>
	</>
	)
}

export default App;
