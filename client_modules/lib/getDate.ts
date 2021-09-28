
import moment from "moment";

// momentjs to get the next 7 days!
export default function getDates() {
    let days: Array<string> = [];
    for (let i = 1; i <= 7; i++) {
        days.push(moment().add(i, 'days').format('dddd, Do MMMM YYYY') );
    }

    return {
        getToday: () => days[0],
        getWeek: () => days,
        formatDate: (timestamp: string) => {
            return moment(timestamp).format("YYYY-MM-DD hh:mm:ss a")
        }
    }
}