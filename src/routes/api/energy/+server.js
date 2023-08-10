import { json } from '@sveltejs/kit';
// import { jsonlist } from '../../lib/store.js';
import * as database from '../../../lib/server/database.js';

export async function POST({request}) {

    //log raw data to console
    const rawdata = await request.text();
    console.log(rawdata);

    // const jsondata = await request.json();

    // console.log(jsondata);

    const ts = database.addDataPoint({
        rawdata : rawdata,
    })

    return json(ts);
}

export async function GET() {

    return json(database.getData());
}
