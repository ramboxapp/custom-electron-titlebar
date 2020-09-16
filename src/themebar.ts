/*--------------------------------------------------------------------------------------------------------
 *  Copyright (c) 2018 Alex Torres
 *  Licensed under the MIT License. See License in the project root for license information.
 * 
 *  This file has parts of one or more project files (VS Code) from Microsoft
 *  You can check your respective license and the original file in https://github.com/Microsoft/vscode/
 *-------------------------------------------------------------------------------------------------------*/

import {toDisposable, IDisposable, Disposable} from "vs/base/common/lifecycle";
const commonTheme: string = require('static/theme/common.css');
const macTheme: string = require('static/theme/mac.css');
const winTheme: string = require('static/theme/win.css');

class ThemingRegistry extends Disposable {
    private readonly theming: Theme[] = [];

    constructor() {
        super();

        this.theming = [];
    }

    protected onThemeChange(theme: Theme): IDisposable {
        this.theming.push(theme);
        return toDisposable(() => {
            const idx = this.theming.indexOf(theme);
            this.theming.splice(idx, 1);
        });
    }

    protected getTheming(): Theme[] {
        return this.theming;
    }
}

export class Themebar extends ThemingRegistry {

    constructor() {
        super();

        this.registerTheme((collector: CssStyle) => {
            collector.addRule(commonTheme);
        });
    }

    protected registerTheme(theme: Theme) {
        this.onThemeChange(theme);

        let cssRules: string[] = [];
        let hasRule: { [rule: string]: boolean } = {};
        let ruleCollector = {
            addRule: (rule: string) => {
                if (!hasRule[rule]) {
                    cssRules.push(rule);
                    hasRule[rule] = true;
                }
            }
        };

        this.getTheming().forEach(p => p(ruleCollector));

        _applyRules(cssRules.join('\n'), 'titlebar-style');
    }

    static get win(): Theme {
        return ((collector: CssStyle) => {
            collector.addRule(winTheme);
        });
    }

    static get mac(): Theme {
        return ((collector: CssStyle) => {
            collector.addRule(macTheme);
        });
    }

}

export interface CssStyle {
    addRule(rule: string): void;
}

export interface Theme {
    (collector: CssStyle): void;
}

function _applyRules(styleSheetContent: string, rulesClassName: string) {
    let themeStyles = document.head.getElementsByClassName(rulesClassName);

    if (themeStyles.length === 0) {
        let styleElement = document.createElement('style');
        styleElement.className = rulesClassName;
        styleElement.innerHTML = styleSheetContent;
        document.head.appendChild(styleElement);
    } else {
        (<HTMLStyleElement>themeStyles[0]).innerHTML = styleSheetContent;
    }
}
