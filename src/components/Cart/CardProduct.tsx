import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import './CardProduct.scss'
import productArray from '../../utils/productArray'

type Props = {}
const CardProduct = (props: Props) => {
    return (
        <>
            {productArray.map(({ id, title, description, price, currency }) => (
                <Card className="card" key={id}>
                    <CardContent>
                        <Typography>{title}</Typography>
                        <Typography>{description}</Typography>
                        <Typography>
                            {currency} {price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined">Buy</Button>
                    </CardActions>
                </Card>
            ))}
        </>
    )
}
export default CardProduct
