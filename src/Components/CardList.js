import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/styles';
import styles from '../styles/CardListStyles';
import Cards from './Cards';

function CardList({ pokemons, classes }) {

    const [score, setScore] = useState([])
    const [maxScore, setMaxScore] = useState([])


    const shuffleArray = arr => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    const normalScore = (pokemonName) => {
        setScore([...score, pokemonName])

    }
    useEffect(() => {
        for (let p of score) {
            if (score.indexOf(p) !== score.lastIndexOf(p)) {
                setScore([])

            }
        }
        let newBestScore = score.filter(item => score.indexOf(item) === score.lastIndexOf(item))

        setMaxScore(m => [...m, newBestScore.length])

        shuffleArray(pokemons)

    }, [score])


    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Memory Game</h1>
            </div>

            <div className={classes.scores}>
                <h2>Score is: {score.length}</h2>
                <h2>Best Score is: {Math.max(...maxScore)}</h2>
            </div>

            <div className={classes.cardContainer}>
                {pokemons.map(pokemon => (

                    <Cards
                        normalScore={normalScore}
                        id={pokemon.id}
                        key={pokemon.id}
                        name={pokemon.name} />

                ))}

            </div>

            <footer className={classes.footer}>
                <p>Created by Nadim Radjab&copy; </p>
                <a href='https://github.com/NadimRadjab'><i className="fab fa-github"></i></a>
            </footer>
        </div>
    )
}


CardList.defaultProps = {
    pokemons: [
        { id: '001', name: 'Speed' },
        { id: '004', name: 'Charmander' },
        { id: '007', name: 'Squirtle' },
        { id: '011', name: 'Metapod' },
        { id: '012', name: 'Butterfree' },
        { id: '025', name: 'Pikachu' },
        { id: '039', name: 'Jigglypuff' },
        { id: '094', name: 'Gengar' },
        { id: '133', name: 'Eevee' },
        { id: '132', name: 'Ditto' }
    ]
}
export default withStyles(styles)(CardList);