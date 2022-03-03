import './App.css';
import { useEffect, useState } from 'react';
import moment from 'moment-timezone';

function App() {

  const getTimeZoneAndOffset = (timeZone) =>  {
    //let momentDate = moment();
    console.log(moment().tz(timeZone).format())
    // let timeZoneTime = moment().tz(timeZone).format();
    return {
      timeZoneTime: moment().tz(timeZone).format(),
      offset: moment().tz(timeZone).zone()
    };
  };
  const [ currentTimezone, setCurrentTimeZone ] = useState( new Date().toLocaleString());
  const [ currentTimezoneOffset, setCurrentTimeZoneOffset ] = useState(new Date().getTimezoneOffset());
  
  const [ cstTimezone, setCstTimeZone ] = useState();
  const [ cstTimezoneOffset, setCstTimeZoneOffset ] = useState();

  const [ mstTimezone, setMstTimeZone ] = useState();
  const [ mstTimezoneOffset, setMstTimeZoneOffset ] = useState();
 
  const [ estTimezone, setEstTimeZone ] = useState();
  const [ estTimezoneOffset, setEstTimeZoneOffset ] = useState();

  const [ pstTimezone, setPstTimeZone ] = useState();
  const [ pstTimezoneOffset, setPstTimeZoneOffset ] = useState();
 
 

  useEffect(() => {
    setCurrentTimeZone(new Date().toLocaleString());
    setCurrentTimeZoneOffset(new Date().getTimezoneOffset());
    let result = getTimeZoneAndOffset('America/Regina');
    setCstTimeZone(result.timeZoneTime);
    setCstTimeZoneOffset(result.offset);
    result = getTimeZoneAndOffset('America/Inuvik');
    setMstTimeZone(result.timeZoneTime);
    setMstTimeZoneOffset(result.offset);
    result = getTimeZoneAndOffset('America/Detroit');
    setEstTimeZone(result.timeZoneTime);
    setEstTimeZoneOffset(result.offset);
    result = getTimeZoneAndOffset('America/Tijuana');
    setPstTimeZone(result.timeZoneTime);
    setPstTimeZoneOffset(result.offset);

  })
  return (
    <div className="App">
     <h3>
       Current Time: <span><b>{currentTimezone}</b></span>

     </h3>
     <h3>
       Current Offset in Minutes: <span><b>{currentTimezoneOffset}</b></span>
     </h3>
     <h3>
       CST Time: <span><b>{cstTimezone}</b></span>
     </h3>
     <h3>
       CST Offset in Minutes: <span><b>{cstTimezoneOffset}</b></span>
     </h3>

     <h3>
       MST Time: <span><b>{mstTimezone}</b></span>
     </h3>
     <h3>
       MST Offset in Minutes: <span><b>{mstTimezoneOffset}</b></span>
     </h3>
     <h3>
       EST Time: <span><b>{estTimezone}</b></span>
     </h3>
     <h3>
       EST Offset in Minutes: <span><b>{estTimezoneOffset}</b></span>
     </h3>
     <h3>
       PST Time: <span><b>{pstTimezone}</b></span>
     </h3>
     <h3>
       PST Offset in Minutes: <span><b>{pstTimezoneOffset}</b></span>
     </h3>
    </div>
  );
}

export default App;
