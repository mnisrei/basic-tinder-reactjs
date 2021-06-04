import React from 'react';
import "./SwipeBtns.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRate from "@material-ui/icons/StarRate";
import Favorite from "@material-ui/icons/Favorite";
import FlashOn from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
function SwipeBtns() {
    return (
        <div className="swipeBtn">
            <IconButton className="swipeBtn__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeBtn__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeBtn__star">
                <StarRate fontSize="large" />
            </IconButton>
            <IconButton className="swipeBtn__right">
                <Favorite fontSize="large" />
            </IconButton>
            <IconButton className="swipeBtn__lightning">
                <FlashOn fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeBtns;
