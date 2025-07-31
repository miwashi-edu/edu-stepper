import withSteps from './withSteps';
import {
    PaymentDetails,
    InvoiceAddress,
    Confirmation,
} from '../sections';

const steps = [
    { key: 'details', label: 'Payment Details', component: <PaymentDetails /> },
    { key: 'address', label: 'Invoice Address', component: <InvoiceAddress /> },
    { key: 'confirm', label: 'Confirm', component: <Confirmation /> },
];

const initialData = {
    details: {},
    address: {},
};

export default withSteps(steps, initialData);
