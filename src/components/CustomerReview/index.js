import * as React from "react";
// import { TransitionGroup, CSSTransition } from "react-transition-group";

import LeftQuote from "../../assets/images/left-quote.png";
import RightQuote from "../../assets/images/right-quote.png";

const CustomerReview = (props) => {
  const { records } = props;
  const [currentRecord, setCurrentRecord] = React.useState(2);
  // const [direction, setDirection] = React.useState("");

  const onClickAvatar = (index) => {
    // if (index < currentRecord) {
    //   setDirection("left");
    //   const newActive = currentRecord - 1;
    //   setCurrentRecord(newActive < 0 ? records.length - 1 : newActive);
    // } else if (index > currentRecord) {
    //   setDirection("right");
    //   const newActive = currentRecord + 1;
    //   setCurrentRecord(newActive % records.length);
    // }
    setCurrentRecord(index);
  };

  const generateItems = () => {
    let items = [];
    let level;
    for (let i = currentRecord - 2; i < currentRecord + 3; i++) {
      var index = i;
      if (i < 0) {
        index = records.length + i;
      } else if (i >= records.length) {
        index = i % records.length;
      }
      level = currentRecord - i;
      items.push(
        // <CSSTransition key={index} classNames={direction}>
        <Item
          key={"item" + index}
          record={records[index]}
          level={level}
          index={index}
          onClick={onClickAvatar}
        />
        // </CSSTransition>
      );
    }
    return items;
  };

  return (
    <div className="customer-review">
      <div>
        <img src={LeftQuote} alt='"' />
      </div>
      <div className="mx-3">
        <div className="customer-review-description">
          {records[currentRecord].description}
        </div>
        <div className="customer-avatars mt-5">
          {/* <TransitionGroup>{generateItems()}</TransitionGroup> */}
          {generateItems()}
          {/* <ReactCSSTransitionGroup transitionName={direction}>
          {generateItems()}
        </ReactCSSTransitionGroup> */}
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center mt-2">
          <h5>{records[currentRecord].name}</h5>
          <h6>{records[currentRecord].position}</h6>
        </div>
      </div>
      <div>
        <img src={RightQuote} alt='"' />
      </div>
    </div>
  );
};

const Item = (props) => {
  const className = "item level" + props.level;
  return (
    <div className={className} onClick={() => props.onClick(props.index)}>
      <div className="customer-avatar">
        <img src={props.record.img} alt={props.record.name} />
      </div>
    </div>
  );
};

export default CustomerReview;
