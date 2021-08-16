import React, { Component } from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

const icons = {
    android: require('../../../assets/icons/android-gray.png').default,
    apple: require('../../../assets/icons/apple.png').default,
    calendar: require('../../../assets/icons/calendar.png').default,
    excel: require('../../../assets/icons/excel-black.png').default,
    search: require('../../../assets/icons/search-black.png').default,
    chevronLeft: require('../../../assets/icons/chevron_left.png').default,
    chevronRight: require('../../../assets/icons/chevron_right.png').default,
};

const data = [
    {
        fullName: 'Nguyễn Văn A',
        userName: 'a.nguyen',
        date: '14.25 10.Jun.2021',
        version: '2.3.1',
        serial: '990000862471854',
        device: 'iPhone 12',
        icon: '',
    },
    {
        fullName: 'Nguyễn Văn A',
        userName: 'a.nguyen',
        date: '14.25 10.Jun.2021',
        version: '2.3.1',
        serial: '990000862471854',
        device: 'iPhone 12',
        icon: '',
    },
    {
        fullName: 'Nguyễn Văn A',
        userName: 'a.nguyen',
        date: '14.25 10.Jun.2021',
        version: '2.3.1',
        serial: '990000862471854',
        device: 'iPhone 12',
        icon: '',
    },
    {
        fullName: 'Nguyễn Văn A',
        userName: 'a.nguyen',
        date: '14.25 10.Jun.2021',
        version: '2.3.1',
        serial: '990000862471854',
        device: 'iPhone 12',
        icon: '',
    },
    {
        fullName: 'Nguyễn Văn A',
        userName: 'a.nguyen',
        date: '14.25 10.Jun.2021',
        version: '2.3.1',
        serial: '990000862471854',
        device: 'iPhone 12',
        icon: '',
    },
]

class ReportDownload extends Component {
    constructor(props) {
        super(props);
        const filter = ['Today', 'Yesterday', 'This week', 'This month'];
        this.state = {
            filter,
            content: data,
            isOpen: true,
            currentFilter: filter[0]
        }
    }

    toggleDrawer = () => this.setState(state => ({ isOpen: !state.isOpen }))

    onChangeTab = (tab) => this.setState({ currentFilter: tab });

    _renderSidebar() {
        const { classes } = this.props;
        const { isOpen } = this.state;
        return (
            <Drawer
                anchor='right'
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: isOpen,
                    [classes.drawerClose]: !isOpen,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: isOpen,
                        [classes.drawerClose]: !isOpen,
                    }),
                    root: classes.drawerRoot,
                }}
            >
                <div className={classes.toolbar}>
                    {/* <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton> */}
                    <IconButton onClick={this.toggleDrawer}>
                        <img src={icons.chevronRight} />
                    </IconButton>

                </div>
                <div className={classes.sidebarContent}>
                    <h2>Application</h2>
                    <select>
                        <option>LFVN: FC mobile app</option>
                    </select>
                </div>
            </Drawer>
        )
    }

    _renderTitle() {
        const { classes } = this.props;
        const { isOpen } = this.state;
        return (
            <div className={classes.title}>
                <h2>Mobile App Download History</h2>
                <div className={classes.titleDiv}>
                    <div className={classes.inputArea} style={{ marginRight: isOpen ? 0 : 16 }}>
                        <img src={icons.search} />
                        <input
                            placeholder='Full name, user name'
                        />
                    </div>
                    <IconButton className={classes.btnDraw} onClick={this.toggleDrawer} style={{ display: isOpen ? 'none' : 'block' }}>
                        <img src={icons.chevronLeft} />
                    </IconButton>
                </div>
            </div>
        )
    }

    _renderFilter() {
        const { classes } = this.props;
        const { filter, currentFilter } = this.state;
        return (
            <div className={classes.filter}>
                <div className={classes.btnGroup}>
                    {filter.map((item, idx) => {
                        return <p key={idx} className={currentFilter === item ? classes.active : null} onClick={() => this.onChangeTab(item)}>{item}</p>
                    })}
                </div>
                <div className={classes.date}>
                    <div>
                        <span>From</span>
                        <input />
                        <img src={icons.calendar} />
                    </div>
                    <div>
                        <span>To</span>
                        <input />
                        <img src={icons.calendar} />
                    </div>
                </div>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.confirmBtn}
                >GO
                </Button>
                {/* <p className={classes.confirmBtn}>GO</p> */}
            </div>
        )
    }

    _renderSystem() {
        const { classes } = this.props;
        return (
            <div className={classes.system}>
                <div className={classes.account}>
                    <Button variant="outlined">TK đã tải<br />ứng dụng</Button>
                    <Button variant="outlined">TK chưa tải<br />ứng dụng</Button>
                    <Button variant="outlined">TK đăng nhập<br />hơn 1 thiết bị</Button>
                    <Button variant="outlined">Thiết bị có hơn 1<br />Tk đăng nhập</Button>
                </div>
                <div className={classes.operating}>
                    <Button variant="outlined"><img src={icons.android} /></Button>
                    <Button variant="outlined"><img src={icons.apple} /></Button>
                </div>
            </div>
        )
    }

    _renderList() {
        const { classes } = this.props;
        const { content } = this.state;
        return (
            <div className={classes.table}>
                <div className={classes.headingRow}>
                    <div className={classes.headingItem}><span>Full Name</span></div>
                    <div className={classes.headingItem}><span>User Name</span></div>
                    <div className={classes.headingItem}><span>Download Date</span></div>
                    <div className={classes.headingItem}><span>Version</span></div>
                    <div className={classes.headingItem}><span>Device Serial Number</span></div>
                    <div className={classes.headingItem}><span>Device model</span></div>
                    {/* <div className={classes.visible}></div> */}
                </div>
                <div className={classes.body}>
                    <div className={classes.bodyRow} >
                        {
                            content.map((item, idx) => {
                                return (
                                    <div key={idx} className={classes.infoRow}>
                                        <div className={classes.infoItem}><span>{item.fullName}</span></div>
                                        <div className={classes.infoItem}><span>{item.userName}</span></div>
                                        <div className={classes.infoItem}><span>{item.date}</span></div>
                                        <div className={classes.infoItem}><span>{item.version}</span></div>
                                        <div className={classes.infoItem}><span>{item.serial}</span></div>
                                        <div className={classes.infoItem}><span>{item.device}</span></div>
                                        <div className={classes.infoItem}><span><img src={icons.apple} /></span></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        )
    }

    _renderMainContent() {
        const { classes } = this.props;
        return (
            <div className={classes.main}>
                {this._renderTitle()}
                {this._renderFilter()}
                {this._renderSystem()}
                {this._renderList()}
                <Button
                    variant="contained"
                    color="default"
                    className={classes.export}
                >
                    <img src={icons.excel} /> Export
                </Button>
                {/* <div className={classes.export}><img src={icons.excel} /> Export</div> */}
            </div>
        )
    }

    _renderBodyPage() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                {this._renderMainContent()}
                {this._renderSidebar()}
            </div>
        )
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                {this._renderBodyPage()}
            </div>
        );
    }
}

export default withStyles(styles)(ReportDownload);