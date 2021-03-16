import { observer } from "mobx-react-lite";
import theme from '../../../store/theme';
import { useState } from 'react';
import axios from 'axios';

import {Container, Row, Col} from 'react-bootstrap';

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
    <Container>
      <Row>
        <Col>
          <h3>Актуальные курсы валют по данным Центробанк РФ</h3>
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          {
            currentDate === null ?
              <h5>получаем данные...</h5>:
              <h5>Актуальные данные за {currentDate}</h5>
          }
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          {
            dataQuotes === null ?
              <h5>получаем данные доллар...</h5>:
              <h5>Курс {dataQuotes[10].name} {dataQuotes[10].value}</h5>
          }
        </Col>
        <Col>
          {
            dataQuotes === null ?
              <h5>получаем данные евро...</h5>:
              <h5>Курс {dataQuotes[11].name} {dataQuotes[11].value}</h5>
          }
        </Col>
      </Row>
    </Container>
  )
});

export default LatestRates;