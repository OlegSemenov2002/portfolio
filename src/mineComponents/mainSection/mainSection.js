import {ProfileAbout} from './profileAbout/profileAbout.js'
import {ProfileInfo} from './profileInfo/profileInfo.js'

import './mainSection.css';


export function MainSection() {
  return(
    <section className="mainSection">
      <article className="profileAbout"><ProfileAbout/></article>
      <article className="profileInfo"><ProfileInfo/></article>
    </section>
  );
}
