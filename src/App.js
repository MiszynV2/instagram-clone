import './App.css';
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import AddMediaPage from "./pages/AddMediaPage";
import UserProfilePage from "./pages/UserProfilePage";
import DiscoverPage from "./pages/DiscoverPage";
import Feed from "./components/Feed/Feed";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Feed/>}/>
                    <Route exact path='/add-media' element={<AddMediaPage/>}/>
                    <Route exact path='/home' element={<Feed/>}/>
                    <Route exact path='/about' element={<AddMediaPage/>}/>
                    <Route exact path='/your-profile' element={<UserProfilePage />}/>
                    <Route exact path='/discover' element={<DiscoverPage/>}/>
                </Routes>
            </Router>

            <Footer/>
        </div>
    );
}

export default App;
