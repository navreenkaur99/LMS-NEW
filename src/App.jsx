import React from 'react'
 import Ui from './Ui'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Dashb from './Dashb'
import Register from './Register'
import Scond from './Scond'
import Html from './Html'
  import Module from './Module'
import Dropmenu from './Dropmenu'
import Language from './Language'
// import Individual from './Individual'
// import Tutorial from './Tutorial'
import StarRatingApp from './StarRatingApp'
  import Pdf from './Pdf'
import FavoritePage from './FavoritePage';
import Javascript from './Javascript';
import QuizApp from './QuizApp';
 

export default function() {
  return (
    <>
   
    <BrowserRouter>
    
    <Routes> 
         <Route path="/" element={<Dashb/>}/>
         <Route path="/quiz" element={<QuizApp/>} />
         {/* <Route path="/Individual" element={<Individual/>} /> */}
         <Route path="/html" element={<Html/>} />
         <Route path="/Module" element={<Module/> }/>
         <Route path="/Language" element={<Language/>}/>
         <Route path="/Pdf" element={<Pdf/>}/>
         <Route path="/favorites" element={<FavoritePage/>}/>
        <Route path="/javascript" element={<Javascript/> }/>
         <Route path="/Dropmenu" element={<Dropmenu/> }/>
        
         <Route path="/Scond" element={<Scond/> }/>
         <Route path="/Register" element={<Register/> }/>
         <Route path="/Ui" element={<Ui/> }/>
          <Route path="/StarRatingApp" element={<StarRatingApp/>}/>
        

    </Routes>
</BrowserRouter>
      
    
    </>
    )
}
