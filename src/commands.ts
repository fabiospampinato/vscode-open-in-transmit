
/* IMPORT */

import * as applescript from 'applescript';
import * as vscode from 'vscode';
import Utils from './utils';

/* COMMANDS */

function open ( direction = 'left', root? ) {

  const {activeTextEditor} = vscode.window,
        editorPath = activeTextEditor && activeTextEditor.document.fileName,
        folderPath = Utils.folder.getWrapperPath ( editorPath, root );

  if ( !folderPath ) return vscode.window.showErrorMessage ( 'You have to open a project or a file before opening it in Transmit' );

  const directionKey = ( direction === 'left' ) ? 123 : 124;
  const script = `
    tell application "Transmit"
      reopen
      activate
    end tell
    # tell application "System Events" to tell process "Transmit"
    #   click menu item "Local Browser" of menu 1 of menu bar item "View" of menu bar 1
    # end tell
    tell application "System Events"
      key code ${directionKey} using {option down, command down} # Focus on Panel
      keystroke "g" using {option down, command down} # Got to Folder...
      keystroke "${folderPath}" # Write path
      keystroke return
    end tell
  `;

  applescript.execString ( script );

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
