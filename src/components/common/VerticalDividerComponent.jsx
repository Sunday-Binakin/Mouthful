import React from 'react'

const VerticalDividerComponent = ({ height }) => {
    return (
        <div className={`h-[${height}] w-[0.1px] mx-4 border-r border border-gray`}></div>
    )
}

export default VerticalDividerComponent