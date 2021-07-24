import React, { useEffect, useState } from 'react'
import Cards from './Cards';

function CardList({ pokemons }) {

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
        <div>
            <h2>Score is: {score.length}</h2>
            <h2>Best Score is: {Math.max(...maxScore)}</h2>
            {pokemons.map(pokemon => (
                <Cards normalScore={normalScore} id={pokemon.id} key={pokemon.id} name={pokemon.name} />
            ))}

        </div>
    )
}


CardList.defaultProps = {
    pokemons: [
        { id: '004', name: 'Charmander' },
        { id: '007', name: 'Squirtle' },
        { id: '011', name: 'Metapod' },
        { id: '012', name: 'Butterfree' },
        { id: '025', name: 'Pikachu' },
        { id: '039', name: 'Jigglypuff' },
        { id: '094', name: 'Gengar' },
        { id: '133', name: 'Eevee' }
    ]
}
export default CardList;