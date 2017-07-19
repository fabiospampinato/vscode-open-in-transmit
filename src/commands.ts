
/* IMPORT */

import * as absolute from 'absolute';
import * as applescript from 'applescript';
import * as path from 'path';
import * as vscode from 'vscode';

/* COMMANDS */

//FIXME: Ensuring the `Local Browser` section is selected requires Accessibility API priviledges

function open ( direction = 'left' ) {

  const {activeTextEditor} = vscode.window,
        editorPath = activeTextEditor ? activeTextEditor.document.fileName : undefined,
        folderPath = editorPath && absolute ( editorPath ) ? path.dirname ( editorPath ) : vscode.workspace.rootPath;

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

/* EXPORT */

export {open, openLeft, openRight};
