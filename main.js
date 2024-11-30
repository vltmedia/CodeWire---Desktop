// Electron
const { app, Menu,BrowserWindow , screen } = require("electron");
const path = require("path");

app.whenReady().then(() => {
    // Get the primary display's work area size (excluding taskbars/docks)
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.bounds;
    
  // Main window
  const window = require("./src/window");
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, "codeWire/images", "Code Wire Logo.png"),
  });



  // Option 1: Uses Webtag and load a custom html file with external content
  mainWindow.loadFile("codeWire/index.html");

  // Menu (for standard keyboard shortcuts)
  const menu = require("./src/menu");
  const template = menu.createTemplate(app.name);
  const builtMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(builtMenu);

  // Print function (if enabled)
  require("./src/print");
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
