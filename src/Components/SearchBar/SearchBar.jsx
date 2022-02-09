import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Input, Select, Rate } from 'antd';
import * as district from '../../Common/AddressData';
import { Tagcategory } from '../../Common/category';
import Tag from '../Tag/Tag';

const SearchBar = (props) => {
  const [address, setAddress] = useState({
    address1: '서울특별시',
    address2: '강남구',
    rate: null,
    keyword: '',
    category: [],
  });

  const category = Tagcategory;

  const { Option } = Select;

  /* 지역 검색 */
  const sido = district.sido;
  const sigungu = district.sigungu;

  const changeAddress1 = (value) => {
    setAddress((address) => {
      return { ...address, address1: value };
    });
    setAddress((address) => {
      return { ...address, address2: null };
    });
  };

  const changeAddress2 = (value) => {
    setAddress((address) => {
      return { ...address, address2: value };
    });
  };

  const changeKeyword = (value) => {
    setAddress((address) => {
      return { ...address, keyword: value.target.value };
    });
  };

  const handleRateChange = (value) => {
    setAddress((address) => {
      return { ...address, rate: value };
    });
  };

  const addCategory = useCallback((tag) => {
    setAddress((address) => {
      return { ...address, category: [...address.category, tag] };
    });
  }, []);

  const removeCategory = useCallback((tag) => {
    setAddress((address) => {
      const newArr = address.category.filter((item) => item !== tag);
      return { ...address, category: newArr };
    });
  }, []);

  const submitAddress = () => {
    console.log(address);
  };

  // console.log(address);
  return (
    <Container>
      <Header>캠핑장 찾아보기</Header>
      <Form>
        <InputTitle>캠핑장 이름</InputTitle>
        <InputContent
          placeholder="캠핑장 이름을 검색하세요."
          onChange={changeKeyword}
        />
        <InputTitle>지역</InputTitle>
        <SelectAddress
          placeholder="시/도"
          onChange={changeAddress1}
          value={address.address1}
        >
          {sido.map((address1, index) => (
            <Option key={index} value={address1}>
              {address1}
            </Option>
          ))}
        </SelectAddress>
        <SelectAddress
          placeholder="시/군/구"
          onChange={changeAddress2}
          value={address.address2}
        >
          {sigungu[address.address1].map((address2, index) => (
            <Option key={index} value={address2}>
              {address2}
            </Option>
          ))}
        </SelectAddress>
        <InputTitle>최소 별점</InputTitle>
        <RateContent onChange={handleRateChange} />
        <InputTitle>상세 검색</InputTitle>
        <CategoryWrap>
          {category.map((tag) => (
            <Tag
              tag={tag}
              role="category"
              addCategory={addCategory}
              removeCategory={removeCategory}
            />
          ))}
        </CategoryWrap>
        <Button type="button" onClick={submitAddress}>
          검색
        </Button>
      </Form>
    </Container>
  );
};

export default SearchBar;

const Container = styled.div`
  position: relative;
  width: 452px;
  height: 100%;
  padding: 0 20px 0 20px;
`;

const Header = styled.header`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding: 22px 0 32px 0;
`;

const Form = styled.form`
  height: auto;
`;

const InputContent = styled(Input)`
  margin-bottom: 36px;
`;

const InputTitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 10px;
`;

const SelectAddress = styled(Select)`
  width: 98px;
  height: 32px;
  margin-right: 13px;
  margin-bottom: 30px;
`;

const RateContent = styled(Rate)`
  margin-bottom: 37px;
`;

const CategoryWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  position: absolute;
  width: 166px;
  height: 40px;
  right: 20px;
  bottom: 65px;
  color: white;
  background: #73d13d;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
`;
