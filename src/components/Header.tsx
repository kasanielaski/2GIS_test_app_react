import React from 'react';
import styled from 'styled-components';

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
    border-bottom: 1px solid #999;

    &:nth-of-type(2) {
        border-left: 1px solid #999;
        border-right: 1px solid #999;
    }
`;

const Header = ({
    toRead,
    inProgress,
    isDone
}: {
    toRead: number;
    inProgress: number;
    isDone: number;
}) => (
    <Wrapper>
        <Tab>
            {/* @todo router link */}
            To read
            {/* @todo counter */}
            <span>({toRead})</span>
        </Tab>
        <Tab>
            In progress <span>({inProgress})</span>
        </Tab>
        <Tab>
            Done <span>({isDone})</span>
        </Tab>
    </Wrapper>
);

export default Header;
