import { textColors, colors, borderRadiuses, boxShadows } from '../../../style/Theme';
import { getShadowStyle } from '../../../utils/StylesUtils'

const flex = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const row = {
    // width: '100%',
    display: 'grid',
    gridTemplateColumns:
        `minmax(150px, 1fr)
            minmax(150px, 1fr)
            minmax(150px, 1fr)
            minmax(150px, 1fr)
            `,
}

export const styles = theme => ({
    wrapper: {
        margin: '32px 48px',
        '& p': {
            margin: 0,
        }
    },
    container: {
        display: 'flex',
    },
    main: {
        flexBasis: '70%',
        width: '70%',
    },
    sidebar: {
        flexBasis: '30%',
        width: '30%',
        marginLeft: 48,
        '& h2': {
            margin: 0,
            marginBottom: 16,
        },
        '& select': {
            width: '100%',
            padding: '4px 0',
        },
    },
    filter: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 16,
        border: `1px solid ${colors.gray}`,
        padding: '16px 8px'
    },
    confirmBtn: {
        background: colors.bgDefault,
        borderRadius: 3,
        padding: '4px 8px',
        cursor: 'pointer',
    },
    table: {
        margin: '16px 0',
        overflowX: 'auto',
    },
    headingRow: {
        ...row,
        border: `1px solid ${colors.gray}`,
        background: 'rgba(73, 73, 73, 0.08)',
        [theme.breakpoints.down('sm')]: {
            width: 'fit-content',
        }
    },
    headingItem: {
        padding: '6px 12px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:first-child': {
            justifyContent: 'flex-start',
        },
        '& img': {
            width: 24,
            height: 24,
            marginRight: 6,
        },
    },
    bodyRow: {
    },
    rowColor: {
        flexBasis: 80,
    },
    infoRow: {
        ...row,
        [theme.breakpoints.down('sm')]: {
            width: 'fit-content',
        },
    },
    infoItem: {
        padding: '24px 12px',
        textAlign: 'center',
        '&:first-child': {
            textAlign: 'left',
        }
    },
    pointer: {
        display: 'block',
        borderRadius: '50%',
        background: colors.blue,
        marginRight: 8,
        width: 14,
        height: 14,
    },
    listContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    device: {
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${colors.gray}`,
        borderRadius: borderRadiuses.tiny,
        marginBottom: 8,
        padding: '0px 16px',
        '& span': {
            display: 'block',
            padding: '8px',
        },
        '& img': {
            width: 24,
            height: 24,
        },
        '&:last-child': {
            marginBottom: 0,
        }
    },
    status: {
        background: colors.bgDefault,
        border: `1px solid ${colors.gray}`,
        borderRadius: borderRadiuses.tiny,
        marginBottom: 24,
        padding: 16,
    },
    sttTop: {
        ...flex,
        marginBottom: 8,
        '& span': {
            fontWeight: 'bold',
        }
    },
    sttPointer: {
        display: 'block',
        borderRadius: '50%',
        background: colors.green,
        marginRight: 8,
        width: 10,
        height: 10,
        border: `2px solid ${colors.bgColor}`,
        boxShadow: `0 0 0 2px ${colors.green}`,
    },
    sttBottom: {
        ...flex,
        '& span': {
            '&:first-child': {
                textTransform: 'uppercase',
            },
            '&:last-child': {
                color: textColors.light,
                fontSize: 14,
            }
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
                outline: 'none',
                borderRadius: borderRadiuses.small,
                ...getShadowStyle({ color: boxShadows.base }),
                '&:hover': {
                    ...getShadowStyle({ color: boxShadows.baseHover }),
                },
            }
        }
    },
    export: {
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        margin: '24px 0px',
        textTransform: 'none',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        fontFamily: 'inherit',
        '& img': {
            width: 20,
            height: 20,
            marginRight: 8,
        },
    }
});