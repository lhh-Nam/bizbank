import { colors, textColors, borderRadiuses, boxShadows } from '../../../style/Theme'
import { getShadowStyle } from '../../../utils/StylesUtils';

const pd = {
    paddingLeft: '16px',
    paddingRight: '16px',
}

export const styles = theme => ({
    paper: {
        width: '450px',
        margin: 16,
        // borderRadius: borderRadiuses.regular,
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
            padding: '8px 16px',
            borderRadius: borderRadiuses.small,
            outline: 'none',
            border: 'none',
            ...getShadowStyle({ color: boxShadows.base }),
            '&:hover': {
                ...getShadowStyle({ color: boxShadows.baseHover }),
            },
            '&:focus': {
                ...getShadowStyle({ color: boxShadows.baseHover }),
            }
        },

    },
    bottom: {
        display: 'flex',
        justifyContent: 'flex-end',
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
    }
});