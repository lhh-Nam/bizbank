import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

const icons = {
    delete: require('../../../assets/icons/delete.png').default,
};

class DialogApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _renderTop() {
        const { classes, handleClose } = this.props;
        return (
            <div className={classes.top} >
                <span>Create Application</span>
                <span onClick={handleClose}><img src={icons.delete} /></span>
            </div>
        )
    }


    _renderBody() {
        const { classes } = this.props;
        return (
            <div className={classes.body} >
                <div className={classes.item} >
                    <p>Application Name <span> *</span> </p>
                    <div className={classes.info}>
                        <input />
                    </div>
                </div>
                <div className={classes.item} >
                    <p>Application Type <span> *</span> </p>
                    <div className={classes.info}>
                        <select>
                            <option>choose</option>
                        </select>
                    </div>
                </div>
                <div className={classes.item} >
                    <p>Client<span> *</span></p>
                    <div className={classes.info}>
                        <select>
                            <option>choose</option>
                        </select>
                    </div>
                </div>
                <div className={classes.item} >
                    <p>App access mode <span> *</span> </p>
                    <div className={classes.info}>
                        <select>
                            <option>choose</option>
                        </select>
                    </div>
                </div>
                <div className={classes.item} >
                    <p> Description <span> *</span> </p>
                    <div className={classes.info}>
                        <textarea rows='3' />
                    </div>
                </div>
            </div>
        )
    }

    _renderBottom() {
        const { classes, handleClose } = this.props;
        return (
            <div className={classes.bottom} >
                <span onClick={handleClose}>Create & continue</span>
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

DialogApplication.defaultProps = {
    open: true,
};

export default withStyles(styles)(DialogApplication);