"use client";
import "../app/globals.css";
import {ThemeProvider, Button, Card, List, ListItem} from "@material-tailwind/react";
import store from "../store/index";
import { Provider } from 'react-redux'
export {Button, Card, List, ListItem}

export default function MyApp({ Component, pageProps }: any) {
    return (
        <Provider store={store}>
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
        </Provider>
    );
}