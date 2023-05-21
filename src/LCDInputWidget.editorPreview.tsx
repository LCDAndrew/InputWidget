import { ReactElement, createElement } from "react";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

export function preview(): ReactElement {
    return <div ref={parentInline}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/LCDInputWidget.css");
}
