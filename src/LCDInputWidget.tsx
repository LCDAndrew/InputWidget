import { ReactElement, createElement } from "react";
import { LCDInputWidgetContainerProps } from "../typings/LCDInputWidgetProps";
import "./ui/LCDInputWidget.scss";
import classNames from "classnames";

export function LCDInputWidget(props: LCDInputWidgetContainerProps): ReactElement {
    const { orientation, labelWidth, inputType, prependEnabled, prependValue, appendEnabled, appendValue } = props;
    const inputWidth = 12 - labelWidth;

    return (
        <div className="input-widget-wrapper">
            <div className={classNames(`input-group-container ${orientation} form-group`)}>
                <label className={classNames(`input-group__label control-label col-sm-${labelWidth}`)}>Label</label>
                <div className={classNames(`input-container col-sm-${inputWidth}`)}>
                    {prependEnabled && <div className="input-group-prepend">{prependValue}</div>}
                    <input
                        type={inputType}
                        className={classNames("input-group__input form-control", {'input-group__input__prepend': prependEnabled,'input-group__input__append': appendEnabled})}
                        value="value"
                    />
                    {appendEnabled && <div className="input-group-append">{appendValue}</div>}
                </div>
            </div>
        </div>
    );
}
