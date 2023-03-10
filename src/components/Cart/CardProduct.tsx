import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import './CardProduct.scss'

type Props = {}
const CardProduct = (props: Props) => {
    return (
        <>
            <Card className="card">
                <CardContent>
                    <Typography>iPhone12</Typography>
                    <Typography>This is iPhone12 ...</Typography>
                    <Typography>EUR 750</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined">Buy</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default CardProduct
