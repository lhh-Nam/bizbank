import { colors, textColors, borderRadiuses, boxShadows } from '../../../style/Theme'
import { getShadowStyle } from '../../../utils/StylesUtils';

const row = {
    //width: 'fit-content',
    width: '100%',
    display: 'grid',
    borderBottom: '1px solid #000',
    gridTemplateColumns:
        `minmax(70px, 1fr)
            minmax(200px, 2fr)
            minmax(200px, 1fr)
            minmax(150px, 1fr)
            minmax(100px, 0.5fr)
            minmax(100px, 0.5fr)
            minmax(100px, 0.5fr)`,
}

export const styles = theme => ({
    wrapper: {
        margin: '32px 48px',
    },
    flexBtw: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputArea: {
        height: 41,
        display: 'flex',
        alignItems: 'center',
        ...getShadowStyle({ color: boxShadows.base }),
        borderRadius: borderRadiuses.small,
        backgroundColor: colors.white,
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
    selectArea: {
        '& select': {
            cursor: 'pointer',
            height: 41,
            width: 200,
            padding: '0 16px',
            marginLeft: 12,
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
        }
    },
    table: {
        padding: '24px 0',
        overflowX: 'auto',
    },
    headingRow: {
        ...row,
        background: 'rgba(73, 73, 73, 0.08)',
        padding: '6px 0px',
        [theme.breakpoints.down('md')]: {
            width: 'fit-content',
        }
    },
    headingItem: {
        padding: '0px 12px',
    },
    test: {
        top: "50%",
        left: "50%",
        margin: "0",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        visibility: 'hidden',
    },
    rowColor: {
        flexBasis: 80,
        position: 'relative',
    },
    infoRow: {
        ...row,
        position: 'relative',
        '&:hover': {
            '& $visible': {
                display: 'flex',
            },
            '& $stt': {
                display: 'none',
            }

        },
        [theme.breakpoints.down('md')]: {
            width: 'fit-content',
        },
    },
    stt: {
        display: 'block',
    },
    infoItem: {
        padding: '24px 12px',
        display: 'flex',
        alignItems: 'center',
    },
    visible: {
        flex: 1,
        display: 'none',
        alignItems: 'center',
        '& a': {
            background: colors.blue,
            width: 25,
            height: 25,
            borderRadius: '50%',
            marginRight: 8,
            padding: 4,
            cursor: "pointer",
            '&:hover': {
                background: colors.blueHover,
            },
        },
        '& img': {
            width: 25,
            height: 25,
        }
    },
    create: {
        color: textColors.info,
        fontWeight: 'bold',
    }
});