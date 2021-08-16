import React, { Component } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

const icons = {
    chevron: require('../../assets/icons/chevron_left.png').default,
    menus: require('../../assets/icons/menus.png').default,
    home: require('../../assets/icons/home.png').default,
    download: require('../../assets/icons/download.png').default,
    activity: require('../../assets/icons/activity.png').default,
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    toggleDrawer = () => this.setState(state => ({ isOpen: !state.isOpen }))

    render() {
        const { classes } = this.props
        const { isOpen } = this.state
        return (
            <div>
                <Drawer
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
                        paperAnchorDockedLeft: classes.noneLine,
                    }}
                >
                    <div className={classes.toolbar} style={{ justifyContent: isOpen ? 'flex-end' : 'center' }}>
                        {/* <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton> */}
                        <IconButton onClick={this.toggleDrawer} >
                            <img src={icons[isOpen ? 'chevron' : 'menus']} />
                        </IconButton>
                    </div>
                    {
                        ['home', 'download', 'activity',].map((name, idx) => {
                            return (
                                <Link to={`${name === 'home' ? '/' : `/report/${name}`}`}>
                                    <div key={idx} className={classes.menuItem}>
                                        <img src={icons[name]} />
                                        <span>{name}</span>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Drawer>
            </div>);
    }
}

export default withStyles(styles)(Sidebar);