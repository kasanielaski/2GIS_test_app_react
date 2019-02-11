import React from 'react';
import styled from 'styled-components';
import { Visibility } from '../interfaces';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Tab = styled.div`
    width: 100%;
    padding: 10px 20px;
    font-size: 14px;
    vertical-align: middle;
    text-align: center;
    ${({ isActive }: { isActive: boolean }) =>
        isActive
            ? 'border-bottom: none; font-weight: bold'
            : 'border-bottom: 1px solid #999'}
    cursor: pointer;

    &:nth-of-type(2) {
        border-left: 1px solid #999;
        border-right: 1px solid #999;
    }
`;

const Header = ({
    readCount,
    progressCount,
    doneCount,
    changeFilter,
    currentFilter
}: {
    readCount: number;
    progressCount: number;
    doneCount: number;
    changeFilter(payload: Visibility): void;
    currentFilter: string;
}) => (
    <Wrapper>
        <Tab onClick={() => changeFilter('')} isActive={currentFilter === ''}>
            To read <span>({readCount})</span>
        </Tab>
        <Tab
            onClick={() => changeFilter('progress')}
            isActive={currentFilter === 'progress'}
        >
            In progress <span>({progressCount})</span>
        </Tab>
        <Tab
            onClick={() => changeFilter('done')}
            isActive={currentFilter === 'done'}
        >
            Done <span>({doneCount})</span>
        </Tab>
    </Wrapper>
);

export default Header;
