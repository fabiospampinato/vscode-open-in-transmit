
/* IMPORT */

import * as applescript from 'applescript';
import * as vscode from 'vscode';
import Config from './config';
import Utils from './utils';

/* COMMANDS */

function open ( direction = 'left', root? ) {

  const {activeTextEditor} = vscode.window,
        editorPath = activeTextEditor && activeTextEditor.document.uri.fsPath,
        folderPath = Utils.folder.getWrapperPath ( editorPath, root );

  if ( !folderPath ) return vscode.window.showErrorMessage ( 'You have to open a project or a file before opening it in Transmit' );

  const config = Config.get (),
        isLeft = ( direction === 'left' ),
        directionKey = isLeft ? 123 : 124;

  const localBrowserScript = `
    tell application "System Events" to tell process "Transmit"
      click menu item "Local Browser" of menu 1 of menu bar item "View" of menu bar 1
    end tell
  `;

  const openScript = `
    tell application "Transmit"
      reopen
      activate
    end tell
    ${!isLeft && config.switchToLocalBrowser ? localBrowserScript : ''}
    tell application "System Events"
      key code ${directionKey} using {option down, command down} # Focus on Panel
      keystroke "g" using {option down, command down} # Got to Folder...
      keystroke "${folderPath}" # Write path
      keystroke return
    end tell
  `;

  applescript.execString ( openScript );

}

function openLeft () {

  return open ( 'left' );

}

function openRight () {

  return open ( 'right' );

}

function openRootLeft () {

  return open ( 'left', true );

}

function openRootRight () {

  return open ( 'right', true );

}

/* EXPORT */

export {open, openLeft, openRight, openRootLeft, openRootRight};
