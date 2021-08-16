import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
// styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import DialogApplication from '../../../components/dialog/application';
import DialogEdit from '../../../components/dialog/edit';

const icons = {
    search: require('../../../assets/icons/search.png').default,
    searchBlack: require('../../../assets/icons/search-black.png').default,
    edit: require('../../../assets/icons/edit.png').default,
};

const data = [
    {
        client: 'LFVN',
        id: 'BIZBANK-LFVN-01',
        name: 'FC Mobile App',
        type: 'Mobile App',
        android: '2.1.5',
        ios: '2.1.7',
        status: 'Active',
    },
    {
        client: 'LFVN',
        id: 'BIZBANK-LFVN-02',
        name: 'FC Mobile App',
        type: 'Mobile App',
        android: '2.1.5',
        ios: '2.1.7',
        status: 'Active',
    },
    {
        client: 'LFVN',
        id: 'BIZBANK-LFVN-03',
        name: 'FC Mobile App',
        type: 'Mobile App',
        android: '2.1.5',
        ios: '2.1.7',
        status: 'Active',
    },
    {
        client: 'LFVN',
        id: 'BIZBANK-LFVN-04',
        name: 'FC Mobile App',
        type: 'Mobile App',
        android: '2.1.5',
        ios: '2.1.7',
        status: 'Active',
    },
    {
        client: 'LFVN',
        id: 'BIZBANK-LFVN-05',
        name: 'FC Mobile App',
        type: 'Mobile App',
        android: '2.1.5',
        ios: '2.1.7',
        status: 'Active',
    },
]

class ApplicationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: data,
            show: {}
        }
    }

    toggleShow = (showState, otherState) => { this.setState(state => ({ show: { ...state.show, ...showState }, ...otherState })); };

    redirectAddNew = () => {
        this.toggleShow({ dialogCreate: true });
    }
    redirectEdit = () => {
        this.toggleShow({ dialogEdit: true });
    }

    onItemClick = (...args) => e => {
        e?.stopPropagation();
        const [type, item] = args;
        switch (type) {
            case 'closeDialog':
                this.toggleShow({ dialogCreate: false });
                break;
            case 'closeDialogEdit':
                this.toggleShow({ dialogEdit: false });
                break;
            default: break;
        }
    }

    _renderDialogCreate() {
        const { show } = this.state;
        if (!show.dialogCreate) return;
        return <DialogApplication
            handleClose={this.onItemClick('closeDialog')}
        />
    }

    _renderDialogEdit() {
        const { show } = this.state;
        if (!show.dialogEdit) return;
        return <DialogEdit
            handleClose={this.onItemClick('closeDialogEdit')}
        />
    }

    _renderHeading() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.flexBtw}>
                    <h2>Applications</h2>
                    <Button className={classes.create} onClick={() => this.redirectAddNew()}>+ Create</Button>
                </div>
                <div className={classes.flexBtw}>
                    <div className={classes.inputArea}>
                        <img src={icons.searchBlack} />
                        <input
                            placeholder='Application name'
                        />
                    </div>
                    <div className={classes.selectArea}>
                        <span>Type</span>
                        <select>
                            <option>All</option>
                            <option>Mobile App</option>
                        </select>
                    </div>
                    <div className={classes.selectArea}>
                        <span>Status</span>
                        <select>
                            <option>All</option>
                            <option>Active</option>
                        </select>
                    </div>
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
                    <div className={classes.headingItem}><span>Client</span></div>
                    <div className={classes.headingItem}><span>ID</span></div>
                    <div className={classes.headingItem}><span>Application Name</span></div>
                    <div className={classes.headingItem}><span>Type</span></div>
                    <div className={classes.headingItem}><span>Android</span></div>
                    <div className={classes.headingItem}><span>IOS</span></div>
                    <div className={classes.headingItem}><span>Status</span></div>
                    {/* <div className={classes.visible}></div> */}
                </div>
                <div className={classes.body}>
                    <div className={classes.bodyRow} >
                        {
                            content.map((item, idx) => {
                                return (
                                    <div key={idx} className={classes.infoRow}>
                                        <div className={classes.infoItem}><span>{item.client}</span></div>
                                        <div className={classes.infoItem}><span>{item.id}</span></div>
                                        <div className={classes.infoItem}><span>{item.name}</span></div>
                                        <div className={classes.infoItem}><span>{item.type}</span></div>
                                        <div className={classes.infoItem}><span>{item.android}</span></div>
                                        <div className={classes.infoItem}><span>{item.ios}</span></div>
                                        <div className={classes.infoItem}>
                                            <span className={classes.stt}>{item.status}</span>
                                            <div className={classes.visible}>
                                                <a onClick={() => this.redirectEdit()}>
                                                    <img src={icons.edit} />
                                                </a>
                                                <Link to='/application/detail'>
                                                    <img src={icons.search} />
                                                </Link>
                                            </div>
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

    _renderBodyPage() {
        return (
            <Fragment>
                {this._renderHeading()}
                {this._renderList()}
            </Fragment>
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                {this._renderBodyPage()}
                {this._renderDialogCreate()}
                {this._renderDialogEdit()}
            </div>
        );
    }
}

export default withStyles(styles)(ApplicationList);
