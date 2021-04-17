import Card from './card.js';
import './App.css';
import face from "./images/My face.PNG"
import page from "./images/webpage.jpg";
import shop from "./images/ShoppingWebsite.jpg";
import sched from "./images/schedule.jpg";
import pword from "./images/Pword.png";
import notepad from "./images/notepad.png";
import coin from "./images/titlegraphic.png";

function App() {
  return (
    <div className="App">
      <div className = "Top-of-screen">
        <img src={face} alt="my face"/>
        <p>James VanderKam</p>
        <p> About me: Hello, I am a Junior at RPI and a Computer Science major. I graduate in May of 2022. I live in New Jersey. </p>
      </div>
      <div className="mw">
      <Card name="Blog" link = "https://github.com/JVteam31415/TechBlog" img={page}/>
      <Card name="E-commerce tracker" link = "https://github.com/JVteam31415/ORMEcommerce" img={shop}/>
      <Card name="DayPlanner" link = "https://github.com/JVteam31415/DayPlanner" img={sched}/>
      <Card name="Password Generator" link = "https://github.com/JVteam31415/Password-Generator" img={pword}/>
      <Card name="Note Taker" link = "https://github.com/JVteam31415/notetaker" img={notepad}/>
      <Card name="Coinfinder" link = "https://github.com/daveyrojo/CoinFinder" img={coin}/>

      </div>
      <div id = "contact-info" className="ci">
            <p>Email: vandej8@rpi.edu</p>
            <a href="https://github.com/JVteam31415">Github</a>
            <p></p>
            <a href="https://www.linkedin.com/in/james-vanderkam-339074165/">LinkedIn</a>
            <p></p>
            <a href="https://app.joinhandshake.com/users/25835231">Handshake</a>
        </div>

    </div>
  );
}

export default App;
