import React from "react";
import RelServiceItem from "./RelServiceItem";

const serviceLinks = [
    { className: "mn-newspaper", href: "https://www.hankyung.com/", imgSrc: "src/assets/header/icon-rel-newspaper.svg" },
    { className: "mn-hktv", href: "https://www.hankyung.com/", imgSrc: "src/assets/header/icon-rel-hktv.svg" },
    { className: "mn-wsj", href: "https://www.hankyung.com/", imgSrc: "src/assets/header/icon-rel-wsj.svg" },
    { className: "mn-ked", href: "https://www.hankyung.com/", imgSrc: "src/assets/header/icon-rel-ked.svg" },
    { className: "mn-subscription", href: "https://www.hankyung.com/", imgSrc: "src/assets/header/icon-rel-subscription.svg" }
];

const RelServiceList = () => {
    return (
        <ul className="rel-service-list">
            {serviceLinks.map((item, index) => (
                <RelServiceItem key={index} {...item} />
            ))}
        </ul>
    );
};

export default RelServiceList;
