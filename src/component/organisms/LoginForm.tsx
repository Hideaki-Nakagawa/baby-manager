import { Theme, makeStyles, createStyles, Grid, Button } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';
import { EmailAddressInputField, PasswordInputField } from '../molecules';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

/** ログインフォーム コンポーネント */
const LoginForm = () => {

    /** @summary style hook api */
    const classes: ClassNameMap = useStyles();

    const handleClick = () => {
    };

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <EmailAddressInputField />
            <PasswordInputField />
            <Button variant="contained" color="primary" onClick={handleClick}>
                ログイン
            </Button>
        </Grid>
    )

}
export default LoginForm;
