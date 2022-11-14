import React from "react";

interface ConditionProps {
    shouldShow: boolean;
    children?: React.ReactNode;
}

const Condition = ({children, shouldShow}: ConditionProps) => {
    return <div>
        {shouldShow && <div>hello {children}</div>}
    </div>
}

export default Condition;