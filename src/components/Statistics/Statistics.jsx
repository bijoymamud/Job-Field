import React from 'react';
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';


const Statistics = () => {
    const data = [
        {
            name: "Ass-1",
            mark: 60,
            Barmark: 60,
            BgColor: 60
        },
        {
            name: "Ass-2",
            mark: 60,
            Barmark: 60,
            BgColor: 60
        },
        {
            name: "Ass-3",
            mark: 58,
            Barmark: 58,
            BgColor: 58
        },
        {
            name: "Ass-4",
            mark: 54,
            Barmark: 54,
            BgColor: 54
        },
        {
            name: "Ass-5",
            mark: 50,
            Barmark: 50,
            BgColor: 50
        },
        {
            name: "Ass-6",
            mark: 60,
            Barmark: 60,
            BgColor: 60
        }
        ,
        {
            name: "Ass-7",
            mark: 60,
            Barmark: 60,
            BgColor: 60
        }
        ,
        {
            name: "Ass-8",
            mark: 45,
            Barmark: 45,
            BgColor: 45
        }
        ,
        {
            name: "Ass-9",
            mark: 30,
            Barmark: 30,
            BgColor: 30
        }
    ];


    return (
        <div className='centre  md:mt-20  md:mx-36' >
            <h3 className='text-center font-mono text-2xl mt-14 mb-14  font-bold md:text-5xl md:mb-10'>Assignment's Statistics</h3>
            <div style={{ width: '100%', height: 500 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={500}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="BgColor" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="Barmark" barSize={30} fill="#413ea0" />
                        <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div >
    );
};

export default Statistics;