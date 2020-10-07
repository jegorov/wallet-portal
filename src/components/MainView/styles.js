export const styles = theme => ({
    searchBox: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(3),
        display: 'flex',
        margin: theme.spacing(1)
    },
    searchIcon: {
        margin: theme.spacing(1),
        backgroundColor: "lightskyblue",
    },
    form: {
        width: '50%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2)
    },
    wallet: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "white",
    },
    mainView: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    mainContainer: {
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    appText: {
        marginLeft: '5%',
        marginBottom: '3%'
    },
    pointer: {
        cursor: "pointer"
    }
});