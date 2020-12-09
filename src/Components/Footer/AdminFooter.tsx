import React from 'react'
import {
    Layout,
    Typography,
} from "antd"
const {Footer} = Layout;
const {Link}  = Typography;
export default function AdminFooter() {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Ant Dashboard ©2020 Created by <Link href="https://github.com/MirrorBottle" target="_blank">MirrorBottle</Link>
        </Footer>
    )
}
