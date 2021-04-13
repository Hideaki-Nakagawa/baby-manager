import { Theme, makeStyles, createStyles, Grid } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';
import { EmailAddressInputField, LoginButton, PasswordInputField } from '../molecules';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    }),
);

/** ログインフォーム コンポーネント */
const LoginForm = () => {

    /** @summary style hook api */
    const classes: ClassNameMap = useStyles();

    /** Googleアカウントの認証結果をコンソールに出力 */
    // const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    //     console.log(response);
    // }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <EmailAddressInputField />
            <PasswordInputField />
            <LoginButton />
            {/* <GoogleLogin
                clientId="dummy"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'} /> */}
        </Grid>
    )

}
export default LoginForm;
