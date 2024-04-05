"use client";

import {Radio, Typography, Checkbox, Button, Card, List, ListItem} from "@material-tailwind/react";
export default function Test() {
    return (
        <form className="flex min-h-screen flex-col items-center justify-between p-24">
            {[1, 3, 4, 5].map((key) => <div key={key} className="flex flex-col m-2">
                <Checkbox/>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cumque eligendi modi quaerat quam reprehenderit voluptatum. Animi beatae distinctio dolore, dolorum eaque excepturi explicabo impedit iusto, nesciunt nisi tempora?
                </Typography>

                <div className={'flex flex-row'}>
                    <Radio name="type"/>  <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cumque eligendi modi quaerat quam reprehenderit voluptatum. Animi beatae distinctio dolore, dolorum eaque excepturi explicabo impedit iusto, nesciunt nisi tempora?
                    </Typography>
                </div>

                <div className={'flex flex-row'}>
                    <Radio name="type"/>  <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cumque eligendi modi quaerat quam reprehenderit voluptatum. Animi beatae distinctio dolore, dolorum eaque excepturi explicabo impedit iusto, nesciunt nisi tempora?
                    </Typography>
                </div>

                <div className={'flex flex-row'}>
                    <Radio name="type"/>  <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cumque eligendi modi quaerat quam reprehenderit voluptatum. Animi beatae distinctio dolore, dolorum eaque excepturi explicabo impedit iusto, nesciunt nisi tempora?
                    </Typography>
                </div>

                <div className={'flex flex-row'}>
                    <Radio name="type"/>  <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cumque eligendi modi quaerat quam reprehenderit voluptatum. Animi beatae distinctio dolore, dolorum eaque excepturi explicabo impedit iusto, nesciunt nisi tempora?
                    </Typography>
                </div>

                </div>

            )}
            <Button>Button</Button>
        </form>
    );
}
