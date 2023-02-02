import React, {useState} from 'react';
import {Badge, IconButton, Menu, MenuItem} from "@material-ui/core";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {color} from "chart.js/helpers";
import {red} from "@material-ui/core/colors";

const Notifications = () => {


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [notifications, setNotifications] = useState([{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test notification","link":"/project/1"},{"name":"test2 notification","link":"/project/1"},{"name":"test2 notification","link":"/project/1"},{"name":"test2 notification","link":"/project/1"}])
    const [countNotification,setCountNotification] = useState(notifications.length);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteNotification = (id) => {
        const arrayTeam = [...notifications]
        arrayTeam.splice(id,1);
        console.log(id)
        setNotifications(arrayTeam)
        setCountNotification(arrayTeam.length)
    }


    return (
        <>
            <div className="bell-notification" id="menu-button"
                 aria-controls={open ? 'menu-button' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={countNotification} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </div>
            <Menu id="menu"
                  aria-labelledby="menu-button"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  style={{ maxWidth: 500,marginTop:50,marginRight:200}}>
                {
                    notifications.map((value,index) =>
                        <MenuItem key={index}  onClick={handleClose}>
                            <div className="notification-card">
                                <div className="image"  alt="" src="" />
                                <div className="paragraph">{value.name}</div>
                                <div className="button" onClick={() => handleDeleteNotification(index)}>x</div>
                            </div>
                        </MenuItem>
                    )
                }

            </Menu>
        </>
    );
};

export default Notifications;