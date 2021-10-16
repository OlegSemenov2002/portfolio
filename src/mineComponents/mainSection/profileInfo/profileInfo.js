import {BlockContainer} from '../block-container/block-container.js'
import './profileInfo.css'
export function ProfileInfo(){
  return(
    <div className="profileInfoDesk">
    <ul>
        <li><BlockContainer heading="Обо мне" className="aboutMe">
        HTML5/CSS3 на базовом уровне;
        JS, ES6+ углубленные знания (работа с DOM, асинхронность и тд.);
        Знание и опыт использования React;
        Общие знания: REST API, Git, HTTP, NPM, Алгоритмов, ООП.
        </BlockContainer></li>


        <li><BlockContainer heading="Образование" className="education">
        Санкт-Петербургский государственный университет телекоммуникаций им. проф. М.А. Бонч-Бруевича, Санкт-Петербург
        </BlockContainer></li>


        <li><BlockContainer heading="Ключевые навыки" className="skills">
        Работоспособность, JavaScript, HTML, CSS, Git, react, frontend, Английский язык, REST.
        </BlockContainer></li>
    </ul>
    <div className="contact">Email: o.semenov_dev@mail.ru</div>
    </div>
  )
}
