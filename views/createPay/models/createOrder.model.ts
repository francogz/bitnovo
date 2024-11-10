interface Data {
    payment_uri: string;
    identifier: string;
    web_url: string;
    address: string;
    tag_memo: string;
    input_currency: string;
    expected_input_amount: number;
    rate: number;
    notes: null;
    reference: string;
    fiat: string;
    language: string;
}

export type { Data as DataOrdersCreateType };
