import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignComponent from './components/topbar/SignComponent';
import LoginComponent from './components/topbar/LoginComponent';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import FormationCard from './components/FormationCard';
import Admin from './admin/Admin';
import LoginAdmin from './admin/Login';
import Chat from './components/chat/chat';
import Test from './components/test';


function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Categories/>
						</Route>
						<Route path="/signup">
							<SignComponent />
						</Route>
						<Route path="/login">
							<LoginComponent />
						</Route>
						<Route path="/formation">
							<FormationCard />
						</Route>
						<Route path="/Admin"> 
							<Admin/> 
						</Route>
						<Route path="/loginAdmin"> 
							<LoginAdmin/> 
						</Route>
						<Route path="/Test"> 
							<Test/>
						</Route>
						<Route path="/chat"> 
							<Chat/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
