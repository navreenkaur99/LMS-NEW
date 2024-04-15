import React from 'react'
 import Ui from './Ui'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Scond from './Scond'
import Html from './Html'
  import Module from './Module'
import Dropmenu from './Dropmenu'
import Language from './Language'
import StarRatingApp from './StarRatingApp'
  import Pdf from './Pdf'
import FavoritePage from './FavoritePage';
import Javascript from './Javascript';
import QuizApp from './QuizApp';
import Quiz from './Quiz';
import Assignmentt from './Assignmentt';
import Login from './Login'
import Dashb from './Pages/Dashb';
// import Profile from './Profile';
// import Registration from './Registration';
 

export default function() {
  return (
    <>
   
    <BrowserRouter>
    
    <Routes> 
         <Route path="/" element={<Dashb/>}/>
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
        
         <Route path="/Scond" element={<Scond/> }/>
         <Route path="/Register" element={<Register/> }/>
         <Route path="/Ui" element={<Ui/> }/>
          <Route path="/StarRatingApp" element={<StarRatingApp/>}/>
          <Route path="/login" element={<Login/>}/>
        

    </Routes>
</BrowserRouter>
      
    
    </>
    )
}
