import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Header } from './components/Header';

export default function App() {
  return (
    <>
      <Header/>
      <Home/>
    </>
  );
}

