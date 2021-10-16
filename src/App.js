import './App.css';
import React, { useState, useContext } from 'react';
import {MainHeader} from './mineComponents/mainHeader/mainHeader.js';
import {MainFooter} from './mineComponents/mainFooter/mainFooter.js';
import {MainSection} from './mineComponents/mainSection/mainSection.js';
import {ThemeContext, themes} from './mineComponents/themes/theme.js';


function App() {
  const [userTheme, setStateTheme] = useState({theme: themes.light, name:'light'});



  function hadleChangeTheme(){
    let newTheme = '';
    if(userTheme.theme===themes.dark){
      setStateTheme({theme: themes.light, name:'light'});
    }else{
      setStateTheme({theme: themes.dark, name:'dark'});
    }

  }
  return (
    <ThemeContext.Provider value={userTheme.name}>
      <div className="App" style={{backgroundColor: userTheme.theme.background, color: userTheme.theme.color}}>
        <MainHeader onChangeTheme={hadleChangeTheme}/>
        <MainSection/>
        <MainFooter/>
      </div>
     </ThemeContext.Provider>
  );
}
export default App;
