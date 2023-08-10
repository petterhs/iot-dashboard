import { json } from '@sveltejs/kit';
// import { jsonlist } from '../../lib/store.js';
import * as database from '../../../lib/server/database.js';

export async function POST({request}) {

    //log raw data to console
    console.log(await request.text());

    // const jsondata = await request.json();

    // console.log(jsondata);

    // const ts = database.addDataPoint(jsondata);

    return json({});
}

export async function GET() {

    return json(database.getData());
}
