import './mainFooter.css'
import firstScale from './3 (19).jpg'
import secondScale from './2 (19).jpg'
import thirdScale from './1 (19).jpg'

export function MainFooter(){
  return(
    <footer className="mainFooter">
      <div className="firstScale"><img className="firstScaleImage" src={firstScale}/></div>
      <div className="secondScale"><img className="secondScaleImage" src={secondScale}/></div>
      <div className="thirdScale"><img className="thirdScaleImage"src={thirdScale}/></div>
    </footer>
  );
}
