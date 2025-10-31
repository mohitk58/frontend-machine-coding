# Run Command

- npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Loan Calculator

This EMI calculator shall displays the EMIs on a car or home loan with a down payment ( if any )

This can be used while investing, Insurance, House, Car and anything.

For example, you want to buy a house for Rs 50,00,000. you would make a down payment of 20% or Rs 50,00,00 \* 0.2 = Rs 10,00,000.

The bank would sanction the home loan of Rs 40,00,000. you have processing fees of 1% of the loan amount or Rs 40,00,000 \* 0.01 = Rs 40,000.

The total amount you need for the down payment is Rs 10,00,000 + Rs 40,000 = Rs 10,40,000.

Total down payment = Rs 10.4 lakh.

EMI amount = [P*R*(1+R)^N]/[(1+R)^N-1] where P, R and N are the variables.

This also means that the EMI value will change every time you change any of the three variables.

'P' stands for the Prinicipal Amount. It is the original loan amount given to you by the bank on which the interest will be calculated.

'R' stands for the Rate of Interest set by the bank.

'N' stands for the Number of years given to you for loan repayment.
