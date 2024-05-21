const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import reactImg from '../assets/react-core-concepts.png'

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are going to build!
        </p>
      </header>
    );
  }

  export default Header