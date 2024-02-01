import type { DatePickerProps } from 'antd';
import { ChangeEvent, useCallback, useState } from 'react';
import { setUserData } from './setUserData';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../storage/reducer';

export const UseExam2Controller = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.userData);

    const radio = ['ผู้ชาย', 'ผู้หญิง', 'ไม่ระบุ'];
    const title = [{ value: 'นาย' }, { value: 'นาง' }];
    const phone = [{ value: '+11' }, { value: '+66' }];
    const nation = [{ value: 'ไทย' }, { value: 'อื่นๆ' }];
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const init = {
        title: '',
        firstName: '',
        lastName: '',
        birhdate: '',
        citizenNo: '',
        nation: '',
        gender: '',
        phone: '',
        passport: '',
        salary: '',
    };

    const onSelectChange = useCallback((newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    }, []);

    const handleChangeFirstName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        init.firstName = value;
    }, []);

    const handleChangeLastName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        init.lastName = value;
    }, []);

    const handleChangeNation = useCallback((value: string) => {
        init.nation = value;
    }, []);

    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        init.birhdate = dateString;
    };

    const handleChangeTitle = useCallback((value: string) => {
        init.title = value
    }, []);
    const onCompleteData = useCallback(() => {
        const ary = []
        const newUser = {
            title: init.title,
            firstName: init.firstName,
            lastName: init.lastName,
            birhdate: init.birhdate,
            citizenNo: init.citizenNo,
            gender: init.gender,
            nation: init.nation,
            phone: init.phone,
            passport: init.passport,
            salary: init.salary,
        }
        ary.push(newUser)
        // Dispatch the action with the new user data
        dispatch(setUserData(ary));
        console.log(userData);
    }, [dispatch, init.birhdate, init.citizenNo, init.firstName, init.gender, init.lastName, init.nation, init.passport, init.phone, init.salary, init.title, userData]);

    return {
        radio,
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
        handleChangeNation
    };
};
