
/* IMPORT */

import * as applescript from 'applescript';
import * as vscode from 'vscode';
import Utils from './utils';

/* COMMANDS */

function open ( direction = 'left', root? ) {

  const {activeTextEditor} = vscode.window,
        editorPath = activeTextEditor && activeTextEditor.document.uri.fsPath,
        folderPath = Utils.folder.getWrapperPath ( editorPath, root );

  if ( !folderPath ) return vscode.window.showErrorMessage ( 'You have to open a project or a file before opening it in Transmit' );

  const keyCode = ( direction === 'left' ) ? 123 : 124;

  applescript.execString (`
    on switch_to_local()
      tell application "System Events" to tell process "Transmit"
        key code ${keyCode} using {option down, command down} -- Focus on Panel
        click menu item "Local Browser" of menu 1 of menu bar item "View" of menu bar 1 -- Switch to "Local Browser"
      end tell
    end switch_to_local

    tell application "Transmit"
      reopen
      activate
      tell ${direction} browser of current tab of first document
        try
          if remote then
            close
            my switch_to_local()
          end if
        on error
          my switch_to_local()
        end try
        change location to path "${folderPath}"
      end tell
    end tell
  `);

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
