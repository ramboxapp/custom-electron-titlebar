import {MenubarOptions} from "../menubar";
import {Color} from "vs/base/common/color";
import {Theme} from "../themebar";

interface TitlebarOptions extends MenubarOptions {
    /**
     * The background color of titlebar.
     */
    backgroundColor: Color;
    /**
     * The icon shown on the left side of titlebar.
     */
    icon?: string;
    /**
     * Style of the icons of titlebar.
     * You can create your custom style using [`Theme`](https://github.com/AlexTorresSk/custom-electron-titlebar/THEMES.md)
     */
    iconsTheme: Theme;
    /**
     * The shadow color of titlebar.
     */
    shadow: boolean;
    /**
     * Define if the minimize window button is displayed.
     * *The default is true*
     */
    minimizable?: boolean;
    /**
     * Define if the maximize and restore window buttons are displayed.
     * *The default is true*
     */
    maximizable?: boolean;
    /**
     * Define if the close window button is displayed.
     * *The default is true*
     */
    closeable?: boolean;
    /**
     * When the close button is clicked, the window is hidden instead of closed.
     * *The default is false*
     */
    hideWhenClickingClose: boolean;
    /**
     * Enables or disables the blur option in titlebar.
     * *The default is true*
     */
    unfocusEffect?: boolean;
    /**
     * Set the order of the elements on the title bar. You can use `inverted`, `first-buttons` or don't add for.
     * *The default is normal*
     */
    order?: "inverted" | "first-buttons";
    /**
     * Set horizontal alignment of the window title.
     * *The default value is center*
     */
    titleHorizontalAlignment: "left" | "center" | "right";
    /**
     * Sets the value for the overflow of the window.
     * *The default value is auto*
     */
    overflow: "auto" | "hidden" | "visible";
}
