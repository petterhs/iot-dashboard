const database = new Map();
let logging = true;

export function getData() {
	return Array.from(database.values());
}

export function addDataPoint( jsondata ) {

    if (!logging) {
        return;
    }

	const ts = new Date();

	database.set(ts, {
		ts,
		jsondata,
	});

	return {
		ts
	};
}

export function deleteAllData() {
    database.clear();
}

export function toggleLogging() {
    logging = !logging;
}