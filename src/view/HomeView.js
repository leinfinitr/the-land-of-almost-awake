import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

export const HomeView = () => {
    return (
        <div style={{alignItems: 'center', marginTop: '300px' }}>
            <Row justify="space-evenly">
                <Col span={3}>
                    <Link to="/page1">
                        <Button block size="large">密阿玛斯</Button>
                    </Link>
                </Col>
                <Col span={3}>
                    <Link to="/page2">
                        <Button block size="large">密普罗瑞斯</Button>
                    </Link>
                </Col>
                <Col span={3}>
                    <Link to="/page3">
                        <Button block size="large">密奥达卡斯</Button>
                    </Link>
                </Col>
                <Col span={3}>
                    <Link to="/page4">
                        <Button block size="large">密瑞瓦斯</Button>
                    </Link>
                </Col>
                <Col span={3}>
                    <Link to="/page5">
                        <Button block size="large">密莫瓦斯</Button>
                    </Link>
                </Col>
                <Col span={3}>
                    <Link to="/page6">
                        <Button block size="large">密巴塔罗斯</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};