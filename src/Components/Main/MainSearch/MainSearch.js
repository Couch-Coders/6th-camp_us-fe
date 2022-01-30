import React from 'react';
import { sido, sigungu } from './AddressData'
import { Menu, Dropdown, Button, message, Input, Space, Form, Select } from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Section, InnerWrapper, SectionTitle } from '../MainPage.styles';
import { SearchBox, /* Select, */ SelectName } from './MainSearch.styles';

const { Option } = Select;
  
  function MainSearch (props) {
    const onSearch = value => console.log(value);
    const { Search } = Input;
    const { address1, address2, setAddress1, setAddress2 } = props
    
    const changeAddress1 = (value) => {
      setAddress1(value);
      setAddress2(null);
    }

    const changeAddress2 = (value) => {
      setAddress2(value);
    }
  
    function handleMenuClick(e) {
      // message.info('Click on menu item.');
      console.log('click', e);
    }
  
    /* const sidoList = (
      <Menu onChange={changeAddress1} value={address1} onClick={handleMenuClick}>
        {sido.map(s => (
            <Menu.Item key={s} value={s}>{s}</Menu.Item>
        ))}
      </Menu>
    );

    const sigunguList = (
      {address1 ?
        Object.keys(sigungu[address1]).sort().map(s => (
          <Menu.Item key={s} value={s}>{s}</Menu.Item>
      ))
      : <></>
      }
    ); */

      return (
    <Section grayBg>
      <InnerWrapper>
          <SectionTitle>캠핑장 찾아보기</SectionTitle>
          <SearchBox>
          <Form.Item>
                <Select placeholder="시/도" onChange={changeAddress1} value={address1}>
                    {sido.map(s => (
                        <Option key={s} value={s}>{s}</Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item>
                <Select placeholder="시/군/구" onChange={changeAddress2} value={address2}>
                    {address1 ?
                    Object.keys(sigungu[address1]).sort().map(s => (
                        <Option key={s} value={s}>{s}</Option>
                    ))
                    : <></>
                    }
                </Select>
            </Form.Item>
            <Search
              placeholder="캠핑장 이름을 입력하세요."
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </SearchBox>
      </InnerWrapper>
    </Section>
      );
  }
  
  export default MainSearch;