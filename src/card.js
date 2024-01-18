import { Card } from "antd";
import { glassStyle } from "./draggable";

export const TransparentCardView = ({content}) => {
    return (<Card style={glassStyle}> {content}</Card> );
}
           