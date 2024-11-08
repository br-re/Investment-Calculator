import HeaderLogo from "../assets/investment-calculator-logo.png";

export default function Header(){
    return (
        <div id="header">
            <img src={HeaderLogo} alt="ICL" />
            <h1>Investment Calculator</h1>
        </div>
    );
}