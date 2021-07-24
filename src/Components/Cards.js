import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const api = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`
function Cards({ id, name, normalScore }) {
    const handleClick = () => {
        normalScore(name)
    }
    return (
        <div>
            <Card onClick={handleClick} style={{ width: '345px' }}>
                <CardActionArea >
                    <CardMedia
                        style={{ height: '300px' }}
                        image={`${api}${id}.png`}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>

                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
    )
}
export default Cards;