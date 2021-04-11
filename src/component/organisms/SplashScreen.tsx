import { Theme, makeStyles, createStyles, useMediaQuery } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';
import logo from '../../resource/img/logo.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        "Size1": {
            height: 'auto',
            width: '50%',
        },
        "Size2": {
            height: 'auto',
            width: '35%',
        },
    }),
);

/** スプラッシュ画面 コンポーネント */
const SplashScreen = () => {

    /** @summary style hook api */
    const classes: ClassNameMap = useStyles();

    /** @summary media query */
    const matches = useMediaQuery('(min-width:768px)');

    return (
        <img src={logo} className={`${matches ? classes.Size1 : classes.Size2}`} alt="" />
    )
}
export default SplashScreen;
