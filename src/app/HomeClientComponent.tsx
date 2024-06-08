'use client';

import { Htag, Rating, Tag, Button, Paragraph } from "@/components";
import { useState } from "react";
import { MenuItem } from "../../interfaces/menu.interface";

const HomeClientComponent = ({ menu }: { menu: MenuItem[] }) => {
  const [counter, setCounter] = useState<number>(4);

  return (
    <>
      <Htag tag={'h1'}>Title</Htag>
      <Button appearance={'primary'} arrow={'down'}>
        Hello
      </Button>
      <Button appearance={'transparent'} arrow={'right'}>
        Not Hello
      </Button>
      <Paragraph>Hello</Paragraph>
      <Tag color={'green'}>money</Tag>
      <Tag color={'red'}>money</Tag>
      <Tag color={'transparent'}>money</Tag>
      <Tag color={'grey'}>money</Tag>
      <Tag color={'primary'}>money</Tag>
      <Rating rating={counter} isEditable setRating={setCounter} />
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
};

export default HomeClientComponent;