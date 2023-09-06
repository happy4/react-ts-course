import moment, {Moment} from "moment";

export const rules = {
    required: (message: string = "Обязательное поле") => ({
        required: true,
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Moment) {
            console.log('value', value);
            // if (value.isSameOrAfter(moment())) {
                return Promise.resolve();
            // }
            // return Promise.reject(new Error(message));
        }
    })
}
