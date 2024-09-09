import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectToken } from '../../store/cryptos/selectors';
import { RootState } from '../../store/store';
import Layout from '../../components/Layout/Layout';

import styles from './TokenPage.module.scss';
import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { Spin, Tooltip } from 'antd';

const TokenPage = () => {
  const { id } = useParams();
  const [days, setDays] = useState('7');
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeBtn, setActiveBtn] = useState('7');

  const btns = ['24h', '7d', '14d', '30d', '60d', '1y', 'max'];

  const token = useSelector((state: RootState) =>
    id ? selectToken(state, id) : null,
  );

  useEffect(() => {
    const fetchTokenPrices = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get(`/coins/${id}/market_chart`, {
          params: {
            days: days,
          },
        });

        const formattedData = data.prices.map(
          ([timestamp, price]: [number, number]) => ({
            date:
              days === '24h'
                ? new Date(timestamp).toLocaleTimeString()
                : new Date(timestamp).toLocaleDateString(),
            price,
          }),
        );

        setChartData(formattedData);
      } catch (error) {
        let errorMessage = 'Failed to get crypto history prices';

        if (error instanceof Error) {
          errorMessage = error.message;
        }

        console.log(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTokenPrices();
  }, [days, id]);

  const handleTimeline = (timeline: string) => {
    setDays(timeline);
    setActiveBtn(timeline);
  };

  return (
    <Layout className={styles.layout}>
      <>
        {isLoading ? (
          <Spin fullscreen={true} size="large" className={styles.spin} />
        ) : (
          <>
            <div className={styles.content}>
              <div className={styles.info}>
                <img src={token?.image} alt="tokenImg" className={styles.img} />
                <div className={styles.text}>
                  <span>{token?.name}</span>
                  <span className={styles.price}>{token?.current_price}$</span>
                  <span>token: {token?.symbol}</span>
                  <span>
                    24h Change: {token?.price_change_percentage_24h.toFixed(3)}%
                  </span>
                </div>
              </div>
              <div className={styles.chart}></div>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                  top: 30,
                  right: 30,
                  left: 20,
                  bottom: 30,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Line
                  type="monotone"
                  dot={false}
                  dataKey="price"
                  stroke="#8884d8"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className={styles.btns}>
              {btns.map((btn, index) => (
                <button
                  key={index}
                  className={`${styles.btn} ${activeBtn === btn ? styles.active : ''}`}
                  onClick={() => handleTimeline(btn)}
                >
                  {btn}
                </button>
              ))}
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default TokenPage;
