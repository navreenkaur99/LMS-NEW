import React from 'react'
 import Ui from './Dashboard/Ui'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Scond from './Module/Scond'
import Html from './Module/Html'
  import Module from './Module/Module'
import Dropmenu from './Dropmenu'
import Language from './Dashboard/Language'
import StarRatingApp from './Dashboard/StarRatingApp'
  import Pdf from './Module/Pdf'
import FavoritePage from './Dashboard/FavoritePage';
import Javascript from './Module/Javascript';
import QuizApp from './Module/QuizApp';
import Quiz from './Module/Quiz';
import Assignmentt from './Module/Assignmentt';
import Tags from  './Module/Tags'; 
import Login from './Pages/Login';
import Contactus from './Pages/Contactus';
import { First } from 'react-bootstrap/esm/PageItem';
import FirstPage from './Pages/FirstPage';
import AboutUsPage from './Pages/AboutusPage';
// import Profile from './Profile';
// import Registration from './Registration';
import Details from './Dashboard/DetailPage'
import DetailPage from './Dashboard/DetailPage';
import Profile from './Profile';
import Admin from "./Pages/Admin" 
import AdminNavbar from "./Pages/AdminNavbar" 
import FavoriteCards from './Dashboard/FavoriteCards';
import AdminCards from './Pages/AdminCards';
import Fetchdata from "./Fetchdata"
import UserProfile from './Pages/Userprofile';
import Contsubmission from './Pages/Contsubmission';
 import Assignmentanswer from './Pages/Assignmentanswer'
import AssignmentScores from './Pages/AssignmentScores';
// import AssignmentManage from './Pages/Assignmentmanage';
// import Java from './Module/Java';
import Java from './Module/Java'
import Phython from './Module/Phython'
import C from './Module/C'
import Assignmenttanswer from './Pages/Assignmenttanswer'

export default function() {
  return (
    <>
   
    <BrowserRouter>
    
    <Routes> 
    <Route path="/" element={<FirstPage/>}/>
        
         <Route path="/login" element={<Login/>}/>
         <Route path="/quiz" element={<QuizApp/>} />
         <Route path="/Quizt" element={<Quiz/>} />
         <Route path="/html" element={<Html/>} />
         <Route path="/Module" element={<Module/> }/>
         <Route path="/Language" element={<Language/>}/>
         <Route path="/Pdf" element={<Pdf/>}/>
         <Route path="/favorites" element={<FavoritePage/>}/>
        <Route path="/javascript" element={<Javascript/> }/>
         <Route path="/Dropmenu" element={<Dropmenu/> }/>
         <Route path="/Assignmentt" element={<Assignmentt/> }/>
         <Route path="/Contact" element={<Contactus/> }/>
         <Route path="/Scond" element={<Scond/> }/>
         <Route path="/Register" element={<Register/> }/>
         <Route path="/dashboard" element={<Ui/> }/>
          <Route path="/StarRatingApp" element={<StarRatingApp/>}/>
          <Route path="/About" element={<AboutUsPage/>}/>
          <Route path="/tags" element={<Tags/>}/>
          <Route path="/course/:id" element={<DetailPage/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/Fav" element={<FavoriteCards/>}/>
          <Route path="/AdminCard" element={<AdminCards/> }/>
          <Route path="/fetch" element={<Fetchdata/>}/>
          <Route path="/Userprofile" element={<UserProfile/>}/>
          <Route path="/Navbar" element={<AdminNavbar/>}/>
          <Route path="/Contsubmission" element={<Contsubmission/>}/>
          <Route path="/assignmentans" element={<Assignmentanswer/>}/>
          <Route path="/assignmentscores" element={<AssignmentScores/>}/>
          <Route path="/java" element={<Java/>}/>
          <Route path="/phython" element={<Phython/>}/>
          <Route path="/c" element={<C/>}/>

          <Route path="/assignmenttans" element={<Assignmenttanswer/>}/>
        
    </Routes>
</BrowserRouter>
      
    
    </>
    )
}
