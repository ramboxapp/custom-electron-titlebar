import {Color} from "vs/base/common/color";

export interface IMenuItem {
    render(element: HTMLElement): void;

    isEnabled(): boolean;

    isSeparator(): boolean;

    focus(): void;

    blur(): void;

    dispose(): void;
}

export interface IMenuOptions {
    ariaLabel?: string;
    enableMnemonics?: boolean;
}

export interface IMenuStyle {
    foregroundColor?: Color;
    backgroundColor?: Color;
    selectionForegroundColor?: Color;
    selectionBackgroundColor?: Color;
    separatorColor?: Color;
}