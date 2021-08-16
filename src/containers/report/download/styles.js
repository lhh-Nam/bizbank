import { textColors, colors, borderRadiuses, boxShadows } from '../../../style/Theme';
import { getShadowStyle } from '../../../utils/StylesUtils';

const bold = {
    fontWeight: 'bold',
}

const flex = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const row = {
    //width: 'fit-content',
    width: '100%',
    display: 'grid',
    //borderBottom: '1px solid #000',
    gridTemplateColumns:
        `minmax(150px, 1fr)
            minmax(150px, 1fr)
            minmax(200px, 1fr)
            minmax(70px, 0.5fr)
            minmax(200px, 1fr)
            minmax(100px, 1fr)
            minmax(50px, 0.2fr)`,
}

const drawerWidth = 240;

export const styles = theme => ({
    wrapper: {
        margin: '32px 48px',
        '& p': {
            margin: 0,
        },
        '& input': {
            outline: 'none',
        },
        '& select': {
            outline: 'none',
        },
    },
    container: {
        display: 'flex',
    },
    main: {
        // flexBasis: '70%',
        // width: '70%',
        flex: 1,
    },
    title: {
        ...flex,
        '& h2': {
            margin: 0,
        },
        '& input': {
            borderRadius: 10,
            border: '1px solid #000',
            padding: '4px 8px',
        }
    },
    titleDiv: {
        ...flex,
    },
    filter: {
        ...flex,
        margin: '24px 0',

    },
    confirmBtn: {
        background: colors.bgDefault,
        borderRadius: 3,
        padding: '4px 8px',
        cursor: 'pointer',
    },
    system: {
        ...flex,
    },
    btnGroup: {
        ...flex,
        border: `1px solid ${colors.black}`,
        background: colors.bgDefault,
        borderRadius: 3,


        '& p': {
            borderRight: `1px solid ${colors.black}`,
            padding: '4px 8px',
            cursor: 'pointer',
            '&:last-child': {
                borderRight: 0,
            },
            '&:hover': {
                background: colors.gray,
            },
        }
    },
    active: {
        background: `${colors.blue} !important`,
        color: colors.white,
        '&:hover': {
            background: `${colors.blueHover} !important`,
        }
    },
    account: {
        ...flex,
        flexBasis: '70%',
        justifyContent: 'flex-start',
        '& button': {
            flexBasis: '20%',
            border: `1px solid ${colors.gray}`,
            borderRadius: borderRadiuses.tiny,
            textAlign: 'center',
            marginRight: 8,
            padding: '8px 0px',
            cursor: 'pointer',

            textTransform: 'none',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',

        }
    },
    operating: {
        ...flex,
        '& button': {
            flexBasis: '20%',
            border: `1px solid ${colors.gray}`,
            borderRadius: borderRadiuses.tiny,
            textAlign: 'center',
            marginLeft: 8,
            padding: 8,
            cursor: 'pointer',
        },
        '& img': {
            width: 32,
            height: 32,
        }
    },
    table: {
        // padding: '24px 0',
        margin: '24px 0',
        overflowX: 'auto',
        border: '1px solid #000',
    },
    headingRow: {
        ...row,

        background: 'rgba(73, 73, 73, 0.08)',
        [theme.breakpoints.down('md')]: {
            width: 'fit-content',
        }
    },
    headingItem: {
        padding: '6px 12px',
        borderRight: '1px solid #000',
    },
    bodyRow: {
    },
    rowColor: {
        flexBasis: 80,
        position: 'relative',
    },
    infoRow: {
        ...row,
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            width: 'fit-content',
        },
        '&:nth-child(odd)': {
            background: 'rgba(73, 73, 73, 0.03)',
        },
        '& img': {
            width: 24,
            height: 24,
        }
    },

    infoItem: {
        padding: '24px 12px',
        borderRight: '1px solid #000',
        '&:last-child': {
            borderRight: 'none',
        }
    },

    date: {
        display: 'flex',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            marginRight: 32,
            '& img': {
                width: 20,
                height: 20,
                cursor: 'pointer',
            },
            '& input': {
                margin: '0 16px',
                padding: '8px 16px',
                border: 'none',
                borderRadius: borderRadiuses.small,
                ...getShadowStyle({ color: boxShadows.base }),
                '&:hover': {
                    ...getShadowStyle({ color: boxShadows.baseHover }),
                },
            }
        }
    },
    export: {
        background: colors.bgDefault,
        textTransform: 'none',
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        '& img': {
            width: 20,
            height: 20,
            marginRight: 6,
        },
    },
    inputArea: {
        height: 41,
        display: 'flex',
        alignItems: 'center',
        borderRadius: borderRadiuses.small,
        backgroundColor: colors.white,
        ...getShadowStyle({ color: boxShadows.base }),
        '&:hover': {
            ...getShadowStyle({ color: boxShadows.baseHover }),
        },
        '& img': {
            width: 20,
            height: 20,
            padding: '0 16px',
        },
        '& input': {
            width: 270,
            border: 'none',
            outline: 'none',
        }
    },




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
        '& h2': {
            margin: 0,
            marginBottom: 16,
        },
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: colors.bgColor,
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: 0,

    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    sidebarContent: {
        padding: '0px 16px',
        '& select': {
            width: '100%',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 16px',
            borderRadius: borderRadiuses.small,
            ...getShadowStyle({ color: boxShadows.base }),
            '&:hover': {
                ...getShadowStyle({ color: boxShadows.baseHover }),
            },
        },
    },
    drawerRoot: {
        backgroundColor: colors.bgColor,
    },
    btnDraw: {

        '& img': {
            width: 20,
            height: 20,
        }
    }
});