import React from 'react'
import Pic1 from '../../Assets/advanced-option.jpg'
import Pic3 from '../../Assets/clean-design.jpg'
import Pic4 from '../../Assets/easy-customise.jpg'
import  Pic5 from '../../Assets/great-support.jpg'
import Pic7 from '../../Assets/modern-design.jpg'
import Pic8 from '../../Assets/unlimited-features.jpg'
import { Row, Col } from 'antd'
import { Card } from 'antd';

const { Meta } = Card;

const AppFeature = () => {
    return (
        <div className="block  featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={8}> <Card
                        hoverable
                       
                        cover={<img alt="Modern Design" src={Pic7} />}
                    >
                        <Meta title="Modern Design"  />
                    </Card></Col>
                    <Col span={8}> <Card
                        hoverable
                       
                        cover={<img alt="Clean and Elegant" src={Pic3} />}
                    >
                        <Meta title="Clean and Elegant"  />
                    </Card></Col>
                    <Col span={8}> <Card
                        hoverable
                       
                        cover={<img alt="Great Support" src={Pic5} />}
                    >
                        <Meta title="Great Support"  />
                    </Card></Col>
                    <Col span={8}> <Card
                        hoverable
                       
                        cover={<img alt="Easy to customise" src={Pic4} />}
                    >
                        <Meta title="Easy to customise"  />
                    </Card></Col>
                    <Col span={8}> <Card
                        hoverable
                       
                        cover={<img alt="Unlimited Features" src={Pic8} />}
                    >
                        <Meta title="Unlimited Features"  />
                    </Card></Col>
                    <Col span={8}> <Card
                        hoverable
                       
                        cover={<img alt="Advanced Options" src={Pic1} />}
                    >
                        <Meta title="Advanced Options"  />
                    </Card></Col>
                   
                </Row>
            </div>
        </div>
    )
}

export default AppFeature