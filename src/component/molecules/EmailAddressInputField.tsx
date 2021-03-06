import { InputField } from '../atoms';
import { Theme, makeStyles, createStyles } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';

const useStyles = makeStyles((theme : Theme) =>
    createStyles({
        "sizeBig": {
            width: "15em",
        },
        "sizeSmall": {
            width: "15em",
        },
    }),
);

/** メールアドレス入力フィールド コンポーネント */
const EmailAddressInputField = () => {

    /** @summary style hook api */
    const classes : ClassNameMap = useStyles();

    return (
        <InputField
            addClass={classes}
            titleId="mail_address_title"
            titleText="E-mail"
            id="mail_address_input"
            unitText=""
            inputType="text"
            maxLength={50}
            areaLabel="email"
            fontType = "fas"
            fontIconName = "envelope"
        />
    )
}
export default EmailAddressInputField;
