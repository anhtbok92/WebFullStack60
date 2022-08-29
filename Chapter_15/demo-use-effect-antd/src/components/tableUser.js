import * as React from 'react';
import { Table } from 'antd';
import {useEffect, useState} from "react";
import axios from "axios";

const columnUser = [
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (name) => `${name.title} ${name.first} ${name.last}`
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
];

const TableUser = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const callAPI = async () => {
        setIsLoading(true);
        const response = await axios({
            method: 'get',
            url: 'https://randomuser.me/api?results=100',
            type: 'json'
        });
        console.log('response', response);
        console.log('response.data.results', response.data.results);
        if (response.status === 200) {
            setUserList(response.data.results);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        callAPI();
    }, []);

    return (
        <>
            <h2>Danh sách các thành viên trong lớp Mindx</h2>
            <Table
                dataSource={userList}
                columns={columnUser}
                rowKey='email'
                loading={isLoading}
                // pagination={pagination}
            />
        </>
    )
}

export default TableUser;