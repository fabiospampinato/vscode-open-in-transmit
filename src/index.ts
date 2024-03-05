
/* IMPORT */

import vscode from 'vscode';
import * as Commands from './commands';

/* MAIN */

const activate = (): void => {

  vscode.commands.registerCommand ( 'openInTransmit.openLeft', Commands.openLeft );
  vscode.commands.registerCommand ( 'openInTransmit.openRight', Commands.openRight );
  vscode.commands.registerCommand ( 'openInTransmit.openRootLeft', Commands.openRootLeft );
  vscode.commands.registerCommand ( 'openInTransmit.openRootRight', Commands.openRootRight );

};

/* EXPORT */

export {activate};
