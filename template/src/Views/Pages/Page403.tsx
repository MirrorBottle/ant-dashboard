import React from 'react'
import { Link } from "react-router-dom"
import {
    Result,
    Button
} from "antd"
export default function Page403() {
    return (
        <Result
            status="403"
            title="403 Forbidden"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
                <Link to="/admin/index">
                    <Button type="primary">Back to Dashboard</Button>
                </Link>
            }
        />
    )
}
