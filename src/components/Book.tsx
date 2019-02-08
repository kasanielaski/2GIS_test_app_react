import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-top: 1px solid #999;

    &:first-of-type{
        border-top: none;
    }
`;

const Author = styled.div`
    padding-bottom: 10px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
`;

const Title = styled.span`
    font-size: 20px;
    font-weight: 700;
`;

const Status = styled.span`
    font-size: 16px;
    font-weight: 500;
`;

const Description = styled.div`
    padding-bottom: 10px;
`;

const Tag = styled.li`
    display: inline-block;
    background-color: #ddd;
    margin-right: 6px;
    padding: 6px 3px;
    cursor: pointer;

    &:last-of-type {
        margin-right: 0;
    }
`;

const Book = ({ author, title, description, tags, status='status' }:
    { author: string, title: string, description: string, tags: string[], status?: string }
    ) => (
    <Wrapper>
        <Author>
            <span>{author}</span>
        </Author>
        <Container>
            <Title>{title}</Title>
            <Status>{status}</Status>
        </Container>
        <Description>
            <span>{description}</span>
        </Description>
        <ul>
            {tags.map(tag =>
                <Tag>
                    #{tag}
                </Tag>
            )}
        </ul>
    </Wrapper>
)

export default Book;