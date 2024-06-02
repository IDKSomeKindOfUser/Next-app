"use client";

import {Htag, Rating, Tag} from "@/components";
import {Button} from "@/components";
import {Paragraph} from "@/components";
import {useState} from "react";
import {withLayout} from "@/Layout/Layout";

export function Home() {
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
    </>
  );
}

export default withLayout(Home);
