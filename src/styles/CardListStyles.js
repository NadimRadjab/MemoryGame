import sizes from "./sizes"

const styles = {

    root: {
        overflow: 'auto',
        fontFamily: 'Roboto',
        color: '#363732',
        backgroundColor: '#DCE1E9',
        height: '100vh',
    },
    title: {
        overflow: 'hidden',
        height: '94px',
        width: '100%',
        backgroundColor: '#8D9DB9',
        '& h1': {
            fontSize: '40px',
            color: '#363732',
            display: 'inline-block',
            position: 'relative',
            left: '230px',

        },
        [sizes.down('xs')]: {
            '& h1': {
                color: '#363732',
                display: 'inline-block',
                position: 'relative',
                left: '80px',

            }
        },


    },
    scores: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        height: '64px',
        margin: '1rem',
        '& h2': {
            display: 'inline-block',
            margin: '0.5rem'
        },
        [sizes.down('lg')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',


        }
    },
    cardContainer: {
        display: 'grid',
        height: 'calc(100vh - 265px)',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridGap: '1rem',
        margin: '1.5rem',
        [sizes.down('xl')]: {
            height: 'calc(100vh - 235px)',
        },
        [sizes.down('sm')]: {
            gridTemplateColumns: 'repeat(4, 1fr)',
            height: 'calc(100vh - 120px)',
        },
        [sizes.down('xs')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            height: 'calc(100vh + 25px)'
        }
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px',
        justifyContent: 'center',
        height: '44px',
        width: '100%',
        backgroundColor: '#8D9DB9',

        bottom: 0,
        '& p': {
            margin: '1rem'
        },
        '& a': {
            color: 'inherit'
        },
        '&:hover a': {
            transform: 'scale(1.3)',
            color: 'gold'
        },
    },

}
export default styles