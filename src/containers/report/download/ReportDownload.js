import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import logo from '../../../assets/icons/apple.png'

const icons = {
    android: require('../../../assets/icons/android-gray.png').default,
    apple: require('../../../assets/icons/apple.png').default,
    calendar: require('../../../assets/icons/calendar.png').default,
    excel: require('../../../assets/icons/excel-black.png').default,
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
            currentFilter: filter[0]
        }
    }

    onChangeTab = (tab) => this.setState({ currentFilter: tab });

    _renderSidebar() {
        const { classes } = this.props;
        return (
            <div className={classes.sidebar}>
                <h2>Application</h2>
                <select>
                    <option>LFVN: FC mobile app</option>
                </select>
            </div>
        )
    }

    _renderTitle() {
        const { classes } = this.props;
        return (
            <div className={classes.title}>
                <h2>Mobile App Download History</h2>
                <input placeholder='Full name, user name' />
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
                <p className={classes.confirmBtn}>GO</p>
            </div>
        )
    }

    _renderSystem() {
        const { classes } = this.props;
        return (
            <div className={classes.system}>
                <div className={classes.account}>
                    <p>TK đã tải<br />ứng dụng</p>
                    <p>TK chưa tải<br />ứng dụng</p>
                    <p>TK đăng nhập<br />hơn 1 thiết bị</p>
                    <p>Thiết bị có hơn 1<br />Tk đăng nhập</p>
                </div>
                <div className={classes.operating}>
                    <p><img src={icons.android} /></p>
                    <p><img src={icons.apple} /></p>
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
                <div className={classes.export}><img src={icons.excel} /> Export</div>
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