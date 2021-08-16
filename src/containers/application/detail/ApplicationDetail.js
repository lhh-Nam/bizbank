import React, { Component } from 'react';
import Collapse from "@material-ui/core/Collapse";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styles } from './styles';
import DialogVersion from '../../../components/dialog/version';
import { Link } from "react-router-dom";

const icons = {
    search: require('../../../assets/icons/search.png').default,
    link: require('../../../assets/icons/link.png').default,
    arrow: require('../../../assets/icons/arrow.png').default,
};

const data = {
    android: [
        {
            version: '2.3.5',
            status: 'Active',
            date: '14.30 25.Jun.2021'
        },
        {
            version: '2.3.5',
            status: 'Draft',
            date: '14.30 25.Jun.2021'
        },
        {
            version: '2.3.5',
            status: 'Previewing',
            date: '14.30 25.Jun.2021'
        },
        {
            version: '2.3.5',
            status: 'Inactive',
            date: '14.30 25.Jun.2021'
        },
    ],
    ios: [
        {
            version: '2.3.5',
            status: 'Active',
            date: '14.30 25.Jun.2021'
        },
        {
            version: '2.3.5',
            status: 'Draft',
            date: '14.30 25.Jun.2021'
        },
    ],
    web: [
        {
            version: '2.3.5',
            status: 'Active',
            date: '14.30 25.Jun.2021'
        },
    ],
}

class ApplicationDetail extends Component {
    constructor(props) {
        super(props);
        const tabs = ['Android versions', 'iOS versions', 'Website'];
        this.state = {
            tabs,
            content: data.android,
            currentTab: tabs[0],
            isOpen: {
                0: true
            },
            show: {}
        }
    }

    toggleShow = (showState, otherState) => { this.setState(state => ({ show: { ...state.show, ...showState }, ...otherState })); };
    toggleCollapse = (id) => this.setState(state => ({ isOpen: { ...state.isOpen, [id]: !state.isOpen[id] } }));

    onChangeTab = (tab) => {
        const nextState = { currentTab: tab };
        switch (tab) {
            case 'iOS versions':
                nextState.content = data.ios;
                break;
            case 'Website':
                nextState.content = data.web;
                break;
            default:
                nextState.content = data.android;
                break;
        }
        this.setState(nextState);
    }

    redirectAddNew = () => {
        this.toggleShow({ dialogCreate: true });
    }

    onItemClick = (...args) => e => {
        e?.stopPropagation();
        const [type, item] = args;
        switch (type) {
            case 'closeDialog':
                this.toggleShow({ dialogCreate: false });
                break;

            default: break;
        }
    }

    _renderTabs() {
        const { classes } = this.props;
        const { tabs, currentTab } = this.state;
        return (
            <div className={classes.tabs}>
                <div className={classes.tabsGroup}>
                    {tabs.map((tab, idx) => <p className={currentTab === tab ? classes.active : null} key={idx} onClick={() => this.onChangeTab(tab)}>{tab}</p>)}
                </div>
                <div>
                    <Button className={classes.create} onClick={() => this.redirectAddNew()}>+ Create</Button>
                </div>
            </div>
        )
    }

    _renderCollapInfo(id) {
        const { classes } = this.props;
        const { isOpen } = this.state;
        return (
            <div className={classes.collapBottom} >
                <Collapse in={isOpen[id]} timeout='auto'>
                    <div className={classes.collapItem}>
                        <span>
                            Is Dowload required
                        </span>
                        <span>
                            Required
                        </span>
                    </div>
                    <div className={`${classes.collapItem} ${classes.haveIcon}`}>
                        <div>
                            <span>
                                File APK
                            </span>
                            <span>
                                BIZBANK-LFVN-01-v235.APK | Size: 24.5MB
                            </span>
                        </div>
                        <div>
                            <p to='/detail'>
                                <img src={icons.link} />
                            </p>
                            <p to='/detail'>
                                <img src={icons.arrow} />
                            </p>
                        </div>
                    </div>
                    <div className={classes.collapItem}>
                        <span>
                            Introdutione message
                        </span>
                        <span>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs,graphic or web designs.
                        </span>
                    </div>
                    <div className={classes.collapItem}>
                        <span>
                            Release note
                        </span>
                        <span>
                            Lorem ipsum, or lipsum as it is sometimes known.
                        </span>
                        <span>is dummy text used in laying out print.</span>
                        <span>is dummy text used in laying out print laying.</span>
                        <span>is dummy text used in   print.</span>
                        <span>is dummy text used in laying out print out.</span>
                    </div>
                </Collapse>
            </div>
        )
    }

