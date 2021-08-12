
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
            width: '100%',
            boxSizing: 'border-box',
        },
        '& select': {
            width: '100%'
        },
        '& textarea': {
            width: '100%',
            boxSizing: 'border-box',
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