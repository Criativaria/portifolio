import './App.css'
import { LangProvider } from "./context/lang"
import ButtonLang from './components/buttonlang'
import ButtonMode from './components/buttonmode'
import { ModeProvider } from './context/mode'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <ModeProvider>
        <LangProvider>
          <ButtonMode />
          <ButtonLang />
          <Outlet />
        </LangProvider>
      </ModeProvider>
    </>
  )
}

export default App
