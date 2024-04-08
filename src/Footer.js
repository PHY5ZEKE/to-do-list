import React, { useState, useEffect } from "react";

function Footer({ items }) {
  const [itemCheckedCount, setItemCheckedCount] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (items.length === 0) {
      setItemCheckedCount(0);
      setPercentage(0);
    } else {
      const checkedCount = items.filter((item) => item.isChecked).length;
      const newPercentage = Math.round((checkedCount / items.length) * 100);
      setItemCheckedCount(checkedCount);
      setPercentage(newPercentage);
    }
  }, [items]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h5>You have {items.length} items in your list.</h5>
        {items.length > 0 && (
          <h5 className="ms-1">
            You have completed {itemCheckedCount}, That is {percentage}% of your
            workout.
          </h5>
        )}
      </div>
    </div>
  );
}

export default Footer;
