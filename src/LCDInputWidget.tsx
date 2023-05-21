import { ReactElement, createElement, useCallback } from "react";

import { LCDInputWidgetContainerProps } from "../typings/LCDInputWidgetProps";
import { BadgeSample } from "./components/BadgeSample";
import "./ui/LCDInputWidget.css";

export function LCDInputWidget(props: LCDInputWidgetContainerProps): ReactElement {
    const { lcdinputwidgetType, lcdinputwidgetValue, valueAttribute, onClickAction, style, bootstrapStyle } = props;
    const onClickHandler = useCallback(() => {
        if (onClickAction && onClickAction.canExecute) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    return (
        <BadgeSample
            type={lcdinputwidgetType}
            bootstrapStyle={bootstrapStyle}
            className={props.class}
            clickable={!!onClickAction}
            defaultValue={lcdinputwidgetValue ? lcdinputwidgetValue : ""}
            onClickAction={onClickHandler}
            style={style}
            value={valueAttribute ? valueAttribute.displayValue : ""}
        />
    );
}
