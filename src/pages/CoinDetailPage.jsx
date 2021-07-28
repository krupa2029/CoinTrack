import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HistoryChart from '../components/HistoryChart';
import CoinData from '../components/CoinData';
import coinGecko from '../apis/coinGecko';

const CoinDetailPage = () => {

    const { id } = useParams();
    const [coinData, setCoinData] = useState({});

    useEffect(() => {
        const fetchData = async () => {

            const [day, week, month, year,detail] = await Promise.all
                ([
                    coinGecko.get(`/coins/${id}/market_chart`, {
                        params: {
                            vs_currency: "inr",
                            days: "1",
                        },
                    }),

                    coinGecko.get(`/coins/${id}/market_chart`, {
                        params: {
                            vs_currency: "inr",
                            days: "7",
                        },
                    }),

                    coinGecko.get(`/coins/${id}/market_chart`, {
                        params: {
                            vs_currency: "inr",
                            days: "30",
                        },
                    }),

                    coinGecko.get(`/coins/${id}/market_chart`, {
                        params: {
                            vs_currency: "inr",
                            days: "365",
                        },
                    }),
                    coinGecko.get("/coins/markets", {
                        params: {
                            vs_currency: "inr",
                            ids: id,
                        },
                    }),
                ]);


            setCoinData({
                day: day.data.prices,
                week: week.data.prices,
                month: month.data.prices,
                year: year.data.prices,
                detail: detail.data[0],
            });
        };
        fetchData();
    }, []);

    const renderData = () => {
        return (
            <div className="coinlist">
                <HistoryChart />
                <CoinData />
            </div>
        );
    };
    return renderData();

};

export default CoinDetailPage;
