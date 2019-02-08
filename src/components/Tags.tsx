import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px 10px;
    border-bottom: 1px solid #999;
`;

const Tag = styled.span`
    background-color: #ddd;
    margin-left: 6px;
`;

const Clear = styled.span`
    text-decoration: underline;
    margin-left: 6px;
`;

const Tags = ({ tags }: { tags: string[] }) => {
    return (
        <Wrapper>
            Filtered by tags:
            {tags.map((tag, index: number) =>
                    <Tag
                        key={`${tag}_${index}`}
                    >
                        #{tag}
                    </Tag>
                )
            }
            <Clear>(clear)</Clear>
        </Wrapper>
    );
};

export default Tags;