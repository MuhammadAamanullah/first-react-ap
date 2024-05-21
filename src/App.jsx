import Header from './components/Header';
import { Examples } from './components/Examples';
import { CoreConcepts } from './components/CoreConcepts';

const user = {
  email: '',
  passowrd: '',
  isLoggedIn: false
}

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App