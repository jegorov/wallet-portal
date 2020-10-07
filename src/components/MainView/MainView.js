import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {AccountBalanceWallet, ExitToApp} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import {restService} from "@/services/restService";
import TransferDialog from "@/components/TransferDialog/TransferDialog";
import {authService} from "@/services/authService";
import {styles} from "@/components/MainView/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";


class MainView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dialogIsOpen: false,
            balance: '',
            disabled: true,
            submitted: false,
            loading: false,
            error: ''
        };

        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.logout = this.logout.bind(this);
        this.getBalance = this.getBalance.bind(this);
        this.putMoney = this.putMoney.bind(this);
        this.withdrawMoney = this.withdrawMoney.bind(this);
        this.onChangeField = this.onChangeField.bind(this);
        this.getAmount = this.getAmount.bind(this);

    }

    openDialog() {
        this.setState({dialogIsOpen: true})
    }

    closeDialog() {
        this.setState({dialogIsOpen: false})
        window.location.reload();
    }

    handleClick() {
        this.openDialog();
    };

    getAmount() {
        return document.getElementById("amount") ? document.getElementById("amount").value : -1;
    }

    putMoney() {
        restService.putMoney(this.getAmount());
    }

    withdrawMoney() {
        restService.withdraw(this.getAmount());
    }

    logout() {
        authService.logout()
        window.location.reload();
    };

    async getBalance() {
        return restService.getBalance();
    }

    async componentDidMount() {
        const data = await this.getBalance();
        this.setState({balance: data});
    }

    onChangeField() {
        let bool = this.getAmount().length <= 0;
        this.setState({disabled: bool});
    }


    render() {

        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <TransferDialog open={this.state.dialogIsOpen} onClose={this.closeDialog}
                                    amount={this.getAmount()}/>
                    <Avatar className={classes.avatar}>
                        <AccountBalanceWallet/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Wallet
                    </Typography>
                    <Grid container>
                        <Grid item xs>
                            user: {JSON.parse(localStorage.getItem('user')).username}
                        </Grid>
                        <Grid item xs/>
                        <Grid item xs>
                            Balance: {this.state.balance}
                        </Grid>
                    </Grid>
                    <TextField
                        onChange={this.onChangeField}
                        margin="dense"
                        type='number'
                        inputProps={{min: "0", max: "10", step: "1"}}
                        id="amount"
                        label="amount"
                        fullWidth
                    />
                    <form className={classes.form} noValidate>
                        <Button
                            disabled={this.state.disabled}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.putMoney}
                        >
                            Put Money
                        </Button>
                        <Button
                            disabled={this.state.disabled}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.withdrawMoney}
                        >
                            Withdraw
                        </Button>
                        <Button
                            disabled={this.state.disabled}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.handleClick}
                        >
                            Transfer
                        </Button>
                    </form>
                    <Grid container>
                        <Grid className={classes.appText}>
                            Wallet App
                        </Grid>
                        <Grid item xs/>
                        <Grid item xs/>
                        <Grid item xs/>
                        <Grid item xs/>
                        <Grid item xs/>
                        <Grid item xs>
                            <ExitToApp className={classes.pointer} onClick={this.logout}/>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        )
    }

}

export default withStyles(styles)(MainView);