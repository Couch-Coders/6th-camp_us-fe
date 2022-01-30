import styled from 'styled-components';

export const SearchBox = styled.div`
    position: relative;
`;

export const Select = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const SelectName = styled.div`
    color: #595959;
    font-size: 14px;
    margin: 0 10px;

    &:first-child {
        margin-left: 0;
    }
`;