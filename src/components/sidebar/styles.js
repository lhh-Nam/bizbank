import { colors, boxShadows } from '../../style/Theme';
import { getShadowStyle } from '../../utils/StylesUtils';

const drawerWidth = 240;

export const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        '& p': {
            textAlign: 'center',
        },
        '& a': {
            textDecoration: 'none',
            color: colors.black,
        },
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        '& img': {
            width: 20,
            height: 20,
            cursor: 'pointer',
        },

    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    noneLine: {
        border: 'none',
        ...getShadowStyle({ color: boxShadows.base }),
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        margin: '16px 0',
        padding: '0 24px',
        '& img': {
            width: 25,
            height: 25,
            marginRight: 24,
        },
        '& span': {
            textTransform: 'capitalize',
        }
    }
})