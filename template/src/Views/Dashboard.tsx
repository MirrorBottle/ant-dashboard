import React from 'react'
import { 
    Card, 
    Col, 
    Row ,
    Layout,
    Statistic
} from 'antd';
import {
    LikeOutlined,
    FolderTwoTone,
    SmileTwoTone,
    CalendarTwoTone,
    BugTwoTone,
} from "@ant-design/icons"
export default function Dashboard() {
    return (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={6}>
                <Card bordered>
                    <Statistic title="Posts" value={1128} prefix={<FolderTwoTone twoToneColor="#F63E4F" />} />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
                <Card bordered>
                    <Statistic title="Happy Users" value={237} prefix={<SmileTwoTone twoToneColor="#27C7FF" />} />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
                <Card bordered>
                    <Statistic title="Events" value={17} prefix={<CalendarTwoTone twoToneColor="#F63848" />} />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={6}>
                <Card bordered>
                    <Statistic title="Bug Fixed" value={11} prefix={<BugTwoTone twoToneColor="#117EFF" />} suffix={`/ 28`} />
                </Card>
            </Col>
        </Row>
    )
}
