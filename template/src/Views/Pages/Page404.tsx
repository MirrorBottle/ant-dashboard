import React from 'react'
import {Link} from "react-router-dom"
import {
    Result,
    Button
} from "antd"
export default function Page404() {
    return (
        <Result
            status="404"
            title="404 Not Found"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link to="/admin/index">
                    <Button type="primary">Back to Dashboard</Button>
                </Link>
            }
        />
    )
}
