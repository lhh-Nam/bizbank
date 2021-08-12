import { textColors, colors, borderRadiuses } from '../../../style/Theme'

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
    title: {
        ...flex,
        '& h2': {
            margin: 0,
        },
        '& input': {
            borderRadius: 10,
            border: '1px solid #000',
            padding: '4px 8px'
        }
    },
    filter: {
        ...flex,
        margin: '24px 0'
    },
    confirmBtn: {
        border: `1px solid ${colors.black}`,
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
        borderRadius: 3,
        background: colors.bgDefault,
        '& p': {
            borderRight: `1px solid ${colors.black}`,
            padding: '4px 8px',
            cursor: 'pointer',
            '&:last-child': {
                borderRight: 0,
            }
        }
    },
    active: {
        background: `${colors.blue} !important`,
        color: colors.white,
    },
    account: {
        ...flex,
        flexBasis: '70%',
        justifyContent: 'flex-start',
        '& p': {
            flexBasis: '20%',
            border: `1px solid ${colors.gray}`,
            borderRadius: borderRadiuses.tiny,
            textAlign: 'center',
            marginRight: 8,
            padding: '8px 0px',
            cursor: 'pointer',
        }
    },
    operating: {
        ...flex,
        '& p': {
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
            },
            '& input': {
                margin: '0 16px',
                padding: 4,
                cursor: 'pointer',
            }
        }
    },
    export: {
        border: '1px solid #000',
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        borderRadius: borderRadiuses.tiny,
        background: colors.bgDefault,
        '& img': {
            width: 20,
            height: 20,
        },
    }
});