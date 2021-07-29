import axios from 'axios';
import moment from 'moment'
import { PageHeader, Row, Card, Col, Spin, Divider } from 'antd';
import { useHistory } from 'react-router-dom';
import { useEffect , useState} from "react";
import { LoadingOutlined, LikeOutlined } from '@ant-design/icons';
import { movie } from './../interface'

function Detail() {
    let history = useHistory();
    const [loading, setLoading] = useState<boolean>(false)
    const [detail, setDetail] = useState<movie>({
        title: '',
        image: '',
        like: 0,
        showTime: '',
        id: ''
    })

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const getDetailMovie = () => {
        try {
            setLoading(true)
            let id:string = history.location.pathname.substr(8)
            axios.get(`https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies/${id}`)
            .then(res => {
                let {
                    id,
                    image,
                    title,
                    like,
                    showTime
                } = res.data
                setLoading(false)
                setDetail({
                    title: title,
                    image: image,
                    like: like,
                    showTime: showTime,
                    id: id
                })
            })
        } catch(err){
            // err goes here
        }
    }

  useEffect(() => {
    getDetailMovie()
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <>
    <Row> 
        <PageHeader
        className="site-page-header"
        onBack={() => history.push('/')}
        title='Back'
        subTitle={detail.title}
      />
    </Row>
    
    {loading ? 
        <Spin className='spinner' indicator={antIcon} />
      :
      <Card
      style={{ width: '50%', margin: 'auto' }}
      cover={<img alt="example" src={detail.image} />}
        >
        <h1> {detail.title} </h1>
        <Divider />
        <Col span={24}> 
            {moment(detail.showTime).format('DD MMM YYYY h:mm A')}
            <span className='fright'> <LikeOutlined /> <b>{detail.like} </b></span>
        </Col>
        
      </Card>
    }
   
    </>
  );
}

export default Detail;
