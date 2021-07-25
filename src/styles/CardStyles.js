import sizes from "./sizes";

const styles = {

    card: {
        backgroundColor: '#C0C9D8',
        width: '70%',
        height: '260px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        '&:hover': {
            transform: ' scale(1.1)',
            cursor: 'pointer',
            transition: 'all 0.4s ease-in-out'
        },
        '& img': {
            width: '200px'
        },
        [sizes.down('lg')]: {
            width: '75%',
            height: '200px',
            '& img': {
                width: '150px',
                height: '150px'
            },
            [sizes.down('md')]: {
                width: '85%',

            },
            [sizes.down('xs')]: {
                width: '100%',
                height: '190px',
                '& img': {
                    width: '120px',
                    height: '125px'
                },
                '&:hover': {
                    transform: ' scale(1)',
                    cursor: 'pointer',
                },
            }
        }
    },
    names: {
        [sizes.down('lg')]: {
            fontSize: '20px'
        },
        [sizes.down('md')]: {
            fontSize: '17px'
        },
        [sizes.down('xs')]: {
            fontSize: '15px'
        },
    }

}
export default styles