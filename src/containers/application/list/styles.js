import { colors, textColors, borderRadiuses } from '../../../style/Theme'

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
        margin: '32px 48px'
    },
    flexBtw: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputArea: {
        '& input': {
            width: 270,
            borderRadius: 10,
            border: '1px solid #000',
            padding: '4px 8px',
            outline: 'none',
        }
    },
    selectArea: {
        '& select': {
            width: 120,
            marginLeft: 12,
            outline: 'none',
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
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
    },

    bodyRow: {
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
            '& $visible, $test': {
                visibility: 'visible'
            }
        },
        [theme.breakpoints.down('md')]: {
            width: 'fit-content',
        },
        // '&:nth-child(even)': {
        //     background: 'red'
        // }
    },
    infoItem: {
        padding: '24px 12px',
        // overflow: 'hidden',
        // textOverflow: 'ellipsis',
        // whiteSpace: 'nowrap',
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
        '& a': {
            background: '#267aff',
            width: 20,
            height: 20,
            borderRadius: '50%',
            marginRight: 8,
            padding: 4,
            cursor: "pointer",
        },
        '& img': {
            width: 20,
            height: 20,
        }
    },
    create: {
        color: textColors.info,
    }
});