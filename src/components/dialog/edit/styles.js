import { colors, textColors, borderRadiuses, boxShadows } from '../../../style/Theme'
import { getShadowStyle } from '../../../utils/StylesUtils';

const common = {
    padding: '8px 16px',
    borderRadius: borderRadiuses.small,
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    ...getShadowStyle({ color: boxShadows.base }),
    '&:hover': {
        ...getShadowStyle({ color: boxShadows.baseHover }),
    },
    '&:focus': {
        ...getShadowStyle({ color: boxShadows.baseHover }),
    }
}

const pd = {
    paddingLeft: '16px',
    paddingRight: '16px',
}

export const styles = theme => ({
    paper: {
        width: '450px',
        margin: 16,
        fontSize: 14,
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: '16px',
        paddingBottom: '16px',
        ...pd,
        borderBottom: `1px solid ${colors.bgDefault}`,
        '& img': {
            width: 16,
            height: 16,
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
    info: {
        flexBasis: '60%',
        '& input': {
            height: 32,
            ...common,
        },
        '& select': {
            height: 32,
            ...common,
            cursor: 'pointer'
        },
        '& textarea': {
            resize: 'none',
            outline: 'none',
            fontFamily: 'inherit',
            ...common,
        },
    },
    bottom: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '16px',
        paddingBottom: '16px',
        borderTop: `1px solid ${colors.bgDefault}`,
        ...pd,
    },
    btn: {
        background: colors.blue,
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
            background: colors.blueHover,
        }
    },
    error: {
        color: 'red'
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