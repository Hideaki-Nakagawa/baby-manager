import { InputField } from '../atoms';
import { Theme, makeStyles, createStyles } from '@material-ui/core'
import { ClassNameMap } from '@material-ui/styles';

const useStyles = makeStyles((theme : Theme) =>
    createStyles({
        "Size": {
            width: "10em",
        }
    }),
);

/** 身長入力フィールド コンポーネント */
const HeightInputField = () => {

    /** @summary style hook api */
    const classes : ClassNameMap = useStyles();

    return (
        <InputField
            addClass={classes}
            titleId="height_title"
            titleText="身長"
            id="height_input"
            unitText="cm"
            maxLength={6}
            areaLabel="height"
        />
    )
}
export default HeightInputField;
