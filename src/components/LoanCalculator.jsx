import { useEffect, useState } from "react";
import { tenureData } from "../utils/constants";
import { numberWithCommas } from "../utils/config";
import TextInput from "./TextInput";
import SliderInput from "./SliderInput";

const LoanCalculator = () => {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const calculateEMI = (downpayment) => {
    // EMI amount = [P*R*(1+R)^N]/[(1+R)^N-1]
    if (!cost) return;

    const loanAmt = cost - downpayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure / 12;

    const EMI =
      (loanAmt * rateOfInterest * (1 + rateOfInterest) ** numOfYears) /
      ((1 + rateOfInterest) ** numOfYears - 1);

    return Number(EMI / 12).toFixed(0);
  };

  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownPayment(dp.toFixed(0));

    // Calculate EMI and update it
    const emi = calculateEMI(dp);
    setEmi(emi);
  };

  const calculateDP = (emi) => {
    if (!cost) return;

    const downPaymentPercent = 100 - (emi / calculateEMI(0)) * 100;
    return Number((downPaymentPercent / 100) * cost).toFixed(0);
  };

  const updateDownPayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    // Calculate Down Payment and update it
    const dp = calculateDP(emi);
    setDownPayment(dp);
  };

  useEffect(() => {
    if (!(cost > 0)) {
      setDownPayment(0);
      setEmi(0);
    }

    const emi = calculateEMI(downPayment);
    setEmi(emi);
  }, [tenure, cost]);

  return (
    <div className="loan-calculator-container">
      <span className="title" style={{ fontSize: 32, margin: 10 }}>
        EMI Calculator
      </span>

      <TextInput title="Total Cost of Asset" state={cost} setState={setCost} />

      <TextInput
        title="Interest Rate (in %)"
        state={interest}
        setState={setInterest}
      />

      <TextInput title="Processing Fee (in %)" state={fee} setState={setFee} />

      <SliderInput
        title="Down Payment"
        underlineTitle={`Total Down Payment - ${numberWithCommas(
          (Number(downPayment) + (cost - downPayment) * (fee / 100)).toFixed(0)
        )}`}
        onChange={updateEMI}
        state={downPayment}
        min={0}
        max={cost}
        labelMin={"0%"}
        labelMax={"100%"}
      />

      <SliderInput
        title="Loan per Month"
        underlineTitle={`Total Loan Amount - ${numberWithCommas(
          (emi * tenure).toFixed(0)
        )}`}
        onChange={updateDownPayment}
        state={emi}
        min={calculateEMI(cost)}
        max={calculateEMI(0)}
      />

      <span className="title">Tenure</span>
      <div className="tenure-container">
        {tenureData.map((t) => {
          return (
            <button
              key={t}
              className={`tenure ${t === tenure ? "selected" : ""}`}
              onClick={() => setTenure(t)}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LoanCalculator;
