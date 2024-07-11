export type SpinnerContextType = {
    showSpinner: (opc: boolean) => void;
    spinner: JSX.Element;
}

export type FormValues = {
    name: string;
    lastname: string;
    email: string;
    phone: string;
    message: string;
}

export type FormSmalltValues = {
    email: string;
    message: string;
}
