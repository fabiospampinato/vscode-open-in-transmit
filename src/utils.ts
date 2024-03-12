
/* IMPORT */

import {exec} from 'vscode-extras';

/* MAIN */

const applescript = async ( script: string ): Promise<void> => {

  await exec ( 'osascript', ['-e', script] );

};

/* EXPORT */

export {applescript};
