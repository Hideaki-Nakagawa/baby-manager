import React, { useState } from 'react';
import clsx from 'clsx';
import { Theme, createStyles, makeStyles, FormControl, FormHelperText, Input, InputAdornment} from '@material-ui/core';
import { ClassNameMap } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

/** @summary style define*/
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
    }),
);


/**
 * 引数
 */
type Props = {
    id: string
    titleId : string 
    titleText : string
    unitText : string
    maxLength : number
    areaLabel : string
    fontType : IconPrefix
    fontIconName : IconName
    addClass : ClassNameMap
}

/**
 * インプトフィールド コンポーネント
 * @param props 
 * @returns 
 */
const InputField = (props : Props) => {

    /** @summary state hook */
    const [myText, setText] = useState('');

    /** 
     * @summary state change 
     * @details ステートを変更して、親要素に値を投げる
     */
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setText(newValue);
    };

    /** @summary style hook api */
    const classes = useStyles();

    return (
        <FormControl className={clsx(classes.margin, classes.withoutLabel, props.addClass.Size)}>
            <FormHelperText id={props.titleId}>{props.titleText}</FormHelperText>
            <Input
                id={props.id}
                value={myText}
                onChange={handleChange}
                startAdornment={<FontAwesomeIcon icon = {[props.fontType , props.fontIconName]} />}
                endAdornment={<InputAdornment position="end">{props.unitText}</InputAdornment>}
                aria-describedby={props.titleId}
                inputProps={{
                    'maxLength': props.maxLength,
                    'aria-label': props.areaLabel,
                }}
            />
        </FormControl>
    )
}

export default InputField;
