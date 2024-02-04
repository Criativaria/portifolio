import { Sun, Moon } from 'lucide-react';
import styled from 'styled-components'
import { useContext } from 'react';
import { ModeContext } from '../context/mode';

export default function ButtonMode() {

    const { toggleMode, mode } = useContext(ModeContext)

    return (
        <DivSun onClick={toggleMode}>
            {mode === "black" ? <Moon size={35} /> : <Sun size={35} color="#ffffff" />}
        </DivSun>
    )

}

const DivSun = styled.div`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    z-index: 10;
    right: 100px;
    margin-top: 50px;
`