import React from 'react'
import { Bar } from 'react-chartjs-2'
import moment from "moment";
import { 
    Card, 
    Col, 
    Row ,
    Statistic,
    Typography,
    Tabs,
    Comment,
    Avatar,
    List
} from 'antd';
import {
    FolderTwoTone,
    SmileTwoTone,
    CalendarTwoTone,
    BugTwoTone,
} from "@ant-design/icons"

const { TabPane } = Tabs;
const { Title, Text, Link } = Typography;

interface TabData {
    id: number;
    userId: number;
    username: string;
    context: string;
    avatar: string;
    datetime: string | moment.Moment;
}


const ListItem = (props: { messages: TabData[]}) => (
    <List
        className="commits-list"
        itemLayout="horizontal"
        dataSource={props.messages}
        renderItem={message => (
            <li>
                <Comment
                    author={<span>{message.username}</span>}
                    avatar={<Avatar src={message.avatar} alt={message.username} />}
                    content={<p>{message.context}</p>}
                    datetime={<span>{moment(message.datetime, "YYYY-MM-DD HH:mm:ss").fromNow()}</span>}
                />
            </li>
        )}
    />
)
export default function Dashboard() {
    const messages:TabData[] = [
        {
            id: 1,
            userId: 2,
            username: "Mary Antala",
            context: "Add New Dashboard",
            datetime: moment().subtract("hour", 2).format("YYYY-MM-DD HH:mm:ss"),
            avatar: "https://s1.zerochan.net/Mary.%28Ib%29.600.1225865.jpg"
        },
        {
            id: 2,
            userId: 4,
            username: "Shyna",
            context: "Make Some Changes in Notification",
            datetime: moment().subtract("hour", 2.4).format("YYYY-MM-DD HH:mm:ss"),
            avatar: "https://i.pravatar.cc/150?img=47"
        },
        {
            id: 3,
            userId: 5,
            username: "Anotonia Verz",
            context: "Table Changes",
            datetime: moment().subtract("hour", 3).format("YYYY-MM-DD HH:mm:ss"),
            avatar: "https://i.pravatar.cc/150?img=51"
        },
        {
            id: 4,
            userId: 3,
            username: "Tom",
            context: "Make Dummy Data",
            datetime: moment().subtract("hour", 3).format("YYYY-MM-DD HH:mm:ss"),
            avatar: "https://i.pravatar.cc/150?img=50"
        },
        {
            id: 5,
            userId: 4,
            username: "Mia",
            context: "Setup Server",
            datetime: moment().subtract("hour", 4).format("YYYY-MM-DD HH:mm:ss"),
            avatar: "https://i.pravatar.cc/150?img=40"
        },
    ];
    const chartData = {
        labels: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Total Commits',
                data: [35, 65, 33, 21, 57, 43, 13],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Card bordered>
                    <Title level={3}>Welcome to Ant Dashboard</Title>
                    <Text>This admin dashboard template made with Ant Design and some others library. It will provide some default pages, sidenavs, and others. If you don't know about Ant Design, you could read about it <Link href="https://ant.design" target="_blank">in here</Link></Text>
                </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
                <Card bordered>
                    <Statistic title="Projects" value={23} prefix={<FolderTwoTone twoToneColor="#F63E4F" />} />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
                <Card bordered>
                    <Statistic title="Developers" value={57} prefix={<SmileTwoTone twoToneColor="#27C7FF" />} />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
                <Card bordered>
                    <Statistic title="Meeeting" value={17} prefix={<CalendarTwoTone twoToneColor="#F63848" />} />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
                <Card bordered>
                    <Statistic title="Bug Fixed" value={87} prefix={<BugTwoTone twoToneColor="#117EFF" />} suffix={`/ 209`} />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={24}>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12}>
                        <Card bordered >
                            <div style={{ minHeight: "400px" }}>
                                <Bar data={chartData} options={{
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    scales: {
                                        yAxes: [
                                            {
                                                ticks: {
                                                    beginAtZero: true,
                                                },
                                            },
                                        ],
                                    },
                                }} />
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Card bordered>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="Commits" key="1">
                                    <ListItem messages={messages} />
                                </TabPane>
                                <TabPane tab="Meeting" key="2">
                                    <ListItem messages={messages} />
                                </TabPane>
                                <TabPane tab="Bug Fixed" key="3">
                                    <ListItem messages={messages} />
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
