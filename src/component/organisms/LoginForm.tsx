import { InputField } from '../atoms';
import { Theme, makeStyles, createStyles } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';

const useStyles = makeStyles((theme : Theme) =>
    createStyles({
        "Size": {
            width: "15em",
        }
    }),
);

/** ログインフォーム コンポーネント */
const LoginForm = () => {

    /** @summary style hook api */
    const classes : ClassNameMap = useStyles();
}
export default LoginForm;
