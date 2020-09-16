import * as customElectronTitlebar from '.'

jest.mock('@treverix/remote');

describe('custom-electron-titlebar', () => {
    it('should export the Titlebar class', () => {
        expect (typeof customElectronTitlebar.Titlebar).toBe('function');
    })

    it('should export the Themebar class', () => {
        expect (typeof customElectronTitlebar.Themebar).toBe('function');
    })

    it('should export the RGBA class', () => {
        expect (typeof customElectronTitlebar.RGBA).toBe('function');
    })

    it('should export the HSLA class', () => {
        expect (typeof customElectronTitlebar.HSLA).toBe('function');
    })

    it('should export the HSVA class', () => {
        expect (typeof customElectronTitlebar.HSLA).toBe('function');
    })

    it('should export the Color class', () => {
        expect (typeof customElectronTitlebar.HSLA).toBe('function');
    })
})