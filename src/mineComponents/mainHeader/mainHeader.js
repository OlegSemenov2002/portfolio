import './mainHeader.css';
import {ThemedButton} from './themedButton.js';

export function MainHeader(props){

  return(
    <header className="mainHeader">
      <h1 className="name">Junior FrontEnd JavaScript (React) разработчик</h1>
      <div className="darkThemeButton">
        <ThemedButton onChange={props.onChangeTheme}>Поменять тему</ThemedButton>
      </div>
    </header>
  );
}
