import React, { useEffect, useState, Suspense } from 'react';
import { Row, Col, Spin, AutoComplete, Input, DatePicker, Empty, BackTop } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import moment from 'moment'
import { movie, Iobj } from './../interface'
const { RangePicker } = DatePicker;


function Home() {
  const [listmovies, setListMovies] = useState<movie[]>([])
  const [listmoviesShow, setListMoviesShow] = useState<movie[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [options, setOptions] = useState<Iobj[]>([])
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const Cards = React.lazy(() => import('./Cards'));
  const filterOptions = (arr:movie[]) => {
    let listdropdownmovie:Array<Iobj> = []
    arr.forEach((item:any) => {
      let obj:Iobj = {
        value: item.title,
        label: item.title
      }
      listdropdownmovie.push(obj)
    })
    setOptions(listdropdownmovie)
  } 

  const handleSearch = (value: string) => {
    if (value.length === 0) {
      setListMoviesShow(listmovies)
    } else {
      let filtered = listmovies.filter((item:movie) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
      })
      filterOptions(filtered)
    }
  };

  const onSelect = (value: string) => {
    setListMoviesShow(listmovies.filter((item:movie) => item.title === value))
  }

  const filterRangeTime = (startDate:any, endDate:any) => {
    let rangetimeselected:movie[] = []
    listmovies.forEach((item:movie) => {
      if (moment(item.showTime) >= startDate && moment(item.showTime) <= endDate ){
        rangetimeselected.push(item)
      }
    })
    setListMoviesShow(rangetimeselected)
  }

  const onChange = (value:any, dateString:any) => {
    if (dateString[0] === '' && dateString[1] === '') {
      setListMoviesShow(listmovies)
    } else {
      let startDate:any = moment(dateString[0])
      let endDate:any = moment(dateString[1])
      filterRangeTime(startDate, endDate)
    }
  }

  useEffect(() => {
    const getListMovies = () => {
      try {
        setLoading(true)
        axios.get(`https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies`)
          .then(res => {
          setListMovies(res.data)
          setListMoviesShow(res.data)
          filterOptions(res.data)
          setLoading(false)
          })
      } catch(err){
        // err goes here
      }
    }
    getListMovies()
  }, [])

  return (
    <div className="pd-5"> 
    <Row>
    <Col span={8}> 
      <AutoComplete
        dropdownMatchSelectWidth={1}
        style={{ width: '90%' }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search allowClear placeholder="search movies" enterButton />
      </AutoComplete>
    </Col>  
    <Col span={8}> 
      <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        onChange={onChange}
      />
    </Col>
    </Row>
    <br />
    <Row gutter={[16, 24]}>
      {loading ? 
        <Spin className='spinner' indicator={antIcon} /> :
        <Suspense fallback={'loading...'}> 
          {
            listmoviesShow.length === 0 ? <Empty description={false} className='spinner' /> : listmoviesShow.map((movie:movie) => {
              return <Cards movie={movie} key={movie.id}></Cards>
            })
          }
        </Suspense>
      }
      </Row>
      <BackTop />
    </div>
  );
}

export default Home;
