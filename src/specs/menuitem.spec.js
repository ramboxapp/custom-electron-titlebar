/**
 * @jest-environment jsdom
 */
const {KeyCodeUtils} = require("../../dist/vs/base/common/keyCodes");
const {CETMenuItem} = require('../menuitem');
const {Color} = require('..');

describe('Menuitem creation tests', () => {

  describe('Constructor tests', () => {

    it('it stores the item internally', () => {
      const item = {label: 'foo'}
      const menuItem = new CETMenuItem(item);

      expect(menuItem.item).toEqual(item);
    })

    it('it stores the options internally', () => {
      const options = {label: 'foo'}
      const menuItem = new CETMenuItem(undefined, options);

      expect(menuItem.options).toEqual(options);
    })

    it('it stores the current browser window correctly', () => {
      const menuItem = new CETMenuItem(undefined);

      expect(menuItem.currentWindow.id).toEqual(42);  // value, see __mock__/electron.js
    })

    it('it stores the current browser window correctly', () => {
      const closeSubMenu = () => {}
      const menuItem = new CETMenuItem(undefined, undefined, closeSubMenu);

      expect(menuItem.closeSubMenu).toEqual(closeSubMenu);
    })
  })

  describe('Menuitem Mnemonic Tests', () => {

    it('it finds a mnemonic inside the label', () => {
      const menuItem = new CETMenuItem(
        {
          label: 'a&bc'
        },
        {
          enableMnemonics: true
        }
      );

      expect(menuItem.getMnemonic()).toEqual(KeyCodeUtils.fromString('b'));
    })

    it('it finds a mnemonic at the beginning of the label', () => {
      const menuItem = new CETMenuItem(
        {
          label: '&abc'
        },
        {
          enableMnemonics: true
        }
      );

      expect(menuItem.getMnemonic()).toEqual(KeyCodeUtils.fromString('a'));
    })

    it('it does not create a mnemonic if the feature is turned off', () => {
      const menuItem = new CETMenuItem(
        {
          label: '&abc'
        },
        {
          enableMnemonics: false
        }
      );

      expect(menuItem.getMnemonic()).toBeFalsy();
    })

    it('it does not create a mnemonic if there is no label', () => {
      const menuItem = new CETMenuItem(
        {},
        {
          enableMnemonics: true
        }
      );

      expect(menuItem.getMnemonic()).toBeFalsy();
    })

  })

  describe('Menuitem styling Tests', () => {

    let menuItem;
    let hasFocusedClass = false;

    beforeEach(() => {
      menuItem = new CETMenuItem({}, {}, () => {});
      menuItem.container = {classList: {contains: jest.fn(c => hasFocusedClass)}};
      menuItem.checkElement = {style: {removeProperty: jest.fn(c => {})}};
      menuItem.itemElement = {style: {removeProperty: jest.fn(c => {})}};

    })

    it('Stores the applied style internally', () => {
      const style = {};
      menuItem.style(style);
      expect(menuItem.menuStyle).toEqual(style);
    })

    it('Stores null or undefined styles but does not crash.', () => {
      const containsMock = menuItem.container.classList.contains.mock;
      menuItem.menuStyle = {};
      const style = null;
      menuItem.style(style);

      expect(menuItem.menuStyle).toBeFalsy();
      expect(containsMock.calls.length).toBe(0);
    })

    it('Checks if the menuitem container has the style class "focused"', () => {
      menuItem.style({});
      const containsMock = menuItem.container.classList.contains.mock;

      expect(containsMock.calls.length).toBe(1);
      expect(containsMock.calls[0][0]).toBe('focused');
    })

    it('Correctly sets the foreground color', () => {
      hasFocusedClass = true;
      menuItem.style({
        selectionForegroundColor: undefined,
        foregroundColor: Color.black
      });

      expect(menuItem.itemElement.style.color).toEqual(Color.black.toString());
      expect(menuItem.checkElement.style.backgroundColor).toEqual(Color.black.toString());
    });

    it('Correctly sets the foreground color to selection foreground color', () => {
      hasFocusedClass = true;
      menuItem.style({
        selectionForegroundColor: Color.red,
        foregroundColor: Color.black
      });

      expect(menuItem.itemElement.style.color).toEqual(Color.red.toString());
      expect(menuItem.checkElement.style.backgroundColor).toEqual(Color.red.toString());
    });

    it('Correctly sets the background color', () => {
      hasFocusedClass = true;
      menuItem.style({
        selectionBackgroundColor: undefined,
        backgroundColor: Color.black
      });

      expect(menuItem.itemElement.style.backgroundColor).toEqual(Color.black.toString());
    });

    it('Correctly sets the background color to selection background color', () => {
      hasFocusedClass = true;
      menuItem.style({
        selectionBackgroundColor: Color.red,
        backgroundColor: Color.black
      });

      expect(menuItem.itemElement.style.backgroundColor).toEqual(Color.red.toString());
    });

    it('Does not crash when itemElement or checkElement are falsy', () => {
      menuItem.itemElement = null;
      menuItem.checkElement = null;
      menuItem.style({});
    });

  })
})

