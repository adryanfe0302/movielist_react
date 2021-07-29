
import { Col, Card } from 'antd';
import moment from 'moment'
import { useHistory } from 'react-router-dom';
import { movie } from './../interface'

const { Meta } = Card;
function Cards(props:any) {
    let history = useHistory();
    const getDetail = (movie:movie) => {
        history.push(`/detail/${movie.id}`)
      }
    return (
        <Col span={6} key={props.movie.id} className='listcard'> 
            <Card
            onClick={() => getDetail(props.movie)}
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="example" src={props.movie.image || ''} />}
            >
            <Meta title={props.movie.title || '-'} description={moment(props.movie.showTime).format('DD MMM YYYY h:mm A')} />
          </Card>
        </Col>
    )
}

export default Cards