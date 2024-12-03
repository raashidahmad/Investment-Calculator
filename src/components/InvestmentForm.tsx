import { FormProvider, useForm } from "react-hook-form";
import { InvestmentData } from "../types/InvestmentData";

interface InvestmentEntry {
    onUpdate: (data: any) => void
}

export const InvestmentForm = ({
    onUpdate
}: InvestmentEntry) => {

    const methods = useForm<InvestmentData>({
        mode: "onChange",
        defaultValues: {
            initialInvestment: 0,
            annualInvestment: 0,
            expectedReturn: 0,
            duration: 0
        }
    });
    const { handleSubmit, register } = methods;

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        onUpdate(data);
    });

    return (
        <FormProvider {...methods}>

            <form
                onSubmit={onSubmit}
                id="investment-form"
            >
                <div id="user-input">
                    <div className="input-group">
                        <label>Initial Investment</label>
                        <input 
                            type="number" 
                            {...register('initialInvestment', { required: true })}
                        />

                        <label>Annual Investment</label>
                        <input 
                            type="number" 
                            {...register('annualInvestment', { required: true })}
                        />
                    </div>
                    
                    <div className="input-group">
                        <label>Expected Return</label>
                        <input 
                            type="number" 
                            {...register('expectedReturn', { required: true })}
                        />

                        <label>Duration</label>
                        <input 
                            type="number" 
                            {...register('duration', { required: true })}
                         />
                    </div>

                    <button type="submit">Calculate Investment</button>
                </div>
            </form>
        </FormProvider>
    );
}