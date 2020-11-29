import {Accelerator} from "electron";
import {isMacintosh} from "vs/base/common/platform";

export const convertAccelerator = (electronAccelerator: Accelerator): string => {
    let vsAccelerator;
    if (!isMacintosh) {
        vsAccelerator = electronAccelerator.replace(/(Cmd)|(Command)/gi, '');
    } else {
        vsAccelerator = electronAccelerator.replace(/(Ctrl)|(Control)/gi, '');
    }

    vsAccelerator = vsAccelerator.replace(/(Or)/gi, '');

    return vsAccelerator;
}