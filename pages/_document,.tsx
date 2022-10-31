import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheets = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collectStyles(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);
        const styleTags = sheets.getStyleElement();

        return {
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), styleTags],
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Web site created using create-react-app" />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
