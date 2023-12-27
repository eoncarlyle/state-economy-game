import { createContext } from "preact";
import { StateRecord } from "../model/model";

const TargetStateRecord = createContext<StateRecord>(StateRecord.of("Alabama"));
export default TargetStateRecord