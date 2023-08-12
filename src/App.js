
import './App.css';
import Airline from './componants/Airline';
import Filter from './componants/Filter';
import Navbar from './componants/Navbar';
import React, { useEffect, useState } from 'react';
import data from './file.json';

function App() {
  const [parsedData, setparsedData] = useState([]);
  // const [mapdata, setMapdata] = useState();

  const airLineData = (filterConditionArr) => {
    console.log('filterconditon: ', filterConditionArr);
    const newParsedData = parsedData.filter(data => {
      return filterConditionArr.some(item => item === (data.Segments[0].Airline?.AirlineName || "Not Defined"))
    })

    console.log('newParsedData is: ', newParsedData);

    setparsedData(newParsedData);
  }

  useEffect(() => {
    // // eslint-disable-next-line
    setparsedData(data)
  }, [])

  return (
    <div className='app-body'>
      <Navbar />
      <div className="componant-container">
        <Filter airLineData={airLineData} />
        <div className="direction-container">
          {parsedData.map((item, index) => {
            return (
              <Airline key={index}
                name={item.Segments[0].Airline?.AirlineName}
                departure={item.Segments[0].Origin?.DepTime}
                distance={item.Segments[0].Duration}
                stopage={item.Segments[0].StopOver ? 'stop1' : 'Non stop'}
                arrival={item.Segments[0].Destination?.ArrTime}
                price={item.Fare?.OfferedFare}
              />

            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
