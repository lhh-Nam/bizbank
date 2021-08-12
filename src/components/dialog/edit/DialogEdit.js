import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { styles } from './styles';

const icons = {
    delete: require('../../../assets/icons/delete.png').default,
};

class DialogEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedA: true,
            item: {
                name: 'Mobile app',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                status: true,
            }
        }
    }

    onChangeText = (e, key) => {
        let values = e.target.value;
        const { item } = this.state;
        this.setState({
            item: {
                ...item,
                [key]: values,
            }
        })
    }

    onDisable = (event) => {
        console.log("🔫   ratatata => ~ event", event)
        this.setState({ ...this.state, [event.target.name]: event.target.checked });
    };

    handleChangeSwitch = (e) => {
        const { item } = this.state;
        let key = e.target.name;
        let isCheck = e.target.checked;
        this.setState({
            item: {
                ...item,
                [key]: isCheck,
            }
        })
    };

    _renderTop() {
        const { classes, handleClose } = this.props;
        return (
            <div className={classes.top} >
                <span>Edit Application</span>
                <span onClick={handleClose}><img src={icons.delete} /></span>
            </div>
        )
    }


    _renderBody() {
        const { classes } = this.props;
        const { item, checkedA } = this.state;
        return (
            <div className={classes.body} >
                <div className={classes.item} >
                    <p>Application Name <span className={classes.error}> *</span> </p>
                    <div className={classes.info}>
                        <input value={item.name} onChange={(e) => this.onChangeText(e, 'name')} />
                    </div>
                </div>
                <div className={classes.item} >
                    <p>Application Type <span className={classes.error}> *</span> </p>
                    <div className={classes.info}>
                        <select>
                            <option>Mobile app</option>
                        </select>
                    </div>
                </div>
                <div className={classes.item} >
                    <p>Client<span className={classes.error}> *</span></p>
                    <div className={classes.info}>
                        <select>
                            <option>LFVN</option>
                        </select>
                    </div>
                </div>
                <div className={classes.item} >
                    <p>App access mode <span className={classes.error}> *</span> </p>
                    <div className={classes.info}>
                        <select>
                            <option>Private</option>
                        </select>
                    </div>
                </div>
                <div className={classes.item} >
                    <p>Status<span className={classes.error}> *</span> </p>
                    <div className={classes.info}>
                        <Switch
                            focusVisibleClassName={classes.focusVisible}
                            disableRipple
                            classes={{
                                root: classes.root,
                                switchBase: classes.switchBase,
                                thumb: classes.thumb,
                                track: classes.track,
                                checked: classes.checked,
                            }}
                            checked={item.status}
                        // {...props} onChange={(e) => this.handleChangeSwitch(e)} name="status"
                        />
                    </div>
                </div>
                <div className={classes.item} >
                    <p></p>
                    {/* <p> Description <span> *</span> </p> */}
                    <div className={classes.info}>
                        <textarea rows='3' value={item.description} onChange={(e) => this.onChangeText(e, 'description')} />
                    </div>
                </div>
            </div>
        )
    }

    _renderBottom() {
        const { classes, handleClose } = this.props;
        return (
            <div className={classes.bottom} >
                <span onClick={handleClose}>Save changes</span>
            </div>
        )
    }


    render() {
        const { open, classes, handleClose } = this.props;
        return (
            <Dialog onClose={handleClose} maxWidth='sm' open={open} classes={{ paper: classes.paper }}>
                {this._renderTop()}
                {this._renderBody()}
                {this._renderBottom()}
            </Dialog>
        );
    }
}

DialogEdit.defaultProps = {
    open: true,
};

export default withStyles(styles)(DialogEdit);