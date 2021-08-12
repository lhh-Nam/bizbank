
import { colors, textColors, borderRadiuses } from '../../../style/Theme'

export const styles = theme => ({
    paper: {
        width: '450px',
        margin: 16,
        padding: '24px 16px',
        // borderRadius: borderRadiuses.regular,
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& img': {
            width: 20,
            height: 20,
            cursor: 'pointer',
        }
    },
    body: {
        margin: '24px 32px',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 24,
        '& p': {
            margin: 0,
            marginRight: 12,
            flexBasis: '40%'
        },
        '&:last-child': {
            marginBottom: 0,
        }
    },
    error: {
        color: 'red'
    },
    info: {
        flexBasis: '60%',
        '& input': {
            padding: 4,
            width: '100%',
            boxSizing: 'border-box',
            outline: 'none',
        },
        '& select': {
            padding: 4,
            width: '100%',
            outline: 'none',
        },
        '& textarea': {
            padding: 4,
            width: '100%',
            boxSizing: 'border-box',
            resize: 'none',
            outline: 'none',
        },
    },
    bottom: {
        display: 'flex',
        justifyContent: 'center',

        '& span': {
            background: colors.blue,
            color: colors.white,
            padding: '6px 12px',
            borderRadius: borderRadiuses.tiny,
            cursor: 'pointer',
        }
    },


    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
});