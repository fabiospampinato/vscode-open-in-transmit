
/* IMPORT */

import {execFile} from 'node:child_process';

/* MAIN */

const applescript = ( script: string ): Promise<string> => {

  return new Promise ( ( resolve, reject ) => {

    execFile ( 'osascript', ['-e', script], ( error, stdout, stderr ) => {

      if ( error ) return reject ( error );

      resolve ( stdout );

    });

  });

};

/* EXPORT */

export {applescript}
