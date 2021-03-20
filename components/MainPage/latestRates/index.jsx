import { observer } from "mobx-react-lite";
import theme from '../../../store/theme';
import { useState } from 'react';
import axios from 'axios';

import classes from './style.module.scss';

const LatestRates = observer(() => {

  const [dataQuotes, setDataQuotes] = useState(null)
  const [currentDate, setCurrentDate] = useState(null)

  const validDate = (value) => {
    const date = value.split('T')[0].split('-')[2]
    const month = value.split('T')[0].split('-')[1]
    const year = value.split('T')[0].split('-')[0]
    return `${date}.${month}.${year}`
  }

  const getData = async () => {
    if(dataQuotes === null){
      const response = await axios.get('/api/curentQuotes')
      if (response.data) {
        setDataQuotes(response.data.valutes)
        console.dir(response.data.valutes)
        setCurrentDate(validDate(response.data.date))
      }
    }
  }

  getData()

  return(
    <div
      className={`${classes.container} wrapper content row`}
      style={{
        backgroundColor: theme.active === 'dark' ? '#2a2a2a' : '#ffffff',
        color: theme.active === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.8)'
      }}
    >
      {
        dataQuotes !== null 
        ? dataQuotes.map(
          ({id, name, charCode, value}) =>
            <div
              key={id}
              style={{
                color: theme.active === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'
              }}
              className={`${classes.element} column`}
            >
              <div className={`${classes.item} ${classes.name}`}>{name}</div>
              <div className={`${classes.item} ${classes.code}`}>{charCode}</div>
              <div className={`${classes.item} ${classes.value}`}>{Number(value).toFixed(2)}</div>
            </div>
        )
        : <span
            style={{
              color: theme.active === 'dark' ? '#ffffff' : 'rgba(0, 0, 0, 0.8)'
            }}
          >load</span>
      }
    </div>
  )
});

export default LatestRates;