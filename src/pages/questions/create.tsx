"use client";

import {Button, Card, Checkbox, Input, Textarea} from "@material-tailwind/react";
import {ChangeEvent, useState} from "react";
import axios from "axios";
import Markdown from "react-markdown";
import {CodeBlock} from "@/components/CodeBlock";
import {Pre} from "@/components/Pre";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeExternalLinks from "rehype-external-links";

export default function Test() {
    const initData = {
        question: '',
        explain: '',
        1: '',
        2: '',
        3: '',
        4: '',
        answer: [],
    };

    const [formData, setFormData] = useState(initData);

    const onQuestion = (e) => {
        setFormData({...formData, question: e.target.value})
    }

    const onExplain = (e) => {
        setFormData({...formData, explain: e.target.value})
    }

    const onInput = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        formData[name] = value
        setFormData({...formData})
    }

    const onAnswer = (e) => {
        const {name, value, checked} = e.target
        if (checked) {
            setFormData({...formData, answer: [...formData.answer, value]})
        } else {
            const newAnswer = formData.answer.filter(name => name != value)
            setFormData({...formData, answer: [...newAnswer]})
        }
    }

    const onSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        axios.post('http://localhost:3600/questions', formData).then((res) => {
            console.log(res)
            alert('OK')
        }).catch((error) => {
            console.log(error)
            alert('Error')
        }).finally(() => {
            setFormData({...initData})
        })
    }

    const options = {
        code: CodeBlock,
        // Add here
        pre: Pre,
    }

    return (
        <Card>
            <form className="p-24" onSubmit={onSubmit}>
                <Textarea value={formData.question} onChange={onQuestion} required label="Question"/>
                <Markdown
                    className='prose prose-invert min-w-full'
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                        rehypeSanitize,
                        [rehypeExternalLinks,
                            { content: { type: 'text', value: '🔗' } }
                        ],
                    ]}
                    components={options}
                >
                    {formData.question}
                </Markdown>
                {
                    [1, 2, 3, 4].map((name) =>
                        <div className={'flex flex-row'} key={name}>
                            <Checkbox onChange={onAnswer} name="answer" value={name}/>
                            <Input value={formData[name]} required onChange={onInput} label={name.toString()} name={name.toString()}/>
                        </div>
                    )
                }

                <Textarea value={formData.explain} required onChange={onExplain} label="Explain"/>
                <Markdown
                    className='prose prose-invert min-w-full'
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                        rehypeSanitize,
                        [rehypeExternalLinks,
                            { content: { type: 'text', value: '🔗' } }
                        ],
                    ]}
                    components={options}
                >
                    {formData.explain}
                </Markdown>

                <Button type={"submit"}>Save</Button>
            </form>
        </Card>

    );
}
