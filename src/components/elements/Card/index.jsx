/* eslint-disable react/prop-types */
const Card = ({title, desc}) => {
    return (
        <div className="lg:col-span-2">
            <div className="text-lg text-gray-02 mb-2">{title}</div>
            <div className="bg-white rounded-lg px-6 py-5 shadow-lg">{desc}</div>
        </div>
    )
}

export default Card