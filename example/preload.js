// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const path = require('path');
const url = require('url');

window.addEventListener('DOMContentLoaded', () => {

  // It does not make sense to use the custom titlebar on macOS where
  // it only tries to simulate what we get with the normal behavior anyway.
  if (process.platform !== 'darwin') {
    const customTitlebar = require('custom-electron-titlebar');
    // const customTitlebar = require('../dist');  // for local library development and testing only
    new customTitlebar.Titlebar({
      backgroundColor: customTitlebar.Color.fromHex('#2f3241'),
      icon: url.format(path.join(__dirname, '/images', '/icon.png')),
    });
  }

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
