 
import * as database from '../../lib/server/database.js';
export async function load() {
    const data = database.getData();
    return {
        jsonlist : data,
    };
}