const browserWindow = {
  id: 42
}

module.exports =
  {
    remote: {
      getCurrentWindow: jest.fn(() => browserWindow)
    }
  }