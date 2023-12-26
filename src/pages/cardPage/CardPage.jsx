import Card from "./components/Card";
const CardPage = () => {
    return (
        <div className="grid grid-cols-4 gap-5 m-10">
                <Card numero='234234' fecha='05/27'/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
        </div>
    )
}

export default CardPage;