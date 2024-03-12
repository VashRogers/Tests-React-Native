import React, {FC, ReactElement} from 'react';
import {RenderOptions, render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

type Options = Parameters<typeof render>[1]; //Equivalente a prop RenderOptions

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: Infinity,
        },
    },
});

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const customRender = (
    ui: ReactElement,
    // options?: Omit<RenderOptions, 'wrapper'>,//Tipagem de options como está na doc
    options?: Options
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
