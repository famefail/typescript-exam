import { Content } from 'antd/es/layout/layout'
import { Button } from 'antd/es/radio'
import { TableRowSelection } from 'antd/es/table/interface'
import { Table, TableColumnsType, Radio, Input, DatePicker, Select } from 'antd'

import { UseExam2Controller } from './controller'

interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
]

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    })
}


const Exam2 = () => {
    const { radio,
        title,
        phone,
        selectedRowKeys,
        setSelectedRowKeys,
        nation,
        onSelectChange,
        handleChangeFirstName,
        handleChangeLastName,
        handleChangeTitle,
        onChangeDate,
        onCompleteData,
        handleChangeNation, } = UseExam2Controller()
    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = []
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false
                        }
                        return true
                    })
                    setSelectedRowKeys(newSelectedRowKeys)
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = []
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true
                        }
                        return false
                    })
                    setSelectedRowKeys(newSelectedRowKeys)
                },
            },
        ],
    }

    return (
        <>
            <div className='form-container'>
                <Content className='form'>
                    <div>
                        <label>คำนำหน้า:</label>
                        <Select
                            style={{ width: 120, height: 50 }}
                            onChange={handleChangeTitle}
                            options={title}
                        />
                        <label> ชื่อจริง:</label>
                        <Input className='long' onChange={handleChangeFirstName}/>
                        <label>  นามสกุล:</label>
                        <Input className='long' onChange={handleChangeLastName} />
                    </div>
                    <div>
                        <label> วันเกิด:</label>
                        <DatePicker onChange={onChangeDate} style={{ height: 30 }} />
                        <label> สัญชาติ:</label>
                        <Select
                            style={{ width: 120, height: 50 }}
                            onChange={handleChangeNation}
                            options={nation}
                        />
                    </div>
                    <div>
                        <label>เลขบัตรประชาชน:</label>
                        <Input className='short' />
                        -<Input className='medium' />-<Input className='medium' />-<Input className='medium' />-<Input className='short' />
                        <Radio.Group options={radio} />
                    </div>
                    <div>
                        <label>หมายเลขโทรศัพท์มือถือ </label>
                        <Select
                            style={{ width: 120, height: 50 }}
                            onChange={handleChangeNation}
                            options={phone}
                        />
                        <Input className='long' />
                    </div>
                    <div>
                        <label>    หนังสือเดินทาง</label>
                        <Input className='long' />
                    </div>
                    <div>
                        <label> เงินเดือนที่คาดหวัง</label>
                        <Input className='long' />
                    </div>
                    <Button>ล้างข้อมูล</Button>
                    <Button onClick={onCompleteData}>ส่งข้อมูล</Button>
                </Content>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </>
    )
}
export default Exam2