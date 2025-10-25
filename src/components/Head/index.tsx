// @ts-ignore
import {Decoration5, Decoration8} from '@jiaminghi/data-view-react'

import './index.css'

function Head() {
    return (
        <div className="header">
            <Decoration8 style={{width: '300px', 'height': '70px'}}/>
            <div className='head-title'>
                <span>Large-screen Project</span>
                <Decoration5 style={{width: '600px', height: '90px'}}/>
            </div>
            <Decoration8 reverse={true} style={{width: '300px', 'height': '70px'}}/>
        </div>
    )
}

export default Head;