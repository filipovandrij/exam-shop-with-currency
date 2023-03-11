import {
    Card,
    CardActions,
    CardContent,
    Typography,
    Button,
    CssBaseline,
    StyledEngineProvider,
} from '@mui/material'
import './App.scss'
import productArray from '../../utils/productArray'
import { useState } from 'react'

type Props = {}

type Currency = 'EUR' | 'USD' | 'UAH'

const App = (props: Props) => {
    const [currency, setCurrency] = useState<Currency>('EUR')

    const changeCurrency = (currency: Currency) => () => {
        setCurrency(currency)
    }

    const currencyRateList: Record<Currency, number> = {
        EUR: 1,
        USD: 1.1,
        UAH: 40,
    }

    const renderPrice = (price: number) => {
        const rate = currencyRateList[currency]

        return Number(price * rate).toFixed(2)
    }

    const totalPrice = productArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
    )

    return (
        <>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <div className="container">
                    <div className="changed-btns">
                        <Button
                            variant="contained"
                            onClick={changeCurrency('USD')}
                        >
                            USD
                        </Button>
                        <Button
                            variant="contained"
                            onClick={changeCurrency('EUR')}
                        >
                            EUR
                        </Button>
                        <Button
                            variant="contained"
                            onClick={changeCurrency('UAH')}
                        >
                            UAH
                        </Button>
                    </div>
                    <div className="row">
                        {productArray.map(
                            ({ id, title, description, price }) => (
                                <Card className="card" key={id}>
                                    <CardContent>
                                        <Typography>{title}</Typography>
                                        <Typography>{description}</Typography>
                                        <Typography>
                                            {renderPrice(price)} {currency}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="outlined">Buy</Button>
                                    </CardActions>
                                </Card>
                            )
                        )}
                    </div>
                    <div className="total">Total:{renderPrice(totalPrice)}</div>
                </div>
            </StyledEngineProvider>
        </>
    )
}
export default App
