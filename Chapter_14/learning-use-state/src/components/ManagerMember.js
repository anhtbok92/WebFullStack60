import React, { useState } from "react";
import { Row, Col, Avatar, List, Popconfirm, notification } from 'antd';
import { data } from '../person';
import { DeleteOutlined } from '@ant-design/icons';

const ManagerMember = () => {
    const [people, setPeople] = useState(data);

    const removePeople = (id) => {
        const removedData = people.filter((item) => item.id !== id);
        // Tương đương với this.setState({ people: removedData });
        setPeople(removedData);
        notification['success']({
            message: 'Deleted this member successfully',
            duration: 3
        });
    }

    const confirmDelete = () => {
        setPeople([]);
        notification['success']({
            message: 'Deleted all member successfully',
            duration: 3
        });
    }

    const cancelDelete = () => {
        return;
    }

    return (
        <>
            <Row>
                <Col span={16}>
                    <h2 style={{ float: 'left', marginLeft: 15 }}>Tổng số thành viên của lớp: {people.length}</h2>
                </Col>
                <Col span={8}>
                    <Popconfirm
                        title="Are you sure to delete all member?"
                        onConfirm={confirmDelete}
                        onCancel={cancelDelete}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a>Delete all</a>
                    </Popconfirm>
                </Col>
            </Row>
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={people}
                    renderItem={item => (
                        <List.Item style={{ textAlign: 'left' }}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href="https://ant.design">{`${item.first_name} ${item.last_name}`}</a>}
                                description={
                                    <div>
                                        <Row>
                                            <Col>Email address: </Col>
                                            <Col>{item.email}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Gender: </Col>
                                            <Col>{item.gender}</Col>
                                        </Row>
                                        <Row>
                                            <Col>Address street: </Col>
                                            <Col>{item.address}</Col>
                                        </Row>
                                    </div>
                                }
                            />
                            <div style={{ marginRight: 20 }}>
                                <DeleteOutlined onClick={() => removePeople(item.id)} />
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
}

export default ManagerMember;