import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import {restService} from "@/services/restService";

export default function TransferDialog(props) {

    const {open, onClose, amount} = props


    const onClick = () => {
        var username = document.getElementById("username").value;
        restService.transfer(username,amount);
        onClose();
    }
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="dialog">Confirmation</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    type='username'
                    id="username"
                    label="username"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onClick} color="primary" >
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
}