import React, { Component } from 'react';
import Collapse from "@material-ui/core/Collapse";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import DialogVersion from '../../../components/dialog/version';
import { Link } from "react-router-dom";

const icons = {
    search: require('../../../assets/icons/search.png').default,
    link: require('../../../assets/icons/link.png').default,
    arrow: require('../../../assets/icons/arrow.png').default,
    edit: require('../../../assets/icons/edit.png').default,
};

class VersionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _renderCollapInfo() {
        const { classes } = this.props;
        return (
            <div className={classes.collapBottom} >
                <div className={`${classes.collapItem} ${classes.haveIcon}`}>
                    <div>
                        <span>
                            Is Dowload required
                        </span>
                        <span>
                            Required
                        </span>
                    </div>
                    <div>
                        <p>
                            <img src={icons.edit} />
                        </p>
                    </div>
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
                        <p>
                            <img src={icons.link} />
                        </p>
                        <p>
                            <img src={icons.arrow} />
                        </p>
                    </div>
                </div>
                <div className={`${classes.collapItem} ${classes.haveIcon}`}>
                    <div>
                        <span>
                            Introdutione message
                        </span>
                        <span>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs,graphic or web designs.
                        </span>
                    </div>
                    <div>
                        <p>
                            <img src={icons.edit} />
                        </p>
                    </div>
                </div>
                <div className={`${classes.collapItem} ${classes.haveIcon}`}>
                    <div>
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
                    <div>
                        <p>
                            <img src={icons.edit} />
                        </p>
                    </div>
                </div>
                <div className={classes.collapItem}>
                    <span>
                        Create by
                    </span>
                    <span>
                        Nguyen Van A (a.nguyen) | 14.30 10.Jun.2021
                    </span>
                </div>
            </div>
        )
    }

    _renderMainContent() {
        const { classes } = this.props;
        return (
            <div className={classes.main}>
                <h2>Version Details</h2>
                <div className={classes.collap}>
                    <div className={classes.collapTop} >
                        <div className={classes.topItem}>
                            <span>Version: <span className={classes.Previewing}>2.3.4</span></span>
                            <p>
                                <img src={icons.edit} />
                            </p>
                        </div>
                        <div className={classes.topItem}>
                            <span>Status: <span className={classes.Active}>Active</span></span>
                            <p>
                                <img src={icons.edit} />
                            </p>
                        </div>
                        <div className={classes.topItem}>
                            <span>Published date: <span className={classes.bold}>14.30 25.Jun.2021</span></span>
                            <p>
                                <img src={icons.edit} />
                            </p>
                        </div>
                    </div>
                    {this._renderCollapInfo()}
                </div>
            </div>
        )
    }

    _renderBodyPage() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                {this._renderMainContent()}
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

export default withStyles(styles)(VersionDetail);
