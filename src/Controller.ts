import{ Alerts} from "./Model";
import * as $ from "jquery";

const m= new Alerts();

m.Messages= [`Great feature`];
export function DisplayAlerts(){
    $("#alerts").append(m.Messages.join());
    DisplayAlerts();
}

