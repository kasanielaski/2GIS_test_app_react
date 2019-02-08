import React from 'react';

const Book = ({ author, title, description, tags, status }:
    { author: any, title: any, description: any, tags: any, status?: any }
    ) => (
    <>
        <span>{author}</span>
        <span>{title}</span>
        <span>{description}</span>
        <span>{tags}</span>
    </>
)

export default Book;