import './profileAbout.css'
import photo from'./6CSCrZ5gNmk.jpg'

export function ProfileAbout(){
  return(
    <div className="profile">
      <div className="profileImage">
        <img className="profilePhoto"src={photo} alt="photo"/>
      </div>
      <h1 id="name">Oleg</h1>
      <h1 id="surname">Semenov</h1>
    </div>
  );
}