    _renderMainContent() {
        const { classes } = this.props;
        const { content, isOpen } = this.state;
        return (
            <div className={classes.main}>
                {this._renderTabs()}
                {
                    content.map((item, idx) => {
                        return (
                            <div key={idx} className={classes.collap}>
                                <div className={classes.collapTop} style={isOpen[idx] ? { borderBottom: `0.5px solid #ccc`, background: '#FFDE8F' } : {}} onClick={() => this.toggleCollapse(idx)}>
                                    <div className={classes.version}>
                                        <span>{`${idx === 0 ? 'Current version' : 'version'} `}: <span className={classes.Previewing}>{item.version}</span></span>
                                    </div>
                                    <div className={`${classes.status}`}>
                                        <span>Status: <span className={classes[item.status]}>{item.status}</span></span>
                                    </div>
                                    <div >
                                        <span>Published date: <span className={classes.bold}>{item.date}</span></span>
                                    </div>
                                    <div className={classes.visible}>
                                        <Link to='/version/detail'>
                                            <img src={icons.search} />
                                        </Link>
                                    </div>
                                </div>
                                {this._renderCollapInfo(idx)}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    _renderSidebar() {
        const { classes } = this.props;
        return (
            <div className={classes.sidebar}>
                <h2>Application Info</h2>
                <div className={classes.sidebarInfo}>
                    <div className={classes.sideItem}>
                        <span>
                            Apllication ID
                        </span>
                        <span>
                            BIZBANK-LFVN-01
                        </span>
                    </div>
                    <div className={classes.sideItem}>
                        <span>
                            Apllication Name
                        </span>
                        <span>
                            FC mobile app
                        </span>
                    </div>
                    <div className={classes.sideItem}>
                        <span>
                            Product Public Key
                        </span>
                        <span className={classes.Previewing}>
                            123e4567-e789-12b3-a456-234546574
                        </span>
                    </div>
                    <div className={classes.sideItem}>
                        <span>
                            Apllication Type
                        </span>
                        <span>
                            Mobile App
                        </span>
                    </div>
                    <div className={classes.sideItem}>
                        <span>
                            App access mode
                        </span>
                        <span>
                            Private
                        </span>
                    </div>
                    <div className={classes.sideItem}>
                        <span>
                            Apllication status
                        </span>
                        <span className={classes.Active}>
                            Active
                        </span>
                    </div>
                </div>
                <div className={classes.sidebarInfo}>
                    <div className={classes.sideItem}>
                        <span>
                            Client
                        </span>
                        <span>
                            LFVN
                        </span>
                    </div>
                    <div className={classes.sideItem}>
                        <span>
                            Server name
                        </span>
                        <span>
                            ...
                        </span>
                    </div>
                    <div className={classes.sideItem}>
                        <span>
                            Environment
                        </span>
                        <span>
                            On premise
                        </span>
                    </div>
                </div>
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

    _renderDialogVersion() {
        const { show } = this.state;
        if (!show.dialogCreate) return;
        return <DialogVersion
            handleClose={this.onItemClick('closeDialog')}
        />

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                {this._renderBodyPage()}
                {this._renderDialogVersion()}
            </div>
        );
    }
}

export default withStyles(styles)(ApplicationDetail);
