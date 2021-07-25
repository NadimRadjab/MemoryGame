import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from '../styles/CardStyles';
import Typography from '@material-ui/core/Typography';
const api = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`



function Cards({ id, name, normalScore, classes }) {
    const handleClick = () => {
        normalScore(name)
    }
    return (


        <Card className={classes.card} onClick={handleClick} >
            <img
                src={`${api}${id}.png`}
                alt={name}
            />
            <CardContent>
                <Typography className={classes.names} gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>

            </CardContent>


        </Card >


    )
}
export default withStyles(styles)(Cards);