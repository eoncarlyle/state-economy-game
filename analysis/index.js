import { DateTime } from "luxon";

console.log(DateTime.now().setZone("America/Chicago").toFormat("yyyy-MM-dd"));

DateTime.now().toFormat('yyyy LLL dd')