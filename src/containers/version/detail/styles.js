import { textColors, colors } from '../../../style/Theme'

const bold = {
    fontWeight: 'bold',
}

export const styles = theme => ({
    wrapper: {
        margin: '32px 48px'
    },
    container: {
        display: 'flex',
    },
    main: {
        width: '70%',
        margin: 'auto',
    },
    collap: {
        marginBottom: 24,
    },
    collapTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px',
        position: 'relative',
        border: `0.5px solid ${colors.gray}`,
        minHeight: 33,
    },
    collapBottom: {
        padding: '0px 8px',
    },
    collapItem: {
        display: 'flex',
        flexDirection: 'column',

        paddingBottom: 16,
        borderBottom: `4px dotted ${colors.gray}`,
        marginBottom: 16,
        '&:first-child': {
            paddingTop: 16,
        },
        '&:last-child': {
            marginBottom: 0,
            borderBottom: 'none',
        },
        '& span': {
            '&:first-child': {
                paddingBottom: 16,
                fontWeight: 'bold',
            },
        },
        '& div': {
            '&:first-child': {
                display: 'flex',
                flexDirection: 'column',
            },
            '&:last-child': {
                display: 'flex',
                '& p': {
                    background: colors.blue,
                    width: 25,
                    height: 25,
                    borderRadius: '50%',
                    margin: '0 8px 0 0',
                    padding: 4,
                    cursor: "pointer",
                    '&:hover': {
                        background: colors.blueHover,
                    },
                    '& img': {
                        width: 25,
                        height: 25,
                    }
                },

            }
        }
    },
    haveIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover': {
            '& $edit': {
                display: 'block',
            },
        },
    },
    Draft: {
        ...bold,
        color: textColors.warn
    },
    Active: {
        ...bold,
        color: textColors.success
    },
    Previewing: {
        ...bold,
        color: textColors.info
    },
    Inactive: {
        ...bold,
        color: textColors.error
    },
    bold: {
        ...bold,
    },
    status: {
        flexBasis: '20%',
    },
    version: {
        flexBasis: '20%',
    },
    topItem: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            background: colors.blue,
            width: 25,
            height: 25,
            borderRadius: '50%',
            margin: 0,
            marginLeft: 6,
            padding: 4,
            cursor: "pointer",
            '&:hover': {
                background: colors.blueHover,
            },
        },
        '& img': {
            width: 25,
            height: 25,
        },
        '&:hover': {
            '& $edit': {
                display: 'block',
            },
        },
    },

    visible: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        visibility: 'hidden',
        position: 'absolute',
        top: '50%',
        right: 0,
        transform: 'translateY(-50%)',
        zIndex: 100,
        '& a': {
            background: '#267aff',
            width: 25,
            height: 25,
            borderRadius: '50%',
            marginRight: 8,
            padding: 4,
            cursor: "pointer",
        },
        '& img': {
            width: 25,
            height: 25,
        }
    },

    edit: {
        display: 'none',
    }
});