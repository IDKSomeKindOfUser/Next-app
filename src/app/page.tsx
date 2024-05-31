"use client";

import {Htag, Rating, Tag} from "@/components";
import {Button} from "@/components";
import {Paragraph} from "@/components";
import {useState} from "react";

export default function Home() {
    const [counter, setCounter] = useState<number>(0);
  return (
    <>
        <Htag tag={'h1'}>{counter}</Htag>
        <Button appearance={'primary'} arrow={'down'} onClick={() => setCounter(counter + 1)}>
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
        <Rating rating={4}></Rating>
    </>
  );
}
