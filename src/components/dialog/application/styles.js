
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
        '& span': {
            color: 'red'
        },
        '&:last-child': {
            marginBottom: 0,
        }
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
        justifyContent: 'flex-end',

        '& span': {
            background: colors.blue,
            color: colors.white,
            padding: '6px 12px',
            marginRight: 32,
            borderRadius: borderRadiuses.tiny,
            cursor: 'pointer',
        }
    }
});