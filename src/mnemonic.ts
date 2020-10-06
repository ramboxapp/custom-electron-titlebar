export const MENU_MNEMONIC_REGEX = /\(&([^\s&])\)|(^|[^&])&([^\s&])/;
export const MENU_ESCAPED_MNEMONIC_REGEX = /(&amp;)?(&amp;)([^\s&])/g;

export function cleanMnemonic(label: string): string {
    const regex = MENU_MNEMONIC_REGEX;

    const matches = regex.exec(label);
    if (!matches) {
        return label;
    }

    const mnemonicInText = !matches[1];

    return label.replace(regex, mnemonicInText ? '$2$3' : '').trim();
}