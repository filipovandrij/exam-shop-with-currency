import { Button, CssBaseline, StyledEngineProvider } from '@mui/material'
import CardProduct from '../../components/Cart/CardProduct'
import './App.scss'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <div className="container">
                <div className="changed-btns">
                    <Button variant="contained">USD</Button>
                    <Button variant="contained">EUR</Button>
                    <Button variant="contained">UAH</Button>
                </div>
                <div className="row">
                    <CardProduct></CardProduct>
                    <CardProduct></CardProduct>
                    <CardProduct></CardProduct>
                </div>
                <div className="total">Total:</div>
            </div>
        </StyledEngineProvider>
    )
}
export default App
