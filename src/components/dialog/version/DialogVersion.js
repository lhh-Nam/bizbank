import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

const icons = {
    delete: require('../../../assets/icons/delete.png').default,
};

class DialogVersion extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleClose = () => { this.props.handleClose() }


    _renderBottom() {
        const { classes } = this.props;
        return (
            <div className={classes.bottom} >
                <span onClick={() => this.handleClose()}>Create & continue</span>
            </div>
        )
    }

    _renderBody() {
        const { classes } = this.props;
        return (
            <div className={classes.body} >
                <div className={classes.item} >
                    <p>Version <span> *</span> </p>
                    <div className={classes.info}>
                        <input />
                    </div>
                </div>
            </div>
        )
    }

    _renderTop() {
        const { classes } = this.props;
        return (
            <div className={classes.top} >
                <span>Create Application</span>
                <span onClick={() => this.handleClose()}><img src={icons.delete} /></span>
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

DialogVersion.defaultProps = {
    open: true,
};

export default withStyles(styles)(DialogVersion);