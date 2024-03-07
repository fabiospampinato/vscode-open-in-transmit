
/* IMPORT */

import path from 'node:path';
import vscode from 'vscode';
import {getActiveFilePath, getProjectRootPath} from 'vscode-extras';
import {applescript} from './utils';

/* MAIN */

const open = ( direction: 'left' | 'right', root?: boolean ): void => {

  const rootPath = getProjectRootPath ();
  const filePath = getActiveFilePath ();
  const targetPath = root ? rootPath : ( filePath ? path.dirname ( filePath ) : rootPath );

  if ( !targetPath ) return void vscode.window.showErrorMessage ( 'You have to open a project or a file before opening it in Transmit' );

  const keyCode = ( direction === 'left' ) ? 123 : 124;

  applescript (`
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
        change location to path "${targetPath}"
      end tell
    end tell
  `);

};

const openLeft = (): void => {

  return open ( 'left' );

};

const openRight = (): void => {

  return open ( 'right' );

};

const openRootLeft = (): void => {

  return open ( 'left', true );

};

const openRootRight = (): void => {

  return open ( 'right', true );

};

/* EXPORT */

export {openLeft, openRight, openRootLeft, openRootRight};
