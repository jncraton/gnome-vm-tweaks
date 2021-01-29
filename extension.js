const Main = imports.ui.main;
const BackgroundMenu = imports.ui.backgroundMenu;

function init() {
}

function enable() {
    BackgroundMenu.BackgroundMenu.prototype.open = function () {}
    Main.panel.hide()
}

function disable() {}
