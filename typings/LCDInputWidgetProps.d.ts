/**
 * This file was generated from LCDInputWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";
import { Big } from "big.js";

export type OrientationEnum = "horizontal" | "vertical";

export type InputTypeEnum = "text" | "number" | "date" | "email" | "password" | "tel";

export interface LCDInputWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    orientation: OrientationEnum;
    labelWidth: number;
    inputType: InputTypeEnum;
    valueAttribute?: EditableValue<string | Big>;
    lcdinputwidgetValue: string;
    prependEnabled: boolean;
    prependValue: string;
    appendEnabled: boolean;
    appendValue: string;
    onEnterAction?: ActionValue;
    onChangeAction?: ActionValue;
    onLeaveAction?: ActionValue;
}

export interface LCDInputWidgetPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    orientation: OrientationEnum;
    labelWidth: number | null;
    inputType: InputTypeEnum;
    valueAttribute: string;
    lcdinputwidgetValue: string;
    prependEnabled: boolean;
    prependValue: string;
    appendEnabled: boolean;
    appendValue: string;
    onEnterAction: {} | null;
    onChangeAction: {} | null;
    onLeaveAction: {} | null;
}
