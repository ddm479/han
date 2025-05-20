import React from "react";
import RelServiceItem from "./RelServiceItem";

const serviceLinks = [
    { className: "mn-newspaper", tooltip: "신문보기", href: "https://www.hankyung.com/", imgUrl: "src/assets/header/icon-rel-newspaper.svg" },
    { className: "mn-hktv", tooltip: "한국경제TV", href: "https://www.hankyung.com/", imgUrl: "src/assets/header/icon-rel-hktv.svg" },
    { className: "mn-wsj", tooltip: "월스트리트저널", href: "https://www.hankyung.com/", imgUrl: "src/assets/header/icon-rel-wsj.svg" },
    { className: "mn-ked", tooltip: "KED Global", href: "https://www.hankyung.com/", imgUrl: "src/assets/header/icon-rel-ked.svg" },
    { className: "mn-subscription", tooltip: "신문구독", href: "https://www.hankyung.com/", imgUrl: "src/assets/header/icon-rel-subscription.svg" }
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
