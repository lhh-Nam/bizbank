import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import Button from '@material-ui/core/Button';
import { styles } from './styles';

const icons = {
    android: require('../../../assets/icons/android-green.png').default,
    web: require('../../../assets/icons/cursor.png').default,
    apple: require('../../../assets/icons/apple.png').default,
    calendar: require('../../../assets/icons/calendar.png').default,
    excel: require('../../../assets/icons/excel-green.png').default,
};

const data = [
    {
        date: '25.Jun.2021',
        android: '10:45',
        ios: '',
        web: '',
    },
    {
        date: '25.Jun.2021',
        android: '09:45',
        ios: '',
        web: '',
    },
    {
        date: '25.Jun.2021',
        android: '',
        ios: '09:00',
        web: '',
    },
    {
        date: '25.Jun.2021',
        android: '',
        ios: '',
        web: '08:45',
    },
    {
        date: '25.Jun.2021',
        android: '08:30',
        ios: '',
        web: '',
    },
    {
        date: '25.Jun.2021',
        android: '',
        ios: '07:15',
        web: '',
    },
]


class ReportActivity extends Component {
    constructor(props) {
        super(props);
        const filter = ['Today', 'Yesterday', 'This week', 'This month'];
        this.state = {
            filter,
            content: data,
            selectedDate: {
                from: new Date(),
                to: new Date(),
            },
            currentFilter: filter[0]
        }
    }

    handleDateChange = (date, key) => this.setState(state => ({ selectedDate: { ...state.selectedDate, [key]: date } }));

    _renderStatus() {
        const { classes } = this.props;
        return (
            <div className={classes.status}>
                <div className={classes.sttTop}>
                    <span className={classes.fullname}>Nguyễn Văn A</span>
                    <div className={classes.sttPointer}></div>
                </div>
                <div className={classes.sttBottom}>
                    <span>a.nguyen</span>
                    <span>Current status</span>
                </div>
            </div>
        )
    }

    _renderDevice() {
        const { classes } = this.props;
        return (
            <div>
                <h2>Used devices</h2>
                <div>
                    <div className={classes.device}>
                        <img src={icons.apple} /><span>iPhone X</span>
                    </div>
                    <div className={classes.device}>
                        <img src={icons.apple} /><span>iPhone X</span>
                    </div>
                    <div className={classes.device}>
                        <img src={icons.apple} /><span>iPhone X</span>
                    </div>
                    <div className={classes.device}>
                        <img src={icons.android} /><span>Samsung galaxy a12</span>
                    </div>
                    <div className={classes.device}>
                        <img src={icons.web} /><span>Google chrome (PC)</span>
                    </div>
                    <div className={classes.device}>
                        <img src={icons.web} /><span>Google chrome (iPhone X)</span>
                    </div>
                    <div className={classes.device}>
                        <img src={icons.web} /><span>Google chrome (iPad)</span>
                    </div>
                </div>

                <Button className={classes.export}>
                    <img src={icons.excel} /> Export to Excel
                </Button>
            </div>
        )
    }

    _renderSidebar() {
        const { classes } = this.props;
        return (
            <div className={classes.sidebar}>
                {this._renderStatus()}
                {this._renderDevice()}
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
        const { selectedDate } = this.state;
        return (
            <div className={classes.filter}>
                <div className={classes.date}>
                    <div>
                        <span className={classes.titleDate}>From</span>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                format="MM/dd/yyyy"
                                value={selectedDate?.from}
                                onChange={(date) => this.handleDateChange(date, 'from')}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div>
                        <span className={classes.titleDate}>To</span>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                format="MM/dd/yyyy"
                                value={selectedDate?.to}
                                onChange={(date) => this.handleDateChange(date, 'to')}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.confirmBtn}
                >
                    GO
                </Button>
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
                    <p>androi</p>
                    <p>ios</p>
                </div>
            </div>
        )
    }

    _renderPointer() {
        const { classes } = this.props;
        return <div className={classes.pointer}></div>
    }
    _renderList() {
        const { classes } = this.props;
        const { content } = this.state;
        return (
            <div className={classes.table}>
                <div className={classes.headingRow}>
                    <div className={classes.headingItem}><span>DATE</span></div>
                    <div className={classes.headingItem}><img src={icons.android} /><span>1,250</span></div>
                    <div className={classes.headingItem}><img src={icons.apple} /><span>450</span></div>
                    <div className={classes.headingItem}><img src={icons.web} /><span>45</span></div>
                </div>
                <div className={classes.body}>
                    <div className={classes.bodyRow} >
                        {
                            content.map((item, idx) => {
                                return (
                                    <div key={idx} className={classes.infoRow}>
                                        <div className={classes.infoItem}><span>{item.date}</span></div>
                                        <div className={classes.infoItem}>
                                            {item.android ?
                                                <div className={classes.listContent}>{this._renderPointer()} <span>{item.android}</span> </div> : null}
                                        </div>
                                        <div className={classes.infoItem}>
                                            {item.ios ?
                                                <div className={classes.listContent}>{this._renderPointer()} <span>{item.ios}</span> </div> : null}
                                        </div>
                                        <div className={classes.infoItem}>
                                            {item.web ?
                                                <div className={classes.listContent}>{this._renderPointer()} <span>{item.web}</span> </div> : null}
                                        </div>
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
                {this._renderFilter()}
                {this._renderList()}
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
                <h2>User Activity Report</h2>
                {this._renderBodyPage()}
            </div>
        );
    }
}

export default withStyles(styles)(ReportActivity);