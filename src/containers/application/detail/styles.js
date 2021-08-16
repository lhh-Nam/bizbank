import { textColors, colors, borderRadiuses } from '../../../style/Theme'

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
        }
    },
    sidebarInfo: {
        padding: 16,
        border: `0.5px solid ${colors.gray}`,
        borderRadius: borderRadiuses.small,
        marginBottom: 24,
        '&:last-child': {
            marginBottom: 0,
        },
    },
    sideItem: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 12,
        borderBottom: `4px dotted ${colors.gray}`,
        marginBottom: 12,
        '&:last-child': {
            marginBottom: 0,
        },
        '& span': {
            '&:first-child': {
                color: textColors.light,
                paddingBottom: 12,
            },
            '&:last-child': {
                fontWeight: 'bold',
            }
        }
    },
    collap: {
        border: `0.5px solid ${colors.gray}`,
        marginBottom: 24,
    },
    collapTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '16px',
        position: 'relative',
        '&:hover': {
            '& $visible, $test': {
                visibility: 'visible'
            }
        },
    },
    collapBottom: {
        padding: '0px 8px',
    },
    collapItem: {
        display: 'flex',
        flexDirection: 'column',

        paddingBottom: 12,
        borderBottom: `4px dotted ${colors.gray}`,
        marginBottom: 12,
        '&:first-child': {
            paddingTop: 12,
        },
        '&:last-child': {
            marginBottom: 0,
            borderBottom: 'none',
        },
        '& span': {
            '&:first-child': {
                paddingBottom: 12,
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
    tabs: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        borderBottom: `1px solid ${colors.black}`,
        '& span': {
            ...bold,
            color: textColors.info,
            cursor: 'pointer',
        }
    },
    tabsGroup: {
        display: 'flex',
        marginLeft: 16,
        '& p': {
            margin: 0,
            padding: '8px 12px',
            background: colors.bgDefault,
            cursor: 'pointer',
            borderStyle: 'solid',
            borderColor: colors.black,
            borderWidth: '1px 0px 0px 1px',
            '&:last-child': {
                borderRightWidth: 1,
            }
        },
    },
    active: {
        background: `${colors.white} !important`,
        zIndex: 100,
        position: 'relative',
        '&::after': {
            display: 'block',
            content: "",
            position: 'absolute',
            width: '100%',
            height: 10,
            backgroundColor: 'red'
        }
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
});