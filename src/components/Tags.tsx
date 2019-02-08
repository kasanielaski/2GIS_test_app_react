import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px 10px;
    border-bottom: 1px solid #999;
`;

const TagList = styled.ul`
    display: inline-block;
`;

const Tag = styled.li`
    display: inline-block;
    background-color: #ddd;
    padding: 6px 3px;
    margin-left: 6px;
`;

const Clear = styled.li`
    display: inline-block;
    text-decoration: underline;
    margin-left: 6px;
    cursor: pointer;
`;

const Tags = ({ tags, clearTags }: { tags: string[], clearTags: any }) => {
    return (
        <Wrapper>
            Filtered by tags:
            <TagList>
                {tags.map((tag, index: number) =>
                        <Tag
                            key={`${tag}_${index}`}
                        >
                            #{tag}
                        </Tag>
                    )
                }
                <Clear
                    onClick={() => clearTags()}
                >
                    clear
                </Clear>
            </TagList>
        </Wrapper>
    );
};

export default Tags;