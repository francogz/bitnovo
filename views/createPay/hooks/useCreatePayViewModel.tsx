import { useEffect, useState } from "react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { usePostOrdersCreateMutation } from "@/redux/api/ordersCreateApi";
import { useNavigation } from "@react-navigation/native";

const useCreatePayViewModel = (): {
    amountValue: number | null;
    textConceptValue: string;
    isButtonDisabled: boolean;
    isErrorOrdersCreate: boolean;
    isLoadingOrdersCreate: boolean;
    isSuccessOrdersCreate: boolean;
    handleAmountChange: (value: number) => void;
    handleTextConceptChange: (value: string) => void;
    handlePostOrderCreate: () => void;
} => {
    // HOOKS
    const { currency } = useCurrency();
    const { navigate } = useNavigation() as any;

    // STATES
    const [amountValue, setAmountValue] = useState<number | null>(0);
    const [textConceptValue, setText] = useState<string>("");

    const isButtonDisabled =
        !amountValue ||
        textConceptValue === "";

    // FUNCTIONS
    const handleTextConceptChange = (value: string) => {
        setText(value);
    };

    const handleAmountChange = (value: number) => {
        setAmountValue(value);
    };

    const [
        postOrdersCreate,
        {
            isError: isErrorOrdersCreate,
            isLoading: isLoadingOrdersCreate,
            isSuccess: isSuccessOrdersCreate,
            data: dataOrdersCreate,
        },
    ] = usePostOrdersCreateMutation();

    // EFFECTS
    useEffect(() => {
        if (isSuccessOrdersCreate) {
            handleAmountChange(null);
            handleTextConceptChange("");
            navigate("SummaryOrderPay", {
                dataOrderPay: dataOrdersCreate,
            });
        }
    }, [isSuccessOrdersCreate]);

    // Se ejecuta el post de crear pago
    const handlePostOrderCreate = async () => {
        const body = {
            expected_output_amount: amountValue,
            input_currency: 'BTC_TEST',
            fiat: currency.code,
            reference: textConceptValue,
        };

        await postOrdersCreate(body)
            .unwrap()
            .then(async (res) => {
                console.log("res", res);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };

    return {
        amountValue,
        textConceptValue,
        isButtonDisabled,
        isErrorOrdersCreate,
        isLoadingOrdersCreate,
        isSuccessOrdersCreate,
        handleAmountChange,
        handleTextConceptChange,
        handlePostOrderCreate,
    };
};

export default useCreatePayViewModel;
