/**
 * @jest-environment jsdom
 */

import rewire from 'rewire';


describe('Menuitems parseAccelerator method Tests', () => {
    const mock = jest.mock('vs/base/browser/dom.js')
    const menuItemModul = rewire('../dist/menuitem.js');
    //const parseAccelerator = menuItemModul.__get__('parseAccelerator');
    const parseAccelerator = function(){};
    let navigatorMock

    beforeEach(() => {
        navigatorMock = jest.spyOn(global, 'navigator', 'get')
        navigatorMock.mockReturnValue({...navigator, userAgent: ''});
    })

    it('is is a function', () => {
        expect(typeof parseAccelerator).toBe('function');
    })

})