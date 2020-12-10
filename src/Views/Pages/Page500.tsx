import React from 'react'
import {Link} from "react-router-dom"
import {
    Result,
    Button
} from "antd"
export default function Page500() {
    return (
        <Result
            status="500"
            title="500 Error"
            subTitle="Sorry, something went wrong."
            extra={
                <Link to="/admin/index">
                    <Button type="primary">Back to Dashboard</Button>
                </Link>
            }
        />
    )
}
